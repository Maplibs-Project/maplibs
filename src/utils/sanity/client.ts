import { createClient } from "@sanity/client"

export const client = createClient({
   projectId: "qehqwwrj", 
   dataset: "production", 
   apiVersion: "2024-03-11",
   token: process.env.SANITY_API_TOKEN,
   // Set to `true` for production environments
   useCdn: false, 
})
