import "./App.css"
import { Login } from "./Login";
import {Route, Routes} from "react-router-dom"
import { Signup } from "./Signup";
// import {Reducer} from "./Reducer"
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import TodoList from "./components/TodoList"

const App = ()=>{
  return (
    <div>
    <Navbar/>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/todos" element={<TodoList/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />}/>

    </Routes>
    </div>
    // <>
    //   <Reducer />
    // </>
  )
}

export default App