"use client";
import SessionsApi from "@/app/api/sessions";
import CourseApi from "@/app/api/sessions";
import BaseInputControl from "@/components/forms/BaseInputControl";
import { SessionsEntity } from "@/models/sessions.entity";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function page() {
  const sessions = new SessionsApi();
  const router = useRouter();
  const form = useFormik({
    initialValues: new SessionsEntity(),
    validationSchema: SessionsEntity.yupSchema(),
    onSubmit: async (values) => {
      try {
        const { ...restValues } = values;
        await sessions.create(restValues);
        toast.success("sessions created");
        router.push("/dashboard/sessions");
      } catch (error) {
        toast.error("Something went wrong");
        console.log("error", error);
      }
    },
  });
  useEffect(() => {
    console.log("form.values", form.values);
    console.log("form.errors", form.errors);
  }, [form.values, form.errors]);
  return (
    <div className="p-4 w-6/12 m-auto">
      <h1 className="text-2xl font-semibold">Add sessions</h1>
      <form onSubmit={form.handleSubmit} className="my-6">
        <BaseInputControl
          label="Title"
          name="title"
          required
          placeholder="Title name.."
          formik={form}
          className="my-2"
        />
        <BaseInputControl
          label="Description"
          name="description"
          required
          placeholder="write here..."
          formik={form}
          className="my-2"
        />
        <BaseInputControl
          label="price"
          name="price"
          required
          placeholder="25,00"
          formik={form}
          className="my-2"
        />
        <BaseInputControl
          label="requirements"
          name="requirements"
          required
          placeholder="write some ..."
          formik={form}
          className="my-2"
        />
        <BaseInputControl
          label="Pre Requirenment"
          name="preRequirements"
          required
          placeholder="write some..."
          formik={form}
          className="my-2"
        />
        <BaseInputControl
          label="Instructor"
          name="instructor"
          required
          placeholder="write some..."
          formik={form}
          className="my-2"
        />
        <BaseInputControl
          label="Teaching Assistant"
          name="teachingAssistant"
          required
          placeholder="write some..."
          formik={form}
          className="my-2"
        />
        <BaseInputControl
          label="Student "
          name="students"
          required
          placeholder="write some..."
          formik={form}
          className="my-2"
        />
        <BaseInputControl
          label="Duration"
          name="duration"
          required
          placeholder="write some..."
          formik={form}
          className="my-2"
        />
        <BaseInputControl
          label="Start Date"
          name="startDate"
          required
          placeholder="write some..."
          formik={form}
          className="my-2"
        />
        <BaseInputControl
          label="End Date"
          formik={form}
          name="endDate"
          required
          placeholder="write some..."
          className="my-2"
        />
        <BaseInputControl
          label="Is Active"
          name="isActive"
          required
          placeholder="write some..."
          formik={form}
          className="my-2"
        />
        <BaseInputControl
          label="Last Date of Enrollment"
          name="lastDateOfEnrollment"
          required
          placeholder="write some..."
          formik={form}
          className="my-2"
        />
        {/* <BaseInputControl
          label="Image"
          formik={form}
          name="preRequirenments"
          required
          placeholder="write some..."
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
