const connection = require("../connection");

module.exports = {
  async create (req, res) {
    const { name, age } = req.body;

    await connection("people").insert({ name: name, age: age });

    return res.status(201).send();
  },

  async index(req, res) {
    const people = await connection
    .select("*")
    .from("people");

    return res.json({people});
  },

  async delete (req, res) {
    const { id } = req.params;

    await connection("people").where({ id: id }).del();

    return res.status(200).send();
  }
}