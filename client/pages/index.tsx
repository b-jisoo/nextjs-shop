import Hero from "../components/Layout/view/hero";
import ProductList from "../components/product/productList";
import Seo from "../components/common/Seo";

export default function HomePage() {
  return (
    <div className="h-[3000px]   min-w-[1200px]">
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
