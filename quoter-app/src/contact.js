import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

const productos =  [
  {
    "id": 1,
    "title": "Men's Black Leather Jacket",
    "category": "ropa",
    "description": "A stylish black leather jacket for men with a classic design and a comfortable fit. Made with high-quality materials that ensure durability and long-lasting use.",
    "price": 199.99,
    "stock": 50,     
    "pictureUrl": "https://m.media-amazon.com/images/I/61Kzw2bAzEL._AC_UL1200_.jpg"
  },
  {
    "id": 2,
    "title": "Women's Denim Shorts",
    "category": "ropa",
    "description": "Comfortable and stylish denim shorts for women, perfect for casual outings and summer days. Made with high-quality denim that ensures durability and a comfortable fit.",
    "price": 39.99,
"stock": 50, 
    "pictureUrl": "https://m.media-amazon.com/images/I/71VTMVj6gcL._AC_UL1500_.jpg"
  },
  {
    "id": 3,
    "title": "Men's Dress Shirt",
    "category": "ropa",
    "description": "A classic white dress shirt for men, perfect for formal occasions and business meetings. Made with high-quality materials that ensure a comfortable fit and long-lasting use.",
    "price": 69.99,
"stock": 50, 
    "pictureUrl": "https://m.media-amazon.com/images/I/61owdlDd7wL._AC_UL1500_.jpg"
  },
  {
    "id": 4,
    "title": "Women's Running Shoes",
    "category": "ropa",
    "description": "Comfortable and lightweight running shoes for women, designed for maximum performance and support. Made with high-quality materials that ensure durability and long-lasting use.",
    "price": 129.99,
"stock": 50, 
    "pictureUrl": "https://m.media-amazon.com/images/I/81-ifYWUvEL._AC_UL1500_.jpg"
  },
  {
    "id": 5,
    "title": "Men's Slim-Fit Jeans",
    "category": "ropa",
    "description": "Stylish and comfortable slim-fit jeans for men, perfect for casual outings and everyday wear. Made with high-quality denim that ensures durability and a comfortable fit.",
    "price": 59.99,
"stock": 50, 
    "pictureUrl": "https://m.media-amazon.com/images/I/71lea6FuzzL._AC_UL1500_.jpg"
  },
{
    "id": 6,
    "title": "Leather Watch",
    "category": "accesorios",
    "description": "A stylish and durable leather watch for both men and women. Features a quartz movement and is water-resistant up to 50 meters.",
    "price": 79.99,
    "stock": 20,
    "pictureUrl": "https://m.media-amazon.com/images/I/61NVoCzVrvS._AC_UL1000_.jpg"
  },
  {
    "id": 7,
    "title": "Wireless Earbuds",
    "category": "accesorios",
    "description": "Bluetooth earbuds with a sleek and modern design. Comes with a portable charging case and features noise-cancellation technology for an immersive audio experience.",
    "price": 99.99,
    "stock": 15,
    "pictureUrl": "https://m.media-amazon.com/images/I/619y6WxaleL._AC_SX569_.jpg"
  },
  {
    "id": 8,
    "title": "Leather Wallet",
    "category": "accesorios",
    "description": "A classic leather wallet for both men and women. Features multiple card slots, a bill compartment, and a coin pocket.",
    "price": 49.99,
    "stock": 25,
    "pictureUrl": "https://m.media-amazon.com/images/I/91vfcmXEQLL._AC_SX569_.jpg"
  },
  {
    "id": 9,
    "title": "Sunglasses",
    "category": "accesorios",
    "description": "Stylish sunglasses with a durable frame and polarized lenses for maximum UV protection.",
    "price": 59.99,
    "stock": 18,
    "pictureUrl": "https://m.media-amazon.com/images/I/61hoxGh08wL._AC_UL1500_.jpg"
  },
{
    "id": 10,
    "title": "Phone Case",
    "category": "accesorios",
    "description": "Protective phone case with a slim and lightweight design. Made with high-quality materials to protect your phone from scratches, dents, and other damage.",
    "price": 29.99,
    "stock": 30,
    "pictureUrl": "https://m.media-amazon.com/images/I/81pvGUD0qmL._AC_SX679_.jpg"
  },
{
  "id": 11,
  "title": "Pet Hair Remover Brush",
  "category": "menaje",
  "description": "This pet hair remover brush easily removes pet hair from furniture, clothing, and carpets.",
  "price": 14.99,
  "stock": 25,
  "pictureUrl": "https://m.media-amazon.com/images/I/71beMdU5fOL._SX522_.jpg"
},
{
  "id": 12,
  "title": "Automatic Pet Feeder",
  "category": "menaje",
  "description": "This automatic pet feeder is perfect for busy pet owners who want to ensure their pets are fed on time.",
  "price": 49.99,
  "stock": 10,
  "pictureUrl": "https://m.media-amazon.com/images/I/610cQr4MBSL._AC_SX679_.jpg"
},
{
  "id": 13,
  "title": "Pet Odor Eliminator",
  "category": "menaje",
  "description": "This pet odor eliminator removes pet odors from carpets, furniture, and other household surfaces.",
  "price": 9.99,
  "stock": 50,
  "pictureUrl": "https://m.media-amazon.com/images/I/618Oy9+-y3L._AC_SX679_.jpg"
},
{
  "id": 14,
  "title": "Pet Hair Vacuum",
  "category": "menaje",
  "description": "This pet hair vacuum is designed to remove pet hair from carpets, upholstery, and other household surfaces.",
  "price": 99.99,
  "stock": 5,
  "pictureUrl": "https://m.media-amazon.com/images/I/71Rsb1R+e4L._AC_SX679_.jpg"
},
{
  "id": 15,
  "title": "Pet Water Fountain",
  "category": "menaje",
  "description": "This pet water fountain provides fresh, filtered water for pets and encourages them to stay hydrated.",
  "price": 29.99,
  "stock": 15,
  "pictureUrl": "https://m.media-amazon.com/images/I/71He9pPbztL._AC_SX679_.jpg"
}
]

export async function getProducts(query) {
  /* let prod = await fetch('https://api.jsonstorage.net/v1/json/0f90dac9-985f-4b19-8bc9-58aeab14a126/4b1e29b6-74c5-4de4-a5e4-2c7b75cd279b')
  let productos = await prod.json() */
  return productos

}

export async function createContact() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now() };
  let contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getProduct(id) {  
  //const productos = await getProducts()
  const product = productos.find(producto => producto.id===parseInt(id))
  return product
}

export async function updateContact(id, updates) {
  await fakeNetwork();
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find(contact => contact.id === id);
  if (!contact) throw new Error("No contact found for", id);
  
  Object.assign(contact, updates);
  await set(contacts);
  console.log(contact)
  return contact;
}

export async function deleteContact(id) {
  let contacts = await localforage.getItem("contacts");
  let index = contacts.findIndex(contact => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}