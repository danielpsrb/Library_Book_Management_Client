"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";
import { CreateBookButton } from "../Buttons/SubmitButton";

const UpdateForm = ({ book }) => {
    
    const router = useRouter();

    const [previewImage, setPreviewImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setPreviewImage(null);
        document.getElementById("cover_book_photo").value = "";
    };

    const handleSubmitUpdate = async (event) => {
        event.preventDefault();

        const bookId = book.id;

        const formData = new FormData(event.target);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_SOURCE_URL}/books/${bookId}`, {
                method: "PUT",
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            Swal.fire({
                icon: "success",
                title: "Book Updated",
                text: "The book has been successfully updated!",
            })
            router.push("/");
        } catch (error) {
            console.error("Failed to update book: ", error);
            Swal.fire({
                icon: "error",
                title: "Failed to Update Book",
                text: "Failed to update book data. Please try again.",
            });
        }
    };

    return (
        <div>
            <form encType="multipart/form-data">
                <div className="mb-4">
                    <label htmlFor="isbn" className="block text-sm font-medium text-white py-2">
                        ISBN
                    </label>
                    <input
                        type="number"
                        id="isbn"
                        name="isbn"
                        defaultValue={book?.isbn.replace(/-/g, "") || ""}
                        className="input input-bordered input-primary w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-white py-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={book.title}
                        className="input input-bordered input-primary w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="author" className="block text-sm font-medium text-white py-2">
                        Author Book
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        defaultValue={book.author}
                        className="input input-bordered input-primary w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="publish_year" className="block text-sm font-medium text-white py-2">
                        Publish Year Book
                    </label>
                    <input
                        type="number"
                        id="publish_year"
                        name="publish_year"
                        defaultValue={book.publish_year}
                        className="input input-bordered input-primary w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="publisher" className="block text-sm font-medium text-white py-2">
                        Publisher Book
                    </label>
                    <input
                        type="text"
                        id="publisher"
                        name="publisher"
                        defaultValue={book.publisher}
                        className="input input-bordered input-primary w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="book_pages" className="block text-sm font-medium text-white py-2">
                        Book Pages
                    </label>
                    <input
                        type="number"
                        id="book_pages"
                        name="book_pages"
                        defaultValue={book.book_pages}
                        className="input input-bordered input-primary w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="genre" className="block text-sm font-medium text-white py-2">
                        Genre Book
                    </label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        defaultValue={book.genre}
                        className="input input-bordered input-primary w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cover_book_photo" className="block text-sm font-medium text-white py-2">
                        Cover Book Image
                    </label>
                    <input
                        type="file"
                        id="cover_book_photo"
                        name="cover_book_photo"
                        className="file-input file-input-bordered file-input-primary w-full"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {previewImage && (
                        <div className="mt-4 relative">
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="w-32 h-32 object-cover rounded-md"
                            />
                            <button
                                type="button"
                                className="absolute top-0.5 left-0.5 text-gray-400 rounded-full shadow-md hover:text-red-600"
                                onClick={handleRemoveImage}
                            >
                                <TiDeleteOutline size={22} />
                            </button>
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-white py-2">
                        Description Book
                    </label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        defaultValue={book.description}
                        className="input input-bordered input-primary w-full"
                    />
                    <CreateBookButton label="Update" />
                </div>
            </form>
        </div>
    );
};

export default UpdateForm;
