
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CatalogPage from './Pages/CatalogPage/CatalogPage'

function App() {


    return (
        <>
            <Routes>
                <Route path='/' element={ <CatalogPage/> } />
            </Routes>
        </>
    )
}

export default App
