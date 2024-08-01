import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import data from "../data/products.json";


export const ItemListContainer = () => {
const [items, SetItems] = useState ([]);
const [loaging, SetLoading] = useState (true);
    useEffect (() => {
        new Promise((resolve, reject) => {
           setTimeout (resolve (data), 2000);
        }).then ((response) => console.log ({response})).
        finally(() => SetLoading(false)) ;
    },[]);

    if (loading) return <Container className="mt-4">Wait</Container>;
 
    return(
    <Container className="mt-4">
        <h1>Productos</h1>
    </Container>
);
};



