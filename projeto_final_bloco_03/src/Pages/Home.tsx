import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

function Home() {
  return (

    <>
    <Navbar />
      <div className=" bg-teal-400  flex  justify-center">
        <div className="container grid grid-cols-2  text-white"
        >
          <div
            className="flex flex-col items-center gap-4 justify-center py-4"
          >
            <h2
              className="text-5xl font-bold"
            >
              Seja Bem Vinde!
            </h2>
            <p className="text-xl">Aqui você encontra seus medicamentos e cosméticos </p>

            </div>
          </div>

          <div
            className="flex justify-center "
          >
            <img
              src="/src/assets/img.png"
              alt="Imagem da Página Home"
              className="w-2/3" />
          </div>
        </div>
        <Footer />
 </>
  );
}

export default Home;
