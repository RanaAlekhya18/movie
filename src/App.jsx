import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Movie from './Movie'
import MovieSearch from './MovieSearch'
import Errorpage from './Errorpage'
const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Movie/>}></Route>
            <Route path='/movies' element={<MovieSearch/>}></Route>
            <Route path='*' element={<Errorpage/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App