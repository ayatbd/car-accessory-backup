"use client";

import React from "react";
import { FaSort, FaUsers } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import styles from "./../dashboard.module.css";
import { ChevronLeft, Mail, Phone, Trash2 } from "lucide-react";
import Image from "next/image";

const UserManagementContent: React.FC = () => {
  return (
    <div className="w-full space-y-7 bg-[#222222] min-h-screen text-white pl-[134px] pt-7 pr-[170px]">
      {/* Statistic Cards */}
      <div className="flex items-center gap-7 mb-8 w-1/2">
        {/* Vendors */}
        <div className="card bg-[#0A0A0A] w-64 shadow-xl flex-1">
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
        <div className="card bg-[#0A0A0A] w-64 shadow-xl flex-1">
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
                  Package Type <FaSort className="text-[#FFE6B9]" />
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
            {Array.from({ length: 10 }).map((_, i: number) => (
              <tr key={i} className="hover:bg-[#161616]">
                <td>#C-004562</td>
                <td>26 March 2020, 12:42 AM</td>
                <td>Olivia Shine</td>
                <td>35 Station Road London</td>
                <td>Monthly</td>
                <td>
                  {/* **************************************************** */}
                  {/* modal button  */}
                  <button
                    onClick={() => {
                      const modal = document.getElementById(
                        "my_modal_3"
                      ) as HTMLDialogElement;
                      if (modal) modal.showModal();
                    }}
                    className="btn btn-sm bg-[#FFE6B9] text-black border-none hover:bg-[#cfa96e]"
                  >
                    $42.85
                  </button>
                  {/* modal to see details  */}
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box w-auto max-w-none p-6">
                      <div className="space-y-6 py-5">
                        <div className="border-b pb-6 border-[#F66E10]">
                          <h1 className="text-[24px] py-2 text-[#F66E10] font-semibold flex items-center justify-start gap-3">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="">
                                <ChevronLeft
                                  className="cursor-pointer"
                                  size={28}
                                />
                              </button>
                            </form>
                            <span className="pb-3">Today’s Income details</span>
                          </h1>
                        </div>
                        <div className="text-black">
                          <div className=" flex items-center gap-52">
                            {/* right card  */}
                            <div className="flex items-center gap-4">
                              <div className="avatar">
                                <div className="w-[130px] h-20 rounded space-x-4">
                                  <Image src="" alt="" />
                                </div>
                              </div>
                              <div className="space-y-1">
                                <h1 className="text-[24px] font-medium text-[#3E3E3E]">
                                  Car Therapy Centre{" "}
                                </h1>
                                <p className="flex items-center gap-1.5">
                                  <Phone size={16} /> +2034 4040 3030
                                </p>
                                <p className="flex items-center gap-1.5">
                                  <Mail size={16} /> hello@gmail.com
                                </p>
                              </div>
                            </div>
                            {/* left card  */}
                            <div className="flex items-center gap-4">
                              <div className="avatar">
                                <div className="w-[130px] h-20 rounded space-x-4">
                                  <Image src="" alt="" />
                                </div>
                              </div>
                              <div className="space-y-0.5">
                                <h1 className="text-[24px] font-medium text-[#3E3E3E]">
                                  Car Therapy Centre{" "}
                                </h1>
                                <p className="flex items-center gap-1.5">
                                  Owner
                                </p>
                                <p className="flex items-center gap-1.5">
                                  <Phone size={16} /> +2034 4040 3030
                                </p>
                                <p className="flex items-center gap-1.5">
                                  <Mail size={16} /> hello@gmail.com
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3.5">
                            <h1 className="text-[24px] text-[#F66E10] font-semibold">
                              Information
                            </h1>
                            <p className="text-[20px]">
                              <span className="text-[#F66E10]">Address:</span>
                              Plot 54358, Prime Plaza, CBD Gaborone, Botswana
                            </p>
                            <p className="text-[20px]">
                              <span className="text-[#F66E10]">
                                Opening Hour:
                              </span>
                              10:00 am- 12:00 pm
                            </p>
                            <p className="text-[20px]">
                              <span className="text-[#F66E10]">Vendor Id:</span>
                              #C-004562
                            </p>
                            <p className="text-[20px]">
                              <span className="text-[#F66E10]">
                                Payment Method:
                              </span>
                              Cradit
                            </p>
                            <p className="text-[20px]">Yearly</p>
                          </div>
                          <h1 className="text-[24px] text-[#F66E10] font-semibold flex items-center gap-2.5 justify-end">
                            <Trash2 size={24} /> Information
                          </h1>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagementContent;
