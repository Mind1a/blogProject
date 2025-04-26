import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema } from "../schemas/blogSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlogs } from "../api/api";
import Posts from "./Posts";

const NewPost = () => {
  // React hook form start
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(blogSchema),
  });
  // React hook form end

  // React Query Start

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createBlogs,
    onSuccess: () => {
      // queryClient.invalidateQueries(["blogs"]);
      alert("Blog was created");
    },
  });

  // React Query end

  const submitForm = (data) => {
    mutate(data);
    alert("completed");
  };

  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">Create a New Blog Post</h1>
      <form onSubmit={handleSubmit(submitForm)} className="space-y-4 max-w-md">
        <div>
          <label className="block font-medium">Title</label>
          <input
            {...register("title")}
            className="px-3 py-2 border rounded w-full"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Content</label>
          <textarea
            {...register("content")}
            rows="5"
            className="px-3 py-2 border rounded w-full"
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
        >
          Submit
        </button>
        {errors.root && (
          <p className="text-red-500 text-sm">{errors.root.message}</p>
        )}
      </form>
      <Posts />
    </div>
  );
};

export default NewPost;
