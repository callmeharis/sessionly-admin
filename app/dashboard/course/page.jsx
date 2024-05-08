"use client";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { useEffectAsync } from "@/utils/react";
import { toast } from "react-toastify";
import Link from "next/link";
import TaskApi from "@/app/api/task";
import axios from "axios";

const page = () => {
    const [courses, setCourses] = useState([]);
    const [data, setData] = useState(null)
    const router = useRouter();
    // const onDeleteClick = async (taskId) => {
    //     const taskApi = new TaskApi();
    //     try {
    //         await taskApi.remove(taskId);
    //         setTask(task.filter((v) => v._id != taskId));
    //         toast.success("Task Removed Successfully");
    //     } catch (error) {
    //         toast.error("Something went wrong");
    //     }
    // };
    // useEffectAsync(async () => {
    //     try {
    //         const taskApi = new taskApi();
    //         const data = await taskApi.list();
    //         console.log("task data list", data.data);
    //         setTask(data.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);


    const url = "https://api.dev.sessionly.co/api/v2/course/all";
    const fetchData = async () => {
        const res = await axios.get(url);
        setCourses(res.data.data)
    }
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
            <div className="flex justify-end">
                <button
                    className="m-4 py-1 px-2 rounded bg-[#10b981] text-white"
                    onClick={() => router.push("/dashboard/course/create")}
                >
                    create course
                </button>
            </div>
            <table className="w-full  text-sm">
                <thead>
                    <tr className="text-lg bg-[#10b981] text-white text-left">
                        <th>S.No</th>
                        {/* <th>Category Image</th> */}
                        <th>Course Name</th>
                        <th>Outline</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {courses.map((task, index) => (
                        <tr className="bg-slate-50 border-b border-gray-300" key={index}>
                            <td className="text-center">{index + 1}</td>
                            {/* <td>
                <img
                                    src={admin.categoryImage}
                                    alt={item.categoryName}
                                    className="max-w-10 rounded-full"
                                />
              </td> */}
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.complated}</td>
                            <td>{task.dueDate}</td>
                            <td>{task.assignedTo}</td>
                            {/* <td>{task.assignedToElse}</td> */}
                            {/* <td>{task.assignedBy}</td> */}
                            {/* <td>{task.imestamps}</td> */}
                            <td>
                                <Link
                                    href={`/dashboard/task/${task._id}/edit`}
                                    className="text-center p-2"
                                >
                                    <span className=" text-xl rounded-md text-black flex">
                                        <FaRegEdit />

                                        <AiOutlineDelete
                                            onClick={() => onDeleteClick(task._id)}
                                            className="text-xl ml-2"
                                        />
                                    </span>
                                </Link>
                                {/* <button onClick={() => onDeleteClick(task._id)}>Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default page;
