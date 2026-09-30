import About from "@/components/sections/About";
import Activities from "@/components/sections/Activities";
import Blog from "@/components/sections/Blog";
import Capabilities from "@/components/sections/Capabilities";
import Companies from "@/components/sections/Companies";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Newsletter from "@/components/sections/Newsletter";
import Social from "@/components/sections/Social";
import Stats from "@/components/sections/Stats";
import Sustainability from "@/components/sections/Sustainability";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Divider className="xl:mb-[62px]" />
        <Companies />
        <Divider className="mt-10 md:mt-14 xl:mt-[62px]" />
        <Capabilities />
        <Divider />
        <Activities />
        <Divider className="my-12 md:my-16 xl:mt-[58px] xl:mb-[64px]" />
        <Stats />
        <Sustainability />
        <Blog />
        <Newsletter />
        <Social />
      </main>
      <Footer />
    </>
  );
}
