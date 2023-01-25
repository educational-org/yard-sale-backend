const { models } = require('./../libs/sequelize');


class CategoryService {

  constructor(){
  }
  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find(){
    const categories = await models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id,{
      include:['products'] //para mostrar los productos relacionados
    });
    return category;
  }

  async update(id, changes) {
    const cateogry = await this.findOne(id) //filstramos en la base datos el usuario por id
    const response = await cateogry.update(changes);  //realizamos el cambio con los datos nuevos.
    return response;
  }

  async delete(id) {
    const category = await this.findOne(id);
    const response = await category.destroy();
    return response;
  }

}

module.exports = CategoryService;
