import React from 'react';
import logo from "../../assets/img/carrinho-de-compras.png"
import { MyHeader, MyLogo } from './style';

export default function Header() {
 return (
   <MyHeader>
        <MyLogo src={logo}/>
   </MyHeader>
 );
}