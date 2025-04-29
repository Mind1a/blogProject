import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/authSchema";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/api";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { mutate } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      alert("ახალი user-ი დამატებულია");
      navigate("/login");
    },
    onError: (error) => {
      setError("root", { message: error.message || "დაფიქსირდა შეცდომა" });
    },
  });

  const onSubmit = (data) => {
    const { confirmPassword, ...userData } = data;
    mutate(userData);
  };

  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">Register</h1>
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
        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className="block font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="confirmPassword ..."
            className="px-3 py-2 border rounded w-full"
            {...register("confirmPassword")}
          />

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-300 px-4 py-2 rounded text-white"
        >
          Register
        </button>
        {errors.root && (
          <p className="text-red-500 text-sm">{errors.root.message}</p>
        )}
      </form>
    </div>
  );
};

export default Register;
