const Products = require("../../models/eshopper/Products.model");
const Contacts = require("../../models/eshopper/Contacts.model");

const Home = async (req, res) => {
  try {
    const trandy_products = await new Products().latestProducts();

    res.json({
      trandy_products,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const AddContact = async (req, res) => {
  try {
    const contact = req.body;
    contact.seen = 0;
    const result = await new Contacts(contact).add();

    if (result.success) {
      return res.status(200).json(result);
    }

    return res.status(500).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  Home,
  AddContact,
};
