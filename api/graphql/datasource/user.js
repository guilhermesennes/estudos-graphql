import { RESTDataSource } from 'apollo-datasource-rest';

class UsersAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://lojausereserva.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fq=skuId:37652'
  }

  async getProducts() {
    const products = await this.get('/search?fq=skuId:37652')
    return products.map(async product => ({
      productId: product.productId,
      productName: product.productName,
      link: product.link
    }))
  }
}

export default UsersAPI;