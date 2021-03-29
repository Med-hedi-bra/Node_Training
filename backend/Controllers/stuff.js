const Thing = require("../Model/things");
exports.createThing = (req, res, next) => {
    delete req.body._id;
    let thingss = new Thing({
      ...req.body,
    });
    thingss
      .save()
      .then(() => res.status(202).json({ message: "l'objet a été bien creré" }))
      .catch((err) => res.status(402).json({ err }));
  }

  exports.modifyThing = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => {
        res.status(201).json({ message: "l'objet a été modifié" });
      })
      .catch((err) => {
        res.status(403).json({ err });
      });
  }
  exports.findThing = (req, res, next) => {
    Thing.find()
      .then((thing) => res.status(200).json(thing))
      .catch((err) => res.status(405).json({ message: err }));
  }
  exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(201).json({ message: "lobjet a ete suprimer" }))
      .catch((err) => res.status(405).json({ err }));
  }
  exports.findOneThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
      .then((think) => res.status(200).json(think))
      .catch((err) => {
        res.status(403).json(err);
      });
  }