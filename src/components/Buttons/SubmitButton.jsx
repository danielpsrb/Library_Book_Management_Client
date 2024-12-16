"use client"

import { useFormStatus } from "react-dom";
import clsx from "clsx";


export const CreateBookButton = ({ label }) => {
    const { pending } = useFormStatus();

    const styled = clsx(
        "btn btn-accent w-full text-white mt-2",
        {
            "opacity-50 cursor-progress": pending,
        }
    )

    return (
        <button type="submit" className={styled} disabled={pending}>
            {label === "save" ? (
                <span>{pending ? "Saving..." : "Save"}</span>
            ) : (
                <span>{pending ? "Updating..." : "Update"}</span>
            )}
        </button>
    )

};