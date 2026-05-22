import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/lib/data/blogs';
import BlogContent from '@/components/blog/BlogContent';
import BlogCard from '@/components/blog/BlogCard';
import Badge from '@/components/ui/Badge';

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);
  const initials = post.author.name.split(' ').map((n) => n[0]).join('');

  return (
    <main className="pt-24">
      <article className="section-padding">
        <div className="container-narrow max-w-3xl">
          {/* Back */}
          <Link href="/blog" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-coral)] transition-colors mb-8 inline-flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Cover */}
          <div className="rounded-xl overflow-hidden mb-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={900}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} label={tag} variant="coral" />
            ))}
          </div>

          {/* Title */}
          <h1 className="text-display text-2xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            {post.title}
          </h1>

          {/* Author + Meta */}
          <div className="flex items-center gap-4 mb-10 pb-8 border-b border-[var(--border-subtle)]">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold text-white"
              style={{ background: 'linear-gradient(135deg, var(--accent-coral), var(--accent-amber))' }}
            >
              {initials}
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--text-primary)]">{post.author.name}</p>
              <p className="text-xs text-[var(--text-muted)]">
                {post.author.role} · {new Date(post.date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })} · {post.readTime} min read
              </p>
            </div>
          </div>

          {/* Content */}
          <BlogContent content={post.content} />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding pt-0">
          <div className="container-narrow max-w-3xl">
            <hr className="section-divider mb-12" />
            <h3 className="text-heading gradient-text-amber mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              More from the Blog
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
