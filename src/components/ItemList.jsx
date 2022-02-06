
import data from "../../data/data"
import Item from "./item/Item"
import React, { useState, useEffect } from "react"

const ItemList = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const promesaProductos = () => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(data)
            }, 2000)
        });
        return promesa.then(res => {
            return res
        }, err => {
            console.log(err)
        });
    }

        
    useEffect(() => {
        promesaProductos().then((item) => {
            setProductos(item)
            setCargando(false)
        })


    }, [])


    return (
        <>
            {cargando ? <h2>Cargando...</h2> :
                productos.map((producto) =>
                    <Item key={producto.id} nombre={producto.nombre} descripion={producto.descripion} precio={producto.precio} />
                )
            }

        </>
    )
}

export default ItemList