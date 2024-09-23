"use client"
import React, { use, useEffect, useState } from 'react'
import axios from 'axios'

interface AIRecommendationProps {
    userPrompt: string
}

const AIRecommendation: React.FC<AIRecommendationProps> = ({ userPrompt }) => {
    const [prompt, setPrompt] = useState(userPrompt)
    const [isLoading, setIsLoading] = useState(true)
    const [response, setResponse] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8000/api/ai/response', {
                    prompt: prompt
                })
                console.log(response)
            } catch (error) {
                console.error("Ошибка:", error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        console.log(prompt)
    }, [prompt])
    return (
        <div>AIRecommendation</div>
    )
}

export default AIRecommendation