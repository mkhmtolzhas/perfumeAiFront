"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import AIRecommendation from '@/components/page/AIRecommendation'

const RecommendationPage = () => {
    const { prompt } = useParams()
    const decodedPrompt = decodeURIComponent(Array.isArray(prompt) ? prompt.join('') : prompt)

    return (
        <AIRecommendation userPrompt={decodedPrompt} />
    )
}

export default RecommendationPage
