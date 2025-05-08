# First Principles for Middleware Design

Middleware should solve a business problem and if done correctly, should be very interchangeable and adaptable.  The design should be easy to understand and not require tribal knowledge while also supporting the future needs of the business. 

## 1\. Balance of Powers (Ease, Power & Governance)

**Principle**: The principal responsibility of the GTM Platform Lead is helping drive the decisions around balancing these three principals as optimizing for one creates tradeoffs for the others.   
**Rationale**: What does Vercel need now and what do they need for the future.  GTM systems handle sensitive data, requiring ease of use for non-technical teams while adhering to infosec standards (e.g., GDPR, CCPA).  Reasonable data governance practices can be used to reduce friction and save time for downstream consumers.  
**Application**:

- Use visual builders (e.g., Tray.io workflows, RudderStack) for rapid deployment by systems/ops teams while accepting some limitations around data deliverability.  
- Define data catalogs or dictionaries to align teams and platforms to align data schemas as far upstream as possible.  
- Avoid complex coding or specialized processes that promote tribal knowledge or product lock-in

## 2\. Salesforce as the Source of Truth

**Principle**: Salesforce is the definitive system (1st class citizen) for GTM data and the middleware must ensure accuracy in it.  
**Rationale**: Salesforce data drives or influences all GTM decisions  
**Application**:

- Does the middleware make it easier for GTM members to do their jobs day to day  
- Minimize API calls to ensure operational integrity  
- Does not always need to replace native apps 

## 3\. Alignment & Documentation

**Principle**: One of the hardest problems for GTM teams is aligning the business goals to data.  Creating useful documentation to articulate that relationship was the second hardest problem in middleware which has largely been solved by AI.  
**Rationale**: Producing documentation was very resource intensive;  AI solved this.   AI in the middleware now means we can now have a conversation directly with the platforms.  
**Application**:

- Agree on KPI definitions and where those are reflected in their source systems  
- Modular components should be function focused and replaceable   
- Choose tools that support interactive chat or at a minimum automatically generate documentation

## 4\. Software Best Practices

**Principle**: All teams at Vercel should be applying minimal SDLC practices; in particular middleware tools should support version control, testing/sandboxing and code management/archival within github.  
**Rationale**: Vercel is not a bank or an ad agency and while middleware often doesn’t enforce formal processes this can lead to avoidable errors and inefficiencies. A structured SDLC helps ensure quality and scalability.  
**Application**:

- Github  
- Terraform/Salto/AI coding tools  
- Grok/Claude/Anthropic/ChatGPT

