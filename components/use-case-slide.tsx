import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, AlertTriangle } from "lucide-react"

export default function UseCaseSlide() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">RudderStack Lead Ingestion: Use Case (Before)</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              <CardTitle>Objective</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p>Overhaul RudderStack's lead ingestion process.</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              <CardTitle>Challenges</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Linear workflow did not scale, creating duplicate leads in Salesforce</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>No documentation required tribal knowledge to maintain</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Inconsistent data across tools</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Lack of data governance led to lack of alignment between marketing and sales teams</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
