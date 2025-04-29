import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schemas/authSchema";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/api";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { mutate } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      alert("წარმატებით შეხვედით საიტზე");
      login(data);
      navigate("/new");
    },
    onError: (error) => {
      setError("root", { message: error.message || "დაფიქსირდა შეცდომა" });
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">Login</h1>
      <form
        className="space-y-4 max-w-[448px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email ..."
            className="px-3 py-2 border rounded w-full"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        {/* Password */}
        <div>
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password ..."
            className="px-3 py-2 border rounded w-full"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-300 px-4 py-2 rounded text-white"
        >
          Login
        </button>
        {errors.root && (
          <p className="text-red-500 text-sm">{errors.root.message}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
