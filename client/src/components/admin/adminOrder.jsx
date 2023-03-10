import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"












export default function Orders(){
    let [data,setdata]=useState([])
    useEffect(()=>{
    let db=async()=>{
let d=await axios.get(`${process.env.REACT_APP_BACKEND_URL}order`)

return setdata((data)=>data=d.data.data);

        }
        db();
        
    },[])
  
    return (
<TableContainer>
  <Table variant='simple' width='90%' margin='auto' mt='5%'>
    <TableCaption>All Order Placed</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Address</Th>
        <Th >Orders</Th>
      </Tr>
    </Thead>
    <Tbody >
     {data.map((e)=>{
        return (
            <Tr>
            <Td>{e.address.firstName}</Td>
            <Td>{e.address.address} PinCode = {e.address.pincode}</Td>
            <Td>{e.cartData.map((er)=>{
             return  <p>Product Name : {er.title}    Price:${er.price}</p> 
            })}</Td>
            </Tr>
        )
     })}
    </Tbody>
   
  </Table>
</TableContainer>
)
}