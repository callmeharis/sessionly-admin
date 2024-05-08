"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
    const router = useRouter()
    const [formaData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        phone: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formaData, [name]: value})
    }

    // creating Staff Member

    const createStaff = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("https://api.dev.sessionly.co/api/v2/student/register",formaData)
        console.log(response)

        if(response){
            localStorage.setItem("studentId", response.data.result._id)
            toast.success("Student Created Successfully")
            router.push("/dashboard/student")
        }
        } catch (error) {
            console.error("Error While creating Expert", error.message)
        }
    }

    console.log(formaData)

    return (
        <div className=" bg-gray-100 p-6 ">
        <h1 className="bg-white p-4  font-bold">Add Student</h1>
        {/* <div className="mt-3 p-10  bg-white grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <form onSubmit={createStaff}>
                <div className="sm:col-span-3">
                    <label
                        for="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Student Name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            autocomplete="given-name"
                            className="block w-full rounded-md  px-5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            placeholder="username"
                            value={formaData.username}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label
                        for="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        email
                    </label>
                    <div className="mt-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autocomplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="email"
                            value={formaData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label
                        for="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        password
                    </label>
                    <div className="mt-2">
                        <input type="password" name='password' placeholder='password'
                            value={formaData.password}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label
                        for="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        phone
                    </label>
                    <div className="mt-2">
                        <input type="text" name='phone' placeholder='phone'
                            value={formaData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="   flex  ">
                    <button className="bg-gray-600 hover:bg-gray-500  text-white font-bold py-2 px-3 border border-gray-700 rounded">
                        Cancel
                    </button>
                    <button className="bg-cyan-700 hover:bg-cyan-700 ml-2 text-white font-bold py-2 px-3 border border-cyan-700 rounded">
                        Create
                    </button>
                </div>
            </form>
        </div> */}


        <form onSubmit={createStaff} className=" mt-5  flex align-center flex-col justify-center w-10/12 mx-auto" >
            <div className="md:flex  md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Name
                    </label>
                </div>
                <div className="md:w-full">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text"
                        placeholder="Enter Student Name Here"
                        name='username'
                        value={formaData.username}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Email
                    </label>
                </div>
                <div className="md:w-full">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-password" type="email" placeholder="Enter Email Here"
                        name='email'
                        value={formaData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Password
                    </label>
                </div>
                <div className="md:w-full">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-password" type="password" placeholder="Enter password Here"
                        name='password'
                        value={formaData.password}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center  mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Phone
                    </label>
                </div>
                <div className="md:w-full">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-password" type="text" placeholder="Enter Phone Number Here"
                        name='phone'
                        value={formaData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <button className="bg-[#10b981] text-white font-bold py-2 px-3  mt-1 border border-[#10b981] rounded">
                    Create
                </button>
            </div>

        </form>
    </div>
    )
}

export default page
