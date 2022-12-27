import React,{useState} from 'react'
import {Box,Input,Heading,Container,Button} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Signin } from '../../actions/userActions'
import {useNavigate} from "react-router-dom"


export default function Login() {
  let navigate=useNavigate();
  
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const {isAuth}=useSelector((store)=>store.auth)
    console.log(isAuth)
    const dispatch=useDispatch()
    const  handleSubmit=async()=>{
    dispatch(Signin({email,password}))
    }
    isAuth&&alert("Login Succesfull")
isAuth&&navigate("/")
    
  return (
    <Box bg="#caafa8">
    <Container>
    <Box bg="#caafa8" w='100%'  color='white' width="100%" height="800px"  paddingTop="100px"  >
        <Heading as="h1" size="2xl" fontFamily="chloeregular">Login</Heading>
        <Heading as='h6' size='md' textAlign="left"  fontWeight="normal" paddingTop="30px" >Email</Heading>
    <Input variant='flushed' value={email} onChange={(e)=>setEmail(e.target.value)} />
    <Heading as='h6' size='md' textAlign="left"  fontWeight="normal" paddingTop="20px" >Password</Heading>
    <Input variant='flushed' value={password}  onChange={(e)=>setPassword(e.target.value)} />
    <Button colorScheme='black' textColor="#caafa8" variant='ghost' width="100%" bg="white" marginTop="50px" borderRadius="0px" onClick={handleSubmit}>
    Log in
  </Button>
  <Link to="/createAccount" ><Heading as='h6' size='md' textAlign="left"  fontWeight="normal" paddingTop="50px" >Create account</Heading></Link>
  </Box>
  </Container>
  </Box>
  )
}
