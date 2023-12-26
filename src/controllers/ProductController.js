const {BrandListService, CategoryListService} = require('../services/ProductServices');

exports.ProductBrandList=async(req,res)=>{
    let result=await BrandListService();
    return res.status(200).json(result)
}

exports.ProductCategoryList=async(req,res)=>{
    let result=await CategoryListService();
    return res.status(200).json(result)
}