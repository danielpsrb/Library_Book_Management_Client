import { getBooksDataResponse } from "@/service/api-service";
import UpdateForm from "@/components/BookList/UpdateForm";

const Page = async ({ params: { id } }) => {
    try {
        // Ambil data buku berdasarkan id
        const bookData = await getBooksDataResponse(`books/${id}`);

        return (
            <div className="max-w-md mx-auto mt-5">
                <h1 className="text-2xl text-center mb-2">Update Book</h1>
                {/* Kirim bookData ke UpdateForm */}
                <UpdateForm book={bookData} />
            </div>
        );
    } catch (error) {
        // Menangani error saat mengambil data
        return (
            <div className="max-w-md mx-auto mt-5">
                <h1 className="text-2xl text-center text-red-500">Error</h1>
                <p>Failed to load book data. Please try again.</p>
            </div>
        );
    }
};

export default Page;
