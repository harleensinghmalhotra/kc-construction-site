import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist');
const indexPath = path.join(distPath, 'index.html');
const blogsPath = path.resolve('public', 'blogs', 'blogs.json');

async function generateStaticSeo() {
  try {
    if (!fs.existsSync(indexPath)) {
      console.error('Error: dist/index.html not found. Run "vite build" first.');
      process.exit(1);
    }

    const indexHtml = fs.readFileSync(indexPath, 'utf-8');
    const blogsRaw = fs.readFileSync(blogsPath, 'utf-8');
    const blogs = JSON.parse(blogsRaw);

    const blogBaseDir = path.join(distPath, 'blog');
    if (!fs.existsSync(blogBaseDir)) {
      fs.mkdirSync(blogBaseDir, { recursive: true });
    }

    blogs.forEach(blog => {
      const blogDir = path.join(blogBaseDir, blog.slug);
      if (!fs.existsSync(blogDir)) {
        fs.mkdirSync(blogDir, { recursive: true });
      }

      // 1. Inject content into root div
      let modifiedHtml = indexHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${blog.content}</div>`
      );

      // 2. Head replacement for SEO
      modifiedHtml = modifiedHtml.replace(
        /<title>.*?<\/title>/,
        `<title>${blog.title} | King Coleman Construction</title>`
      );
      
      modifiedHtml = modifiedHtml.replace(
        /<meta name="description"[\s\S]*?content=".*?"\s*\/>/,
        `<meta name="description" content="${blog.description}" />`
      );
      
      modifiedHtml = modifiedHtml.replace(
        /<link rel="canonical" href=".*?"\s*\/>/,
        `<link rel="canonical" href="https://www.kingcolemanconstruction.com/blog/${blog.slug}" />`
      );

      // Optional Social replacements using regex depending on formatting
      modifiedHtml = modifiedHtml.replace(
        /<meta property="og:title" content=".*?" \/>/,
        `<meta property="og:title" content="${blog.title}" />`
      );
      modifiedHtml = modifiedHtml.replace(
        /<meta property="og:description"[\s\S]*?content=".*?" \/>/,
        `<meta property="og:description" content="${blog.description}" />`
      );
      modifiedHtml = modifiedHtml.replace(
        /<meta name="twitter:title" content=".*?" \/>/,
        `<meta name="twitter:title" content="${blog.title}" />`
      );
      modifiedHtml = modifiedHtml.replace(
        /<meta name="twitter:description"[\s\S]*?content=".*?" \/>/,
        `<meta name="twitter:description" content="${blog.description}" />`
      );

      const outputPath = path.join(blogDir, 'index.html');
      fs.writeFileSync(outputPath, modifiedHtml);
      console.log(`✅ Statically generated: /blog/${blog.slug}`);
    });
    
    console.log('✅ All static blog SEO pages updated successfully.');
  } catch (error) {
    console.error('Error generating static SEO pages:', error);
    process.exit(1);
  }
}

generateStaticSeo();
