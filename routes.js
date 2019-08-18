const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const {mongourl} =require('./config/keys')
const Wish = require('./models/wish');
mongoose.connect(mongourl, {useNewUrlParser:true});

module.exports = (app) => {



    app.get('/home', (req, res) => {
        Wish.find({}).then(data =>{
            //send to react  js
            res.send(data);
            //rednder on nodejs
            // res.render('home', {
            //     mylist: data
            // })
        });
    })

    app.get('/', (req, res) => {
        Wish.find({}).then(data =>{
            res.render('home', {
                mylist: data
            })
        });
    })

    app.get('/about', (req, res) => {
        res.render('about')
    })

    

    
    app.post('/sent', (req, res) => {
        const Item = new Wish({
            fname: req.body.fname,
            lname: req.body.lname,
            hobby: req.body.hobby
        })
        Item.save().then(data =>{
            res.send('post');
        }).catch(err =>{
            throw err;
        })
    })

    app.delete('/remove/:id', (req, res)=>{
        console.log( req.params.id);
        Wish.findOneAndRemove({_id:req.params.id}).then(data =>{
            res.send(data);
        })
    })
}