/**
 * generate-static-seo.js
 * King Coleman Construction – Static SEO Generation Script
 *
 * Runs after `vite build`. For each blog entry in public/blogs/blogs.json:
 *   1. Generates a static HTML file at dist/blog/[slug]/index.html
 *      with full SEO meta, Open Graph tags, BlogPosting + BreadcrumbList JSON-LD
 *   2. Regenerates public/sitemap.xml with all pages
 *
 * Usage: node scripts/generate-static-seo.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

// ─── SITE CONFIG ────────────────────────────────────────────────────────────
const DOMAIN = "https://kingcolemanconstruction.com";
const BUSINESS_NAME = "King Coleman Construction";
const LOGO_URL = `${DOMAIN}/images/logo/landingsite_logo.png`;
const BUILD_DATE = new Date().toISOString();

// Service pages to include in sitemap
const SERVICE_PAGES = [
    "/services",
    "/services#general",
    "/services#commercial",
    "/services#residential",
    "/services#drywall",
    "/services#painting",
    "/services#carpentry",
    "/services#janitorial",
    "/about",
    "/gallery",
    "/contact",
    "/projects",
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function toIsoDate(dateStr) {
    // Ensure YYYY-MM-DD becomes full ISO string
    if (!dateStr) return BUILD_DATE;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? BUILD_DATE : d.toISOString();
}

// ─── BLOG HTML TEMPLATE ──────────────────────────────────────────────────────

function buildBlogHtml(blog) {
    const canonicalUrl = `${DOMAIN}/blog/${blog.slug}`;
    const datePublished = toIsoDate(blog.datePublished);
    const dateModified = toIsoDate(blog.dateModified || blog.datePublished);
    const imageUrl = blog.image
        ? `${DOMAIN}${blog.image.startsWith("/") ? "" : "/"}${blog.image}`
        : `${DOMAIN}/images/logo/landingsite_logo.png`;

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.description,
        image: {
            "@type": "ImageObject",
            url: imageUrl,
            width: 1200,
            height: 630,
        },
        author: {
            "@type": "Organization",
            name: BUSINESS_NAME,
            url: DOMAIN,
        },
        publisher: {
            "@type": "Organization",
            name: BUSINESS_NAME,
            url: DOMAIN,
            logo: {
                "@type": "ImageObject",
                url: LOGO_URL,
                width: 200,
                height: 60,
            },
        },
        datePublished: datePublished,
        dateModified: dateModified,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl,
        },
        url: canonicalUrl,
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: DOMAIN,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${DOMAIN}/blog`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: blog.title,
                item: canonicalUrl,
            },
        ],
    };

    // Read the built index.html to reuse the React SPA shell
    const spaShellPath = path.join(ROOT, "dist", "index.html");
    let spaShell = "";
    if (fs.existsSync(spaShellPath)) {
        spaShell = fs.readFileSync(spaShellPath, "utf8");
    }

    // Replace or inject <head> elements into the SPA shell
    // Remove existing title
    let html = spaShell;

    // Inject the static blog page as a full standalone HTML document
    // that also loads the React app for navigation/interactivity
    html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <!-- FAVICON -->
    <link rel="icon" type="image/x-icon" href="/favicon2.ico" />

    <!-- PRIMARY SEO -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(blog.title)} | ${BUSINESS_NAME}</title>
    <meta name="description" content="${escapeHtml(blog.description)}" />
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- OPEN GRAPH -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeHtml(blog.title)}" />
    <meta property="og:description" content="${escapeHtml(blog.description)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="${BUSINESS_NAME}" />
    <meta property="article:published_time" content="${datePublished}" />
    <meta property="article:modified_time" content="${dateModified}" />

    <!-- TWITTER CARD -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(blog.title)}" />
    <meta name="twitter:description" content="${escapeHtml(blog.description)}" />
    <meta name="twitter:image" content="${imageUrl}" />

    <!-- FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- BLOGPOSTING SCHEMA -->
    <script type="application/ld+json">
${JSON.stringify(blogPostingSchema, null, 2)}
    </script>

    <!-- BREADCRUMB SCHEMA -->
    <script type="application/ld+json">
${JSON.stringify(breadcrumbSchema, null, 2)}
    </script>
  </head>
  <body>
    <!-- Static SEO content (visible to crawlers, hidden from users via CSS) -->
    <noscript>
      <article>
        <h1>${escapeHtml(blog.title)}</h1>
        <p>${escapeHtml(blog.description)}</p>
        <div>${blog.content || ""}</div>
      </article>
    </noscript>

    <!-- React SPA root (takes over rendering for users) -->
    <div id="root"></div>
    <script type="module" src="/assets/$(ls dist/assets/*.js 2>/dev/null | head -1 | xargs basename)"></script>
  </body>
</html>`;

    // Extract the script src from the built SPA shell and inject it
    const scriptMatch = spaShell.match(/<script[^>]+src="([^"]+)"[^>]*><\/script>/);
    const styleMatch = spaShell.match(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/g);

    // Rebuild with actual asset references from the SPA shell
    const assetScripts = spaShell
        .match(/<script[^>]+src="[^"]+"[^>]*><\/script>/g)
        ?.join("\n    ") || "";

    const assetStyles = (spaShell
        .match(/<link[^>]+rel="stylesheet"[^>]+href="[^"]+"[^>]*\/?>/g) || [])
        .join("\n    ");

    html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <!-- FAVICON -->
    <link rel="icon" type="image/x-icon" href="/favicon2.ico" />

    <!-- PRIMARY SEO -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(blog.title)} | ${BUSINESS_NAME}</title>
    <meta name="description" content="${escapeHtml(blog.description)}" />
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- OPEN GRAPH -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeHtml(blog.title)}" />
    <meta property="og:description" content="${escapeHtml(blog.description)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="${BUSINESS_NAME}" />
    <meta property="article:published_time" content="${datePublished}" />
    <meta property="article:modified_time" content="${dateModified}" />

    <!-- TWITTER CARD -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(blog.title)}" />
    <meta name="twitter:description" content="${escapeHtml(blog.description)}" />
    <meta name="twitter:image" content="${imageUrl}" />

    <!-- FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- CSS ASSETS -->
    ${assetStyles}

    <!-- BLOGPOSTING SCHEMA -->
    <script type="application/ld+json">
${JSON.stringify(blogPostingSchema, null, 2)}
    </script>

    <!-- BREADCRUMB SCHEMA -->
    <script type="application/ld+json">
${JSON.stringify(breadcrumbSchema, null, 2)}
    </script>
  </head>
  <body>
    <!-- Static SEO article (visible without JS) -->
    <noscript>
      <article itemscope itemtype="https://schema.org/BlogPosting">
        <h1 itemprop="headline">${escapeHtml(blog.title)}</h1>
        <p itemprop="description">${escapeHtml(blog.description)}</p>
        <div itemprop="articleBody">${blog.content || ""}</div>
      </article>
    </noscript>

    <!-- React SPA root -->
    <div id="root"></div>

    <!-- JS ASSETS -->
    ${assetScripts}
  </body>
</html>`;

    return html;
}

// ─── SITEMAP GENERATOR ───────────────────────────────────────────────────────

function buildSitemap(blogs) {
    const today = new Date().toISOString().split("T")[0];

    const staticUrls = [
        // Homepage – highest priority
        `  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`,

        // Service pages
        ...SERVICE_PAGES.map(
            (page) => `  <url>
    <loc>${DOMAIN}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
        ),

        // Blog listing page
        `  <url>
    <loc>${DOMAIN}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`,
    ];

    const blogUrls = blogs.map((blog) => {
        const lastmod = blog.dateModified || blog.datePublished || today;
        return `  <url>
    <loc>${DOMAIN}/blog/${blog.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticUrls.join("\n")}
${blogUrls.join("\n")}
</urlset>`;
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

function main() {
    console.log("\n🔨 King Coleman Construction – Static SEO Generator\n");

    // 1. Read blogs.json
    const blogsJsonPath = path.join(ROOT, "public", "blogs", "blogs.json");
    if (!fs.existsSync(blogsJsonPath)) {
        console.error(`❌ blogs.json not found at: ${blogsJsonPath}`);
        process.exit(1);
    }

    const blogs = JSON.parse(fs.readFileSync(blogsJsonPath, "utf8"));
    console.log(`📚 Found ${blogs.length} blog entries`);

    // 2. Generate static blog HTML files
    const distBlogDir = path.join(ROOT, "dist", "blog");
    fs.mkdirSync(distBlogDir, { recursive: true });

    let generated = 0;
    let errors = 0;

    for (const blog of blogs) {
        if (!blog.slug) {
            console.warn(`  ⚠️  Skipping blog with no slug: "${blog.title}"`);
            continue;
        }

        try {
            const blogDir = path.join(distBlogDir, blog.slug);
            fs.mkdirSync(blogDir, { recursive: true });

            const html = buildBlogHtml(blog);
            const outPath = path.join(blogDir, "index.html");
            fs.writeFileSync(outPath, html, "utf8");

            console.log(`  ✅ Generated: /blog/${blog.slug}/index.html`);
            generated++;
        } catch (err) {
            console.error(`  ❌ Failed for slug "${blog.slug}": ${err.message}`);
            errors++;
        }
    }

    console.log(`\n📄 Blog pages generated: ${generated} | Errors: ${errors}`);

    // 3. Generate sitemap
    const sitemapXml = buildSitemap(blogs);
    const sitemapPath = path.join(ROOT, "public", "sitemap.xml");
    fs.writeFileSync(sitemapPath, sitemapXml, "utf8");
    console.log(`\n🗺️  Sitemap regenerated: public/sitemap.xml`);

    // Also copy sitemap to dist
    const distSitemapPath = path.join(ROOT, "dist", "sitemap.xml");
    if (fs.existsSync(path.join(ROOT, "dist"))) {
        fs.writeFileSync(distSitemapPath, sitemapXml, "utf8");
        console.log(`🗺️  Sitemap copied to:   dist/sitemap.xml`);
    }

    console.log("\n✨ Static SEO generation complete!\n");
}

main();
