import { Header } from "../components/Header"
import { BlurBase } from "../components/BlurBase/Blur";

const Lojas = ()=> {   
    return (
        <>
            <Header />
            <main className="m-auto md:p-10 p-5 flex items-center justify-center h-[calc(100vh-7rem)] max-w-[1000px] ">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7476.261158470454!2d-45.9685477!3d-20.4598293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b4138d65d0a809%3A0xff20efb235e1f6f6!2sCemig%20-%20Ag%C3%AAncia%20-%20Piumhi!5e0!3m2!1spt-BR!2sbr!4v1652734955708!5m2!1spt-BR!2sbr" 
                    className="w-full h-full border-2 border-button rounded-md"
                    loading="lazy"
                    >
                </iframe>
            </main>
            <BlurBase/>
        </>
    )
}


export default Lojas;