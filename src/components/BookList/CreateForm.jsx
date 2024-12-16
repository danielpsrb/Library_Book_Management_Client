"use client";

import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

import { CreateBookButton } from "../Buttons/SubmitButton";

const CreateForm = () => {

    const router = useRouter();

    const [previewImage, setPreviewImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPreviewImage(reader.result); // Set image preview
            reader.readAsDataURL(file); // Convert file to base64 string
        }
    };

    const handleRemoveImage = () => {
        setPreviewImage(null); // Reset the preview image
        document.getElementById("cover_book_photo").value = ""; // Clear the file input
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_SOURCE_URL}/books`, {
                method: 'POST',
                body: formData, // Kirim data dalam format multipart/form-data
            });

            // Periksa apakah respons berhasil
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            // Tampilkan pesan sukses
            Swal.fire({
                icon: 'success',
                title: 'Book Data Created',
                text: 'The book has been successfully created!',
            });

            // Reset form setelah berhasil
            event.target.reset();
            setPreviewImage(null);

            //Arahkan ke halaman utama
            router.push('/');
        } catch (error) {
            // Tangani error
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to create the book. Please try again.',
            });
        }
    };

    return (
        <div>
            <form encType="multipart/form-data" onSubmit={handleSubmitForm}>
                <div className="mb-4">
                    <label htmlFor="isbn" className="block text-sm font-medium text-white py-2">
                        ISBN
                    </label>
                    <input
                        type="number"
                        id="isbn"
                        name="isbn"
                        autoComplete="number"
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
                        autoComplete="number"
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
                        autoComplete="number"
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
                        autoComplete="number"
                        min={0}
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
                        autoComplete="text"
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
                        autoComplete="number"
                        min={0}
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
                        autoComplete="number"
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
                                className="absolute top-0.5 left-0.5  text-gray-400 rounded-full shadow-md hover:text-red-600"
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
                    <input
                        type="text"
                        id="description"
                        name="description"
                        autoComplete="number"
                        className="input input-bordered input-primary w-full"
                    />
                    <CreateBookButton label="save" />
                </div>
            </form>
        </div>
    );
};

export default CreateForm;
