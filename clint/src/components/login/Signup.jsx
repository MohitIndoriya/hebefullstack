import React from 'react'
import {Box,Input,Heading,Container,Button} from "@chakra-ui/react"
import {Link, useNavigate} from "react-router-dom"
import  { useState, useEffect } from 'react';
import axios from "axios"
//import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//import { userActions } from '../../actions/userActions';


    
export default function Signup() {
  const [firstName,setFirstName]=useState("")
    const [lastName, setLastName] = useState("");
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
   // const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    let navigate=useNavigate();
   
   let user={
     firstName,
     lastName,
     email,
     password
   }

   async function handleSubmit() {
       try{
        
       let existing=await axios.get(`http://localhost:8080/users?email=${email}`)
       // let data=await existing.json()
       console.log(existing.data,"ooomero")
      if(existing.data.length>0){
       return alert("user alredy exists")
      }else{
        await axios.post("http://localhost:8080/users",user)
        dispatch({
            type :"REGISTER",
            payload:"user registerd"
        })
               alert("user added")
               navigate("/login")
        
      }
       }catch(e){
        console.log(e.message)
       }

   

    }
  return (
    <Box bg="#caafa8">
        
    <Container>
    <Box bg="#caafa8" w='100%'  color='white' width="100%" height="800px"  paddingTop="100px"  >
        <Heading as="h1" size="2xl" fontFamily="chloeregular">Create Account</Heading>
        <Heading as='h6' size='md' textAlign="left"  fontWeight="normal" paddingTop="60px" >First Name</Heading>
    <Input variant='flushed' value={firstName}  onChange={(e)=>setFirstName(e.target.value)}/>
    <Heading as='h6' size='md' textAlign="left"  fontWeight="normal" paddingTop="30px" >Last Name</Heading>
    <Input variant='flushed' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
        <Heading as='h6' size='md' textAlign="left"  fontWeight="normal" paddingTop="30px" >Email</Heading>
    <Input variant='flushed' value={email} onChange={(e)=>setEmail(e.target.value)} />
    <Heading as='h6' size='md' textAlign="left"  fontWeight="normal" paddingTop="20px" >Password</Heading>
    <Input variant='flushed' value={password}  onChange={(e)=>setPassword(e.target.value)} />
    <Button colorScheme='black' textColor="#caafa8" variant='ghost' width="100%" bg="white" marginTop="50px" borderRadius="0px" onClick={handleSubmit}>
    Create
  </Button>
 
  </Box>
  </Container>
  </Box>
  )
}
