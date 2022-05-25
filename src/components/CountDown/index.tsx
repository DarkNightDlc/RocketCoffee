import { useEffect,useState } from 'react';

import './style.scss';

interface Props {
    date: Date;
}

export function CountDown(props: Props) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function RemainingWaitingTime(){
        let date = new Date();
        let time = date.getTime();
        let now = new Date(time);
        let eventDate = new Date(props.date);
        let eventTime = eventDate.getTime();
        let diff = eventTime - now.getTime();
        let diffSeconds = Math.floor(diff / 1000 % 60);
        let diffMinutes = Math.floor(diff / 1000 / 60 % 60);
        let diffHours = Math.floor(diff / (1000 * 60 * 60) % 24);
        let diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

        setDays(diffDays);
        setHours(diffHours);
        setMinutes(diffMinutes);
        setSeconds(diffSeconds);
    }

    useEffect(() => {
        RemainingWaitingTime();
        const interval = setInterval(() => {
            RemainingWaitingTime();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row gap-5 md:gap-4 items-center justify-evenly mt-5">
            <div className="countDownDiv">
                <time>{days}</time>
                <span >Days</span>
            </div>
            <span className="pontos" >:</span>
            <div className="countDownDiv">
                <time>{hours}</time>
                <span >Hours</span>
            </div>
            <span className="pontos" >:</span>
            <div className="countDownDiv">
                <time>{minutes}</time>
                <span >Minutes</span>
            </div>
            <span className="pontos" >:</span>
            <div className="countDownDiv">
                <time>{seconds}</time>
                <span >Seconds</span>
            </div>
        </div>
    );
}