import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Shop from "@/components/home/Shop";
import AboutUs from "@/components/home/AboutUs";
import Container from "@/components/shared/Container";
import HeroSection from "@/components/home/HeroSection";
import CustomerReview from "@/components/home/CustomerReview";
import ProductAndServices from "@/components/home/ProductsAndServices";

export default function Home() {
  return (
    <div className="bg-[#222222]">
      <Container>
        <Header />
        <HeroSection />
        <ProductAndServices />
        <AboutUs />
        <Shop />
        <CustomerReview />
        <Footer />
      </Container>
    </div>
  );
}
