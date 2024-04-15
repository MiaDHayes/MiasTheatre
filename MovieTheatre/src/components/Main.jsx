import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Movies from './Movies'
function Main() {

    return (
        <main>
            <Routes>
                <Route exact path= '/' element= {<Home />} />
                <Route exact path= '/movies' element= {<Movies />} />
            </Routes>
        </main>
    )    
}

export default Main