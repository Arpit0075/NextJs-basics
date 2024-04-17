"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import submit from "./submit";

function ServerActions() {
  const { pending } = useFormStatus();

  const handleSubmit = async (formData: any) => {
    await submit(formData);
    // redirect(`/post/${id}`) // Navigate to new route
    //clear input fields
  };

  return (
    <div>
      <form
        action={handleSubmit}
        className="flex flex-col gap-5 align-middle p-4 mx-auto max-w-xs"
      >
        <input
          name="title"
          type="string"
          placeholder="enter title"
          className="p-2 text-black"
        />
        <input
          name="body"
          type="string"
          placeholder="enter body"
          className="p-2 text-black"
        />
        <button
          className="p-2 bg-slate-600 disabled:bg-slate-300"
          type="submit"
          disabled={pending}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ServerActions;
