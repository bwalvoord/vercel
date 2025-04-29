import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Settings, Scale } from "lucide-react"

export default function ImpactSlide() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Salesforce Integration: Impact</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-primary" />
              <CardTitle>Business Outcomes</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Eliminated duplicate leads in Salesforce</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>
                  Enabled all GTM teams to load leads into salesforce and have the enriched leads proliferate to all
                  other SAAS tools
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Reduced API Calls in Salesforce</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Reduced clearbit enrichment costs by 75%</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Settings className="h-6 w-6 text-primary" />
              <CardTitle>Operational Benefits</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>
                  Created an APEX class in salesforce that could be leveraged by any flow to send data to other tools
                  via RudderStack. This unblocked the marketing and SDR teams to use the tools of their choice and did
                  not require any assistance from a data engineer.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>S3 retention bucket allowed for leads to be "replayed" if necessary</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Lead scoring could now be done in the warehouse instead of just in a process builder</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Scale className="h-6 w-6 text-primary" />
              <CardTitle>Scalability</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p>System handled 10x event volume during peak campaigns without downtime.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
