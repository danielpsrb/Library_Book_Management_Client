export const getBooksDataResponse = async (endpoint) => {
    try {
        const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_SOURCE_URL}/${endpoint}`,
        {
            cache: "no-store", // Memastikan selalu mengambil data terbaru
        }
        );
        if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const booksData = await response.json();
        return booksData;
    } catch (error) {
        console.error("Error fetching books data: ", error);
        throw new Error("Failed to fetch books");
    }
};
