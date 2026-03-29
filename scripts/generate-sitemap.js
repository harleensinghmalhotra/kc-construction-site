import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.kingcolemanconstruction.com';
const blogsPath = path.resolve('public', 'blogs', 'blogs.json');
const sitemapPath = path.resolve('public', 'sitemap.xml');

async function generateSitemap() {
  try {
    const blogsRaw = fs.readFileSync(blogsPath, 'utf-8');
    const blogs = JSON.parse(blogsRaw);

    const staticRoutes = [
      '',
      '/blog'
    ];

    const today = new Date().toISOString().split('T')[0];

    const generateUrlNode = (route, lastmod) => `  <url>\n    <loc>${BASE_URL}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;

    const staticNodes = staticRoutes.map(route => generateUrlNode(route, today)).join('\n');

    const dynamicNodes = blogs.map(blog => {
      const lastmod = blog.dateModified || blog.datePublished || today;
      return generateUrlNode(`/blog/${blog.slug}`, lastmod);
    }).join('\n');

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticNodes}
${dynamicNodes}
</urlset>
`;

    fs.writeFileSync(sitemapPath, sitemapContent);
    console.log(`✅ Sitemap successfully generated at ${sitemapPath}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
