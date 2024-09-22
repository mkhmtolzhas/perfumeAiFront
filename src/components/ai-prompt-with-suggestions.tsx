"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles } from "lucide-react"

const promptSuggestions = [
  'Какой парфюм выбрать на лето для мужчины?',
  'Порекомендуй парфюм из Jean Paul Gaultier',
  'Парфюм с нотами ванили',
  'Парфюм для женщин на свидание',

]

export function AiPromptWithSuggestions() {
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsLoading(true)
    try {
      // Здесь должен быть ваш реальный API-запрос
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log("Отправлен промпт:", prompt)
      // Обработка ответа по необходимости
    } catch (error) {
      console.error("Ошибка:", error)
    } finally {
      setIsLoading(false)
      setPrompt("")
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion)
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  useEffect(() => {
    const adjustTextareaHeight = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      }
    }

    adjustTextareaHeight()
  }, [prompt])

  return (
    <div className="relative z-10 w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative mb-4">
        <Textarea
          ref={textareaRef}
          placeholder="Введите ваш запрос к AI здесь..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full pr-24 pb-12 min-h-[100px] max-h-[170px] resize-none overflow-hidden"
        />
        <Button 
          type="submit" 
          className="absolute bottom-3 right-3  bg-[#e2ff42] text-black  hover:bg-[#e2ff42] hover:text-black"
          disabled={isLoading || !prompt.trim()}
        >
          {isLoading ? (
            <span className="flex items-center">
              <Sparkles className="animate-spin mr-2 h-4 w-4" />
              Ждите
            </span>
          ) : (
            <span className="flex items-center">
              <Sparkles className="mr-2 h-4 w-4" />
              Спросить AI
            </span>
          )}
        </Button>
      </form>
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[#FFFFFF] text-shadow">Готовые варианты запросов:</h3>
        <div className="flex flex-wrap gap-2">
          {promptSuggestions.map((suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleSuggestionClick(suggestion)}
              className="text-xs bg-[#e2ff42] border-[2px] border-[#e2ff42] text-[#000] hover:bg-[#e2ff42] hover:text-black"
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}