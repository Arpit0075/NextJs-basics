"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { inputSchema } from "@/app/utils/zodSchema";

function InputFormZod() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({ resolver: zodResolver(inputSchema) });

  const onSubmit = async (data: FieldValues) => {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      //   body: JSON.stringify({
      //     email: data.email,
      //     password: data.password,
      //     confirmPassword: 1234,
      //   }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    console.log(responseData);

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      } else {
        alert("something went wrong");
      }
    }
    reset();
  };
  return (
    <div>
      <form
        className="flex flex-col gap-y-2 mt-2 p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Email"
          className="px-4 py-2 rounded text-black"
          {...register("email")}
          type="email"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}
        <input
          placeholder="Password"
          type="password"
          className="px-4 py-2 rounded text-black"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}
        <input
          placeholder="Confirm password"
          type="password"
          className="px-4 py-2 rounded text-black"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
        )}
        <button
          disabled={isSubmitting}
          className="bg-blue-500 text-white disabled:bg-gray-500 disable:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputFormZod;
