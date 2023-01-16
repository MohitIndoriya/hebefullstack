import { Box, Card, CardBody, Heading, Image, Stack, Text, Button, Divider, CardFooter, ButtonGroup, Select } from "@chakra-ui/react"
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
  const { searchcategory } = useContext(Category)
  let [arr, setarr] = useState([])
  let { category } = useParams() || searchcategory;
  let dispatch = useDispatch()
  const navigate = useNavigate();
  const data = async (url) => {
    let products = await axios.get(url)
    //  console.log(products.data);
    setarr(products.data.data)

  }
  // console.log(arr)
  useEffect(() => {
    data(`${process.env.REACT_APP_BACKEND_URL}products?category=${category}`)

  }, [category])
  // console.log(arr);

  const sortAsc = (e) => {
    if (e.target.value === "asc") {
      data(`${process.env.REACT_APP_BACKEND_URL}products?category=${category}&sortby=price&order=asc`)
    } else {
      data(`${process.env.REACT_APP_BACKEND_URL}products?category=${category}&sortby=price&order=desc`)
    }
  }

  return (
    <div className="productPageContainer">
      {arr.length > 0 ? <select onChange={sortAsc} className="sortSelect">
        <option value="" >Sort By Price</option>
        <option value="asc">Low To High</option>
        <option value="desc">High To Low</option>
      </select> : ""}
      {arr.length > 0 ? <Box display="grid" className="productsDisplay" gridTemplateColumns="repeat(3,1fr)" gap="15px" m="auto !important" width="100%">{

        arr.map((e) => {
          return <Card height="100%" key={e["_id"]} className='productCard' margin={"auto"} width="100%">
            <CardBody>
              <Link to={`/product/${e["_id"]}`}> <Image
                src={e.image}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              /></Link>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{e.title.replace('//', '-')}</Heading>
                <Text>
                  {e.desciption}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${e.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="addToCartContainer" justifyContent="center" onClick={() => {
              if (!localStorage.getItem("token")) {
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
              else {

                dispatch(addtocart(e))
              }
            }}>

              <Box fontWeight='bold' fontSize='1.1rem' spacing='2'>

                Add To Cart

              </Box>
            </CardFooter>
          </Card>
        })
      }</Box> : <Box className="nothingHereImage">
        <img src='https://cdn.dribbble.com/users/745861/screenshots/7889509/media/5891d9d48179ca0b3a8fcdf178db8737.png?compress=1' width='100%' style={{ display: 'block', margin: 'auto' }} />
        <Text position='absolute' left='30%' bottom='5%' textAlign='center' fontSize='2rem' backgroundColor='#e66264' color='white' width='40%' margin='auto' borderRadius='5px'>There is nothing to See</Text>
      </Box>}
    </div>
  )


}
