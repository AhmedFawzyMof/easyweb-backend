const servicesModel = require("../../models/alhayatgroup/services.model");
const booking = require("../../models/alhayatgroup/booking.model");
const contacts = require("../../models/alhayatgroup/contacts.model");

function EngOrAr(req) {
  let eng = req.cookies.eng;
  if (eng) {
    return JSON.parse(eng);
  } else {
    return false;
  }
}

const controller = {
  GetHomePage: async function (req, res) {
    const services = await servicesModel.GetHomeServices();
    const eng = EngOrAr(req);

    res.render("alhayatgroup/index", {
      services: services,
      eng: eng,
    });
  },
  GetDetailsPage: async function (req, res) {
    const slug = req.params.slug;

    const service = await servicesModel.GetServiceBySlug(slug);

    const eng = EngOrAr(req);

    res.render("alhayatgroup/service-details", { service: service, eng: eng });
  },
  BookFromService: async function (req, res) {
    const book = req.body;

    const success = await booking.AddBooking(book);

    if (success) {
      res.redirect("/elhayatgroup");
      return;
    }
    res.status(500).json({
      message: "Something went wrong",
    });
  },
  ContactPage: function (req, res) {
    const eng = EngOrAr(req);

    res.render("alhayatgroup/contact-us", { eng: eng });
  },
  AboutPage: function (req, res) {
    const eng = EngOrAr(req);

    res.render("alhayatgroup/about-us", { eng: eng });
  },
  GetServices: async function (req, res) {
    const Services = await servicesModel.GetAllServices();
    const eng = EngOrAr(req);

    res.render("alhayatgroup/services", { services: Services, eng: eng });
  },
  GetBookingPage: async function (req, res) {
    const Services = await servicesModel.GetAllServices();
    const eng = EngOrAr(req);

    res.render("alhayatgroup/booking", { services: Services, eng: eng });
  },
  SetLang: (req, res) => {
    const lang = req.params.lang;
    if (lang == "en") {
      res.cookie("eng", "true");
    } else {
      res.cookie("eng", "false");
    }

    res.redirect("/elhayatgroup");
  },
  ContactUs: async (req, res) => {
    try {
      const contact = req.body;

      await contacts.AddContacts(contact);

      res.redirect("/elhayatgroup");
    } catch (err) {
      console.error(err);
      res.send(500).redirect("/elhayatgroup");
    }
  },
};

module.exports = controller;
