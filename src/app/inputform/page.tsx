"use client";
//form and validation -- we could use zod as well
import React from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

function InputForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
          {...register("email", {
            required: "Email is required",
          })}
          type="email"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}
        <input
          placeholder="Password"
          type="password"
          className="px-4 py-2 rounded text-black"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Must be atleast 5 chaaracters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}
        <input
          placeholder="Confirm password"
          type="password"
          className="px-4 py-2 rounded text-black"
          {...register("confirmPassword", {
            required: "confirm password is required",
            validate: (value) =>
              value === getValues("password") || "Passwords must match",
          })}
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

export default InputForm;
