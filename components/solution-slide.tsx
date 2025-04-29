import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Database, FileText, GitBranch } from "lucide-react"

export default function SolutionSlide() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">RudderStack Lead Ingestion: Solution (After)</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Scale className="h-6 w-6 text-primary" />
              <CardTitle>Balance</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Reusable APEX classes for sending data out of SFDC</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Tracking plans to enforce data quality & schemas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Javascript Transformations provide power</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Any tool can be swapped out easily</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Database className="h-6 w-6 text-primary" />
              <CardTitle>Trust</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Salesforce is accurate and trustworthy</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Identical records in all SAAS tools</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Enriched data from 3rd parties and Snowflake</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <CardTitle>Alignment & Documentation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Documentation is still lax</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Metrics can now be reported from SFDC, Snowflake, Sigma, etc.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <GitBranch className="h-6 w-6 text-primary" />
              <CardTitle>Best Practices</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Terraform, Salto & Github actions manage deployments</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Dev, Staging and Productions environments are standard</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
