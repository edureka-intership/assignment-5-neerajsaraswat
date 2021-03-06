const express = require('express');

// importing all the controller components
var CityListController = require('../Controllers/City');
var RestaurantController = require('../Controllers/Restaurants');
var MealtypeController = require('../Controllers/Mealtype');

// initializing the express router
const router = express.Router();

// register all the routes
router.get('/getCityList',CityListController.getCityList);
router.get('/getRestaurantByCityName/:cityname', RestaurantController.getRestaurantByCityName);
router.get('/getMealtypes', MealtypeController.getMealtypes);

// export the routes
module.exports = router;