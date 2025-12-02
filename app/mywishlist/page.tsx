import Container from "@/components/shared/Container";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";

export default function WishlistPage() {
  const items = Array(12).fill({
    title:
      "Car parts and accessories for maintenance include oil containers, filters, spark plugs, and brake pads.",
    price: "$450",
    rating: 4.5,
    reviews: 61,
    image: "/pictures/wishlist/image1.png",
  });

  return (
    <div className="bg-[#222222]">
      <Container>
        <div className="min-h-screen text-white px-6 py-10">
          <span className="text-[32px] font-bold mb-2 border-b border-primary-yellow p-2">
            My wishlist
          </span>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="text-[60px] mb-4 text-primary-yellow">♡</div>
            <h1 className="text-white mb-6 flex flex-col gap-1">
              <span>There are no favourites yet.</span>
              <span>
                Add your favourites to wishlist and they will show here.
              </span>
            </h1>
            <button className="border border-primary-yellow text-primary-yellow px-4 py-2 rounded-md text-sm">
              CONTINUE SHOPPING
            </button>
          </div>

          <div className="mb-20">
            <button className="bg-primary-yellow text-black px-3 py-3 rounded-md text-[32px] font-medium">
              Just For You
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {items.map((item, index) => (
              <div
                key={index}
                className="border space-y-6 border-primary-yellow rounded-xl p-3 shadow-md"
              >
                <div className="">
                  <Image
                    width={400}
                    height={400}
                    src={item.image}
                    alt="item"
                    className=" rounded-lg mb-3"
                  />
                </div>
                <div>
                  <p className="text-[20px] text-gray-300 mb-5">{item.title}</p>

                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-white">
                      {item.price}
                    </span>
                    <button className="px-2 py-1 bg-primary-yellow rounded-md text-xs">
                      <BsCart3 size={28} color="black" />
                    </button>
                  </div>

                  <div className="flex items-center text-gray-400 text-lg gap-1">
                    <span>★★★★☆</span>
                    <span className="text-primary-yellow">
                      ({item.reviews})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
