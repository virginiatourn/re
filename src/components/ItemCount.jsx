import React , { useState } from "react"

const ItemCount = (props) => {

 
  
    const [stock, setStock] = useState(props.stock)
    const [unidades , setUnidades] = useState(0)


    const sumaDeContador = {
        sumaStock:()=>{
            if (stock===0){
                alert ("No hay suficiente stock")
            } else {
                setStock(stock-1)
                setUnidades(unidades+1)
            }
        }
    }

    const restaDeContador = {
        restaStock:()=>{
            if (unidades===0){
                alert ("Sume unidades, el valor ingresado debe ser mayor a 0")
            } else {
                setUnidades(unidades-1)
                setStock(stock+1)
            }
        }
    }


   
    
    return (
        <div className="botonContador">
            <button onClick= {sumaDeContador.sumaStock} disabled={stock==="0"}>+</button>
            <p>{unidades}</p>
            <button onClick= {restaDeContador.restaStock} disabled={stock==="0"}>-</button>
            <p>Stock disponible: {stock} </p>
        </div>
    )
}

export default ItemCount