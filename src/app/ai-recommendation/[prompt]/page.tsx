"use client"
import React from 'react'
import { useParams } from 'next/navigation'

const RecommendationPage = () => {
    const { prompt } = useParams()
    const decodedPrompt = decodeURIComponent(Array.isArray(prompt) ? prompt.join('') : prompt)
    console.log(decodedPrompt)
    return (
        <div>{decodedPrompt}</div>
    )
}

export default RecommendationPage
