"use client";
import { Sparkles } from 'lucide-react';
import React, {useEffect, useState } from 'react';
import axios from 'axios';

const AiPromptMobile = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [prompt, setPrompt] = useState('');
    const suggestions = [
        'Парфюм с нотами ванили',
        'Парфюм для женщин на свидание',
        'Парфюм для офиса',
        'Повседневный парфюм для мужчин',
    ];

    const sendPrompt = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) return;
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/api/ai/response', {
                prompt: prompt
            });
            if (response.status === 200) {
                setIsLoading(false);
            }
            console.log(response);
        } catch (error) {
            console.error("Ошибка:", error);
            setIsLoading(false);
        }
        setPrompt('');
    };

    const handleSuggestionClick = (suggestion: string) => {
        setPrompt(suggestion);
    };
    useEffect(() => {
        if (isLoading) {
            console.log('loading...');
        }
    }, [isLoading]);
    
    
    return (
        <div className='w-full px-[6%] py-6'>
            <div className="container flex justify-center items-center">
                <form action="" className='flex justify-center items-center gap-2' onSubmit={sendPrompt}>
                    <input 
                        type="text" 
                        value={prompt} 
                        onChange={(e) => setPrompt(e.target.value)} 
                        placeholder='Опишите что вы хотите...' 
                        className='border-[2px] border-black flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' 
                    />
                    <button className='h-10 px-3 bg-[#e2ff42] rounded-md flex justify-center items-center text-black text-xs' type='submit'>
                        <Sparkles className="h-4 w-4" />
                    </button>
                </form>
            </div>
            <div className="grid grid-cols-2 gap-3 justify-center px-[6%] py-6 border-[2px] rounded-md mt-5 border-[#e2ff42]" >
                {suggestions.map((suggestion, index) => (
                    <button
                    className='px-2 py-2 text-sm bg-[#e2ff42] text-black rounded-md'
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    >{suggestion}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AiPromptMobile;
