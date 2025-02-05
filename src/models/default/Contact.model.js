const { DatabaseConnection } = require("../../config/index");

module.exports = class ContactModel {
  constructor(contact) {
    this.contact = contact;
  }

  AddContact() {
    const { name, email, phone, message } = this.contact;

    return new Promise((resolve, reject) => {
      DatabaseConnection()
        .run(
          "INSERT INTO `contact_us` (`name`,`email`,`phone`,`message`) VALUES(?,?,?,?)",
          [name, email, phone, message],
          function (err) {
            if (err) reject(err);
            resolve();
          }
        )
        .close();
    });
  }
};
