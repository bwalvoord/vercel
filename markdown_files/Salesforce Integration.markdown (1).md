# RudderStack Lead Ingestion Process

## Use Case (Before)

- **Objective**: Overhaul RudderStack’s lead ingestion process.  
- **Challenge**:   
  - Linear workflow did not scale, creating duplicate leads in Salesforce  
  - No documentation required tribal knowledge to maintain  
  - Inconsistent data across tools  
  - Lack of data governance led to lack of alignment between marketing and sales teams

## Solution (After)

- **Balance**:  
  - Reusable APEX classes for sending data out of SFDC  
  - Tracking plans to enforce data quality & schemas  
  - Javascript Transformations provide power  
  - Any tool can be swapped out easily  
- **Trust**  
  - Salesforce is accurate and trustworthy  
  - Identical records in all SAAS tools  
  - Enriched data from 3rd parties and Snowflake  
- **Alignment & Documentation**  
  - Documentation is still lax  
  - Metrics can now be reported from SFDC, Snowflake, Sigma, etc.  
- **Best Practices**  
  - Terraform, Salto & Github actions manage deployments  
  - Dev, Staging and Productions environments are standard

## Architecture / Implementation

- **Data Flow & Diagram**:  
  - See Flowcharts for before and after


