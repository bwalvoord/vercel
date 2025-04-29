import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, AlertTriangle, FileText, Users } from "lucide-react"

const bestPractices = [
  {
    title: "Performance Optimization",
    description: "Leverage batch processing and rate limiting to manage Salesforce API quotas efficiently.",
    icon: Zap,
    tips: [
      "Implement caching for frequently accessed data",
      "Use bulk API operations when processing multiple records",
      "Schedule non-urgent operations during off-peak hours",
      "Monitor API usage to stay within limits",
    ],
  },
  {
    title: "Error Handling",
    description: "Implement detailed error logging and user-friendly notifications to streamline debugging.",
    icon: AlertTriangle,
    tips: [
      "Log contextual information with each error",
      "Categorize errors by severity and type",
      "Implement circuit breakers for failing dependencies",
      "Create actionable alerts for critical failures",
    ],
  },
  {
    title: "Documentation",
    description: "Maintain up-to-date runbooks and schema definitions for all middleware workflows.",
    icon: FileText,
    tips: [
      "Document API contracts and data models",
      "Create troubleshooting guides for common issues",
      "Maintain a changelog for middleware updates",
      "Include diagrams for complex workflows",
    ],
  },
  {
    title: "Governance",
    description: "Establish a review process for middleware changes to ensure alignment with organizational standards.",
    icon: Users,
    tips: [
      "Define clear ownership for each middleware component",
      "Implement approval workflows for production changes",
      "Conduct regular architecture reviews",
      "Establish metrics for middleware quality and performance",
    ],
  },
]

export default function BestPractices() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          These best practices have been refined through real-world implementation experience. Adopting these approaches
          will help your team avoid common pitfalls and deliver more reliable middleware solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {bestPractices.map((practice, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <practice.icon className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>{practice.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{practice.description}</p>

              <h4 className="font-medium text-sm uppercase text-gray-500 dark:text-gray-400 mb-2">Key Tips</h4>
              <ul className="space-y-2">
                {practice.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
