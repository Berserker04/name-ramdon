const People = require("../models/tbl_people");

const list = (req, res) => {
  const people = People.find({});
  res.json(people);
};

const add = async (req, res) => {
  const total = await People.find({});
  req.body.number = total.length + 1; 
  console.log("ell chco === ",req.body);
  const people = new People(req.body);
  people.save((err, data) => {
    if (err) {
      res.json({
        ok: false,
      });
    }
    res.json({
      ok: true,
      data,
    });
  });
};

const update = (req, res) => {
  People.updateOne({ _id: req.params.id }, req.body, (err, data) => {
    if (err) {
      res.json({
        ok: false,
      });
    }
    res.json({
      ok: true,
      data,
    });
  });
};

const del = (req, res) => {
  People.remove({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.json({
        ok: false,
      });
    }
    res.json({
      ok: true,
      data,
    });
  });
};

module.exports = {
  list,
  add,
  update,
  del,
};
