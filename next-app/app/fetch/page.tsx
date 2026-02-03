type Product={
  id:number
  title:string
}

async function getFetch():Promise<Product[]>{
  const res= await fetch("https://fakestoreapi.com/products")
  return res.json()
}

export default async function Fetch(){
  const products= await getFetch()
  return(
    <>
    <h1>Products</h1>
    <ul>
      {products.map(item=>
      <li key={item.id}>{item.title}</li>
      )}
    </ul>
    </>
  )
}