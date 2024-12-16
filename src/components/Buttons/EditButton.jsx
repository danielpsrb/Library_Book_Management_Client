'use client'

import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';

const EditButton = ({ bookId }) => {
    return (
        <Link
            href={`/book/edit/${bookId}`}
            className="flex items-center text-color-blue hover:text-color-deepskyblue font-medium transition-colors"
        >
            <FaEdit className="mr-2" /> Edit
        </Link>
    );
}

export default EditButton;