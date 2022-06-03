const { Contact } = require("../../models");

const getContactById = async (req, res, next) => {
  const id = req.params.contactId;
  const contact = await Contact.findById(id);
  if (contact) {
    return res.json({
      status: "success",
      code: 200,
      payload: { contact },
    });
  }
  return res.status(404).json({
    status: "error",
    code: 404,
    message: "Not Found",
  });
};

module.exports = getContactById;
