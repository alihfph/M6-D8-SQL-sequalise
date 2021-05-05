const express = require("express");
const Tutor = require("../../db").Tutor;
const Module = require("../../db").Module;
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    const data = await Tutor.findAll();
    res.send(data);
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Tutor.create(req.body);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    const data = await Tutor.findByPk(req.params.id);
    res.send(data);
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .put(async (req, res, next) => {
    const data = await Tutor.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    console.log(data);
    res.send(data[1][0]);
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const data = await Tutor.destroy({ where: { id: req.params.id } });
      console.log(data);
      if (data > 0) {
        res.send("ok");
      } else {
        res.status(404).send("Not Found");
      }
    } catch (e) {
      console.log(e);
    }
  });

module.exports = router;
