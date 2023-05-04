import { Form, NavLink, Outlet, redirect, useFetcher, useLoaderData } from "react-router-dom";
import { createProduct, getProducts} from "../contact.js";
import './products.css'




export async function loader({params}){   
    const products = await getProducts() 
     
    return ({products})
}

export async function action(){
  const product = await createProduct()
  console.log("action", product)
  return redirect(`/products/${product.id}/edit`)
}


export default function Product() {
  const {products} = useLoaderData();
    

  return (
    <div className="d-flex flex-column">
      <Form className="newItemBar" method="post">
          <button type="submit">Crear Producto</button>
      </Form> 
      <div className="d-flex justify-content-between"> 
      
            <div id="item-list" className="item-list col-4">
              {products.map(producto=>(
                <li key={producto.id} className="item">
                  <NavLink 
                    to={`/products/${producto.id}`} 
                    className={({ isActive, isPending }) =>
                                  isActive
                                      ? "active"
                                      : isPending
                                      ? "pending"
                                      : ""
                                  }
                    >
                    {producto.title}
                  </NavLink>                
                </li>        
              ))}            
            </div>
            
          <div className="col-6">
            <Outlet />
          </div>
                                
        </div>
      
    </div>
    
    
   
  );
}
