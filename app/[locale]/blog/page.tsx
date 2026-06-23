import type { Metadata } from "next";
import { blogPosts } from "@/content/blog";
import { pages } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const seo = pages.blog.seo;
  return buildMetadata({
    locale,
    path: "/blog",
    title: seo.title[locale],
    description: seo.description[locale],
  });
}

/**
 * No posts yet — content/blog.ts is typed and ready, so the Journal can go
 * live by pushing BlogPost entries there (and later adding a [slug] route)
 * without restructuring this page.
 */
export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const content = pages.blog;

  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow[locale]}
        heading={content.hero.heading[locale]}
        subtitle={content.hero.subtitle[locale]}
      />

      {blogPosts.length > 0 ? (
        <section className="py-16 sm:py-20">
          <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id}>
                <h2 className="font-heading text-xl text-charcoal">{post.title[locale]}</h2>
                <p className="mt-2 text-sm text-muted">{post.excerpt[locale]}</p>
              </article>
            ))}
          </Container>
        </section>
      ) : null}
    </>
  );
}
