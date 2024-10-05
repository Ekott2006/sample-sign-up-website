import React from 'react';
import DefaultImage from "../assets/img.png"

const Sidebar: React.FC = () => {
    return (
        <aside className="text-aside-white w-[45.9%] grid pt-[5.2vh] justify-center content-start">
            <p className="text-2xl text-center font-semibold leading-9 tracking-tight w-[64.4%] mx-auto">
                Social media shared today, tomorrow or by location
            </p>
            {/*<div className="pt-[7.37vh] h-[68.3vh]">*/}
                <div className="pt-[7.37vh]">
                    <div className="w-[64.3vh] h-[64.3vh] rounded-full mx-auto relative ellipse">
                    </div>
                        <img src={DefaultImage} alt={"Decorative Image"} className={"w-[26.79vw] absolute left-[9vw] top-[20.57vh]"}/>
                </div>
                {/*  Slider Dots */}
                <div className="flex items-center gap-4 pt-[3.28vh] mx-auto">
                    <div className="w-2.5 h-2.5 border border-aside-white rounded-full"></div>
                    <svg fill="none" height="22" viewBox="0 0 16 22" width="16" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="11" fill="white" r="4.5" stroke="white"/>
                        <path d="M5 21C10.5228 21 15 16.5228 15 11C15 5.47715 10.5228 1 5 1" stroke="white"/>
                    </svg>
                    <div className="w-2.5 h-2.5 border border-aside-white rounded-full"></div>
                </div>
        </aside>
);
};

export default Sidebar;
