'use strict';
const { userModel,seedUserData } = require('../models/user.model');

const getCats=(req,res)=>{
    const { email } = req.query;
    // res.send('seeded')
    // it will return a list of objects from the db
    // userModel.find()
    // it will return a single object
    userModel.findOne({ email: email }, (error, user) => {
        // if (error) {
        //     res.send(error)
        // } 
            res.json(user.cats)

    });
}

const createCat=(req,res)=>{
    const { userEmail, catName } = req.body;
    userModel.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            res.send(error)
        } 
        // here we are going to add the new cat
        const newCat={ name: catName }
        userData.cats.push(newCat);
        userData.save();
        res.json(userData);

    })
}

// http://localhost:8000/update-cat/1
const updateCat=(req,res)=>{

    const catIndex = req.params.cat_id;
    const { userEmail, catName } = req.body;
    userModel.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            res.send(error)
        } else {
            userData.cats.splice(catIndex, 1, { name: catName });
            userData.save();
            res.send(userData.cats);
        }
    });
}

const deleteCat=(req,res)=>{

    const catIndex = req.params.cat_idx;
    const { email } = req.query;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            res.send(error)
        } else {
            userData.cats.splice(catIndex, 1);
            userData.save();
            res.send(userData.cats);
            // res.send('cat deleted')
        }

    });
}

module.exports={
    getCats,
    createCat,
    updateCat,
    deleteCat
}