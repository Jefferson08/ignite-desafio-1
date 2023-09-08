import {InputHTMLAttributes} from "react";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            className="block w-full p-4 text-base text-white placeholder-gray-300 border border-gray-700 rounded-lg bg-gray-500 outline-none focus:ring-purple-dark focus:border-purple-dark"
            {...props}
        />
    )
}
