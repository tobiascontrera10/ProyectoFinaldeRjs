import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');

  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  
};

export const getProductsByCategory = (categoryId) => {
  // obtenemos la basedatos
  const database = getFirestore();

  // obtenemos la referencia a la collecion
  const collectionReference = collection(database, 'items');

  // crear query/consulta con el filtro que queremos aplicar
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))

  // obtenemos los datos desde firestore
  return getDocs(collectionQuery)
    .then(snapshot => {
      if (snapshot.size === 0)
        return [];
      
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data() 
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

const products = [
  { title:'Iphone 14', category: 'Nuevo', description:'TPM', price: 1600, pictureUrl: 'https://www.techmoblog.com/uploads/content_images/202106/img_1624419297_57595094d21c.jpg', stock: 10},
  {  title:'Iphone 12', category: 'Usado', description:'string', price: 1100, pictureUrl: 'https://www.maclife.de/media/maclife/styles/tec_frontend_opengraph/public/images/editors/2020_42/image-117820--4581042.png?itok=4EJXHmhH', stock: 10},
  { title:'Iphone 11', category: 'Nuevo', description:'string', price: 950, pictureUrl: 'https://www.bug.hr/img/iphone-11-je-najprodavaniji-mobitel-u-prvoj-polovini-2020_U6B_TK.jpg', stock: 10}
]

export const createAllProducts = async () => {
  try {
    // obtenemos la basedatos
    const database = getFirestore(); 

    // obtenemos la referencia a la collecion
    const collectionReference = collection(database, 'items');
    for(let i = 0; i < products.length; i++) {
      console.log(products[i])     
    const snapshot = await addDoc(collectionReference, products[i]);
    }
  } catch (error) {
    console.warn(error)
  }
}