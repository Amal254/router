import { useState } from "react";
import "./App.css";
import AddNewMovie from "./Components/AddNewMovie";
import MovieList from "./Components/MovieList";
import Search from "./Components/Search";
import { moviesData } from "./data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./Components/Detail";

function App() {
  const [data, setData] = useState(moviesData);
  const [textSearch, setTextSearch] = useState("")
  const [rating, setRating] = useState("")
  const handleSearch=(x)=>setTextSearch(x)
  const handleRating=(x)=>setRating(x)
  const handleDelete=(id)=>setData(data.filter(el=>el.id!==id))
  const handleAdd=(newMovie)=>setData([...data,newMovie])
  const handleEdit=(editedMovie)=>setData(data.map(el=>el.id===editedMovie.id?editedMovie:el))
  return (
    <div className="App">
      <Router>
      <Search textSearch={textSearch} rating={rating} handleSearch={handleSearch} handleRating={handleRating}/>
      <AddNewMovie handleAdd={handleAdd}/>
       <Routes>
       <Route path="/" element={

      <MovieList list={data.filter(el=>el.name.toLowerCase().includes(textSearch.toLowerCase())&&el.rating>=rating)} handleDelete={handleDelete} handleEdit={handleEdit} />

       } />
       <Route path="/Detail/:id" element={<Detail list={data}/>} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;