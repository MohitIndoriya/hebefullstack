import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, useDisclosure, Button, Container, Box, Image, Text, Heading, Card, CardBody, Stack, CardFooter, Divider
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import ShoppingBagSharpIcon from "@mui/icons-material/ShoppingBagSharp"
import React from "react"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, getcart, HandleQuantiy, removedata } from '../../actions/cartAction'
import { display, height, padding } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import './cart.css'
import { toast } from 'react-toastify'



export function Cart() {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  let { cart, total } = useSelector((store) => store.cart)
  useEffect(() => {
    dispatch(getcart())

    // console.log(cart, total, "store")
  }, [])
  // console.log(cart, total, "store")

  const handleClick = (newSize) => {
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
      setSize(newSize)
      onOpen()

    }
  }

  function removefromcart(id) {
    dispatch(removedata(id))
  }

  const sizes = ['md']

  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleClick(size)}
          key={size}
          m={-2}
          borderColor="#caafa"
          type="unstyled"
          variant="link"
          
        >{<Icon  color="white" borderColor="#caafa8" as={ShoppingBagSharpIcon} />}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{` Cart Items`}</DrawerHeader>
          <DrawerBody>
            <Container className='cartInner' h={450} overflowY="scroll">
              {cart.map((el, index) => {
                return (<div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "20px",
                    boxShadow: "0 0 1px grey",
                    padding: "5px"
                  }}
                  key={index}
                >
                  <img
                    src={el.image}
                    alt={index}
                    style={{ height: "150px", width: "150px" }}
                  />
                  <div>
                    <Text noOfLines={1}>{el.title}</Text>
                    <p  >{`$ ${el.price}`}</p>
                  </div>
                  <div style={{ marginLeft: "70px", display: "grid", justifyContent: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", hight: "200px",justifyContent:"center" }}>    <div style={{ display: "flex", flexDirection: "column",justifyContent:"center" }}><Button onClick={() => {
                      dispatch(HandleQuantiy({ id: el["_id"], quantity: el.quantity + 1 }))
                    }} size="xs" colorScheme='teal' variant='ghost' width={1}><Icon as={ChevronUpIcon} /></Button>
                      <p className='quantityCart'>{el.quantity}</p>
                      <Button onClick={() => {
                        el.quantity <= 1 ? dispatch(removedata(el["_id"])) :
                          dispatch(HandleQuantiy({ id: el["_id"], quantity: el.quantity - 1 }))
                      }} colorScheme='teal' variant='ghost' size="xs" width={1}>

                        <Icon as={ChevronDownIcon} /></Button>
                      <div style={{ marginTop: "20px" }}>  <Divider orientation='horizontal' width={50} borderStyle="solid" />
                        <button onClick={() => removefromcart(el["_id"])}>Remove</button></div>
                    </div>
                    </div>
                  </div>
                </div>)

              })}
            </Container><div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <div style={{ fontSize: "30px" }}>SubTotal </div>
              <div style={{ fontSize: "30px" }} >$ {total.toFixed(2)}</div></div>
            <p style={{ marginLeft: "50px", fontSize: "12px", color: "grey", marginTop: "50px" }} >Shipping, taxes, and discount codes calculated at checkout.</p>
            <Box alignItems="center" m="auto" display="block" marginTop={50} w="50%" textAlign="center" padding="10px 0px" color="white" fontSize="20px" bgColor="#caafa8"> <Link onClick={onClose} to="/address">Checkout</Link></Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}