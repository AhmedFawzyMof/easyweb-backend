const Offers = require("../../models/eshopper/Offers.model");
const Categories = require("../../models/eshopper/Categories.model");
const Products = require("../../models/eshopper/Products.model");

const ProductByCategory = async (req, res) => {
  try {
    const { id, limit } = req.params;
    const products = await new Products({
      category: id,
      limit: limit,
    }).byCategory();

    res.json({
      products: products,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const AllCategory = async (req, res) => {
  try {
    const categories = await Categories.getAll();
    const offers = await Offers.getAll();

    res.json({
      categories,
      offers,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  ProductByCategory,
  AllCategory,
};
