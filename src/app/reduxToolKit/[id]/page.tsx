"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useGetOneUserQuery } from "../usersApi";
import UpdateUser from "./UpdateUser";

function IndividualUser() {
  const params = useParams();
  const { data, error, isLoading } = useGetOneUserQuery(params.id);

  return (
    <div>
      {isLoading && <p>.......Loading</p>}
      {data?.user && (
        <div className="border-2 border-white m-2 p-2">
          <p>{data.user.username}</p>
          <p>{data.user.password}</p>
          <p>{data.user._id}</p>
        </div>
      )}
      <UpdateUser userId={data?.user?._id} />
    </div>
  );
}

export default IndividualUser;
