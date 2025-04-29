"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Use Case Overview",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Objective</h3>
          <p>
            Automate lead synchronization between Salesforce and a marketing automation platform (e.g., HubSpot) to
            streamline sales workflows.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Challenge</h3>
          <p>Real-time data sync with complex field mappings, handling high volumes, and ensuring data integrity.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Stakeholders</h3>
          <p>Sales, Marketing, and Operations teams.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Architecture",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Components</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Trigger:</strong> Webhook from HubSpot on lead creation/update.
            </li>
            <li>
              <strong>Middleware:</strong> Tray.io workflow for data transformation and API calls.
            </li>
            <li>
              <strong>Target:</strong> Salesforce REST API for lead creation/update.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Diagram</h3>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-full mb-8">
                <div className="text-center p-3 border rounded-md bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <p>HubSpot Webhook</p>
                </div>
                <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center p-3 border rounded-md bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
                  <p>
                    Tray.io
                    <br />
                    (Transform, Validate)
                  </p>
                </div>
                <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center p-3 border rounded-md bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <p>Salesforce API</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="h-16 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center p-3 border rounded-md bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 mb-4">
                  <p>
                    Logging & Monitoring
                    <br />
                    (Datadog)
                  </p>
                </div>
                <div className="text-center p-3 border rounded-md bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                  <p>
                    Error Handling
                    <br />
                    (Retry, Notify)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Key Features</h3>
          <p>Asynchronous processing, JSON schema validation, and retry logic.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Implementation",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Development</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Built modular Tray.io workflow with reusable mapping templates.</li>
            <li>Used Salesforce REST API with OAuth 2.0 for secure access.</li>
            <li>Implemented caching to reduce API calls within Salesforce governor limits.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Testing</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Unit tests for field mappings and transformations.</li>
            <li>Integration tests simulating HubSpot events and Salesforce responses.</li>
            <li>Load tests to validate performance under peak traffic.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Deployment</h3>
          <p>Staged rollout via Tray.io's version control, with monitoring dashboards in Datadog.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Impact",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Quantitative</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reduced lead sync time from 10 minutes to &lt;30 seconds.</li>
            <li>Decreased API errors by 80% through retry and validation mechanisms.</li>
            <li>Saved 20 hours/week in manual data entry for Sales team.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Qualitative</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Improved sales team productivity with real-time lead data.</li>
            <li>Enhanced visibility into sync issues with comprehensive logging.</li>
            <li>Standardized process enabled easier onboarding of new team members.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Key Takeaways",
    content: (
      <div className="space-y-4">
        <ul className="space-y-4">
          <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <strong className="text-primary">Modularity vs. Complexity:</strong> Simplified maintenance by using
            reusable components, reducing complexity in large-scale workflows.
          </li>
          <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <strong className="text-primary">Performance Optimization:</strong> Caching and batching ensured efficient
            Salesforce API usage.
          </li>
          <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <strong className="text-primary">Testing & Release:</strong> Automated tests and staged deployments
            minimized risks.
          </li>
          <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <strong className="text-primary">Scalability:</strong> Architecture supports 10x event volume growth without
            performance degradation.
          </li>
          <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <strong className="text-primary">Future Improvements:</strong> Explore event-driven architecture with
            message queues (e.g., Kafka) for greater resilience.
          </li>
        </ul>
      </div>
    ),
  },
]

export default function SalesforceIntegration() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1))
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Salesforce Integration Example</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          This case study demonstrates how the middleware design principles were applied to create a robust Salesforce
          integration.
        </p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">
          Slide {currentSlide + 1}: {slides[currentSlide].title}
        </h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentSlide === 0}>
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </Button>
          <Button variant="outline" size="sm" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>

      <Card className="min-h-[500px]">
        <CardContent className="pt-6">{slides[currentSlide].content}</CardContent>
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
    </div>
  )
}
