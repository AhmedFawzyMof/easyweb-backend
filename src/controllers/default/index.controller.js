const ProjectModel = require("../../models/default/Project.model");
const ContactModel = require("../../models/default/Contact.model");

const HomePage = async (req, res) => {
  if (!req.cookies.lang) {
    res.cookie("lang", "ar", { maxAge: 1000 * 60 * 60 * 24 * 30 });
  }
  const Projects = await new ProjectModel().GetProjects();
  res.render("index", { projects: Projects, lang: req.cookies.lang });
};

const AddContact = async (req, res) => {
  const { name, email, phone, message } = req.body;
  await new ContactModel({ name, email, phone, message }).AddContact();
  res.redirect("/");
};

const ChangeLang = async (req, res) => {
  const path = req.url;
  if (path == "/en") {
    res.cookie("lang", "en", { maxAge: 1000 * 60 * 60 * 24 * 30 });
  }
  if (path == "/ar") {
    res.cookie("lang", "ar", { maxAge: 1000 * 60 * 60 * 24 * 30 });
  }
  res.redirect("/");
};

module.exports = {
  HomePage,
  AddContact,
  ChangeLang,
};
