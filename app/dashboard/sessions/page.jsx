"use client";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { useEffectAsync } from "@/utils/react";
import { toast } from "react-toastify";
import Link from "next/link";
import SessionsApi from "@/app/api/sessions";

const page = () => {
  const [sessions, setSessions] = useState([]);
  const router = useRouter();
  const onDeleteClick = async (sessionsId) => {
    const sessionsApi = new SessionsApi();
    try {
      await sessionsApi.remove(sessionsId);
      setSessions(sessions.filter((v) => v._id != sessionsId));
      toast.success("sessions Removed Successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  useEffectAsync(async () => {
    try {
      const sessionsApi = new sessionsApi();
      const data = await sessionsApi.list();
      console.log("sessions data list", data.data);
      setSessions(data.data);
    } catch (error) {
      console.log("error", error);
    }
  }, []);
  return (
    <>
      <div className="flex justify-end">
        <button
          className="m-4 py-1 px-2 rounded bg-[#10b981] text-white"
          onClick={() => router.push("/dashboard/sessions/create")}
        >
          Add Sessions
        </button>
      </div>
      <table className="w-full  text-sm">
        <thead>
          <tr className="text-lg bg-[#10b981] text-white text-left">
            <th>S.No</th>
            {/* <th>Category Image</th> */}
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>User Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {sessions.map((sessions, index) => (
            <tr className="bg-slate-50 border-b border-gray-300" key={index}>
              <td className="text-center">{index + 1}</td>
              {/* <td>
                <img
                                    src={admin.categoryImage}
                                    alt={item.categoryName}
                                    className="max-w-10 rounded-full"
                                />
              </td> */}
              <td>{sessions.username}</td>
              <td>{sessions.email}</td>
              <td>{sessions.phone}</td>
              <td>{sessions.userType}</td>
              <td>
                <Link
                  href={`/dashboard/sessions/${sessions._id}/edit`}
                  className="text-center p-2"
                >
                  <span className=" text-xl rounded-md text-black flex">
                    <FaRegEdit />

                    <AiOutlineDelete
                      onClick={() => onDeleteClick(sessions._id)}
                      className="text-xl ml-2"
                    />
                  </span>
                </Link>
                {/* <button onClick={() => onDeleteClick(sessions._id)}>
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default page;
