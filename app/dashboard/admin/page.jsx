"use client";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { useEffectAsync } from "@/utils/react";
import { toast } from "react-toastify";
import Link from "next/link";
import AdminApi from "@/app/api/admin";

const page = () => {
  const [admins, setAdmins] = useState([]);
  const router = useRouter();
  const onDeleteClick = async (adminId) => {
    const adminApi = new AdminApi();
    try {
      await adminApi.remove(adminId);
      setAdmins(admins.filter((v) => v._id != adminId));
      toast.success("Admin Removed Successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  useEffectAsync(async () => {
    try {
      const adminApi = new AdminApi();
      const data = await adminApi.list();
      console.log("admin data list", data.data);
      setAdmins(data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="flex justify-end">
        <button
          className="m-4 py-1 px-2 rounded bg-[#10b981] text-white"
          onClick={() => router.push("/dashboard/admin/create")}
        >
          Add member
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
          {admins.map((admin, index) => (
            <tr className="bg-slate-50 border-b border-gray-300" key={index}>
              <td className="text-center">{index + 1}</td>
              {/* <td>
                <img
                                    src={admin.categoryImage}
                                    alt={item.categoryName}
                                    className="max-w-10 rounded-full"
                                />
              </td> */}
              <td>{admin.fullname}</td>
              <td>{admin.email}</td>
              <td>{admin.ip}</td>
              <td>{admin.userType}</td>
              <td>{admin.tel}</td>
              <td>{admin.timeOfLogin}</td>
              <td>{admin.timeOfLogout}</td>
              <td>{admin.history}</td>
              <td>{admin.track}</td>
              <td>{admin.activity}</td>
              <td>{admin.action}</td>
              <td>
                <Link
                  href={`/dashboard/admin/${admin._id}/edit`}
                  className="text-center p-2"
                >
                  <span className=" text-xl rounded-md text-black flex">
                    <FaRegEdit />
                    <AiOutlineDelete
                      onClick={() => onDeleteClick(admin._id)}
                      className="text-xl ml-2"
                    />
                  </span>
                </Link>
                {/* <button onClick={() => onDeleteClick(admin._id)}>Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default page;
