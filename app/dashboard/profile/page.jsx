import React from "react";
const Page = () => {
  return (
    <div>
      <div class="p-10 space-y-6">
        <h1 className=" p-2 border-b rounded border-gray-300 ">Profile</h1>
        <div className="flex">
          <img
            class="inline-flex object-cover border-4 border-cyan-700 rounded-full bg-indigo-50 h-28 w-28  mb-4 md:mb-0 ml-0 md:mr-5"
            src="https://media.istockphoto.com/id/1457948354/photo/successful-businesswoman-in-modern-office-working-on-laptop.jpg?s=1024x1024&w=is&k=20&c=X8KTk6fECCQOEroqDivRAVF7U3mU5f-qrkOO4nbw9r0="
            alt=""
          />
          <div>
            <button class="bg-cyan-700 hover:bg-cyan-700 px-2 py-1 mt-11 ml-4  text-white font-bold  border border-cyan-700 rounded">
              Uplaod Profile Image
            </button>
          </div>
        </div>
        <form action="#">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="product-name"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="product-name"
                id="product-name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Enter your name ”"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="category"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Email
              </label>
              <input
                type="text"
                name="category"
                id="category"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="123@gamil"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="brand"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Phone
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="111 222 333"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="brand"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Address
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="1,abc LT,"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="brand"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Password
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="*********"
                required=""
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="brand"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Confirm Password
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                class="shadow-sm bg-gray0 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="**********"
                required=""
              />
            </div>
          </div>
        </form>
        <div className=" flex justify-end  mt-10  mr-1   ">
          <button class="bg-gray-600 hover:bg-gray-500  mr-3 px-16 py-2 text-white font-bold border  border-gray-700 rounded">
            Cancel
          </button>
          <button class="bg-cyan-700 hover:bg-cyan-700 px-10 py-2   text-white font-bold  border border-cyan-700 rounded">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
export default Page;
