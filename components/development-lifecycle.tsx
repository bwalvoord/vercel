import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, PenTool, Code, TestTube, Rocket, LineChart } from "lucide-react"

const lifecycleSteps = [
  {
    title: "Requirements Gathering",
    description: "Collaborate with stakeholders to define event triggers, data mappings, and system dependencies.",
    icon: ClipboardList,
  },
  {
    title: "Design",
    description: "Create modular workflows with clear inputs/outputs, prioritizing reusable components.",
    icon: PenTool,
  },
  {
    title: "Development",
    description: "Build middleware using tools like Tray.io, adhering to standardization and security principles.",
    icon: Code,
  },
  {
    title: "Testing",
    description:
      "Execute unit tests for individual components, integration tests for system interactions, and performance tests for scalability.",
    icon: TestTube,
  },
  {
    title: "Deployment",
    description: "Use CI/CD pipelines for automated, staged rollouts with rollback capabilities.",
    icon: Rocket,
  },
  {
    title: "Monitoring & Maintenance",
    description: "Continuously monitor performance metrics, error rates, and logs; iterate based on feedback.",
    icon: LineChart,
  },
]

export default function DevelopmentLifecycle() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Middleware Development Lifecycle</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          A structured approach to middleware development ensures consistent quality and reduces risks. This lifecycle
          provides a framework for planning, building, and maintaining middleware solutions.
        </p>
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

        <div className="space-y-12 relative">
          {lifecycleSteps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-4 md:gap-8 relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center transform -translate-x-1/2 z-10">
                <step.icon className="h-4 w-4 text-white" />
              </div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
                <Card>
                  <CardHeader>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Empty space for the other side */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
