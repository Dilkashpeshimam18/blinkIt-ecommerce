const Razorpay = require('razorpay')
const Stripe=require('stripe')
const path = require('path');
require('dotenv').config()
const stripe=Stripe(process.env.STRIPE_KEY_SECRET)


exports.payWithRazorpay = async (req, res) => {
    try {
        const { amount } = req.body
        const smallestUnitAmount = amount * 100;
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        })
        const order = await razorpay.orders.create({ amount: smallestUnitAmount, currency: 'INR' })
        res.status(200).json({ order, key_id: razorpay.key_id })


    } catch (err) {
        console.log(err)
        res.status(403).json({ success: false, error: err })

    }
}

exports.payWithStripe = async (req, res) => {
    try {
        const data=req.body
        const line_items=data.products.map((product)=>{
          return{
            price_data: {
                currency: 'inr',
                product_data: {
                  name: product.title,
                  images:[product.img],
                  metadata:{
                    id:product.id
                  }
                },
                unit_amount: product.price*100,
              },
              quantity: product.quantity,
          }
        })

        const session = await stripe.checkout.sessions.create({
            shipping_address_collection:{"allowed_countries": ['IN']},
            shipping_options:[
              {
                "shipping_rate_data": {
                  "type": "fixed_amount",
                  "fixed_amount": {"amount": 0, "currency": "inr"},
                  "display_name": "Free shipping",
                  "delivery_estimate": {
                    "minimum": {"unit": "business_day", "value": 5},
                    "maximum": {"unit": "business_day", "value": 7},
                  },
                },
              },
              {
                "shipping_rate_data": {
                  "type": "fixed_amount",
                  "fixed_amount": {"amount": 1500, "currency": "inr"},
                  "display_name": "Next day air",
                  "delivery_estimate": {
                    "minimum": {"unit": "business_day", "value": 1},
                    "maximum": {"unit": "business_day", "value": 1},
                  },
                },
              },
            ],
            line_items,
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/order/checkout-success`,
            cancel_url: `${process.env.CLIENT_URL}/order/checkout-failed`,
          });
      
          res.json({url:session.url});
    } catch (err) {
        console.log(err)
        res.status(403).json({ success: false, error: err })

    }
}

exports.checkoutSuccess=(req,res)=>{
  const successFilePath = path.join(__dirname,'..' ,'public', 'success.html');
  res.sendFile(successFilePath);

}

exports.checkoutFailed=(req,res)=>{
  const cancelFilePath = path.join(__dirname, 'public', 'failed.html');
  res.sendFile(cancelFilePath);
}