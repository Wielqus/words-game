var checkWord = require('check-word'),
words     = checkWord('en');

var randomWords = require('random-words');

exports.checkWord=(req,res,next)=>{
    res.json({ exist: words.check(req.body.ansver.toLowerCase()) });
    res.send();
}
exports.createWord=(req,res,next)=>{
    res.json({ word:randomWords({exactly: 1,maxLength:6}) });
    res.send();
}