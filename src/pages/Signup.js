import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Multiselect from 'multiselect-react-dropdown';
import ButtonLined from '../components/ButtonLined';
import ButtonFill from '../components/ButtonFill';

function Signup({ setOnLanding }) {
    useEffect(() => setOnLanding(false));
    const navigate = useNavigate();

    const SignupFormSchema = yup.object().shape({
        firstName: yup
            .string()
            .required("Entry is required"),
        lastName: yup
            .string()
            .required("Entry is required"),
        email: yup
            .string()
            .email("Entry must be a valid email address")
            .required("Entry is required"),
        password: yup
            .string()
            .required("Entry is required")
            .min(8, "Entry must be at least 8 characters long")
            .matches(/^(?=.*[a-z]).{8,}$/, "Entry must contain at least one lowercase letter")
            .matches(/^(?=.*[A-Z]).{8,}$/, "Entry must contain at least one uppercase letter")
            .matches(/^(?=.*[0-9]).{8,}$/, "Entry must contain at least one number")
            .matches(/^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, "Entry must contain at least one special character")
            .matches(/^(?!.* ).{8,}$$/, "Entry must NOT contain a space"),
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver: yupResolver(SignupFormSchema) });

    const onSubmit = (data) => {
        // Add user to DB
        console.log(data);

        // Navigate to dashboard
        navigate("/dashboard");
    }

    const state = {
        options: [
            { name: 'SDG 1: No Poverty', id: 1 }, 
            { name: 'SDG 2: Zero Hunger', id: 2 },
            { name: 'SDG 3: Good Health and Well-being', id: 3 },
            { name: 'SDG 4: Quality Education', id: 4 },
            { name: 'SDG 5: Gender Equality', id: 5 },
            { name: 'SDG 6: Clean Water and Sanitation', id: 6 },
            { name: 'SDG 7: Affordable and Clean Energy', id: 7 },
            { name: 'SDG 8: Decent Work and Economic Growth', id: 8 },
            { name: 'SDG 9: Industry, Innovation, and Infrastructure', id: 9 },
            { name: 'SDG 10: Reduced Inequality', id: 10 },
            { name: 'SDG 11: Sustainable Cities and Communities', id: 11 },
            { name: 'SDG 12: Responsible Consumption and Production', id: 12 },
            { name: 'SDG 13: Climate Action', id: 13 },
            { name: 'SDG 14: Life Below Water', id: 14 },
            { name: 'SDG 15: Life on Land', id: 15 },
            { name: 'SDG 16: Peace and Justice Strong Institutions', id: 16 },
            { name: 'SDG 17: Partnerships to achieve the Goal', id: 17 }
        ]
    };

    const [currentPage, setCurrentPage] = useState(1);

    const handleNextClick = () => {
        if (currentPage === 3) {
            navigate("/signin");
        } else {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className="Signup bg-hero-image bg-cover flex items-center justify-center">
            <div className="bg-neutral-000 flex flex-col items-center w-[60vw] lg:w-[40vw] p-10 rounded-md border border-black">

                <div className="w-[85%] flex justify-between items-center mt-3 mb-6">
                    <div className={"size-[30px] rounded-full flex align-center justify-center" + ((currentPage === 1) ? " bg-dark-green" : " bg-white border border-black")}>
                        <p className={"text-center text-tiny font-bold my-auto" + ((currentPage === 1) ? " text-neon-yellow" : "")}>1</p>
                    </div>
                    <div className="border border-black h-[1px] w-[calc((100%-90px)/2)]"></div>
                    <div className={"size-[30px] rounded-full flex align-center justify-center" + ((currentPage === 2) ? " bg-dark-green" : " bg-white border border-black")}>
                        <p className={"text-center text-tiny font-bold my-auto" + ((currentPage === 2) ? " text-neon-yellow" : "")}>2</p>
                    </div>
                    <div className="border border-black h-[1px] w-[calc((100%-90px)/2)]"></div>
                    <div className={"size-[30px] rounded-full flex align-center justify-center" + ((currentPage === 3) ? " bg-dark-green" : " bg-white border border-black")}>
                        <p className={"text-center text-tiny font-bold my-auto" + ((currentPage === 3) ? " text-neon-yellow" : "")}>3</p>
                    </div>
                </div>

                {
                    (currentPage === 1) &&
                    <div id="signup-page-1" className="flex flex-col items-center">
                        <p className="text-subtitle font-bold">Let's get to know you!</p>
                        <p className="mt-2 text-tiny mb-10 w-[80%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                        <form className="*:text-tiny w-full" onSubmit={handleSubmit(onSubmit)}>

                            <div className="flex flex-wrap justify-between gap-2">

                                {/* First Name */}
                                <div className="flex flex-col mb-1">
                                    <label>First name</label>
                                    <input {...register("firstName")} type="text" className="font-tabular font-medium lg:w-[16vw] p-1.5 border border-neutral-300"></input>
                                    <p className={(errors.firstName ? "text-red-pure" : "invisible")}>
                                        {errors.firstName?.message || "Placeholder"}
                                    </p>
                                </div>

                                {/* Last Name */}
                                <div className="flex flex-col mb-1">
                                    <label>Last name</label>
                                    <input {...register("lastName")} type="text" className="font-tabular font-medium lg:w-[16vw] p-1.5 border border-neutral-300"></input>
                                    <p className={(errors.lastName ? "text-red-pure" : "invisible")}>
                                        {errors.lastName?.message || "Placeholder"}
                                    </p>
                                </div>

                            </div>

                            {/* Email */}
                            <div className="flex flex-col mb-1">
                                <label>Email address</label>
                                <input {...register("email")} type="text" className="font-tabular font-medium w-full p-1.5 border border-neutral-300"></input>
                                <p className={(errors.email ? "text-red-pure" : "invisible")}>
                                    {errors.email?.message || "Placeholder"}
                                </p>
                            </div>

                        </form>
                    </div>
                }
                {
                    (currentPage === 2) &&
                    <div id="signup-page-2" className="flex flex-col items-center">
                        <p className="text-subtitle font-bold">Your contact info</p>
                        <p className="mt-2 text-tiny mb-10 w-[80%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                        <form className="*:text-tiny w-full" onSubmit={handleSubmit(onSubmit)}>

                            {/* Country */}
                            <div className="flex flex-col mb-1">
                                <label>Country</label>
                                <input {...register("email")} type="text" className="font-tabular font-medium w-full p-1.5 border border-neutral-300"></input>
                                <p className={(errors.email ? "text-red-pure" : "invisible")}>
                                    {errors.email?.message || "Placeholder"}
                                </p>
                            </div>

                            {/* City */}
                            <div className="flex flex-col mb-1">
                                <label>City</label>
                                <input {...register("email")} type="text" className="font-tabular font-medium w-full p-1.5 border border-neutral-300"></input>
                                <p className={(errors.email ? "text-red-pure" : "invisible")}>
                                    {errors.email?.message || "Placeholder"}
                                </p>
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col mb-1">
                                <label>Phone number</label>
                                <input {...register("phoneNumber")} type="text" className="font-tabular font-medium w-full p-1.5 border border-neutral-300"></input>
                                <p className={(errors.phoneNumber ? "text-red-pure" : "invisible")}>
                                    {errors.phoneNumber?.message || "Placeholder"}
                                </p>
                            </div>

                            {/* LinkedIn Username */}
                            <div className="flex flex-col mb-1">
                                <label>LinkedIn username</label>
                                <input {...register("linkedInUsername")} type="text" className="font-tabular font-medium w-full p-1.5 border border-neutral-300"></input>
                                <p className={(errors.linkedInUsername ? "text-red-pure" : "invisible")}>
                                    {errors.linkedInUsername?.message || "Placeholder"}
                                </p>
                            </div>

                        </form>
                    </div>
                }
                {
                    (currentPage === 3) &&
                    <div id="signup-page-3" className="flex flex-col items-center">
                        <p className="text-subtitle font-bold">Lastly, what interests you?</p>
                        <p className="mt-2 text-tiny mb-10 w-[80%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                        <form className="*:text-tiny w-full" onSubmit={handleSubmit(onSubmit)}>


                            {/* SDGs */}
                            <div className="flex flex-col mb-1">
                                <label>What SDGs interest you?</label>
                                <Multiselect
                                    options={state.options}
                                    selectedValues={state.selectedValue}
                                    // onSelect={onSelect}
                                    // onRemove={onRemove}
                                    displayValue="name"
                                />
                            </div>

                        </form>
                    </div>
                }

                {/* Buttons */}
                <div className="w-full flex justify-end gap-2 my-3 *:text-tiny">
                    <ButtonLined text="Cancel" />
                    <ButtonFill text={(currentPage < 3) ? "Next" : "Submit"} handleClick={handleNextClick} />
                </div>

            </div>
        </div>
    );
}

export default Signup;