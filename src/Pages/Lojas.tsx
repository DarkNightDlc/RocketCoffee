import { Header } from "../components/Header"
import { BlurBase } from "../components/BlurBase/Blur";

const Lojas = ()=> {   
    return (
        <>
            <Header />
            <main className="m-auto md:p-10 p-5 flex items-center justify-center h-[calc(100vh-7rem)] max-w-[1000px] ">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.387287784526!2d-43.97600241336748!3d-19.86586188862029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690f71348ff6d%3A0x35b9453242d27588!2zTWluZWlyw6Nv!5e0!3m2!1spt-BR!2sbr!4v1683069016890!5m2!1spt-BR!2sbr" 
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