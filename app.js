const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));   

PORT = 3000;
app.use(express.json())


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.post('/zodiacSign', function(req, res) {
    console.log(req.body);
    // CAPRICORN
    if (req.body.month == "December"){
        if (req.body.day >= 22 && req.body.day <= 31){
            res.sendFile('capricorn.html', {root: __dirname })
        }
    }
    if (req.body.month == "January"){
        if (req.body.day >= 1 && req.body.day <= 19){
            res.sendFile('capricorn.html', {root: __dirname })
        }
    }
    // AQUARIUS
    if (req.body.month == "January"){
        if (req.body.day >= 20 && req.body.day <= 31){
            res.sendFile('aquarius.html', {root: __dirname })
        }
    }
    if (req.body.month == "February"){
        if (req.body.day >= 1 && req.body.day <= 18){
            res.sendFile('aquarius.html', {root: __dirname })
        }
    }
    // PISCES
    if (req.body.month == "February"){
        if (req.body.day >= 19 && req.body.day <= 28){
            res.sendFile('pisces.html', {root: __dirname })
        }
    }
    if (req.body.month == "March"){
        if (req.body.day >= 1 && req.body.day <= 20){
            res.sendFile('pisces.html', {root: __dirname })        
        }
    }
    // ARIES
    if (req.body.month == "March"){
        if (req.body.day >= 21 && req.body.day <= 31){
            res.sendFile('aries.html', {root: __dirname }) 
        }
    }
    if (req.body.month == "April"){
        if (req.body.day >= 1 && req.body.day <= 19){
            res.sendFile('aries.html', {root: __dirname }) 
        }
    }
    // Taurus
    if (req.body.month == "April"){
        if (req.body.day >= 20 && req.body.day <= 30){
            res.sendFile('taurus.html', {root: __dirname }) 
        }
    }
    if (req.body.month == "May"){
        if (req.body.day >= 1 && req.body.day <= 20){
            res.sendFile('taurus.html', {root: __dirname }) 
        }
    }
    // Gemini
    if (req.body.month == "May"){
        if (req.body.day >= 21 && req.body.day <= 31){
            res.sendFile('gemini.html', {root: __dirname }) 
        }
    }
    if (req.body.month == "June"){
        if (req.body.day >= 1 && req.body.day <= 20){
            res.sendFile('gemini.html', {root: __dirname }) 
        }
    }
    // Cancer
    if (req.body.month == "June"){
        if (req.body.day >= 21 && req.body.day <= 30){
            res.sendFile('cancer.html', {root: __dirname })
        }
    }
    if (req.body.month == "July"){
        if (req.body.day >= 1 && req.body.day <= 22){
            res.sendFile('cancer.html', {root: __dirname })
        }
    }
    // Leo
    if (req.body.month == "July"){
        if (req.body.day >= 23 && req.body.day <= 31){
            res.sendFile('leo.html', {root: __dirname })
        }
    }
    if (req.body.month == "August"){
        if (req.body.day >= 1 && req.body.day <= 22){
            res.sendFile('leo.html', {root: __dirname })
        }
    }
    // Virgo
    if (req.body.month == "August"){
        if (req.body.day >= 23 && req.body.day <= 31){
            res.sendFile('virgo.html', {root: __dirname })
        }
    }
    if (req.body.month == "September"){
        if (req.body.day >= 1 && req.body.day <= 22){
            res.sendFile('virgo.html', {root: __dirname })
        }
    }
    // Libra
    if (req.body.month == "September"){
        if (req.body.day >= 23 && req.body.day <= 30){
            res.sendFile('libra.html', {root: __dirname })
        }
    }
    if (req.body.month == "October"){
        if (req.body.day >= 1 && req.body.day <= 22){
            res.sendFile('libra.html', {root: __dirname })
        }
    }
    // Scorpio
    if (req.body.month == "October"){
        if (req.body.day >= 23 && req.body.day <= 31){
            res.sendFile('scorpio.html', {root: __dirname })
        }
    }
    if (req.body.month == "November"){
        if (req.body.day >= 1 && req.body.day <= 21){
            res.sendFile('scorpio.html', {root: __dirname })
        }
    }
    // Sagittarius
    if (req.body.month == "November"){
        if (req.body.day >= 22 && req.body.day <= 30){
            res.sendFile('sagittarius.html', {root: __dirname })
        }
    }
    if (req.body.month == "December"){
        if (req.body.day >= 1 && req.body.day <= 21){
            res.sendFile('sagittarius.html', {root: __dirname })
        }
    }
});



//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.');