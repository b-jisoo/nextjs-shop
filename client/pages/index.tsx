import Hero from "../components/Layout/hero";
import ProductList from "../components/productList";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div className="h-[3000px]  bg-green-300 min-w-[1200px]">
      <Seo />
      <section id="hero">
        <Hero />
      </section>
      <section id="productList">
        <ProductList />
      </section>
    </div>
  );
}
