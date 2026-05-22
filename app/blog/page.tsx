import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/data/blogs';
import BlogCard from '@/components/blog/BlogCard';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical articles, tutorials, and insights from the Web & Coding Club NIT Patna team.',
};

export default function BlogPage() {
  const featured = BLOG_POSTS.filter((p) => p.featured);
  const regular = BLOG_POSTS.filter((p) => !p.featured);
  const heroPost = featured[0] || BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== heroPost.slug);
  const heroInitials = heroPost.author.name.split(' ').map((n) => n[0]).join('');

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-narrow">
          <p className="text-mono text-xs mb-4 tracking-[0.2em]">// BLOG</p>
          <h1 className="text-display gradient-text-amber mb-4">Blog</h1>
          <p className="text-body max-w-2xl text-lg mb-12">
            Technical deep-dives, tutorials, and stories from our community of builders.
          </p>

          {/* Featured Post */}
          <Link href={`/blog/${heroPost.slug}`} className="block group mb-16">
            <article className="glass-card gradient-border overflow-hidden md:flex">
              <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                <Image
                  src={heroPost.coverImage}
                  alt={heroPost.title}
                  width={800}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center gap-4">
                <div className="flex flex-wrap gap-2">
                  <Badge label="Featured" variant="coral" />
                  {heroPost.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} label={tag} variant="gray" />
                  ))}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-coral)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                  {heroPost.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                  {heroPost.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, var(--accent-coral), var(--accent-amber))' }}>
                    {heroInitials}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[var(--text-primary)]">{heroPost.author.name}</p>
                    <p className="text-[0.65rem] text-[var(--text-muted)]">
                      {new Date(heroPost.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })} · {heroPost.readTime} min read
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Link>

          {/* Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
