import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Database, FileText, GitBranch, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const principles = [
  {
    title: "Balance of Powers (Ease, Power & Governance)",
    description:
      "The principal responsibility of the GTM Platform Lead is helping drive the decisions around balancing these three principals as optimizing for one creates tradeoffs for the others.",
    icon: Scale,
    applications: [
      "Use visual builders (e.g., Tray.io workflows, RudderStack) for rapid deployment by systems/ops teams while accepting some limitations around data deliverability.",
      "Define data catalogs or dictionaries to align teams and platforms to align data schemas as far upstream as possible.",
      "Avoid complex coding or specialized processes that promote tribal knowledge or product lock-in.",
    ],
  },
  {
    title: "Salesforce as the Source of Truth",
    description:
      "Salesforce is the definitive system (1st class citizen) for GTM data and the middleware must ensure accuracy in it.",
    icon: Database,
    applications: [
      "Does the middleware make it easier for GTM members to do their jobs day to day",
      "Minimize API calls to ensure operational integrity",
      "Does not always need to replace native apps",
    ],
  },
  {
    title: "Alignment & Documentation",
    description:
      "One of the hardest problems for GTM teams is aligning the business goals to data. Creating useful documentation to articulate that relationship was the second hardest problem in middleware which has largely been solved by AI.",
    icon: FileText,
    applications: [
      "Agree on KPI definitions and where those are reflected in their source systems",
      "Modular components should be function focused and replaceable",
      "Choose tools that support interactive chat or at a minimum automatically generate documentation",
    ],
  },
  {
    title: "Software Best Practices",
    description:
      "All teams at Vercel should be applying minimal SDLC practices; in particular middleware tools should support version control, testing/sandboxing and code management/archival within github.",
    icon: GitBranch,
    applications: ["Github", "Terraform/Salto/AI coding tools", "Grok/Claude/Anthropic/ChatGPT"],
  },
]

export default function FirstPrinciplesSlide() {
  return (
    <TooltipProvider>
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">First Principles for Middleware Design</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Middleware should solve a business problem and if done correctly, should be very interchangeable and
            adaptable. The design should be easy to understand and not require tribal knowledge while also supporting
            the future needs of the business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <Tooltip key={index}>
              <Card className="transition-all hover:shadow-md h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <principle.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{principle.description}</p>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center text-sm text-primary hover:underline">
                      <Info className="h-4 w-4 mr-1" /> View applications
                    </button>
                  </TooltipTrigger>
                </CardContent>
              </Card>
              <TooltipContent side="bottom" className="max-w-sm p-4">
                <h4 className="font-medium text-sm mb-2">Application</h4>
                <ul className="space-y-1 text-sm">
                  {principle.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
