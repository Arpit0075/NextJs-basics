"use client";
import React, { useState } from "react";
import PostElem from "./PostElem";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
//import { useRouter } from "next/navigation";

function Posts() {
  //const router = useRouter();
  const [post, setPost] = useState({ title: "", body: "" });
  // const [shouldFetch, setShouldFetch] = useState(false); //conditional logout call

  function fetcher<T>(...args: [RequestInfo, RequestInit?]): Promise<T> {
    return fetch(...args).then((res) => res.json());
  }
  const {
    data: userPosts,
    error,
    isLoading,
  } = useSWR<any>("/api/posts", fetcher);

  //   console.log(userPosts);

  const createPost = async (url: string, arg: any) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(arg.arg),
    }).then((res) => res.json());
  };

  const { trigger, isMutating } = useSWRMutation("/api/posts", createPost);

  const handlePostSubmission = async (post: any) => {
    //traditional way
    // let res = await fetch("/api/posts", {
    //   method: "POST",
    //   body: JSON.stringify(post),
    //   // next: { revalidate: 60 },
    // });
    // let response = await res.json();
    // console.log(response);

    const result = await trigger(post);
    setPost({
      title: "",
      body: "",
    });
    console.log(result);
  };

  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       let res = await fetch("/api/posts", { next: { revalidate: 600 } });
  //       let response = await res.json();
  //       if (response.success && response.posts.length > 0) {
  //         setPosts(response.posts);
  //         setPostsLoading(false);
  //       } else {
  //         setPostsLoading(false);
  //       }
  //     };
  //     fetchPosts();
  //     setPostsLoading(true);
  //   }, []);

  // const { data: logoutData, isLoading: logoutLoading } = useSWR<any>(
  //   shouldFetch ? "/api/auth/logout" : null,
  //   fetcher
  // );

  // const handleLogout = () => {
  //   setShouldFetch(true);

  //   if (!logoutLoading && logoutData?.success) {
  //     console.log(logoutData);
  //     setShouldFetch(false);
  //     router.push("/login");
  //   }
  // };

  return (
    <div className="mt-5">
      <h3 className="text-center">Create Post</h3>
      {/* <button
        className="p-2 bg-slate-600 disabled:bg-slate-300"
        onClick={handleLogout}
      >
        Logout
      </button> */}
      <div className="mx-auto max-w-xs flex flex-col gap-2">
        <input
          type="text"
          value={post.title}
          placeholder="Enter Title"
          className="text-black"
          onChange={(e) =>
            setPost((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        />
        <input
          type="text"
          value={post.body}
          placeholder="Enter Body"
          className="text-black"
          onChange={(e) =>
            setPost((prev) => {
              return { ...prev, body: e.target.value };
            })
          }
        />
        <button
          className="p-2 bg-slate-600 disabled:bg-slate-300"
          onClick={() => handlePostSubmission(post)}
          disabled={isMutating}
        >
          Submit
        </button>
        <br />
        {isLoading && <p>Loading.....</p>}
        {!isLoading &&
          userPosts?.posts?.map((post: any) => {
            return <PostElem post={post} key={post._id} />;
          })}
      </div>
    </div>
  );
}

export default Posts;
