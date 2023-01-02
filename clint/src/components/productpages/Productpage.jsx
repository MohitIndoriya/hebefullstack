import { Box, Card, CardBody, Heading, Image, Stack, Text ,Button,Divider, CardFooter,ButtonGroup, Select} from "@chakra-ui/react"
import axios from "axios"
import React, { useContext } from 'react'
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { addtocart } from "../../actions/cartAction"
import { Category } from "../../ContextAPI/CategoryProvider"
import "./ProductPage.css"

export default function Productpage() {
    const {searchcategory} = useContext(Category)
    let [arr,setarr]=useState([])
    let {category}=useParams() || searchcategory;
    let dispatch=useDispatch()
    const navigate =useNavigate();
    const data=async()=>{
       let  products=await axios.get(`http://localhost:8080/products?category=${category}`)
      //  console.log(products.data);
     setarr(products.data.data)
       
    }
useEffect(()=>{
    data()
    
},[category])
// console.log(arr);
   
   
  return (
    <div className="productPageContainer">
    <select className="sortSelect">
      <option value="">Sort By Price</option>
      <option value="asc">Low To High</option>
      <option value="desc">High To Low</option>
    </select>
    <Box display="grid" className="productsDisplay" gridTemplateColumns="repeat(3,1fr)"  gap="15px" m="auto !important" width="100%">{
      
      arr.map((e)=>{
        return <Card height="100%" key={e["_id"]}  margin={"auto"}   width="100%">
            <CardBody>
             <Link to ={`/product/${e["_id"]}`}> <Image
                src={e.image}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                /></Link>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{e.title.replace('//','-')}</Heading>
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
                    toast.warn('Login First', {
                      position: "top-right",
                      autoClose: 1500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
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
        </div>
  )
     
  
}
