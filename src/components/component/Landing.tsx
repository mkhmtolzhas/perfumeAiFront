import React from 'react';
import { AiPromptWithSuggestions } from '../ai-prompt-with-suggestions';

const Landing = () => {

    return (
        <>
            <section className='w-full h-[20vh] lg:h-[80vh] md:h-[80vh] lg:relative md:relative'>
                <div className="relative w-full h-full">
                    <div className='absolute inset-0 bg-black opacity-20 z-10'></div>
                    <div className='absolute inset-0 lg:bg-[url("https://pcdn.goldapple.ru/p/c/3000000007/web/5f63617465676f72798dc3715fde3f6a3fullhd.webp")] md:bg-[url("https://pcdn.goldapple.ru/p/c/3000000007/web/5f63617465676f72798dc3715fde3f6a3fullhd.webp")] bg-[url("https://pcdn.goldapple.ru/p/c/3000000007/web/5f63617465676f72798dc3715fde3f6a3mobile.webp")] bg-cover bg-center'></div>
                    <div className="lg:hidden md:hidden ">
                        <div className='absolute inset-0 z-20 flex items-center justify-center'>
                            <div className="w-full flex flex-col items-center justify-center">
                                <div className='text-white text-center w-full flex justify-center items-center lg:max-w-[40%] max-w-[70%]'>
                                    <h1 className='text-shadow text-2xl md:text-4xl lg:text-5xl font-bold'>
                                        Найди <span className='text-[#e2ff42]'>парфюм</span> под себя за <span className='text-[#e2ff42]'>пару кликов!</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden absolute inset-0 z-20 lg:flex md:flex items-center justify-center'>
                    <div className="w-full flex flex-col items-center gap-10">
                        <div className='text-white text-center w-full lg:max-w-[40%] max-w-[70%]'>
                            <h1 className='text-shadow text-xl md:text-4xl lg:text-5xl font-bold'>
                                Найди <span className='text-[#e2ff42]'>парфюм</span> под себя за <span className='text-[#e2ff42]'>пару кликов!</span>
                            </h1>
                        </div>
                        <AiPromptWithSuggestions/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Landing;
