import CreateForm from "@/components/BookList/CreateForm";

const Page = () => {
    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Add New Customer</h1>
            <CreateForm />
        </div>
    );
};

export default Page;