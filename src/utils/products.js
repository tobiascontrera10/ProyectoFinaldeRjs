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
  const collectionReference = collection(database, 'item');

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
  { title:'Iphone 11', category: 'Nuevo', description:'iphone 11 color gris, con 123gb', price: 950, pictureUrl: 'https://www.bug.hr/img/iphone-11-je-najprodavaniji-mobitel-u-prvoj-polovini-2020_U6B_TK.jpg', stock: 10},
  { title:'Iphone 14', category: 'Nuevo', description:'TPM', price: 1600, pictureUrl: 'https://www.techmoblog.com/uploads/content_images/202106/img_1624419297_57595094d21c.jpg', stock: 10},
  { title:'Iphone 12 pro', category: 'Nuevo', description:'Iphone 12 color amarillo con 64gb', price: 950, pictureUrl: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/01/iphone-11-amarillo-1841087.jpg?itok=2AKN1RcQ', stock: 10},
  { title:'Iphone 14', category: 'Nuevo', description:'iphone 14 color red de 230gb', price: 1600, pictureUrl: 'https://nagpuroranges.com/wp-content/uploads/Screen-Shot-2021-03-08-at-11.44.33-PM-1024x566.png', stock: 10},
  { title:'Iphone 12', category: 'Nuevo', description:'iphone 12 color gold con 64gb', price: 1600, pictureUrl: 'https://media3.cgtrader.com/variants/R4bzCZhgREvBSf21AhFNKfbY/e44aa6a6359827c9089792cde0c079681b83d3b5c3037cc0525c25607e54355b/Final-Gold.png', stock: 10},
  { title:'Iphone 11', category: 'Usado', description:'Iphone 11 color white, con 84gb y 99% de bateria', price: 900, pictureUrl: 'https://1.bp.blogspot.com/-lgrmRA4ZRO4/Xe8QnfJ4M2I/AAAAAAAAAbs/J9KeYzCU11QzmGuI-Y9ZUGfnCZPAZr1WwCLcBGAsYHQ/s1600/iPhone-11.jpg', stock: 10},
  { title:'Iphone 8 plus', category: 'Usado', description:'Iphone 13 color blue con 123gb', price: 1100, pictureUrl: 'https://ik.imagekit.io/oyprice/bytes/wp-content/uploads/2021/06/Latest-iPhone-13-Dummies-Again-Show-New-Diagonal-Dual-Lens-Camera-Arrangement-in-the-future-for-the-standard-model.-0-1024x576.jpg', stock: 10},
  { title:'Iphone 14', category: 'Nuevo', description:'Iphone 14 color gold con 260gb', price: 1450, pictureUrl: 'https://nagpuroranges.com/wp-content/uploads/Screen-Shot-2021-03-08-at-11.44.33-PM.png', stock: 10},
  { title:'Iphone Xs', category: 'Nuevo', description:'Iphone Xs gold con 84gb', price: 850, pictureUrl: 'https://bemobi.com.ua/image/data/iPhone/iphone-XS/iphone-xs-kitaj-gold/iphone-xs-kitaj-gold-logo.jpg', stock: 10},
  { title:'Iphone 13', category: 'Nuevo', description:'Iphone 13 con 123gb color black', price: 1200, pictureUrl: 'https://wylsa.com/wp-content/uploads/2021/05/iphone-13.jpg', stock: 10},
  { title:'Iphone 11', category: 'Usado', description:'Iphone 11 con 84gb, color red y una bateria al 75%', price: 900, pictureUrl: 'https://i.ebayimg.com/images/g/8ekAAOSwsUJfk1ld/s-l640.jpg', stock: 10},
  { title:'Iphone 12', category: 'Nuevo', description:'Iphone 12 con 245gb color violeta', price: 1000, pictureUrl: 'https://gumlet.assettype.com/freepressjournal%2F2021-04%2F5f87e9e8-a8e6-4b1e-9f0d-0b9061e75c97%2Fapple_iphone_12_spring21_purple_04202021.jpg?w=1200&auto=format%2Ccompress&ogImage=true', stock: 10},
  { title:'Iphone Xr', category: 'Usado', description:'Iphone Xr con 64gb, color gold y con una bateria al 99%', price:  550, pictureUrl: 'https://ei.marketwatch.com/Multimedia/2018/10/30/Photos/NS/MW-GX355_d1a5ea_20181030192609_NS.jpg', stock: 10},
  { title:'Iphone X', category: 'Usado', description:'iphone X con 124gb color black y una bateria al 85%', price:  500, pictureUrl: 'https://www.latercera.com/resizer/feg0GiNP1U0BXsODOfxJAGX3gKU=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/3CDXN24235FZLOJIV27I62I72A.jpg', stock: 10},
  { title:'Iphone 8', category: 'Usado', description:'iphone 8 de 64gb con bateria al 90%', price: 300, pictureUrl: 'https://www.mobilecitynz.net/uploads/2/6/5/7/26575506/s655431864349755383_p101_i7_w2048.jpeg', stock: 10}



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