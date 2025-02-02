const Products = require("../../models/eshopper/Products.model");
const Categories = require("../../models/eshopper/Categories.model");
const Sizes = require("../../models/eshopper/Sizes.model");

const ProductById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const product = await new Products({ id }).byId();
    const sizes = await new Sizes({ product_id: id }).byProduct();
    const category_products = await new Products({
      category: product.category,
    }).byProductCategory();

    res.json({ product: product, sizes: sizes, category_products });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const ProductsBySearch = async (req, res) => {
  try {
    const query = req.body.query;
    const products = await Products.bySearch({ query });
    res.json({ products: products });
  } catch (err) {
    console.error(err);
  }
};

const ProductsFilter = async (req, res) => {
  try {
    const { category, size, price, limit } = req.body;
    const products = await new Products({
      category: Number(category),
      size: Number(size),
      price,
      limit: Number(limit),
    }).byFilter();
    const categories = await Categories.getAll();
    const sizes = await Sizes.getAll();

    res.json({ products: products, categories: categories, sizes: sizes });
  } catch (err) {
    console.error(err);
  }
};

const AllProducts = async (req, res) => {
  try {
    const limit = Number(req.params.limit);
    const products = await Products.getAll({ limit });
    const categories = await Categories.getAll();
    const sizes = await Sizes.getAll();

    res.json({ products: products, categories: categories, sizes: sizes });
  } catch (err) {
    console.error(err);
  }
};

const CartProducts = async (req, res) => {
  try {
    const products_ids = req.body.products;
    const products = await new Products({ products: products_ids }).forCart();
    res.json({ products: products });
  } catch (err) {
    console.error(err);
  }
};

const ProductBySearch = async (req, res) => {
  try {
    const { query, limit } = req.params;

    const products = await new Products({ query, limit }).bySearch();
    res.json({ products: products });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  ProductById,
  ProductsBySearch,
  ProductsFilter,
  AllProducts,
  CartProducts,
  ProductBySearch,
};
