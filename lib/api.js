const data = [{
  id: "Superman",
  image: "/images/superman.png",
  name: "Superman - MiniMousepad (13x11)",
  category: "minimousepad",
  price: 25
},
{
  id: "RedTiger",
  image: "/images/redtiger.png",
  name: "Red Tiger - MiniMousepad (13x11)",
  category: "minimousepad",
  price: 25
},
{
  id: "Tsunami",
  image: "/images/tsunami.png",
  name: "Tsunami - MiniMousepad (13x11)",
  category: "minimousepad",
  price: 25
},
{
  id: "Vintage",
  image: "/images/vintage.png",
  name: "Vintage - MiniMousepad (13x11)",
  category: "minimousepad",
  price: 25
},
{
  id: "Vortex",
  image: "/images/vortex.png",
  name: "Vortex - MiniMousepad (13x11)",
  category: "minimousepad",
  price: 25
},
{
  id: "Bengal",
  image: "/images/bengal.png",
  name: "Bengal - MiniMousepad (13x11)",
  category: "minimousepad",
  price: 25
}]

export async function getProductById (id) {
  return data.find(product => product.id === id)
}

export async function getProducts ({ category=null } = {}) {
  if (category) {
    return data.filter(product => product.category === category)
  } else {
    return data
  }
}
