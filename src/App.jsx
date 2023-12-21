import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchDataFunction } from './redux/actionType'
import BookContainer from './components/BookContainer'
import FormWindow from './components/Form'

function App() {
  const [search, setSeatch] = useState("")
  const [login, setLogin] = useState(false)

  const data = useSelector(store => store.data)
  const dispatch = useDispatch()
  
  useEffect(() => fetchData(search),[search])

  const fetchData = (search) => {
    axios
    .post("https://reactnd-books-api.udacity.com/search",{query: search, maxResults: 20},{headers: { 'Authorization': 'whatever-you-want' }})
    .then(res => dispatch(fetchDataFunction(res.data.books)))
    .catch(fetchBook)
  }

  const fetchBook = () => {
    axios
    .get("https://reactnd-books-api.udacity.com/books", {headers: { 'Authorization': 'whatever-you-want' }})
    .then(res => dispatch(fetchDataFunction(res.data.books)))
    .catch(err => console.log(err))
  }

  return (
    <div className="app">
      <div id="navbar">
        <div id="name">Kalvium <span id='special'>Books</span></div>
        <input type="text" onChange={(e) => setSeatch(e.target.value)} placeholder='Search books'/>
        {login ? (<div id='btn'>{login}</div>) : (<Link to="/register"><div id="btn">Register</div></Link>)}
      </div>
      <Routes>
        <Route path='/' element={<BookContainer data={data} />}/>
        <Route path='/register' element={<FormWindow onRegister={(username) => setLogin(username)}/>} />
      </Routes>
    </div>
  )
}

export default App
