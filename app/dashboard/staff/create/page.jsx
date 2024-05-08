"use client";
import StaffApi from "@/app/api/staff";
import BaseInputControl from "@/components/forms/BaseInputControl";
import { StaffEntity } from "@/models/staff.entity";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function page() {
  const staff = new StaffApi();
  const router = useRouter();
  const form = useFormik({
    initialValues: new StaffEntity(),
    validationSchema: StaffEntity.yupSchema(),
    onSubmit: async (values) => {
      try {
        const { ...restValues } = values;
        await staff.create(restValues);
        toast.success("Staff member created");
        router.push("/dashboard/staff");
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
  });
  useEffect(() => {
    console.log("form.values", form.values);
    console.log("form.errors", form.errors);
  }, [form.values, form.errors]);
  return (
    <div className="p-4 w-6/12 m-auto">
      <h1 className="text-2xl font-semibold">Add Staff Member</h1>
      <form onSubmit={form.handleSubmit} className="my-6">
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
          placeholder="add  number"
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

        {/* <BaseInputControl
          label="fullname"
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
          placeholder="IP Adress"
          className="my-2"
        />
        <BaseInputControl
          label="Tel#"
          formik={form}
          name="tel"
          required
          placeholder="add telephone number"
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
          label="User type"
          formik={form}
          name="userType"
          required
          placeholder="staff"
          className="my-2"
        />
        <BaseInputControl
          label="Action"
          formik={form}
          name="action"
          required
          placeholder="staff"
          className="my-2"
        />
        <BaseInputControl
          label="Activity"
          formik={form}
          name="activity"
          required
          placeholder="staff"
          className="my-2"
        /> */}
        <button
          type="submit"
          className="bg-[#10b981] text-white border-2 border-[#10b981] px-3 py-1 mt-4 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
}
