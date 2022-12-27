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
import { Link } from 'react-router-dom'
export function Cart() {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  let { cart, total } = useSelector((store) => store.cart)
  useEffect(() => {
    dispatch(getcart())
   
    console.log(cart, total, "store")
  }, [])
  console.log(cart, total, "store")

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
  
  function removefromcart(id){
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
          bg="#caafa8"
          paddingBottom="5px"
        >{<Icon bg="#caafa8" color="white" borderColor="#caafa8" as={ShoppingBagSharpIcon}  />}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{` Cart Items`}</DrawerHeader>
          <DrawerBody>
            <Container h={400} overflowY="scroll">
              {cart.map((el, index) => {
                return (<div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "60px",
                  }}
                  key={index}
                >
                  <img
                    src={el.image}
                    alt={index}
                    style={{ height: "150px", width: "150px" }}
                  />
                  <div>
                    <p>{el.title}</p>
                    <p>{`$ ${el.price}`}</p>
                  </div>
                  <div style={{ marginLeft: "70px"  }}>
                    <div style={{ display: "flex", alignItems:"center", hight: "200px" }}>   <p style={{marginBottom:"50px"}}>{el.quantity}</p> <div style={{ display: "flex" ,flexDirection:"column" }}><Button onClick={()=>{
                       dispatch(HandleQuantiy({id:el.id,quantity:el.quantity+1}))
                    }} size="xs" colorScheme='teal' variant='ghost' width={1}><Icon as={ChevronUpIcon} /></Button>

                    <Button onClick={()=>{
                      el.quantity<=1?dispatch(removedata(el.id)):
                      dispatch(HandleQuantiy({id:el.id,quantity:el.quantity-1}))
                    }} colorScheme='teal' variant='ghost' size="xs" width={1}>
    
  <Icon as={ChevronDownIcon} /></Button>
                    <div style={{marginTop:"20px"}}>  <Divider orientation='horizontal' width={50} borderStyle="solid" />
                      <button onClick={()=>removefromcart(el.id)}>Remove</button></div>
                      </div>
                      </div>
                  </div>
                </div>)

              })}
            </Container><div style={{display:"flex",flexDirection:"row" ,justifyContent:"space-between"}}>
            <div style={{fontSize:"30px"}}>SubTotal </div>
            <div style={{fontSize:"30px"}} >$ {total}</div></div>
            <p style={{marginLeft:"50px",fontSize:"12px" ,color:"grey", marginTop:"50px"}} >Shipping, taxes, and discount codes calculated at checkout.</p>
           <Box alignItems="center" marginTop={50} marginLeft={200} fontSize="20px" color="#caafa8"> <Link to="/checkout">Checkout</Link></Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}