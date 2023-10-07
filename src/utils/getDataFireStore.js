import { collection, query, getDocs, doc, where, getDoc, writeBatch, serverTimestamp, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";


export async function getProducts() {
    const products = []
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
       products.push(doc.data())
    });
    return products

}
export async function getOrders() {
    const orders = []
    const q = query(collection(db, "orders"), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
       orders.push(doc.data())
    });
    return orders

}
export async function updateStock(pedido, formaDePago, user, totalPaid) {
    try {
    let filterProductsPedido = []
    const batch = writeBatch(db);
    const productosRef = collection(db, "products");
    const ordersRef = collection(db, "orders");

    for (const el of pedido) {
        filterProductsPedido = [...filterProductsPedido, {producto: el.name , cantidad: el.cantidad, precio:  el.price }]
        const q = query(productosRef, where("id", "==", el.id));
        const querySnapshot = await getDocs(q);

        for (const docu of querySnapshot.docs) {
            const docRef = doc(db, "products", docu.id);
            const docSnap = await getDoc(docRef);
            const stockActual = docSnap.get("stock");
            const cantidadVendida = docSnap.get("vendido");
            const stockNuevo = stockActual - el.cantidad;
            const vendidoActual = cantidadVendida + el.cantidad
            if (stockNuevo >= 0) {
                await batch.update(docRef, { stock: stockNuevo, vendido: vendidoActual });
            } else {

                throw new Error(`No hay suficiente stock para ${el.name}`);
            }
        }
}   
    const docOrderRef = doc(ordersRef);
    batch.set(docOrderRef, { 
        productos: filterProductsPedido,
        usuario: user.email,
        tipo_de_pago: formaDePago,
        total: totalPaid,
        timestamp: serverTimestamp()
    });

    await batch.commit()
    return {status: true, message: 'Orden ingresada exitosamente'};
    } catch (error) {
        return {status: false,  error}
    }
    

}

export async function insertOrder() {

}

