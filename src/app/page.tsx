import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Activities from "@/components/sections/Activities";
import Blog from "@/components/sections/Blog";
import Capabilities from "@/components/sections/Capabilities";
import Companies from "@/components/sections/Companies";
import Hero from "@/components/sections/Hero";
import Newsletter from "@/components/sections/Newsletter";
import Social from "@/components/sections/Social";
import Stats from "@/components/sections/Stats";
import Sustainability from "@/components/sections/Sustainability";
import Divider from "@/components/ui/Divider";
import { getHomeContent, getSiteContent } from "@/lib/content";

/**
 * Anasayfa. İçerik src/lib/content.ts üzerinden alınır ve bölümlere props olarak dağıtılır;
 * bölümler kendi içlerinde metin veya veri tutmaz.
 */
export default async function Home() {
  const [site, home] = await Promise.all([getSiteContent(), getHomeContent()]);

  return (
    <>
      <Hero content={home.hero} nav={site.nav} />
      <main>
        <About content={home.about} />
        <Divider className="xl:mb-[62px]" />
        <Companies content={home.companies} />
        <Divider className="mt-10 md:mt-14 xl:mt-[62px]" />
        <Capabilities content={home.capabilities} />
        <Divider />
        <Activities content={home.activities} />
        <Divider className="my-12 md:my-16 xl:mt-[58px] xl:mb-[64px]" />
        <Stats content={home.stats} />
        <Sustainability content={home.sustainability} />
        <Blog content={home.blog} />
        <Newsletter content={home.newsletter} consentLinks={site.legalLinks} />
        <Social content={home.social} socials={site.socials} />
      </main>
      <Footer site={site} companies={home.companies.items} />
    </>
  );
}
