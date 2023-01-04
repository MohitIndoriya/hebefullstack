import React, { useState } from 'react'
import { Box, Input, Heading, Container, Button, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Signin } from '../../actions/userActions'
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'


export default function Login() {
  let navigate = useNavigate();

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const { isAuth } = useSelector((store) => store.auth)

  const dispatch = useDispatch()
  const handleSubmit = () => {

    dispatch(Signin({ email, password }))
  }
  // isAuth && alert("Login Succesfull")
  isAuth && navigate("/")

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate('/');
    }
  }, [])


  return (
    <Box bg="#caafa8">
      <Container>
        <Box bg="#caafa8" w='100%' color='white' width="100%" height="800px" paddingTop="100px"  >
          <Heading as="h1" size="2xl" fontFamily="chloeregular">Login</Heading>
          <Heading as='h6' size='md' textAlign="left" fontWeight="normal" paddingTop="30px" >Email</Heading>
          <Input variant='flushed' value={email} onChange={(e) => setEmail(e.target.value)} />
          <Heading as='h6' size='md' textAlign="left" fontWeight="normal" paddingTop="20px" >Password</Heading>
          <Input variant='flushed' value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button colorScheme='black' textColor="#caafa8" variant='ghost' width="100%" bg="white" marginTop="50px" borderRadius="0px" onClick={handleSubmit}>
            Log in
          </Button>
          <a href={`${process.env.REACT_APP_BACKEND_URL}google`}><Button colorScheme='black' textColor="#caafa8" display={"flex"} gap="10px" variant='ghost' width="100%" bg="white" marginTop="10px" borderRadius="0px" >
            <Image src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" width="30px" height="30px" />
            <span>Login With Google</span>

          </Button></a>

          <Link to="/createAccount" ><Heading as='h6' size='md' textAlign="left" fontWeight="normal" paddingTop="50px" >Create account</Heading></Link>
          <Link to="/admin" ><Heading as='h6' size='md' textAlign="left" fontWeight="normal" paddingTop="50px" >Login as Admin</Heading></Link>
        </Box>
      </Container>
    </Box>
  )
}
