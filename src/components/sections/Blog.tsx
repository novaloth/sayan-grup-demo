import Image from "next/image";
import Link from "next/link";
import PillLink, { pillClass } from "@/components/ui/PillLink";
import SectionHeading from "@/components/ui/SectionHeading";
import TitleLines from "@/components/ui/TitleLines";
import type { BlogContent } from "@/types/content";

export default function Blog({ content }: { content: BlogContent }) {
  return (
    <section
      id="medya"
      aria-labelledby="blog-title"
      className="relative px-(--gutter) pt-14 pb-14 md:pt-16 md:pb-20 xl:px-[74px] xl:pt-[17px] xl:pb-[97px]"
    >
      <SectionHeading label={content.label} id="blog-title" titleClassName="xl:mt-[7px]">
        <TitleLines lines={content.title} />
      </SectionHeading>
      <PillLink
        href={content.allPostsHref}
        tone="dark"
        className="mt-5 ml-(--label-indent) px-5 xl:absolute xl:top-[106px] xl:right-[73px] xl:mt-0 xl:ml-0 xl:px-[27px]"
      >
        Tümünü Gör
      </PillLink>

      <ul className="mt-8 grid gap-10 md:grid-cols-2 md:gap-6 xl:mt-[39px] xl:gap-[21px]">
        {content.posts.map((post) => (
          <li key={post.slug}>
            <Link href={post.href} className="group block">
              <div className="relative h-[220px] overflow-hidden rounded-b-[16px] md:h-[280px] xl:h-[calc(280px+160*var(--fp))]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-focus-visible:scale-110"
                />
                {/* Hover/odakta bordo filtre ve "Tamamını Oku" butonu belirir. */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-brand-dark opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-85 group-focus-visible:opacity-85"
                />
                {/* Dış katman konum/belirmeyi, iç katman (pillClass) buton hover dolgusunu yönetir. */}
                <span
                  aria-hidden
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[calc(-50%+12px)] opacity-0 transition-[opacity,translate] duration-500 group-hover:translate-y-[-50%] group-hover:opacity-100 group-focus-visible:translate-y-[-50%] group-focus-visible:opacity-100"
                >
                  <span
                    className={pillClass("light", "px-5 whitespace-nowrap text-white xl:px-[27px]")}
                  >
                    Tamamını Oku
                  </span>
                </span>
              </div>
              <div className="xl:px-[30px]">
                <h3 className="mt-4 line-clamp-2 text-lg leading-snug font-medium md:text-xl xl:mt-[25px] xl:line-clamp-none xl:truncate xl:text-[25px] xl:leading-none xl:tracking-[-0.01em]">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-body text-ink/85 xl:mt-[19px] xl:text-lg xl:leading-[27.5px]">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
