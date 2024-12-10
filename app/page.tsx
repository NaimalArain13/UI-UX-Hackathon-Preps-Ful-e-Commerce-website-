
import BestSellingProduct from "./component/HomePage/bestSellingProduct";
import Bottom from "./component/HomePage/bottom";
import CategoryImage from "./component/HomePage/CategoryImage";
import CategorySection from "./component/HomePage/categorySection";
import FlashSale from "./component/HomePage/flashSale";
import HeroSection from "./component/HomePage/herosection";
import NewArrival from "./component/HomePage/newArrival";
import ProductSection from "./component/HomePage/productSection";

export default function Home() {
 
  return (
    <div>
        {/* HeroSection */}
     <div>
      <HeroSection />
     </div>
        {/* FlashSale */}
     <div>
      <FlashSale />
     </div>
     
      {/* Categories Section */}
     <div>
      <CategorySection />
     </div>

    {/* Best Selling Products Section */}
    <div>
     <BestSellingProduct />
    </div>
    {/* Categories Section */}
    <div>
     <CategoryImage />
    </div>
    {/*Product Section */}
    <div>
     <ProductSection />
    </div>
    {/*New Arrival Section */}
    <div>
     <NewArrival />
    </div>
    {/*Bottom Section */}
    <div>
     <Bottom />
    </div>
    </div>
  );
}
