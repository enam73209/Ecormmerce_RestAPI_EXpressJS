const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');


router.get('/ProductBrandList',ProductController.ProductBrandList);
router.get('/ProductCategoryList')
router.get('/ProductSliderList')
router.get('/ProductListByBrand/:BrandID')
router.get('/ProductListByCategory/:CategoryID')
router.get('/ProductListBySmilier/:CategoryID')
router.get('/ProductListByKeyword/:Keyword')
router.get('/ProductListByRemark/:Remark')
router.get('/ProductDetails/:ProductID')
router.get('/ProductReviewList/:ProductID')

module.exports = router;