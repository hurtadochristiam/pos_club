export function updateOrAddProduct (prev, product) {
    const index = prev.findIndex(p => p.id === product.id);
    const newArray = [...prev];
    if (index === -1) {
      newArray.push({...product, cantidad: 1});
    } else {
      newArray[index].cantidad += 1;
 
    }
    return newArray;
}
export function updateOrLessProduct (prev, product) {
  const index = prev.findIndex(p => p.id === product.id);
  const newArray = [...prev];
  if (index === -1) {
    newArray.push(product);
  } else {
    newArray[index].cantidad -= 1;
  }
  return newArray;
}

export function calculateShowTotal(pedidos) {
  const total = pedidos?.reduce((total, item)=>{return parseInt(item.price * item.cantidad)+parseInt(total)},0).toFixed(0)
  return '$ ' + total.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export function calculateTotal(pedidos) {
  const total = pedidos?.reduce((total, item)=>{return parseInt(item.price * item.cantidad)+parseInt(total)},0).toFixed(0)
  return total
}
