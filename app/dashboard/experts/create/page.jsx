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
            const response = await axios.post("https://api.dev.sessionly.co/api/v2/staff/register",formaData)
        console.log(response)

        if(response){
            localStorage.setItem("expertId", response.data.result._id)
            toast.success("Expert Created Successfully")
            router.push("/dashboard/experts")
        }
        } catch (error) {
            console.error("Error While creating Expert", error.message)
        }
    }

    console.log(formaData)

    return (
        <div className=" bg-gray-100 p-6 ">
        <h1 className="bg-white p-4  font-bold">Add Expert</h1>
        <div className="mt-3 p-10   w-full  bg-white">
            <form onSubmit={createStaff} className='w-11/12 mx-auto'>
                <div className="mb-6 w-full">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        Expert Name
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter Expert" name="username"
                        value={formaData.username}
                        onChange={handleChange} />
                </div>
                <div className="mb-6 w-full">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        Email
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="email" placeholder="Enter Email" name="email"
                        value={formaData.email}
                        onChange={handleChange} />
                </div>
                <div className="mb-6 w-full">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        Password
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="password" placeholder="Enter password" name="password"
                        value={formaData.password}
                        onChange={handleChange} />
                </div>
                <div className="mb-6 w-full">
                    <label className="block text-gray-500 font-bold mb-1" for="inline-full-name">
                        Phone
                    </label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#10b981]" id="inline-full-name" type="text" placeholder="Enter phone Number" name="phone"
                        value={formaData.phone}
                        onChange={handleChange} />
                </div>


                <div className="w-full mx-auto">
                    <button className="bg-[#10b981]  text-white font-bold py-2 px-3  mt-1 border border-[#10b981] rounded">
                        Create
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default page
