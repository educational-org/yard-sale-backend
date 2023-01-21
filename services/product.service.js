const faker = require('faker');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  async generate(){
    const limit = 100;

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id : faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(data){
    const newProduct = {
      id : faker.datatype.uuid(),
      ...data //split operation para concatenar valores que llegan.
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find(){
    return this.products;
  }

  async findOne(id){
    return this.products.find(item => item.id === id);
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id == id);
    if(index === -1){
      throw new Error('product not found');
    }
    const product = this.products[index];
    this.products[index] = { //nos quedamos con los datos que hayan en el producto y actualizamos los cambios
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id == id);
    if(index === -1){
      throw new Error('product not found');
    }
    this.products.splice(index,1); //elimina un elemento a partir de la posición index
    return { id };
  }
}
module.exports= ProductsService;
