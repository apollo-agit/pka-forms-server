express = require('express');
var wsRouter = express.Router(); 

mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rebel');
PkaForm = require('../model/form-model');


wsRouter.route('/pkaform/id/:id')
    .get(function (req, res) {
        PkaForm.findById(req.params.id, function (err, episodes){
          if(err) res.status(500).send('ERR->' + err); else res.json(episodes);  
        });    
    });

wsRouter.route('/pkaform/')
    .get(function (req, res) {
        PkaForm.find(function (err, episodes){
          if(err) res.status(500).send('ERR->' + err); else res.json(episodes);  
        });    
    })
    .post(function (req, res) {
         new PkaForm(req.body).save(function(err, episode) {
                if(err) res.status(500).send('ERR->' + err);
                else res.json(episode);
    });
});



    

module.exports = wsRouter;