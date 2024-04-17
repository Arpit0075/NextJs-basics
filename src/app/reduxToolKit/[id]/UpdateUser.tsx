import React, { useState } from "react";
import { useUpdateUserMutation } from "../usersApi";

function UpdateUser({ userId }: { userId: string }) {
  const [obj, status] = useUpdateUserMutation();
  //   console.log(status);
  const [password, setPassword] = useState("");
  const handleUpdate = (password: any) => {
    obj({ password, userId });
    setPassword("");
  };
  return (
    <div className="mt-5">
      <h3 className="text-center">Update User Password</h3>
      <div className="mx-auto max-w-xs flex flex-col gap-2">
        <input
          type="text"
          value={password}
          placeholder="Enter password"
          className="text-black"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="p-2 bg-slate-600 disabled:bg-slate-300"
          onClick={() => handleUpdate(password)}
        >
          Submit
        </button>
        {status.isLoading && <p>....Loading</p>}
        <br />
      </div>
    </div>
  );
}

export default UpdateUser;
