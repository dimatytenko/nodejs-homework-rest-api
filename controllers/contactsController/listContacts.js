const { Contact } = require("../../models");

const listContacts = async (req, res, next) => {
  const contacts = await Contact.find({});
  res.json({
    status: "success",
    code: 200,
    payload: { contacts },
  });
};

module.exports = listContacts;
