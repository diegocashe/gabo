const express = require('express');
const router = express.Router();
const cors = require('cors');

router
    .get('/*', cors(), (req, res) => {
        try {
            // // console.log(typeof req.body)
            // // // console.log(req.body)
            // console.log(JSON.stringify(req.body))
            res.send(req.body)
        } catch (err) {
            console.log(err)
            res.send('error')
        }
    })

    .post('/*', cors(), (req, res) => {
        try {
            console.log(typeof req.body)
            // console.log(req.body)
            console.log(JSON.stringify(req.body))
            res.send(req.body)
        } catch (err) {
            console.log(err)
            res.send('error')
        }
    })
    .put('/*', cors(), (req, res) => {
        try {
            console.log(typeof req.body)
            // console.log(req.body)
            console.log(JSON.stringify(req.body))
            res.send(req.body)
        } catch (err) {
            console.log(err)
            res.send('error')
        }
    })
    .delete('/*', cors(), (req, res) => {
        try {
            console.log(typeof req.body)
            // console.log(req.body)
            console.log(JSON.stringify(req.body))
            res.send(req.body)
        } catch (err) {
            console.log(err)
            res.send('error')
        }
    });

module.exports = router


