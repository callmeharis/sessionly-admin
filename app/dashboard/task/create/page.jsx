"use client";
import TaskApi from "@/app/api/task";
import BaseInputControl from "@/components/forms/BaseInputControl";
import { TaskEntity } from "@/models/task.entity";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function page() {

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
  });

  const handleChangeTask = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value
    });
  }

  const handleSubmintTask = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://api.dev.sessionly.co/api/v2/task/register', taskData)
      console.log(res.data)
      setTaskData({
        title: "",
        description: "",
        assignedTo: "",
        dueDate: "",
      });
      router.push("/dashboard/task")
    } catch (err) {
      console.log(err)
    }
  }



  // const task = new TaskApi();
  const router = useRouter();
  // const form = useFormik({
  //   initialValues: new TaskEntity(),
  //   validationSchema: TaskEntity.yupSchema(),
  //   onSubmit: async (values) => {
  //     try {
  //       const { ...restValues } = values;
  //       await task.create(restValues);
  //       toast.success("Task  created");
  //       router.push("/dashboard/task");
  //     } catch (error) {
  //       toast.error("Something went wrong");
  //     }
  //   },
  // });

  // useEffect(() => {
  //   console.log("form.values", form.values);
  //   console.log("form.errors", form.errors);
  // }, [form.values, form.errors]);
  return (
    <div className="p-4 w-6/12 m-auto">
      <h1 className="text-2xl font-semibold">Add Task</h1>
      <form onSubmit={handleSubmintTask} className="my-6">

        <BaseInputControl
          label="title"
          // formik={form}
          name="title"
          required
          placeholder="John"
          className="my-2"
          onChange={handleChangeTask}
          value={taskData.title}
        />
        <BaseInputControl
          label="description"
          // formik={form}
          name="description"
          required
          placeholder="add task"
          className="my-2"
          onChange={handleChangeTask}
          value={taskData.description}
        />
        <BaseInputControl
          label="dueDate"
          // formik={form}
          name="dueDate"
          type='Date'
          required
          placeholder="23/04/2024"
          className="my-2"
          onChange={handleChangeTask}
          value={taskData.dueDate}
        />

        <button
          type="submit "
          className="bg-[#10b981] text-white border-2 border-[#10b981] px-3 py-1 mt-4 rounded"
          onClick={handleSubmintTask}
        >
          Create
        </button>
      </form>
    </div>
  );
}
