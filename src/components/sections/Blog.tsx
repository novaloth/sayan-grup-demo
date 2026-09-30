import Image from "next/image";
import Link from "next/link";
import PillLink from "@/components/ui/PillLink";
import SectionLabel from "@/components/ui/SectionLabel";

// TODO: Yazı linkleri ve "Tümünü Gör" hedefi müşteriden bekleniyor.
const posts = [
  {
    title: "Sayan Lojistik, Entegre Tedarik Zinciri Yapısıyla Faaliyetlerine Başladı",
    excerpt:
      "Sayan Grup'un dördüncü iştiraki Sayan Lojistik, Kocaeli Çayırova merkezli operasyonlarıyla faaliyetlerine başlıyor. Şirket, grubun mevcut lojistik altyapısını bağımsız bir yapıya kavuşturarak karayolu taşımacılığı, depolama ve dağıtım hizmetlerini tek çatı altında sunuyor.",
    image: "/images/blog-logistics.jpg",
    href: "#",
  },
  {
    title: "Dessan Demir Çelik, Çayırova Tesisinde Kapasite Artışına Gitti",
    excerpt:
      "Dessan Demir Çelik, Kocaeli Çayırova Şekerpınar'daki ana tesisinde gerçekleştirdiği yatırımla depolama alanını genişletti. Yeni düzenlemeyle birlikte tesisin toplam stok kapasitesi önemli ölçüde artırıldı.",
    image: "/images/blog-wind.jpg",
    href: "#",
  },
];

export default function Blog() {
  return (
    <section
      id="medya"
      aria-labelledby="blog-title"
      className="relative px-[74px] pt-[17px] pb-[97px]"
    >
      <SectionLabel>BLOG &amp; DUYURULAR</SectionLabel>
      <h2 id="blog-title" className="mt-[7px] pl-[43px] text-display font-semibold">
        SEKTÖREL VİZYON
        <br />
        VE İÇGÖRÜLER
      </h2>
      <PillLink href="#" tone="dark" className="absolute top-[106px] right-[73px] px-[27px]">
        Tümünü Gör
      </PillLink>

      <ul className="mt-[39px] grid grid-cols-2 gap-[21px]">
        {posts.map((post) => (
          <li key={post.title}>
            <Link href={post.href} className="group block">
              <div className="relative h-[440px] overflow-hidden rounded-b-[16px]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="876px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-[30px]">
                <h3 className="mt-[25px] truncate text-[25px] leading-none font-medium tracking-[-0.01em]">
                  {post.title}
                </h3>
                <p className="mt-[19px] line-clamp-3 text-lg leading-[27.5px] text-ink/85">
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
