import { useState } from "react";
import BackButton from "./BackButton";
import Spinner from "./Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfuly!", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);

        enqueueSnackbar("error deleting book!", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">
          Are You Sure You'd Like to Delete This Title?
        </h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete This Title
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
