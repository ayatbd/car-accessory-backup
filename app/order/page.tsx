import Container from "@/components/shared/Container";

export default function OrdersTable() {
  const rows = Array.from({ length: 12 }).map((_, i) => ({
    vendor: "Benjamin Price",
    orderId: "Order ID: 21089000",
    product: "Drunko Wheel",
    price: "$700",
    type: "Product & Service",
    status: i % 3 === 0 ? "Processing" : "Completed",
  }));

  return (
    <div className="w-full bg-[#1A1A1A] text-white p-8">
      <Container>
        <div className="w-full overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#222222] text-sm uppercase text-white/70">
              <tr>
                <th className="px-6 py-10">Product Image</th>
                <th className="px-6 py-10">Vendor Name</th>
                <th className="px-6 py-10">Order Details</th>
                <th className="px-6 py-10">Order Type</th>
                <th className="px-6 py-10">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/10">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition">
                  {/* Product Image */}
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 rounded-full bg-white/20"></div>
                  </td>

                  {/* Vendor Name */}
                  <td className="px-6 py-4 text-white/90">{row.vendor}</td>

                  {/* Order Details */}
                  <td className="px-6 py-4 text-sm text-white/70">
                    <div>{row.orderId}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span>{row.product}</span>
                      <span className="text-white/50">{row.price}</span>
                    </div>
                  </td>

                  {/* Order Type */}
                  <td className="px-6 py-4 text-white/80">{row.type}</td>

                  {/* Status */}
                  <td
                    className={`px-6 py-4 font-medium ${
                      row.status === "Processing"
                        ? "text-yellow-400"
                        : "text-green-400"
                    }`}
                  >
                    {row.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}
