import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Eye, FileCode, TestTube, Scale, Shield, GitBranch, RefreshCw } from "lucide-react"

const principles = [
  {
    title: "Modularity",
    description:
      "Design middleware as independent, reusable components with clear interfaces to minimize dependencies and enhance maintainability.",
    icon: Layers,
  },
  {
    title: "Transparency",
    description:
      "Implement logging, monitoring, and documentation to ensure visibility into event flows and system behavior.",
    icon: Eye,
  },
  {
    title: "Standardization",
    description:
      "Establish consistent naming conventions, data formats, and error-handling protocols across all middleware components.",
    icon: FileCode,
  },
  {
    title: "Testability",
    description:
      "Build automated unit, integration, and end-to-end tests to validate functionality and catch issues early.",
    icon: TestTube,
  },
  {
    title: "Scalability",
    description:
      "Optimize for performance with asynchronous processing, caching, and load balancing to handle high event volumes.",
    icon: Scale,
  },
  {
    title: "Security",
    description:
      "Enforce authentication, authorization, and data encryption to protect sensitive information in transit and at rest.",
    icon: Shield,
  },
  {
    title: "Versioning",
    description:
      "Use version control for middleware configurations and APIs to manage changes and ensure backward compatibility.",
    icon: GitBranch,
  },
  {
    title: "Resilience",
    description:
      "Incorporate retry mechanisms, circuit breakers, and fallback strategies to handle failures gracefully.",
    icon: RefreshCw,
  },
]

export default function FirstPrinciples() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">First Principles for Middleware Design</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          These guiding principles form the foundation for building scalable, maintainable, and robust middleware
          systems. Following these principles ensures your middleware architecture can evolve with changing business
          needs.
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-6">Guiding Principles for Scalable Middleware</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((principle, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <principle.icon className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-xl">{principle.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">{principle.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
