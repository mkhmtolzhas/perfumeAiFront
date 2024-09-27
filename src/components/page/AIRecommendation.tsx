"use client"
import React, { useEffect } from 'react'
import axios from 'axios'

interface AIRecommendationProps {
    userPrompt: string
}

const AIRecommendation: React.FC<AIRecommendationProps> = ({ userPrompt }) => {
    const fetchData = async () => {
        try {
            const response = await axios.post(`https://perfume-ai-production.up.railway.app/api/ai/response`, {
                prompt: userPrompt
            })
            console.log(response)
        } catch (error) {
            console.error("Ошибка:", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>AIRecommendation</div>
    )
}

export default AIRecommendation