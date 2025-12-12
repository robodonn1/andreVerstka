
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CatalogPage from './Pages/CatalogPage/CatalogPage'
import CreativePage from './Pages/CreativePage/CreatiePage'

function App() {


    return (
        <>
            <Routes>
                <Route path='/' element={<CatalogPage />} />
                <Route path='/creative' element={ <CreativePage/> } />
            </Routes>
        </>
    )
}

export default App
