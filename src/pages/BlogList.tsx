import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllBlogPosts } from '@/data/blogData';
import { cn } from '@/lib/utils';

const BlogList = () => {
  const posts = getAllBlogPosts();

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-background to-background" />

          <div className="section-container relative z-10">
            <div className="max-w-3xl mb-12 md:mb-16">
              <span className="micro-label mb-4 block">Insights & Tips</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Car Care <span className="text-gold-gradient">Blog</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Expert guides on detailing, paint protection, seasonal care, and keeping
                your vehicle in showroom condition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className={cn(
                    'group glass-card overflow-hidden border border-border hover:border-gold/30 transition-all duration-500 hover:-translate-y-1',
                    'animate-in fade-in slide-in-from-bottom-4'
                  )}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 text-xs font-semibold uppercase tracking-wider text-gold border border-gold/20">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold">
                      Read Article
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogList;
