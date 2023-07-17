const { default: axios } = require("axios")
require("dotenv").config();


const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;

const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET

const PAYPAL_API ="https://api-m.sandbox.paypal.com"






const createOrder = async(req, res)=> {

const { suma } = req.body

  try{
    const order = {
      intent:"CAPTURE",
      purchase_units:[
          {
              amount:{
                  currency_code: "USD",
                  value:suma
              }

          },
      ],

      application_context:{
          brand_name:"Garcia Store",
          landing_page:"NO_PREFERENCE",
          user_action:"PAY_NOW",
          return_url: captureOrder,
          cancel_url: deleteOrder

      }
    }
    const params= new URLSearchParams();
    params.append('grant_type', 'client_credentials')
    console.log(params.append)

    const {data: {access_token}}=await axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', params,{
    auth:{
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET

    }

    })


    const response = await axios.post('https://api-m.sandbox.paypal.com/v2/checkout/orders',order,{
      headers:{
       Authorization: `Bearer ${access_token}`
          }

    })
      


   return res.json(response.data);



  }catch(error){
    return res.status(500).send(error)
  }

      

}









const captureOrder = async (req, res) => {
    try {
      const { token } = req.query;
  
      const response = await axios.post(
        `https://api-m.sandbox.paypal.com/v2/checkout/orders/${token}/capture`,
        {},
        {
          auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET
          }
        }
      );
  
      console.log(response.data); // Muestra la respuesta de captura de PayPal en la consola

  
      return res.redirect(`/PaymenRes?Compra=${token}`)


         
          
            
            

    } catch (error) {
      console.error(error);
      return res.status(500).json('Error occurred');
    }
  };







const deleteOrder = (req, res)=> res.redirect('/')







const obtenerCompra = async (req, res) => {
  const {Compra} = req.params;

  const params= new URLSearchParams();
  params.append('grant_type', 'client_credentials')
  console.log(params.append)

  const {data: {access_token}}=await axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', params,{
  auth:{
      username: PAYPAL_API_CLIENT,
      password: PAYPAL_API_SECRET

  }

  })


  const response = await axios.get(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${Compra}`,{
    headers:{
     Authorization: `Bearer ${access_token}`
        }

      

  })

  console.log(response.data)

  return res.json(response.data);



}
  


module.exports = {createOrder,captureOrder,deleteOrder,obtenerCompra}