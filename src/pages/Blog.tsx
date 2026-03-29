import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  intro: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/harleensinghmalhotra/kc-construction-site/main/public/content/blogs/blogs.json?ts=" +
        Date.now(),
      { cache: "no-store" }
    )
      .then((r) => r.json())
      .then((data: BlogPost[]) => {
        const sorted = [...data].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(sorted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading blog...</div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />

      <Helmet>
        <title>Blog | KC Construction Chicago</title>
        <meta
          name="description"
          content="Construction insights, renovation tips, and Chicago property improvement guides from KC Construction."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[320px] sm:h-[360px] md:h-[420px] flex items-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/blog/blog-hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              KC Construction Blog | Chicago Construction Insights & Guides
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Construction insights, renovation guides, and expert property tips for homeowners and businesses across Chicago.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">

          {posts.length === 0 ? (
            <div className="text-center text-gray-600 text-lg">
              First article coming soon.
            </div>
          ) : (
            <div className="grid gap-10">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="p-7 sm:p-10">

                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                      <Calendar size={16} />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {post.title}
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                      {post.intro}
                    </p>

                    <button
                      onClick={() => navigate(`/blog/${post.slug}`)}
                      className="inline-flex items-center gap-2 bg-[#8B3A3A] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
                    >
                      Read Full Article
                      <ArrowRight size={16} />
                    </button>

                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}
