const router = require('express').Router();
let Entry = require('../models/entry.model');

router.route('/').get((req, res) => {
  Entry.find()
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const entry = req.body.entry;

  const newEntry = new Entry({entry});

  newEntry.save()
    .then(() => res.json('Entry added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Entry.findById(req.params.id)
    .then(entry => res.json(entry))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Entry.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Entry.findById(req.params.id)
    .then(entry => {
      entry.body = req.body.entry;

      entry.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;