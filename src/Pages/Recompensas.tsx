import { BlurBase } from "../components/BlurBase/Blur";
import { CountDown } from "../components/CountDown";
import { Header } from "../components/Header"

 

const Recompensas = () => {

    return (
        <>
            <Header/>
            <main className="flex flex-col justify-start items-center md:pt-24 pt-10 h-[calc((100vh-7rem))]">
                <h1 className="uppercase text-3xl md:text-4xl font-bold sub-Title">Ready to launch in...</h1>
                <CountDown date={new Date("9 May 2023 18:30:50")} />
            </main>
            <BlurBase/>
        </>
    )
}

export default Recompensas;