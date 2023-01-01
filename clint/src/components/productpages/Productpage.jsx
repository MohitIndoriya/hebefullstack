import { Box, Card, CardBody, Heading, Image, Stack, Text ,Button,Divider, CardFooter,ButtonGroup} from "@chakra-ui/react"
import axios from "axios"
import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { addtocart } from "../../actions/cartAction"
import "./ProductPage.css"

export default function Productpage() {
    let [arr,setarr]=useState([])
    let {category}=useParams()
    let dispatch=useDispatch()
    const navigate =useNavigate();
    const data=async()=>{
       let  products=await axios.get(`http://localhost:8080/products?category=${category}`)
       console.log(products.data);
     setarr(products.data.data)
       
    }
useEffect(()=>{
    data()
    
},[category])
console.log(arr);
   
   
  return (
    <Box display="grid" className="productsDisplay" gridTemplateColumns="repeat(3,1fr)" padding="30px" rowGap="15px" m="auto !important" width="100%">{

        arr.map((e)=>{
            return <Card height="100%"  margin={"auto"}  boxShadow={"0 0 3px grey"} maxW='sm'>
            <CardBody>
             <Link to ={`/product/${e["_id"]}`}> <Image
                src={e.image}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              /></Link>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{e.title}</Heading>
                <Text>
                 {e.desciption}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${e.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent="center">
              <ButtonGroup spacing='2'>
               
                <Button variant='ghost' colorScheme='blue' onClick={()=>{
                    if(!localStorage.getItem("token")){
                      navigate('/login');
                    }
                    else{

                      dispatch(addtocart(e))
                    }
                }}>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        })
        }</Box>
  )
     
  
}
