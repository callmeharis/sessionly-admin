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
        const { name, value } = e.target;
        setFormData({ ...formaData, [name]: value })
    }

    // creating Staff Member

    // const expertId = localStorage.getItem("expertId")
    // const updateStaff = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const response = await axios.post(`https://api.dev.sessionly.co/api/v2/staff/update${expertId}`,formaData)
    //     console.log(response)

    //     if(response){
    //         toast.success("Expert Created Successfully")
    //         router.push("/dashboard")
    //     }
    //     } catch (error) {
    //         console.error("Error While creating Expert", error.message)
    //     }
    // }
    const updateStaff = async (e) => {
        e.preventDefault();
        try {
            if (typeof window !== "undefined") {
                const expertId = localStorage.getItem("expertId");
                const response = await axios.post(
                    `https://api.dev.sessionly.co/api/v2/staff/update${expertId}`,
                    formaData
                );
                console.log(response);
                if (response) {
                    toast.success("Expert Created Successfully");
                    router.push("/dashboard");
                }
            }
        } catch (error) {
            console.error("Error While creating Expert", error.message);
        }
    };

    console.log(formaData)

    return (
        <div className=" bg-gray-100 p-6 ">
            <h1 className="bg-white p-4  font-bold">Add Expert</h1>
            <div class="mt-3 p-10  bg-white grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <form onSubmit={updateStaff}>
                    <div class="sm:col-span-3">
                        <label
                            for="first-name"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Expert Name
                        </label>
                        <div class="mt-2">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                autocomplete="given-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="username"
                                value={formaData.username}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label
                            for="name"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >
                            email
                        </label>
                        <div class="mt-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autocomplete="family-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="email"
                                value={formaData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label
                            for="country"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >
                            password
                        </label>
                        <div class="mt-2">
                            <input type="password" name='password' placeholder='password'
                                value={formaData.password}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label
                            for="country"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >
                            phone
                        </label>
                        <div class="mt-2">
                            <input type="text" name='phone' placeholder='phone'
                                value={formaData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="   flex  ">
                        <button class="bg-gray-600 hover:bg-gray-500  text-white font-bold py-2 px-3 border border-gray-700 rounded">
                            Cancel
                        </button>
                        <button class="bg-cyan-700 hover:bg-cyan-700 ml-2 text-white font-bold py-2 px-3 border border-cyan-700 rounded">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page
