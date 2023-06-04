import Lottie from "lottie-react";
import multiTaskingAnimation from "../../assets/multi-tasking.json";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="min-h-[80vh] p-10 grid lg:grid-cols-2 justify-center items-center content-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div>
                <Lottie animationData={multiTaskingAnimation} loop={true} />
            </div>
            <div className="text-center lg:text-left">
                {/* <h1 className="leading-normal text-white font-semibold text-4xl">Empower Your Productivity with ProgressNote<br />The Ultimate Task Management Web App</h1> */}
                <h1 className="leading-normal text-white font-semibold text-4xl lg:text-5xl">The <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-300">Ultimate</span><br />Task Management<br />Web App</h1>
                <h2 className="mt-3 text-2xl text-stone-200">Empower Your Productivity with ProgressNote</h2>
                <Link to='/tasks'><button className="btn btn-warning mt-2">Get Started</button></Link>
            </div>
        </section>
    );
};

export default Banner;