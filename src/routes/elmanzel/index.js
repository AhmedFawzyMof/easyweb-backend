const express = require("express");
const router = express.Router();
const models = require("../../models/elmanzel/index");

router.get("/home", async (req, res) => {
  try {
    const subCategories = await models.SubCategory.getAllSubCategory();
    const offers = await models.Offers.getAllOffers();
    const carousels = await models.Carousel.getHomeCarousel();

    const response = {
      SubCategories: subCategories,
      Offers: offers,
      Carousels: carousels,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error in home route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/product/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    const product = await models.Product.productById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error in /product/:id route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/allproducts/:limit", async (req, res) => {
  try {
    const limit = parseInt(req.params.limit);

    if (isNaN(limit)) {
      return res.status(400).json({ error: "Invalid limit" });
    }

    const products = await models.Product.getAllProduct(limit);

    const categories = await models.Category.getAllCategories();

    const response = {
      Products: products,
      Categories: categories,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error in /products/:limit route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/products/search/:limit", async (req, res) => {
  try {
    const limit = parseInt(req.params.limit);

    if (isNaN(limit)) {
      return res.status(400).json({ error: "Invalid limit" });
    }

    const searchTerm = req.body.search;

    if (!searchTerm) {
      return res
        .status(400)
        .json({ error: "Search term is required in the request body" });
    }

    const products = await models.Product.searchProducts(searchTerm, limit);

    res.status(200).json(products);
  } catch (error) {
    console.error("Error in /products/search/:limit route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/offer/:subcategory/:limit", async (req, res) => {
  try {
    const subcategory = parseInt(req.params.subcategory);
    const limit = parseInt(req.params.limit);

    if (isNaN(subcategory)) {
      return res.status(400).json({ error: "Invalid subcategory ID" });
    }
    if (isNaN(limit)) {
      return res.status(400).json({ error: "Invalid limit" });
    }

    const products = await models.Product.getProductsByOffer(
      subcategory,
      limit
    );

    const response = {
      Products: products,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error in /productbyoffer/:subcategory/:limit route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/subcategory/:id/:limit", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const limit = parseInt(req.params.limit);

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid subcategory ID" });
    }
    if (isNaN(limit)) {
      return res.status(400).json({ error: "Invalid limit" });
    }

    const subCategory = await models.SubCategory.getSubCategoryById(id);

    const products = await models.Product.productsBySubCategorys(
      subCategory.id,
      limit
    );

    const response = {
      SubCategory: subCategory,
      Products: products,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error in /subcategory/:id/:limit route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/categories", async (req, res) => {
  try {
    const subCategories = await models.SubCategory.getAllSubCategory();

    const response = { SubCategories: subCategories };
    res.status(200).json(response);
  } catch (error) {
    console.error("Error in /category route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/allcategories", async (req, res) => {
  try {
    const categories = await models.Category.getAllCategories();

    const response = { Categories: categories };
    res.status(200).json(response);
  } catch (error) {
    console.error("Error in /categories route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/category/:name/:limit", async (req, res) => {
  try {
    const name = req.params.name;
    const limit = parseInt(req.params.limit);

    if (isNaN(limit)) {
      return res.status(400).json({ error: "Invalid limit" });
    }
    const category = await models.Category.getCategoryById(name);

    const products = await models.Product.productsByCategorys(
      category.id,
      limit
    );
    const subCategories = await models.SubCategory.getSubCategoryByCategory(
      category.id
    );

    const response = {
      Category: category,
      Products: products,
      SubCategories: subCategories,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error in /category/:id/:limit route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
