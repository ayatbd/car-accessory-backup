import Shop from "@/components/home/Shop";
import AboutUs from "@/components/home/AboutUs";
import HeroSection from "@/components/home/HeroSection";
import CustomerReview from "@/components/home/CustomerReview";
import ProductAndServices from "@/components/home/ProductsAndServices";

export default function Home() {
  return (
    <div className="bg-[#222222]">
      <HeroSection />
      <ProductAndServices />
      <AboutUs />
      <Shop />
      <CustomerReview />
    </div>
  );
}
