import APropos from "@/components/a-propos";
import Blog from "@/components/blog";
import ExpertisesHome from "@/components/expertises-home";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Menu from "@/components/menu";
import Temoignage from "@/components/temoignage";
import Villas from "@/components/villas";

export default function Home() {
  return (
    <main>
      <div className="relative z-10 -top-8">
        <Menu />
      </div>
      <div className="relative z-0 -my-16">
        <Hero />
      </div>
      <Villas />
      <ExpertisesHome />
      <APropos />
      <Blog />
      <Temoignage />
      <Footer />
    </main>
  );
}
