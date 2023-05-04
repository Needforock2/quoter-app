import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { deleteContact, updateContact } from "../contact";



export async function action({request, params}){
  const formData = await request.formData() 
  const updates = Object.fromEntries(formData)  
  console.log(formData)
  if(!updates.cancel){
    await deleteContact(params.contactId)
    return (redirect(`/`))
  }else{      
    await updateContact(params.contactId, updates)
    return (redirect(`/contacts/${params.contactId}`))
  }
   
      
    
}
export async function loader({params}){
  console.log("render desde edit")
  const contact = await getContact(params.contactId) 
  return ({contact})
}


export default function EditContact() {
  const { contact } = useLoaderData();
    const navigate = useNavigate();
  return (
    <>
      <Form method="post" id="contact-form">
      <input name="cancel" defaultValue={true} hidden></input>
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
    
      </p>
    </Form>
    <Form method="post" >
      <input name="cancel" defaultValue={contact.first} hidden></input>
      <button type="submit">Cancel</button>
    </Form>
    </>
    
  );
}