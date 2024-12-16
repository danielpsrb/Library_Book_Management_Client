'use client'

import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';

const EditButton = ({ bookId }) => {
    return (
        <Link
            href={`/book/edit/${bookId}`}
            className="flex items-center text-blue-500 hover:text-blue-700 font-medium transition-colors"
        >
            <FaEdit className="mr-2" /> Edit
        </Link>
    );
}

export default EditButton;