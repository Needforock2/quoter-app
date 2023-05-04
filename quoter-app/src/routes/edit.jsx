import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { deleteContact, getProduct, updateContact } from "../contact";




export async function action({request, params}){
  const formData = await request.formData() 
  const updates = Object.fromEntries(formData)  
  console.log(formData)    
  await updateContact(params.contactId, updates)
  return (redirect(`/contacts/${params.contactId}`))
  
   
      
    
}
export async function loader({params}){
  console.log("render desde edit")
  const product = await getProduct(params.productId) 
  return ({product})
}


export default function EditProduct() {
  const { product } = useLoaderData();
    const navigate = useNavigate();
  return (
    <>
      <h2>Creando Nuevo Producto  </h2>
      <br/>
      <Form method="post" id="contact-form">
      <input name="cancel" defaultValue={true} hidden></input>
      <label className="d-flex flex-row justify-content-between align-items-center">
        <span>Nombre</span>
        <input
          placeholder="Nombre"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={""}
        />
         <span>Categoria</span>     
        <input
          placeholder="Categoría"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={""}
        />          
      </label>
     
      <label className="d-flex flex-row justify-content-between align-items-center">
        <span>Precio</span>
        <input
          type="number"
          name="twitter"
          placeholder="$"
          defaultValue={""}
        />
      </label>
      <label className="d-flex flex-row justify-content-between align-items-center">
        <span>Stock</span>
        <input
          placeholder="#"
          aria-label="Avatar URL"
          type="number"
          name="avatar"
          defaultValue={""}
        />
      </label>
      <label className="d-flex flex-row justify-content-between align-items-center">
        <span>Url Foto</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={""}
        />
      </label>
      <label>
        <span>Descripcion</span>
        <textarea
          name="notes"
          defaultValue={""}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={()=>{
            navigate(-1)
          }}>
          Cancel</button>    
      </p>
    </Form>      
    
    
    </>
    
  );
}