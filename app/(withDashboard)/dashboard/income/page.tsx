"use client";
import { Eye, Wallet } from "lucide-react";
import Image from "next/image";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import styles from "../dashboard.module.css";

const Income = () => {
  return (
    <div className="bg-[#222222] px-[134px] pt-11 min-h-screen">
      <div className="bg-white rounded-sm">
        <div className="container mx-auto p-6">
          <div className="overflow-x-auto">
            <div className="flex items-center gap-[220px] border-b border-[#8C7B5C] p-4">
              <h1 className="text-[24px] text-[#8C7B5C] font-semibold">
                Income
              </h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 p-4">
                  <Wallet size={24} />
                  <p className="text-[#3E3E3E] text-[18px] font-semibold">
                    Today&apos;s Income
                  </p>
                  <p className="text-[32px] text-[#8C7B5C] font-medium">
                    $7800
                  </p>
                </div>
                <div className="flex items-center gap-4 p-4">
                  <Wallet size={24} />
                  <p className="text-[#3E3E3E] text-[18px]  font-semibold">
                    Total Income
                  </p>
                  <p className="text-[32px] text-[#8C7B5C] font-medium">
                    $7800
                  </p>
                </div>
              </div>
            </div>

            {/* ******************************************************** */}
            {/* table */}
            <table className="w-full text-left text-gray-500">
              {/* Table Header */}
              <thead className="text-xs text-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[24px] font-semibold text-[#8C7B5C]"
                  >
                    Trx ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[24px] font-semibold text-[#8C7B5C]"
                  >
                    Time & Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[24px] font-semibold text-[#8C7B5C]"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[24px] font-semibold text-[#8C7B5C]"
                  >
                    Action
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 text-[18px] text-[#3E3E3E]">#1</td>
                  <td className="px-6 py-4 text-[18px] text-[#3E3E3E]">
                    4:15 PM, 13/02/24
                  </td>
                  <td className="px-6 py-4 text-[18px] text-[#3E3E3E]">3:50</td>
                  <td className="px-6 py-4 text-[18px] text-[#3E3E3E]">
                    <Eye
                      onClick={() => {
                        const modal = document.getElementById(
                          "my_modal_3"
                        ) as HTMLDialogElement;
                        if (modal) modal.showModal();
                      }}
                      className="cursor-pointer"
                    />
                    {/* **********************************************************************                    */}
                    {/* modal to see todays income details  */}
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box w-auto max-w-none p-12">
                        <div className="space-y-6 py-5">
                          <div className="border-b border-[#8C7B5C]">
                            <h1 className="text-[24px] py-2 text-[#8C7B5C] font-semibold flex items-center justify-start gap-3">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="">
                                  <MdOutlineKeyboardArrowLeft
                                    className="cursor-pointer"
                                    size={28}
                                  />
                                </button>
                              </form>
                              <span className="pb-3">
                                Today’s Income details
                              </span>
                            </h1>
                          </div>
                          <div className="space-y-10 mr-[260px]">
                            <div className="space-y-3.5">
                              <div className="flex items-center justify-start gap-4">
                                <div className="avatar">
                                  <div className="w-36 rounded space-x-4">
                                    <Image src="" alt="" />
                                  </div>
                                </div>
                                <h1 className="text-[24px] text-[#3E3E3E] font-semibold">
                                  Wade Warren
                                </h1>
                              </div>
                              <h1 className="text-[24px] text-[#8C7B5C] font-semibold">
                                Information
                              </h1>
                            </div>
                            <div className="space-y-10 min-w-[730px]">
                              <ul className={`space-y-3 ${styles.incomeModal}`}>
                                <li>
                                  <span>Employee ID:</span> #1234
                                </li>
                                <li>
                                  <span>Email:</span> wade@gmail.com
                                </li>
                                <li>
                                  <span>Time & Date:</span> 4:15 PM, 13/02/24
                                </li>
                                <li>
                                  <span>Amount:</span>
                                  $3.50
                                </li>
                                <li>
                                  <span>Payment Method:</span>
                                  Debit Card
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </dialog>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between flex-col sm:flex-row">
            {/* Showing info */}
            <div className="mb-4 sm:mb-0">
              <p className="text-[18px] text-[#3E3E3E]">SHOWING 1-12 OF 250</p>
            </div>

            {/* Pagination */}
            <div>
              <nav
                className="relative z-0 inline-flex -space-x-px"
                aria-label="Pagination"
              >
                {/* Previous Button */}
                <button className="relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#8C7B5C"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Page Numbers */}
                <button className="relative inline-flex items-center px-4 py-2 rounded-sm bg-[#8C7B5C] text-sm font-medium text-[#3E3E3E] hover:bg-[#746853]">
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 rounded-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="relative inline-flex items-center px-4 py-2  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </button>

                <span className="relative inline-flex items-center px-4 py-2  bg-white text-sm font-medium text-gray-700">
                  ...
                </span>

                <button className="relative inline-flex items-center px-4 py-2  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  30
                </button>
                <button className="relative inline-flex items-center px-4 py-2  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  60
                </button>
                <button className="relative inline-flex items-center px-4 py-2  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  120
                </button>

                {/* Next Button */}
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md  bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#8C7B5C"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
