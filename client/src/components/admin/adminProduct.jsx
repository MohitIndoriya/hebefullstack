import React from 'react'
import { Box, Input, Heading, Container, Button } from "@chakra-ui/react"

import { useState } from 'react';
import axios from "axios"
//import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

//import { userActions } from '../../actions/userActions';



export default function NewProduct() {
  const [title, settitle] = useState("")
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("")
  const [rate, setrate] = useState("")
  const [price, setprice] = useState(0)
  const [count, setcount] = useState(0)
  const [product_id, setproduct_id] = useState("")
  
  // const registering = useSelector(state => state.registration.registering);
  const dispatch = useDispatch();

 

  let products = {
    title,
    price,
     category,
    image,
    rating:{
        rate,
        count
     },
    product_id
 }
  
console.log(products);
  async function handleSubmit() {
    try {



     let data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}products`,products,{headers:{
        token:localStorage.getItem("Admintoken")
     } })
    
      toast.success('SucessFully Added', {
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
    catch (e) {
      toast.warn(' Something went wrong', {
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



  }


  return (
    <Box bg="#e66264" mb="-30px">

      <Container pb="80px"   >
        <Box bg="#e66264" w='100%' color='white' width="100%" height="800px" paddingTop="50px"  >
          <Heading as="h1" size="2xl" fontFamily="chloeregular">Add Product</Heading>
          <Heading as='h6' size='md' textAlign="left" fontWeight="normal" paddingTop="20px" >Title</Heading>
          <Input variant='flushed' value={title} onChange={(e) => settitle(e.target.value)} />
          <Heading as='h6' size='md' textAlign="left" fontWeight="normal" paddingTop="20px" >Category</Heading>
          <Input variant='flushed' value={category} onChange={(e) => setcategory(e.target.value)} />
          <Heading as='h6' size='md' textAlign="left" fontWeight="normal" paddingTop="20px" >Price</Heading>
          <Input variant='flushed' type="number" value={price} onChange={(e) => setprice(e.target.value)} />
          <Heading as='h6' size='md' textAlign="left" fontWeight="normal" paddingTop="20px" >Image</Heading>
          <Input variant='flushed' value={image} onChange={(e) => setimage(e.target.value)} />
          <Heading as='h6' size='md' textAlign="left" fontWeight="normal" paddingTop="20px" >count</Heading>
          <Input variant='flushed' type="number" value={count} onChange={(e) => setcount(e.target.value)} />
          <Heading as='h6' size='md' textAlign="left" fontWeight="normal" paddingTop="20px" >Rate</Heading>
          <Input variant='flushed' type="number" value={rate} onChange={(e) => setrate(e.target.value)} />
          <Heading as='h6' size='md' textAlign="left" fontWeight="normal" paddingTop="20px" >Product Id</Heading>
          <Input variant='flushed' value={product_id} onChange={(e) => setproduct_id(e.target.value)} />
          <Button colorScheme='black' textColor="#caafa8" variant='ghost' width="100%" bg="white" marginTop="50px" borderRadius="0px" onClick={handleSubmit}>
            Add Product
          </Button>

        </Box>
      </Container>
    </Box>
  )
  }
