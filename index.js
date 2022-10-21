const fs=require("fs")

const productos= {
    title: "(nombre del producto)",
    price: "(precio)",
    thumbnail: "(url de la foto del producto)",
  };

  class Contenedor{
    constructor(archivo){
        this.archivo=archivo
    }
    

    async getById(id) {
        try {
          const resultPromise = await fs.promises.readFile(this.archivo, "utf-8");
          const results = await JSON.parse(resultPromise);
          return results.find((item) => item.id === id) || null;
        } catch (error) {
          throw new Error(error);
        }
      }

      async getAll() {
        try {
          const resultPromise = await fs.promises.readFile(this.archivo, "utf-8",);
          return await JSON.parse(resultPromise);
        } catch (error) {
          throw new Error(error);
        }
      }

      async deleteById(id) {
        try {
          const resultPromise = await fs.promises.readFile(this.archivo,"utf-8",);
          const results = await JSON.parse(resultPromise);
          const filterData = results.filter((item) => item.id !== id);
          await fs.promises.writeFile(this.archivo, JSON.stringify(filterData));
        } catch (error) {
          throw new Error(error);
        }
      }
      async deleteAll() {
        try {
          await fs.promises.writeFile(this.fileName, "[]");
        } catch (error) {
          throw new Error(error);
        }
      }
}
module.exports = Contenedor;