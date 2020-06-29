const {gql,ApolloServer} = require("apollo-server")
const typeDefs =`
  type Book{
    title: String
    author: String
    id: ID
  }
  type Query{
    books: [Book]
    book(id: ID!): Book
  }
`
const resolvers={
  Query: {
    books: ()=>books,
    book: (_, { id }) => books.find((book) => book.id == id),
  }
}
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    id: 1
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    id: 2
  },
];

const server = new ApolloServer({typeDefs,resolvers});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});