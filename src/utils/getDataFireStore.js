import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";


export async function getProducts() {
    const products = []
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.forEach((doc) => {
       return doc.data()
    });


}
