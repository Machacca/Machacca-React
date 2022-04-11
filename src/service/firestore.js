import { initializeApp } from "firebase/app";
import {   
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
 } from "firebase/firestore/lite";
 import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
 import { v4 as uuidv4} from "uuid";

const firebaseConfig = {
    apiKey: "AIzaSyDitQDVcjThRx0QvVfIkfOBeW71RXst9gU",
    authDomain: "codigo13-35389.firebaseapp.com",
    projectId: "codigo13-35389",
    storageBucket: "codigo13-35389.appspot.com",
    messagingSenderId: "447920825281",
    appId: "1:447920825281:web:a195342ccf6efc0d6fc540",
    measurementId: "G-V6SSQ04LQC"
  };

  const app= initializeApp(firebaseConfig);
  //iniciar firestore
  // database db= base de datos
  const db = getFirestore(app);

  // hacer la peticion para poder traer losproductos
  export const getProductClothes = async () => {
    // paso 1: Traer la coleccion de datos
    const conllectionClothes = collection(db, "product_clothes");

    // Paso 2: Traer los documentos-productos
    const documentClothes = await getDocs(conllectionClothes);

    // Paso 3: Crear un arreglo que guarde los documentos que estamos onteniendo
    const clothes = documentClothes.docs.map((doc) => doc.data());
    return clothes;

  };

  // debemos crear una funcion que se encargue de poder crear
  // elementos en nuestra base de datos
  // ojo: vamos a recibir como parametro un objeto que contenga
  // la informacion del producto que estamos creado
export const storeProductClothe = async (product) => {
  const id = uuidv4().replaceAll("-", "");
  product.id = id;
  await setDoc(doc(db, "product_clothes", id), product);
};

// actualizar un datos en firebase
export const updateProductClothe = async (product) => {
  const productRef = doc(db, "product_clothes", product.id);

  await updateDoc(productRef, product);
};

// eliminar un registros de la db
export const deleteProductClothe = async (id) => {
  await deleteDoc(doc(db, "product_clothes", id));
};

// vamos a crear una funcion qu reciba un email y password
// y cree un cuenta en firebase
export const auth = getAuth();

//Esta funcion va a enviar el correo de verificacion
export const sendEmail = async () => {
  const send = await sendEmailVerification(auth.currentUser);
  return send;
};

// podemos crear una funcion que nos retorne el usuario actual
/*export const getUserFromFirebase = () => {
  return auth.currentUser;
};*/

export const updateUserProfile = async (profile) => {
  try {
    await updateProfile(auth.currentUser, profile);
    return {
      ok: true,
      data: "success",
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};

export const storeUser = async (email, password) => {
  try {
    return {
      ok: true,
      data: user,
    };
    console.log(user);
    return user;
  } catch (error) {
    console.log(error.message);
    return {
      ok: false,
      data: error.message,
    };
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};
  