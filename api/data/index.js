import { ApolloServer } from 'apollo-server'
import userSchema from '../graphql/schema/user.gql'
import userResolvers from '../graphql/resolvers/userResolvers'
import UsersAPI from '../graphql/datasource/user'

const typeDefs = [userSchema]
const resolvers = [userResolvers]

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI()
    }
  }

});

server.listen().then(({url}) => {
  console.log(`Servidor rodando na porta ${url}`)
})