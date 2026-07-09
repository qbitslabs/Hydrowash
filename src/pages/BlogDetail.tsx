import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  getBlogPostById,
  getRelatedBlogPosts,
} from '@/data/blogData';
import { cn } from '@/lib/utils';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = id ? getBlogPostById(id) : undefined;
  const relatedPosts = id ? getRelatedBlogPosts(id) : [];

  useEffect(() => {
    if (!post) {
      navigate('/blog', { replace: true });
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        <article>
          <section className="relative py-12 md:py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-background to-background" />

            <div className="section-container relative z-10">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors duration-300 mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <div className="max-w-4xl">
                <span className="micro-label mb-4 block">{post.category}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                  <span className="inline-flex items-center gap-2">
                    <User className="w-4 h-4 text-gold" />
                    {post.author}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold" />
                    {post.readTime}
                  </span>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </section>

          <section className="pb-12 md:pb-16">
            <div className="section-container">
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gold/20 mb-10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="prose prose-invert max-w-none">
                  {post.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className={cn(
                        'text-base md:text-lg text-muted-foreground leading-relaxed mb-6',
                        index === 0 && 'text-foreground text-lg md:text-xl'
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </article>

        {relatedPosts.length > 0 && (
          <section className="pb-20 md:pb-28 border-t border-border/40">
            <div className="section-container pt-16">
              <div className="flex items-center justify-between gap-4 mb-10">
                <div>
                  <span className="micro-label mb-2 block">Keep Reading</span>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Related <span className="text-gold-gradient">Articles</span>
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.id}`}
                    className="group glass-card overflow-hidden border border-border hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs uppercase tracking-wider text-gold mb-2 block">
                        {related.category}
                      </span>
                      <h3 className="font-bold mb-2 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                        {related.title}
                      </h3>
                      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-gold transition-colors duration-300">
                        Read more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
