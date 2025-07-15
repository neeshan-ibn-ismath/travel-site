// import { makeExecutableSchema } from '@graphql-tools/schema'
// import { gql } from 'graphql-request'
// import postgraphileClient from '../lib/postgraphile';

// const typeDefs = /* GraphQL */ `
//   type FunctionResult {
//     id: Int!
//     result: String!
//   }

//   type ViewItem {
//     id: Int!
//     name: String!
//     value: Int!
//   }

//   type Query {
//     getFunctionResults: [FunctionResult!]!
//     getViewItems: [ViewItem!]!
//   }
// `

// const resolvers = {
//   Query: {
//     getFunctionResults: async () => {
//       const query = gql`
//         query {
//           myFunction {
//             id
//             result
//           }
//         }
//       `
//       const data = await postgraphileClient.request(query)
//       return data.myFunction
//     },

//     getViewItems: async () => {
//       const query = gql`
//         query {
//           myCustomView {
//             nodes {
//               id
//               name
//               value
//             }
//           }
//         }
//       `
//       const data = await postgraphileClient.request(query)
//       return data.myCustomView.nodes
//     },
//   },
// }

// export const schema = makeExecutableSchema({ typeDefs, resolvers })
