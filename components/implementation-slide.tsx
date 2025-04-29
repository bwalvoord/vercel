import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, TestTube, Key } from "lucide-react"

export default function ImplementationSlide() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Salesforce Integration: Implementation</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Layers className="h-6 w-6 text-primary" />
              <CardTitle>Middleware Design (RudderStack)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>
                  <strong>Modularity:</strong> Separate workflows for new leads vs updates. Enrichment of leads can also
                  support other APIs like Zoom Info, 6Sense, Apollo, etc.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>
                  <strong>Salesforce API Usage:</strong> Batched API calls to stay within rate limits (e.g., 100 calls
                  per second per user).
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>
                  <strong>Performance Optimization:</strong> Eliminate race conditions between RudderStack and
                  Salesforce to avoid duplicate leads. Retry logic for failed API calls.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>
                  <strong>Security:</strong> OAuth 2.0 for API authentication.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <TestTube className="h-6 w-6 text-primary" />
              <CardTitle>Development Lifecycle</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>
                  <strong>Planning:</strong> Defined data mappings (e.g., HubSpot lead fields to Salesforce).
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>
                  <strong>Testing:</strong> Simulated events in Tray.io sandbox, validated Salesforce API responses.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>
                  <strong>Release:</strong> Staged deployment with monitoring, rollback plan for errors.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Key className="h-6 w-6 text-primary" />
              <CardTitle>Tools</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Tray.io</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Salesforce Sandbox</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Postman (API testing)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
