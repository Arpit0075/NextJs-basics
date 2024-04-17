"use client";
import React from "react";
import { useSWRConfig } from "swr";
import useSWRMutation from "swr/mutation";

function PostElem({ post }: any) {
  const { mutate } = useSWRConfig();
  const deletePost = async (url: string, arg: any) => {
    return fetch(url + `${arg.arg}`, {
      method: "DELETE",
    }).then((res) => res.json());
  };

  const { trigger, isMutating } = useSWRMutation(`/api/posts/`, deletePost);

  const handleDelete = async (userId: any) => {
    const result = await trigger(userId);
    console.log(result);
    mutate("/api/posts");
  };
  return (
    <div className="border white rounded-sm">
      <p>Title: {post.title}</p>
      <p>Body :{post.body}</p>
      <button
        className="p-2 bg-slate-600"
        onClick={() => handleDelete(post._id)}
        disabled={isMutating}
      >
        Delete
      </button>
    </div>
  );
}

export default PostElem;
