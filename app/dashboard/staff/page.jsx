"use client";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { useEffectAsync } from "@/utils/react";
import { toast } from "react-toastify";
import Link from "next/link";
import StaffApi from "@/app/api/staff";

const page = () => {
  const [staff, setStaff] = useState([]);
  const router = useRouter();
  const onDeleteClick = async (staffId) => {
    const staffApi = new StaffApi();
    try {
      await staffApi.remove(staffId);
      setStaff(staff.filter((v) => v._id != staffId));
      toast.success("Staff Removed Successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  useEffectAsync(async () => {
    try {
      const staffApi = new StaffApi();
      const data = await staffApi.list();
      console.log("staff data list", data.data);
      setStaff(data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="flex justify-end">
        <button
          className="m-4 py-1 px-2 rounded bg-[#10b981] text-white"
          onClick={() => router.push("/dashboard/staff/create")}
        >
          Add Staff
        </button>
      </div>
      <table className="w-full  text-sm">
        <thead>
          <tr className="text-lg bg-[#10b981] text-white text-left">
            <th>S.No</th>
            {/* <th>Category Image</th> */}
            <th>Fullname</th>
            <th>Email</th>
            <th>IP#</th>
            <th>User Type</th>
            <th>Tel#</th>
            <th>Time of Login</th>
            <th>Time of Logout</th>
            <th>History</th>
            <th>Track</th>
            <th>Activity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {staff.map((staff, index) => (
            <tr className="bg-slate-50 border-b border-gray-300" key={index}>
              <td className="text-center">{index + 1}</td>
              {/* <td>
                <img
                          src={admin.categoryImage}
                          alt={item.categoryName}
                          className="max-w-10 rounded-full"
                      />
              </td> */}
              <td>{staff.fullname}</td>
              <td>{staff.email}</td>
              <td>{staff.ip}</td>
              <td>{staff.userType}</td>
              <td>{staff.tel}</td>
              <td>{staff.login}</td>
              <td>{staff.logout}</td>
              <td>{staff.history}</td>
              <td>{staff.track}</td>
              <td>{staff.activity}</td>
              <td>{staff.action}</td>
              <td>
                <Link
                  href={`/dashboard/staff/${staff._id}/edit`}
                  className="text-center p-2"
                >
                  <span className=" text-xl rounded-md text-black flex ">
                    <FaRegEdit />

                    <AiOutlineDelete
                      onClick={() => onDeleteClick(staff._id)}
                      className="text-xl ml-2"
                    />
                  </span>
                </Link>
                {/* <button onClick={() => onDeleteClick(staff._id)}>Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default page;
