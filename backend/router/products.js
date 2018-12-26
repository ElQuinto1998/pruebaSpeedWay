const express = require('express');
const router = express.Router();

const Prod = require('../model/products');

router.get('/', async (req, res) => {

    await Prod.find()
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            res.json(err)
        });

});

router.get('/:code', async (req, res) => {

    var { code } = req.params;

    await Prod.findOne({ code_ref: code })
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json(err);
        })

});

router.post('/add', async (req, res) => {
    
    const product = new Prod(req.body);
    await product.save();

});

router.delete('/delete/:code', async (req, res) => {
    const { code } = req.params;
    await Prod.remove({code_ref:code});
});


module.exports = router;
