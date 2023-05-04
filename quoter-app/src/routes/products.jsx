import { Form, NavLink, Outlet, useFetcher, useLoaderData } from "react-router-dom";
import { getProducts} from "../contact.js";
import './products.css'




export async function loader({params}){   
    const products = await getProducts(params.contactId) 
    console.log(products)   
    return ({products})
}

export async function action({request, params}){
     const formData = await request.formData()
    return updateContact(params.contactId, {
        favorite: formData.get("favorite") === "true",
      });

}


export default function Product() {
  const {products} = useLoaderData();
    

  return (
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
   
  );
}
