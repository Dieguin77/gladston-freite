import { createClient } from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'eat9cs7j', // Seu ID correto
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})