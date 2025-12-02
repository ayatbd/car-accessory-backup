import Container from "@/components/shared/Container";
import Image from "next/image";

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
          <h1 className="text-xl font-semibold mb-2">My wishlist</h1>
          <div className="w-20 h-0.5 bg-white mb-10"></div>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="text-4xl mb-4">♡</div>
            <p className="text-gray-300 mb-2">There are no favourites yet.</p>
            <p className="text-gray-400 mb-6">
              Add your favourites to wishlist and they will show here.
            </p>
            <button className="border border-yellow-200 text-yellow-200 px-4 py-2 rounded-md text-sm">
              CONTINUE SHOPPING
            </button>
          </div>

          <div className="mb-6">
            <button className="bg-yellow-200 text-black px-4 py-1 rounded-md text-sm font-medium">
              Just For You
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {items.map((item, index) => (
              <div
                key={index}
                className="border space-y-6 border-yellow-200 rounded-xl p-3 bg-[#0a0a0a] shadow-md"
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

                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-white">
                      {item.price}
                    </span>
                    <button className="border border-yellow-200 text-yellow-200 px-2 py-1 rounded-md text-xs">
                      🛒
                    </button>
                  </div>

                  <div className="flex items-center text-gray-400 text-xs gap-1">
                    <span>★★★★☆</span>
                    <span>({item.reviews})</span>
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
