"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import FirstPrinciplesSlide from "@/components/first-principles-slide"
import UseCaseSlide from "@/components/use-case-slide"
import SolutionSlide from "@/components/solution-slide"
import ArchitectureSlide from "@/components/architecture-slide"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "First Principles for Middleware Design",
      component: <FirstPrinciplesSlide />,
    },
    {
      title: "RudderStack Lead Ingestion: Use Case",
      component: <UseCaseSlide />,
    },
    {
      title: "RudderStack Lead Ingestion: Solution",
      component: <SolutionSlide />,
    },
    {
      title: "RudderStack Lead Ingestion: Architecture",
      component: <ArchitectureSlide />,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <header className="border-b bg-white dark:bg-gray-950 sticky top-0 z-10">
        <div className="container mx-auto py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Middleware Design Principles & RudderStack Integration
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">A presentation for Vercel stakeholders</p>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            Slide {currentSlide + 1}: {slides[currentSlide].title}
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" onClick={prevSlide} disabled={currentSlide === 0}>
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Button>
            <Button variant="outline" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        <Card className="min-h-[600px] overflow-auto">
          <CardContent className="pt-6">{slides[currentSlide].component}</CardContent>
        </Card>

        <div className="flex justify-center mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentSlide ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </main>

      <footer className="border-t bg-white dark:bg-gray-950 py-6">
        <div className="container mx-auto text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Middleware Design Principles Presentation
        </div>
      </footer>
    </div>
  )
}
