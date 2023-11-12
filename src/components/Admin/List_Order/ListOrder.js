import React, {useState, useEffect} from "react";
import {getAllOrders} from '../../../service/OrderService'

function List_Order(){
    const [listOrder, setListOrder] = useState([]);

    useEffect( () => {
        const getData = async () =>
        {
            let data = await getAllOrders();
            if(data)
            {
                setListOrder(data);
            }
        };
        getData();

    }, [])


    return(
        <>
            List_Order
        </>
    )
}

export default List_Order;