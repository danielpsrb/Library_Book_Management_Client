import BookList from "@/components/BookList";
import AddButton from "@/components/Buttons/AddButton";

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SOURCE_URL}/books`, {
    cache: 'no-store'
  });
  const booksData = await response.json();


  return (
    <div className="">
      <div className="flex justify-between items-center mt-2 px-2">
        <AddButton />
      </div>
      <BookList api={booksData} />
    </div>
  );
}

export default Home;