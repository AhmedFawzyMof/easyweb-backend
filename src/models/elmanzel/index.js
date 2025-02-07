const { ElManzelConnection } = require("../../utils/databaseConection");

const model = {
  Product: {
    getAllProduct: async (limit) => {
      try {
        let oldLimit = 0;

        if (limit > 20) {
          oldLimit = Math.floor(limit / 2);
        }

        const stableLimit = 20;

        return await new Promise((resolve, reject) => {
          ElManzelConnection().all(
            `
              SELECT Products.id, Products.name, Products.category, Products.nameAr, Products.description, Products.descriptionAr, Products.price, Products.discount, ProductImages.image 
              FROM Products 
              INNER JOIN ProductImages ON Products.id = ProductImages.product 
              GROUP BY Products.id 
              ORDER BY Products.discount DESC 
              LIMIT ?,?`,
            [oldLimit, stableLimit],
            (err, results) => {
              if (err) reject(err);
              resolve(results);
            }
          );
        });
      } catch (error) {
        console.error(error);
        throw new Error("error while processing products");
      } finally {
        ElManzelConnection().close();
      }
    },
    productsByCategorys: async (id, limit) => {
      try {
        let oldLimit = 0;
        if (limit > 20) {
          oldLimit = Math.floor(limit / 2);
        }
        const stableLimit = 20;

        return await new Promise((resolve, reject) => {
          ElManzelConnection().all(
            `
                SELECT Products.id, Products.name, Products.nameAr, Products.description, Products.descriptionAr, Products.price, Products.discount, ProductImages.image 
                FROM Products 
                INNER JOIN ProductImages ON Products.id = ProductImages.product 
                WHERE Products.category = ? 
                GROUP BY Products.id 
                LIMIT ?,?`,
            [id, oldLimit, stableLimit],
            (err, result) => {
              if (err) reject(err);
              resolve(result);
            }
          );
        });
      } catch (error) {
        console.error(error);
        throw new Error("error while processing products");
      } finally {
        ElManzelConnection().close();
      }
    },
    productsBySearch: async (search, limit) => {
      try {
        let oldLimit = 0;
        if (limit > 20) {
          oldLimit = Math.floor(limit / 2);
        }
        const stableLimit = 20;

        return await new Promise((resolve, reject) => {
          ElManzelConnection().all(
            `
          SELECT Products.id, Products.name, Products.nameAr, Products.description, Products.descriptionAr, Products.price, Products.discount, ProductImages.image 
          FROM Products 
          INNER JOIN ProductImages ON Products.id = ProductImages.product 
          WHERE Products.name LIKE ? OR Products.description LIKE ? 
          GROUP BY Products.id 
          LIMIT ?,?`,
            [`%${search}%`, `%${search}%`, oldLimit, stableLimit],
            (err, result) => {
              if (err) reject(err);
              resolve(result);
            }
          );
        });
      } catch (error) {
        console.error(error);
        throw new Error("error while processing products");
      } finally {
        ElManzelConnection().close();
      }
    },
    productByOffer: async (subcategory, limit) => {
      try {
        let oldLimit = 0;
        if (limit > 20) {
          oldLimit = Math.floor(limit / 2);
        }
        const stableLimit = 20;

        return await new Promise((resolve, reject) => {
          ElManzelConnection().all(
            `
          SELECT Products.id, Products.name, Products.nameAr, Products.description, Products.descriptionAr, Products.price, Products.discount, ProductImages.image 
          FROM Products 
          INNER JOIN ProductImages ON Products.id = ProductImages.product 
          WHERE Products.subcategory = ? AND Products.discount > 0  
          GROUP BY Products.id 
          ORDER BY Products.discount DESC 
          LIMIT ?,?`,
            [subcategory, oldLimit, stableLimit],
            (err, result) => {
              if (err) reject(err);
              resolve(result);
            }
          );
        });
      } catch (error) {
        console.error(error);
        throw new Error("error while processing products");
      } finally {
        ElManzelConnection().close();
      }
    },
    productsBySubCategorys: async (id, limit) => {
      try {
        let oldLimit = 0;
        if (limit > 20) {
          oldLimit = Math.floor(limit / 2);
        }
        const stableLimit = 20;

        return await new Promise((resolve, reject) => {
          ElManzelConnection().all(
            `
              SELECT Products.id, Products.name, Products.nameAr, Products.description, Products.descriptionAr, Products.price, Products.discount, ProductImages.image
              FROM Products
              INNER JOIN ProductImages ON Products.id = ProductImages.product
              WHERE Products.subcategory = ?
              GROUP BY Products.id
              LIMIT ?,?`,
            [id, oldLimit, stableLimit],
            (err, result) => {
              if (err) reject(err);
              resolve(result);
            }
          );
        });
      } catch (error) {
        console.error(error);
        throw new Error("error while processing products");
      } finally {
        ElManzelConnection().close();
      }
    },
    productById: async (id) => {
      try {
        return await new Promise((resolve, reject) => {
          ElManzelConnection().all(
            `
          SELECT Products.id, Products.name, Products.nameAr, Products.description, Products.descriptionAr, Products.price, Products.discount, Products.warranty, Products.brand, Products.material, ProductImages.image, ProductImages.color
          FROM Products
          INNER JOIN ProductImages ON Products.id = ProductImages.product
          WHERE Products.id = ?`,
            [id],
            (err, results) => {
              if (err) reject(err);
              resolve(results);
            }
          );
        });
      } catch (error) {
        console.error(error);
        throw new Error("error while processing product");
      }
    },
  },
  SubCategory: {
    getSubCategoryById: async (id) => {
      try {
        return await new Promise((resolve, reject) => {
          ElManzelConnection().get(
            "SELECT * FROM SubCategory WHERE id = ?",
            [id],
            (err, result) => {
              if (err) reject(err);
              resolve(result);
            }
          );
        });
      } catch (error) {
        console.error(error);
        throw new Error("error while processing subcategories");
      } finally {
        ElManzelConnection().close();
      }
    },
    getHomeSubCategory: async () => {
      try {
        return await new Promise((resolve, reject) => {
          ElManzelConnection().all(
            `
          SELECT sc.id, sc.name, sc.nameAr, sc.category, c.name AS categoryName, c.nameAr AS categoryNameAr, sc.img 
          FROM (
            SELECT *, ROW_NUMBER() OVER(PARTITION BY category ORDER BY id) as rn 
            FROM SubCategory
          ) AS sc 
          JOIN Categories c ON sc.category = c.id 
          WHERE sc.rn <= 4
        `,
            [],
            (err, results) => {
              if (err) reject(err);
              resolve(results);
            }
          );
        });
      } catch (error) {
        console.error(error);
        throw new Error("error while processing subcategories");
      } finally {
        ElManzelConnection().close();
      }
    },
    getSubCategoryByCategory: async (categoryId) => {
      try {
        return await new Promise((resolve, reject) => {
          ElManzelConnection().all(
            "SELECT * FROM SubCategory WHERE category = ?",
            [categoryId],
            (err, results) => {
              if (err) reject(err);
              resolve(results);
            }
          );
        });
      } catch (error) {
        console.error(error);
        throw new Error("error while processing subcategories");
      } finally {
        ElManzelConnection().close();
      }
    },
    getAllSubCategory: async () => {
      try {
        return new Promise(async (resolve, reject) => {
          ElManzelConnection().all(
            `
            SELECT sc.id, sc.name, sc.nameAr, sc.category, c.name AS categoryName, c.nameAr AS categoryNameAr, sc.img 
            FROM (
              SELECT *, ROW_NUMBER() OVER(PARTITION BY category ORDER BY id) as rn 
              FROM SubCategory
            ) AS sc 
            JOIN Categories c ON sc.category = c.id 
            ORDER BY sc.id
          `,
            [],
            (err, results) => {
              if (err) reject(err);
              resolve(results);
            }
          );
        });
      } catch (error) {
        console.error(error);
        throw new Error("error while processing subcategories");
      }
    },
  },
  Category: {
    getAllCategories: async () => {
      try {
        return await new Promise((resolve, reject) => {
          ElManzelConnection().all(
            "SELECT * FROM Categories",
            [],
            (err, results) => {
              if (err) reject(err);
              resolve(results);
            }
          );
        });
      } catch (error) {
        console.error("Error in getAllCategories:", error);
        throw new Error("Error while processing categories");
      } finally {
        ElManzelConnection().close();
      }
    },
    getCategoryById: async (categoryId) => {
      try {
        return await new Promise((resolve, reject) => {
          ElManzelConnection().get(
            "SELECT * FROM Categories WHERE name = ?",
            [categoryId],
            (err, result) => {
              if (err) reject(err);
              resolve(result);
            }
          );
        });
      } catch (error) {
        console.error("Error in getCategoryById:", error);
        throw new Error("error while prossing categories");
      } finally {
        ElManzelConnection().close();
      }
    },
  },
  Offers: {
    getAllOffers: async () => {
      try {
        return await new Promise((resolve, reject) => {
          ElManzelConnection().all(
            "SELECT * FROM Offers",
            [],
            (err, results) => {
              if (err) reject(err);
              resolve(results);
            }
          );
        });
      } catch (error) {
        console.error("Error in getAllOffers:", error);
        throw new Error("error while prossing offers");
      } finally {
        ElManzelConnection().close();
      }
    },
  },
  Carousel: {
    getHomeCarousel: async () => {
      try {
        return await new Promise((resolve, reject) => {
          ElManzelConnection().all(
            "SELECT * FROM Carousel",
            [],
            (err, results) => {
              if (err) reject(err);
              resolve(results);
            }
          );
        });
      } catch (error) {
        console.error("Error in getHomeCarousel:", error);
        throw new Error("Error while processing Carousel images");
      } finally {
        ElManzelConnection().close();
      }
    },
  },
};

module.exports = model;
