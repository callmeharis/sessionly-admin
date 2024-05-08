"use client";
import StaffApi from "@/app/api/staff";
import BaseInputControl from "@/components/forms/BaseInputControl";
import { StaffEntity } from "@/models/staff.entity";
import { useEffectAsync } from "@/utils/react";
import { useFormik } from "formik";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function page() {
  const [staff, setStaff] = useState();
  const { staffId } = useParams();
  const staffApi = new StaffApi();
  const router = useRouter();
  const form = useFormik({
    initialValues: new StaffEntity(),
    validationSchema: StaffEntity.yupSchema(),
    onSubmit: async (values) => {
      try {
        const { ...restValues } = values;
        await staffApi.edit(restValues);
        toast.success("Staff member updated");
        router.push("/dashboard/staff");
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
  });
  useEffectAsync(async () => {
    if (staffId) {
      const data = await staffApi.gitSingle(staffId);
      setStaff(data);
      console.log("single staff", data);
    }
  }, []);
  useEffect(() => {
    console.log("form.values", form.values);
    console.log("form.errors", form.errors);
  }, [form.values, form.errors]);
  return (
    <div className="p-4  w-6/12 m-auto">
      <h1 className="text-2xl font-semibold ml-6">Add Staff Member</h1>
      <form onSubmit={form.handleSubmit} className="m-6">
        <BaseInputControl
          label="Fullname"
          formik={form}
          name="fullname"
          required
          placeholder="John"
          className="my-2"
        />

        <BaseInputControl
          label="Email"
          formik={form}
          name="email"
          required
          placeholder="john@gmail.com"
          className="my-2"
        />

        <BaseInputControl
          label="IP#"
          formik={form}
          name="ip"
          required
          placeholder="ip adress"
          className="my-2"
        />

        <BaseInputControl
          label="UserType"
          formik={form}
          name="userType"
          required
          placeholder="staff"
          className="my-2"
        />

        <BaseInputControl
          label="Tel#"
          formik={form}
          name="tel"
          required
          placeholder="add number"
          className="my-2"
        />
        <BaseInputControl
          label="Time of Login"
          formik={form}
          name="timeOfLogin"
          required
          placeholder="12:00PM"
          className="my-2"
        />
        <BaseInputControl
          label="Time of Logout"
          formik={form}
          name="timeOfLogout"
          required
          placeholder="12:00PM"
          className="my-2"
        />

        <BaseInputControl
          label="History"
          formik={form}
          name="history"
          required
          placeholder="history"
          className="my-2"
        />

        <BaseInputControl
          label="Track"
          formik={form}
          name="track"
          required
          placeholder="track"
          className="my-2"
        />

        <BaseInputControl
          label="Activity"
          formik={form}
          name="activity"
          required
          placeholder="activity"
          className="my-2"
        />

        <BaseInputControl
          label="Action"
          formik={form}
          name="action"
          required
          placeholder="action"
          className="my-2"
        />

        <button
          type="submit"
          className="bg-[#10b981] text-white border-2 border-[#10b981] px-3 py-1 mt-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}
