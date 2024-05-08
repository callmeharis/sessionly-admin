"use client";
import Table from "@/components/table/table";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const Page = () => {
  const router = useRouter();

  const [experts, setExperts] = useState([]);

  useEffect(() => {
    const staffMember = async () => {
      const response = await axios.get(
        "https://api.dev.sessionly.co/api/v2/staff/all"
      );
      console.log(response);
      if (response) {
        setExperts(response.data.data);
      }
    };
    staffMember();
  }, []);

  console.log(experts)

  return (
    <div className="bg-gray-100">
      <div className="table w-full">
        <div className="flex justify-between items-center bg-white p-4 border rounded-md mb-5 ">
          <h1>Expert Listing</h1>
          <button
            className="bg-[#10b981] py-2 px-4 text-white rounded-md"
            onClick={() => router.push("/dashboard/experts/create")}
          >
            Add Expert
          </button>
        </div>

        <div className="px-4  ">
          <div className="">
          {experts && experts.map((expert, index) => (
              <table className="text-center w-full px-6 py-3 rounded-lg overflow-hidden  mb-10" key={index}>
              <thead className="">
                <tr className="mb-5">
                  <th className="py-2 px-16  ">Email</th>
                  <th className="py-2 px-16 ">UserName</th>
                  {/* <th className="py-2 px-16">{email}</th>
                  <th className="py-2 px-16">{role}</th>
                  <th className="py-2 px-16">{status}</th>
                  <th className="py-2 px-16">{action}</th> */}
                </tr>
              </thead>

              <tbody className="table-body ">
                <tr className="experts p-10 ">
                  {/* <td>1</td>
                  <td>Laybha</td> */}
                  <td className="w-60">{expert.email}</td>
                  <td>{expert.username}</td>
                  <td>
                    <span className=" py-1 px-6 rounded-xl">Experts</span>
                  </td>
                  <td className="flex items-center justify-center py-4 ">
                    <RiDeleteBin6Line className="text-xl mr-2  border rounded-md  " />
                    <FiEdit className="text-xl mr-2 border  rounded-md" />
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
