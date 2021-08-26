
const userResolvers = {
  Query: {
    products: (root, args, { dataSources }) => dataSources.usersAPI.getProducts()
  }
}

export default userResolvers;
