const express=require('express')
const orderControllers=require('../controllers/order')
const router=express.Router()

router.post('/paywith-razorpay',orderControllers.payWithRazorpay)
router.post('/paywith-stripe',orderControllers.payWithStripe)

module.exports=router