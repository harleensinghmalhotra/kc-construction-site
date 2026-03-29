import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Calendar, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { marked } from "marked";

import Header from "../components/Header";
import Footer from "../components/Footer";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  intro: string;
  content: string;
}

export default function BlogPost() {
  const { slug } = seeParamsFix();
  const navigate = useNavigate();

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setPost(null);
      setLoading(false);
      return;
    }

    const load = async () => {
      try {
        const postRes = await fetch(
          `https://raw.githubusercontent.com/harleensinghmalhotra/kc-construction-site/main/public/content/blogs/${slug}.json?ts=${Date.now()}`,
          { cache: "no-store" }
        );

        if (!postRes.ok) throw new Error("Post not found");

        const htmlContent = await postRes.text();

        const indexRes = await fetch(
          "https://raw.githubusercontent.com/harleensinghmalhotra/kc-construction-site/main/public/content/blogs/blogs.json?ts=" +
            Date.now(),
          { cache: "no-store" }
        );

        const allPosts = await indexRes.json();
        const meta = allPosts.find((p: any) => p.slug === slug);

        if (!meta) throw new Error("No metadata");

        setPost({
          ...meta,
          content: htmlContent,
        });
      } catch {
        setPost(null);
      }

      setLoading(false);
    };

    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Loading blog post…
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold mb-3">Post not found</h1>
          <button
            onClick={() => navigate("/blog")}
            className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />

      <Helmet>
        <title>{post.title} | KC Construction</title>
        <meta name="description" content={post.intro} />
      </Helmet>

      {/* HERO BAR */}
      <section className="bg-gradient-to-r from-gray-900 to-slate-800 py-24">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">

          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 text-brand-primary font-semibold mb-10"
          >
            <ArrowLeft size={18} /> Back to Blog
          </button>

          <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
            <Calendar size={16} />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          {/* INTRO BLOCK */}
          <div className="border-l-4 border-brand-primary pl-8 italic text-gray-700 text-xl leading-relaxed mb-16 max-w-4xl">
            {post.intro}
          </div>

          {/* CONTENT */}
          <div
            className="
              prose max-w-none

              prose-p:text-[18px]
              prose-p:leading-[1.85]
              prose-p:text-gray-700

              prose-h2:text-3xl
              prose-h2:mt-14
              prose-h2:mb-4
              prose-h2:font-bold
              prose-h2:text-gray-900

              prose-h3:text-2xl
              prose-h3:mt-10
              prose-h3:mb-3
              prose-h3:font-semibold
              prose-h3:text-gray-900

              prose-strong:text-gray-900
              prose-li:marker:text-brand-primary
              prose-ul:my-6
              prose-ol:my-6
            "
            dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}
          />

        </div>
      </article>

      <Footer />
    </div>
  );
}

/* ---------- SAFETY ---------- */
function seeParamsFix() {
  const params = useParams();
  return { slug: params.slug || "" };
}
