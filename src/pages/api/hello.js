// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {id : "1", imgFormat: "jpeg", title:"Nike Air Force 1", price : "399.99", imgAlt : "Shoes", brand : "Nike"},
    {id : "2", imgFormat: "avif", title:"Nike Air Max Alpha Trainer 5", price : "469.99", imgAlt : "Shoes", brand : "Nike"},
    {id : "3", imgFormat: "webp", title:"Nike Pegasus 39", price : "699.99", imgAlt : "Shoes", brand : "Nike"},
    {id : "4", imgFormat: "avif", title:"Nike Full Force Low", price : "699,99", imgAlt : "Shoes", brand : "Nike"},
    {id : "5", imgFormat: "avif", title:"Nike Full Force Low", price : "699,99", imgAlt : "Shoes", brand : "Nike"},
    {id : "6", imgFormat: "avif", title:"Nike Jordan Stay Loyal 3", price : "999.99", imgAlt : "Shoes", brand : "Nike"},
    {id : "7", imgFormat: "avif", title:"Nike Air Force 1 Mid EVO", price : "1199,99", imgAlt : "Shoes", brand : "Nike"},
    {id : "8", imgFormat: "avif", title:"Nike SB Nyjah 3 Premium", price : "719,99", imgAlt : "Shoes", brand : "Nike"},
    {id : "9", imgFormat: "avif", title:"Nike Zoom Fly 5", price : "869.99", imgAlt : "Shoes", brand : "Nike"},
    {id : "10", imgFormat: "avif", title:"Nike Air Zoom Alphafly NEXT% 2", price : "2499,99", imgAlt : "Shoes", brand : "Nike"},
  ])
}
