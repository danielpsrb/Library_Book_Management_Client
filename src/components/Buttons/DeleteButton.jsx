'use client'

import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation';

const DeleteButton = ({ bookId }) => {
    
    const router = useRouter();

    const handleDelete = async () => {
        // Tampilkan SweetAlert untuk konfirmasi
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // Lakukan HTTP DELETE
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SOURCE_URL}/books/${bookId}`, {
                        method: 'DELETE',
                    });

                    if (!response.ok) {
                        throw new Error('Failed to delete the book. Please try again.');
                    }

                    // Jika berhasil, tampilkan SweetAlert
                    Swal.fire(
                        'Deleted!',
                        'Book data has been deleted.',
                        'success'
                    );

                    router.refresh();
                } catch (error) {
                    // Jika gagal, tampilkan SweetAlert error
                    Swal.fire(
                        'Error!',
                        'Failed to delete the book. Please try again.',
                        'error'
                    );
                    console.error(error);
                }
            }
        });
    };

    return (
        <button className="flex items-center text-color-red hover:text-color-orangered font-medium transition-colors" onClick={handleDelete}>
            <FaTrash className="mr-2" /> Delete
        </button>
    );
}

export default DeleteButton;