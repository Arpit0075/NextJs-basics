"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, decrementByValue } from "./counterSlice";
import { RootState } from "../utils/store/store";
import {
  useGetAllUsersQuery,
  useCreateNewUserMutation,
  useDeleteUserMutation,
} from "./usersApi";

function ReduxToolKit() {
  const router = useRouter();
  const dispatch = useDispatch();
  const counterState = useSelector((state: RootState) => state.counter.value);
  const [createUser, setCreateUser] = useState({
    username: "",
    password: "",
  });

  const [newUser] = useCreateNewUserMutation();
  const [userId] = useDeleteUserMutation();

  const { data, error, isLoading } = useGetAllUsersQuery("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // fetch("/api/users", {
    //   method: "POST",
    //   body: JSON.stringify(createUser),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // });
    newUser(createUser);
    setCreateUser({ username: "", password: "" });
  };

  const handleDelete = (id: string) => {
    //console.log(id);
    // fetch(`/api/users/${"1"}`, { method: "DELETE" });
    userId(id);
  };

  return (
    <div className="p-5">
      <div>{counterState}</div>
      <button
        className="p-2 bg-slate-600"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="p-2 bg-slate-600"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="p-2 bg-slate-600"
        onClick={() =>
          dispatch(decrementByValue({ type: "nota num", value: 2 }))
        }
      >
        DecrementByValue
      </button>

      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="text"
          placeholder="username"
          value={createUser.username}
          onChange={(e) =>
            setCreateUser((prev) => {
              return { ...prev, username: e.target.value };
            })
          }
        />
        <input
          className="text-black"
          type="password"
          placeholder="password"
          value={createUser.password}
          onChange={(e) =>
            setCreateUser((prev) => {
              return { ...prev, password: e.target.value };
            })
          }
        />

        <button className="p-2 bg-slate-600">Submit</button>
      </form>

      {data?.users?.map((el: any) => (
        <div className="border-2 border-white m-2 p-2" key={el._id}>
          <div onClick={() => router.push(`/reduxToolKit/${el._id}`)}>
            <p>{el.username}</p>
            <p>{el.password}</p>
            <p>{el._id}</p>
          </div>
          <button
            className="p-2 bg-slate-600"
            onClick={() => handleDelete(el._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ReduxToolKit;
