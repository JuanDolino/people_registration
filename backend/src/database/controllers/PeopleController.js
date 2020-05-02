const connection = require("../connection");

module.exports = {
  async create (req, res) {
    const { name, age } = req.body;

    await connection("people").insert({ name: name, age: age });

    return res.status(201).send();
  },

  async index(req, res) {
    const { page = 1 } = req.query;

    const [ count ] = await connection("people").count();

    const people = await connection
    .limit(5)
    .offset((page - 1) * 5)
    .select("*")
    .from("people");

    res.header("X-Total-Count", count['count(*)']);

    return res.json({people});
  },

  async delete (req, res) {
    const { id } = req.params;

    await connection("people").where({ id: id }).del();

    return res.status(200).send();
  }
}