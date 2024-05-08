import Cards from "@/components/cards";
import Table from "../../components/table/table";

// import Chart from "@/components/chat/chart";
// import Custmersupportcard from "@/components/custmersupportcard";
// import Feed from "@/components/feed";
// import Memberactivitycard from "@/components/memberactivitycard";
// import Messages from "@/components/messages";
// import Salesoverview from "@/components/salesoverview";
// import Ttodayschedule from "@/components/todayschedule";
// import Totalearnings from "@/components/totalearnings";
import { LuUserCircle2 } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import { PiCirclesThreeDuotone } from "react-icons/pi";

export default function Home() {
  return (
    // <div className="bg-gray-100">
    //   <div className="grid grid-cols-4 place-items-center  px-4 py-5  bg-white">
    //     <Cards
    //       text="Session"
    //       number="2031"
    //       backgroundColor="rgba(0,158,241,1)"
    //     />
    //     <Cards text="Session" number="2031" backgroundColor="#6610f2" />
    //     <Cards text="Session" number="2031" backgroundColor="#20c997" />
    //     <Cards text="Session" number="2031" backgroundColor="#ffbc34" />
    //   </div>
    //   <div className="grid grid-cols-3 mx-4 my-5 pb-4 bg-white">
    //     <div className="">
    //       <Messages />
    //     </div>
    //     <div className="col-span-2 ">
    //       <div className="flex items-center justify-between pt-9 ">
    //         <div className="pl-3">
    //           <h6 className="text-md font-medium">Product Calculation</h6>
    //           <p>Janurary 2022</p>
    //         </div>
    //         <div className="mx-3 flex">
    //           <div className="flex items-center justify-center">
    //             <input type="radio" name="year" />
    //             <span className="px-3">2020</span>
    //           </div>
    //           <div className="flex items-center justify-center">
    //             <input type="radio" name="year" id="2021" />
    //             <span id="" className="px-3">
    //               2021
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <Chart />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-4 place-items-center mx-4 my-5  ">
    //     <div className="col-span-2 ">
    //       <Memberactivitycard />
    //     </div>
    //     <div className="col-span-2">
    //       <Custmersupportcard />
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-3 mx-4 my-5 pb-4">
    //     <div className="bg-white">
    //       <Ttodayschedule />
    //     </div>
    //     <div className="col-span-2 ">
    //       <Salesoverview />
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-4">
    //     <div className="col-span-2  my-2 mx-4 bg-white">
    //       <Totalearnings />
    //     </div>
    //     <div className="col-span-2 my-2  bg-white mr-4">
    //       <Feed />
    //     </div>
    //   </div>
    // </div>

    <div className="main bg-gray-100 ">
      <h1 className="ml-5">Dashbord</h1>
      <div className="flex justify-between px-4 py-5 ">
        <Cards
          text="Total Expert"
          number="10.05k"
          backgroundColor="white"
          icon={<LuUserCircle2 />}
        />
        <Cards
          text="Total Students"
          number="22.05k"
          backgroundColor="white"
          icon={<PiStudentBold />}
        />
        <Cards
          text="Total  Courses"
          number="100"
          backgroundColor="white"
          icon={<PiCirclesThreeDuotone />}
        />
      </div>

      <div className="table w-full">
        <div className="px-4 py-5">
          <h1 className="bg-white p-4 border rounded-md mb-5">
            Expert Listing
          </h1>
        </div>

        <div className="px-4  ">
          <Table
            number="S.No"
            name="Name"
            email="Email"
            role="Role"
            status="Status"
            action="Action"
          />
        </div>
      </div>
    </div>
  );
}