"use client";
import CourseApi from "@/app/api/sessions";
import BaseInputControl from "@/components/forms/BaseInputControl";
import { CourseEntity } from "@/models/sessions.entity";
import { useEffectAsync } from "@/utils/react";
import { useFormik } from "formik";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function page() {
  const [course, setCourse] = useState();
  const { courseId } = useParams();
  const courseApi = new CourseApi();
  const router = useRouter();
  const form = useFormik({
    initialValues: new CourseEntity(),
    validationSchema: CourseEntity.yupSchema(),
    onSubmit: async (values) => {
      try {
        const { ...restValues } = values;
        await courseApi.edit(restValues);
        toast.success("Course member updated");
        router.push("/dashboard/courses");
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
  });
  useEffectAsync(async () => {
    if (courseId) {
      const data = await courseApi.getById(courseId);
      setCourse(data);
      console.log("Single Course", data);
    }
  }, []);
  useEffect(() => {
    console.log("form.values", form.values);
    console.log("form.errors", form.errors);
  }, [form.values, form.errors]);
  return (
    <div className="p-4 w-6/12 m-auto">
      <h1 className="text-2xl font-semibold">Add Course Member</h1>
      <form onSubmit={form.handleSubmit} className="my-6">
        <BaseInputControl
          label="Title"
          formik={form}
          name="title"
          required
          placeholder="Title name.."
          className="my-2"
        />
        <BaseInputControl
          label="Description"
          formik={form}
          name="description"
          required
          placeholder="write here..."
          className="my-2"
        />
        <BaseInputControl
          label="price"
          formik={form}
          name="price"
          required
          placeholder="25,00"
          className="my-2"
        />
        <BaseInputControl
          label="requirenment"
          formik={form}
          name="requirenment"
          required
          placeholder="write some ..."
          className="my-2"
        />
        <BaseInputControl
          label="preRequirenments"
          formik={form}
          name="preRequirenments"
          required
          placeholder="write some..."
          className="my-2"
        />
        <BaseInputControl
          label="Instructor"
          formik={form}
          name="instructor"
          required
          placeholder="write some..."
          className="my-2"
        />
        <BaseInputControl
          label="Teaching Assistant"
          formik={form}
          name="teachingAssistant"
          required
          placeholder="write some..."
          className="my-2"
        />
        <BaseInputControl
          label="Student "
          formik={form}
          name="students"
          required
          placeholder="write some..."
          className="my-2"
        />
        <BaseInputControl
          label="Duration"
          formik={form}
          name="Duration"
          required
          placeholder="write some..."
          className="my-2"
        />
        <BaseInputControl
          label="Start Date"
          formik={form}
          name="startDate"
          required
          placeholder="write some..."
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
          formik={form}
          name=" isActive"
          required
          placeholder="write some..."
          className="my-2"
        />
        <BaseInputControl
          label="Last Date of Enrollment"
          formik={form}
          name="lastDateOfEnrollment"
          required
          placeholder="write some..."
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
          Update
        </button>
      </form>
    </div>
  );
}
