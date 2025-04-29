import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../api/api";
import { useState } from "react";

const Posts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isLoading) return <p className="text-gray-500">Loading ...</p>;

  if (isError) return <p className="text-red-500">Something went wrong</p>;
  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">All Blog Posts</h1>
      <ul className="flex flex-col gap-4">
        {data?.map((eachElement) => (
          <li className="bg-white shadow p-4 border rounded">
            <h2 className="font-semibold text-xl">{eachElement.title}</h2>
            <p className="mt-1 text-gray-700">{eachElement.content}</p>
            <p className="mt-2 text-gray-700 text-sm">By Test@gmail.com</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
