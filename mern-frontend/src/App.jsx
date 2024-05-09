import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CreateBook from "./Components/CreateBook";
import EditBook from "./Components/EditBook";
import DeleteBook from "./Components/DeleteBook";
import ShowBook from "./Components/ShowBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};
export default App;
