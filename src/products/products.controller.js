const express = require('express');
const router = express.Router();
const ProductsService = new (require('./products.service'));

router
    .get('/', (req, res) => {
        try {
            const prds = ProductsService.findAll().map(e => e.toPlainObject())
            res.json(prds)
        } catch (err) {
            console.log(err)
            res.statusCode = 500
            res.json({
                error: 'internal server error'
            })
        }
    })
    .get('/:id', (req, res) => {
        try {
            const { id } = req.params
            const prd = ProductsService.find(parseInt(id))
            res.json(prd.toPlainObject())
        } catch (err) {
            console.log(err)
            res.statusCode = 404
            res.json({
                error: 'producto no encontrado'
            })
        }
    })

    .post('/', (req, res) => {
        try {
            // console.log(req)
            const prd = req.body
            const addedPrd = ProductsService.add(prd)
            res.json(addedPrd.toPlainObject())
        } catch (err) {
            console.log(err)
            res.statusCode = 404
            res.send('error')
        }
    })
    .put('/:id', (req, res) => {
        try {
            const { id } = req.params
            const prd = req.body
            const editedPrd = ProductsService.edit(parseInt(id), prd)
            res.json(editedPrd.toPlainObject())
        } catch (err) {
            console.log(err)
            res.statusCode = 404
            res.json({
                error: 'producto no encontrado'
            })
        }
    })
    .delete('/:id', (req, res) => {
        try {
            const { id } = req.params
            const deleted = ProductsService.delete(parseInt(id))
            res.json(deleted)
        } catch (err) {
            console.log(err)
            res.statusCode = 404
            res.json({
                error: 'producto no encontrado'
            })
        }
    });


module.exports = router