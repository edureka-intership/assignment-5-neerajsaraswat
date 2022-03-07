const City = require('../Models/City.json'); 

// the city json data is imported from models

// API for getCityList function is used to get all cities

exports.getCityList = (req,res) =>{
    const result = City.map(item => item.name);
    res.status(200).json({
        message : 'City list loaded successfully',
        city: result
    })
}