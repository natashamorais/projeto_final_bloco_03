import { User, ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react"


function Navbar() {

    return (

        <div className= 'w-full  bg-slate-800   text-white flex justify-center py-4'>
            <div className=" container flex justify-between  ext-lg">
                <div className= "flex align-center"> 
                    <img
                        src="/src/assets/logo.png"
                        alt="Logo"
                        className='w-1/4'
                    />
                     <div className="text-2xl font-bold align-center">Farmácia Artemísia</div>
                </div>
                
              
                   
                   

                <div className="flex-1 flex justify-center items-center relative w-30 text-black">
                        <form>
                            <input className="h-9 w-90 rounded-lg px-4 py-4 focus:outline-none"
                                type="search"
                                placeholder="Pesquisar produto"
                                id="busca"
                                name="busca"
                                required
                            />
                            <button type="submit" className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                                <MagnifyingGlass size={14} weight="bold"/>
                            </button>
                        </form>
                    </div>

                <div className='flex gap-4 py-4'>
                    <div  className='hover:underline'>Produtos</div>
                    <div  className='hover:underline'>Categorias</div>
                    <div className='hover:underline'>Cadastrar Categoria</div>
                    <User size={32} weight='bold' />
                    <ShoppingCart size={32} weight='bold' />
                </div>
            </div>
        </div>
    )
}

export default Navbar