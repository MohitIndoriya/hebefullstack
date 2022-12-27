import React from 'react';
import {Link } from "react-router-dom"
import "./Navbar.css";
import TypewriterComponent from "typewriter-effect";
import PersonIcon from '@mui/icons-material/Person';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import { Icon } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,Input,useDisclosure
} from '@chakra-ui/react'
import { Cart } from '../cart/cart';
import axios from 'axios';



const Navbar1 = () => {
 
  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  

  return (
    <div className="parent">
<div style={{ fontSize:"50px",marginLeft:"30px",color:"#fff",width:"10%",cursor:"pointer"}}>

                           <Link to="/"> <TypewriterComponent

                                options={{
                                  strings: ["hebe."],
                                  loop: true,
                                  autoStart: true,
                                  typeSpeed:10,
                                  fontSize: '200px'
                                }}

                                />  
                                </Link>                    

      </div>
      <div className='navbar'>
        
     
        <div className="dropdown">
    
        <div><a href="#">SHOP</a></div>
        <div><a href="#">BRANDS</a></div>
        <div><a href="#">MY BOYFRIENDS BACK</a></div>
        <div><a href="#">STAFF EDIT</a></div>
      <div className="dropdown-content">
           
        <div className="row">
          <div className="column">
            <h3>BY STYLE</h3>
           
           <Link to="/products/sweatshirts">Sweat Shirts</Link>
           <Link to="/products/jackets">Jackets</Link>
            <a href="#">Belts</a>
          </div>
          <div className="column">
            <h3>-</h3>
            <Link to="/products/jewelery">jewelery</Link>
            <Link to="/products/sunglasses">Sun glasses</Link>
            <Link to="/products/skirts">Skirts</Link>
          </div>
          <div className="column">
            <h3>OUR STORE</h3>
            <a href="#">Hebe Homegrown</a>
            <a href="#">Meet The Girls</a>
            <a href="#">Careers</a>
          </div>
        </div>
      </div>
    </div> 
      </div>
      <div className='links'>
       <Link to="/Login"> <Icon as={PersonIcon} /></Link>
        <Icon as={SearchSharpIcon} />
       <Cart />
      </div>
    </div>
  )
}

export default Navbar1