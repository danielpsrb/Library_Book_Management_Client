import Image from "next/image";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";

const BookList = ({ api }) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-6">
            {api.map((book) => {
                return (
                    <div
                        key={book.id}
                        className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="p-4">
                            <Image
                                src={book.cover_book_photo}
                                alt={book.title}
                                width={350}
                                height={350}
                                className="w-full h-64 object-cover rounded-t-lg"
                                priority={true}
                            />
                            <div className="mt-4">
                                <h2 className="font-bold text-lg text-gray-800 mb-2">{book.title}</h2>
                                <p className="text-sm text-gray-600 mb-1">Author: <span className="font-medium">{book.author}</span></p>
                                <p className="text-sm text-gray-600 mb-1">Genre: <span className="font-medium">{book.genre}</span></p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <EditButton bookId={book.id} />
                                <DeleteButton bookId={book.id} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default BookList;