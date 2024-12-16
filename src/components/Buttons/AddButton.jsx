'use client'

import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';

const AddButton = () => {
    return (
        <Link href="/addBook" className="inline-flex items-center space-x-1 text-color-azure bg-color-darkcyan hover:bg-blue-800 px-4 py-[8px] rounded-xl text-sm">
            <FaPlus className="mr-2" /> Add New
        </Link>
    );
};

export default AddButton;