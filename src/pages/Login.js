import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonLined from '../components/ButtonLined';
import ButtonFill from '../components/ButtonFill';

function Login({ setOnLanding }) {
    useEffect(() => setOnLanding(false));
    const navigate = useNavigate();

    const LoginFormSchema = yup.object().shape({
        email: yup
            .string()
            .email("Entry must be a valid email address")
            .required("Entry is required"),
        password: yup
            .string()
            .required("Entry is required"),
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver: yupResolver(LoginFormSchema) });

    const onSubmit = (data) => {
        // Add user to DB
        console.log(data);

        // Navigate to dashboard
        navigate("/dashboard");
    }

    return (
        <div className="Login bg-hero-image bg-cover flex items-center justify-center">
            <div className="bg-neutral-000 flex flex-col items-center">
                <p className="text-section-title font-bold">Log In</p>
                <p className="mt-4">Access your account again</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mb-1 md:mb-3">
                        <label className="font-tabular text-inputLabel">Email</label>
                        <input {...register("email")} type="text" className="font-tabular font-medium text-inputText w-full p-1.5 border border-neutral-0 rounded-md"></input>
                        <p className={"font-tabular text-small " + (errors.email ? "text-red-pure" : "invisible")}>
                            {errors.email?.message || "Placeholder"}
                        </p>
                    </div>
                </form>

                <p>Don't have an account? <span className="underline" onClick={() => navigate("/signup")}>Sign up</span></p>
            </div>
        </div>
    );
}

export default Login;