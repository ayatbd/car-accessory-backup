import { FaSort, FaUsers } from "react-icons/fa";
import styles from "./../dashboard.module.css";
import { RiCustomerService2Line, RiDeleteBinLine } from "react-icons/ri";
export default function CustomerPage() {
  return (
    <div className="w-full space-y-7 bg-[#222222] min-h-screen text-white pl-[134px] pt-7 pr-[170px]">
      {/* Statistic Cards */}
      <div className="flex items-center gap-7 mb-8 w-1/2">
        {/* Vendors */}
        <div className="card bg-[#0A0A0A] shadow-xl flex-1">
          <div className="card-body py-6 px-4 flex flex-row justify-between items-center">
            <div>
              <p className="text-[16px]">Vendors</p>
              <h2 className="card-title text-[19px] font-bold text-[#FFE6B9]">
                3454
              </h2>
            </div>
            <div className="p-3 rounded-lg">
              <RiCustomerService2Line size={56} className="text-xl" />
            </div>
          </div>
        </div>

        {/* Customers */}
        <div className="card bg-[#0A0A0A] shadow-xl flex-1">
          <div className="card-body py-6 px-4 flex flex-row justify-between items-center">
            <div>
              <p className="text-[16px]">Customers</p>
              <h2 className="card-title text-[19px] font-bold text-[#FFE6B9]">
                2454
              </h2>
            </div>
            <div className="p-3 rounded-lg">
              <FaUsers size={56} className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#1A1A1A]">
        <table className="table text-white">
          <thead className="text-sm text-white">
            <tr className={`${styles.vendorTable} vendor-table`}>
              <th>
                <span>
                  Vendor ID <FaSort className="text-[#FFE6B9]" />
                </span>
              </th>
              <th>
                <span>
                  Join Date <FaSort className="text-[#FFE6B9]" />
                </span>
              </th>
              <th>
                <span>
                  Customer Name <FaSort className="text-[#FFE6B9]" />
                </span>
              </th>
              <th>
                <span>
                  Location <FaSort className="text-[#FFE6B9]" />
                </span>
              </th>
              <th>
                <span>
                  Transaction <FaSort className="text-[#FFE6B9]" />
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            {Array(10)
              .fill()
              .map((_, i) => (
                <tr key={i} className="hover:bg-[#161616]">
                  <td>#C-004562</td>
                  <td>26 March 2020, 12:42 AM</td>
                  <td>Olivia Shine</td>
                  <td>35 Station Road London</td>
                  <td>
                    <button className="btn cursor-pointer btn-ghost">
                      <RiDeleteBinLine size={29} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
