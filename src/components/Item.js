
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
export default function Item({ producto, nuevaCantidad}) {
  const disminuirStock = () => {
    producto.stock -= 1;
    nuevaCantidad();
  }
  return (
    <div className='producto'>
      <h2 align="center">{ producto.producto.nombre }</h2>
      <p align="justify">{ producto.producto.descripcion }</p>
      <h4 align="center">En stock: { producto.stock > 0 ? producto.stock : <span>Agotado</span> }</h4>
      <button disabled={ producto.stock < 1 } onClick={ disminuirStock }>{ producto.stock > 0 ? 'Comprar' : 'Sin Stock' }</button>
    </div>
  )
}
