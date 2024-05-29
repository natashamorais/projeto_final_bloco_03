
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import ListarCategorias from './Components/Categorias/ListarCategoria/ListarCategoria'
import FormCategoria from './Components/Categorias/FormCategoria/FormCategoria'
import DeletarCategoria from './Components/Categorias/DeletarCategoria/DeletarCategoria'

function App() {

  return (

    <>
    <BrowserRouter>
      <Navbar />
      <div className='min-h-[90vh] bg-gray-200'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListarCategorias />} />
          <Route path="/cadcategoria" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
        </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  </>
  );
}

export default App
