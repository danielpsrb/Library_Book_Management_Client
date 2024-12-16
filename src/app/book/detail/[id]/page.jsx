import { getBooksDataResponse } from "@/service/api-service";
import Image from "next/image"


const Page = async ({ params: { id } }) => {

    const bookData = await getBooksDataResponse(`books/${id}`);

    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="lg:text-2xl text-xl text-color-black dark:text-color-primary text-center">{bookData.title}</h3>
            </div>
            <div className="pt-4 px-4 flex  gap-2 lg:justify-center text-color-primary overflow-x-auto gap-x-4 whitespace-nowrap">
                <div className="w-42 flex-shrink-0 flex flex-col justify-center items-center rounded-md border-2 border-color-darkcyan p-2 m-2">
                    <h3>AUTHOR</h3>
                    <p>{bookData.author}</p>
                </div>
                <div className="w-45 flex-shrink-0 flex flex-col justify-center items-center rounded-md border-2 border-color-darkcyan p-2 m-2">
                    <h3>GENRE</h3>
                    <p>{bookData.genre}</p>
                </div>
                <div className="w-45 flex-shrink-0 flex flex-col justify-center items-center rounded-md border-2 border-color-darkcyan p-2 m-2">
                    <h3>PUBLISH YEAR</h3>
                    <p>{bookData.publish_year}</p>
                </div>
                <div className="w-45 flex-shrink-0 flex flex-col justify-center items-center rounded-md border-2 border-color-darkcyan p-2 m-2">
                    <h3>ISBN</h3>
                    <p>{bookData.isbn}</p>
                </div>
                <div className="w-45 flex-shrink-0 flex flex-col justify-center items-center rounded-md border-2 border-color-darkcyan p-2 m-2">
                    <h3>PUBLISHER</h3>
                    <p>{bookData.publisher}</p>
                </div>
                <div className="w-45 flex-shrink-0 flex flex-col justify-center items-center rounded-md border-2 border-color-darkcyan p-2 m-2">
                    <h3>BOOK PAGES</h3>
                    <p>{bookData.book_pages}</p>
                </div>
            </div>
            <div className="flex flex-col md:gap-2` py-4 md:mx-4 mx-2">
                <div className="grid md:grid-cols-2 gap-2 grid-cols-1 mb-4">
                    <Image
                        src={bookData.cover_book_photo}
                        alt={bookData.title}
                        width={500}
                        height={400}
                        className="w-full rounded-sm object-cover max-h-96"
                        priority={true}
                    />
                    <div className="border-2 border-color-azure p-2 rounded-lg select-none">
                        <p className="text-justify text-xl text-color-primary">{bookData.description}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page;