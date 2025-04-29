import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Workflow } from "lucide-react"
import Image from "next/image"

export default function ArchitectureSlide() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">RudderStack Lead Ingestion: Architecture & Implementation</h2>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Workflow className="h-6 w-6 text-primary" />
            <CardTitle>Before & After Architecture</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flowchart%20%281%29.jpg-FMIi5jIaoxQYPcXNnh12Lf7vZBXVn3.jpeg"
              alt="Before and After Architecture Flowchart"
              width={1000}
              height={800}
              className="rounded-lg border border-gray-200 dark:border-gray-700"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
