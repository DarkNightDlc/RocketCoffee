import { Header } from "../components/Header"
import video from "../assets/video.mp4"

const GiftCard = () => {

    return (
        <>
            <Header/>
            <main className="flex flex-col justify-center items-center md:pt-24 pt-10 h-[calc((100vh-7rem))]">
                <div className="relative md:mx-auto max-w-[819px] w-full flex justify-center items-center rounded overflow-hidden">
                    <h1 className="py-10 font-black w-full h-full bg-black text-8xl md:text-[170px] text-[#fff] mix-blend-multiply z-[2] text-center">Embreve</h1>
                    <video src={video} autoPlay loop muted className="w-full h-full absolute top-0 left-0 object-cover " >
                      Vídeo de Kelly L no Pexels
                    </video>
                </div>
            </main>
        </>
    )
}

export default GiftCard;