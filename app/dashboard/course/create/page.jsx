'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";





const Page = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        requirements: '',
        preRequirements: '',
        admin: '',
        staff: '',
        students: '',
        duration: '',
        startDate: '',
        endDate: '',
        isActive: '',
        lastDateOfEnrollment: '',
        image: '',
        calendar: ''
    })
    console.log(formData)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    console.log(formData);
    const adminId = window.localStorage.getItem("adminId")

    console.log(adminId);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        setFormData({
            title: '',
            description: '',
            price: '',
            requirements: '',
            preRequirements: '',
            admin: '',
            staff: '',
            students: '',
            duration: '',
            startDate: '',
            endDate: '',
            isActive: '',
            lastDateOfEnrollment: '',
            image: '',
            calendar: ''
        });
        try {
            const res = await axios.post(`https://api.dev.sessionly.co/api/v2/course/register/${adminId}`, formData)
            if(res) {
                toast.success("Course Created Succesfully")
                router.push("/dashboard/course")
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className=" bg-gray-100 p-6 flex justify-center flex-col align-center w-full">
            <h1 className="bg-white p-4  font-bold">Add New Courses</h1>

            <form onSubmit={handleSubmit} className="my-6 flex flex-wrap align-center justify-center gap-5 w-10/12 mx-auto">
                <div className="mb-6 w-1/3">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        Courses Name
                    </label>
                    <input className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter Course Name" name="title"
                        value={formData.title}
                        onChange={handleChange} />
                </div>

                <div className="mb-6 w-1/3">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        Price
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter Price" name="price"
                        value={formData.price}
                        onChange={handleChange} />
                </div>

                <div className="mb-6 w-1/3">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        Requirements
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter Requirements" name="requirements"
                        value={formData.requirements}
                        onChange={handleChange} />
                </div>
                <div className="mb-6 w-1/3">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        PreRequirements
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter PreRequirements" name="preRequirements"
                        value={formData.preRequirements}
                        onChange={handleChange} />
                </div>
                <div className="mb-6 w-1/3">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        StartDate
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="date" placeholder="Enter StartDate" name="startDate"
                        value={formData.startDate}
                        onChange={handleChange} />
                </div>
                <div className="mb-6 w-1/3">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        EndDate
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="date" placeholder="Enter EndDate" name="endDate"
                        value={formData.endDate}
                        onChange={handleChange} />
                </div>
                <div className="mb-6 w-1/3">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        Course Duration
                    </label>
                    <div className="mt-2">
                        <select
                            id="duration"
                            name="duration"
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]"
                            value={formData.duration}
                            onChange={handleChange}
                        >
                            <option>30</option>
                            <option>1 year</option>
                            <option>4 year</option>
                        </select>
                    </div>
                </div>

                <div className="mb-6 w-1/3">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        LastDateOfEnrollment
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="date" placeholder="" name="lastDateOfEnrollment"
                        value={formData.lastDateOfEnrollment}
                        onChange={handleChange} />
                </div>

                <div className="mb-6 w-[69%]">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        Calendar
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="date" placeholder="" name="calendar"
                        value={formData.calendar}
                        onChange={handleChange} />
                </div>
                <div className="mb-6 w-[69%]">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        Description
                    </label>
                    <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter Course Description" name="description" rows={10}
                        value={formData.description}
                        onChange={handleChange} />
                    <div className="w-full mx-auto flex justify-end">
                        <button className="bg-[#10b981]  text-white font-bold py-2 px-3  mt-1 border border-[#10b981] rounded">
                            Create
                        </button>
                    </div>
                </div>
            </form >
        </div>
    );
};

export default Page;
