import { GraphQLClient } from 'graphql-request'

interface IRequest {
  query: string
  variables?: Record<string, unknown>
  preview?: boolean
}

export function request({ query, variables, preview }: IRequest) {
  console.log(`API_TOKEN: ${process.env.NEXT_PUBLIC_DATOCMS_TOKEN}`)
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_TOKEN}`
    }
  })
  return client.request(query, variables)
}
