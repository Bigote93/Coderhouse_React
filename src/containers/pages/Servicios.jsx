import Galery1 from "../../component/shoppingpage/galeryproducts";
import Galery2 from "../../component/shoppingpage/galeryproductsx2";
import Header from "../../component/shoppingpage/header";
import Navbar from "../../component/navegation/Navbar"

//Hooks
import { useEffect } from 'react';
import Elemento from "../../component/tailwindsresources/elemento";


function Servicios() {

    return (

        <div className="pt-32">
            <Navbar/>
            <hr/>
            <Header />
            <hr />
            <Galery1 />
       
            <Galery2 />


        </div>

    );
}

export default Servicios;