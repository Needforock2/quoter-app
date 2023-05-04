import React from 'react'
import './article.css'
import { Link, useLoaderData, Form } from 'react-router-dom'
import { getProduct } from '../contact'

export async function loader({params}){
   
    const product = await getProduct(params.productId)    
    return ({product})
  }


  export const Article = () => { 
    const {product} = useLoaderData()
 
  return (
  <div className='card p-4 col-12'>
      <h3> {product.title}</h3>
      <img className='imgArticulo' src={product.pictureUrl} alt="articulo" ></img>      
      <h4>Precio: ${product.price}</h4> 
      <h4>Cantidad en Stock: {product.stock}</h4>       
      <Form className="edit-delete-bar" method="post">
          <button className='m-3' type="submit">Editar</button>
          <button className='m-3' type="submit">Eliminar</button>
      </Form> 
  </div>
  )
}
