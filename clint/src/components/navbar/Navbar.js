import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css";
// import { Input } from '@chakra-ui/react'
import TypewriterComponent from "typewriter-effect";
import PersonIcon from '@mui/icons-material/Person';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import { Box, Icon, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button, Input, useDisclosure
} from '@chakra-ui/react'
import { Cart } from '../cart/cart';
import axios from 'axios';
import { loginUser, logoutUser } from '../../actions/loginAction';
import { useDispatch, useSelector } from 'react-redux';
import { useSelect } from '@mui/base';
import { Category } from '../../ContextAPI/CategoryProvider';


const Navbar1 = () => {
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => state);
  const [openModal, setModal] = useState(false);
  const [catg, setCatg] = useState("");
  const navigate = useNavigate();
  const {categoryChanged, searchcategory} = useContext(Category)
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      loginUser(token, dispatch);
    }
  }, [localStorage.getItem("token"), openModal, cart])

  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate();
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={() => {


          onOpen();


        }}>
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


  const styles = {borderBottom:"1px solid white",
   borderRadius:"0px",
     color:"white",
      fontSize: '31px',
       fontFamily:"sans-serif",
       paddingBottom:"3px"
      }

      const handleChange = (event) => {
        setCatg(event.target.value)
      }
      
      const handleClick = () => {
        categoryChanged(catg)
        onClose()
        setCatg("")
      }

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <div className="parent">
        <div style={{ display: "flex", padding: "10px", justifyContent: "space-between", fontSize: "50px", color: "#fff", width: "100%", cursor: "pointer" }}>

          <Link to="/" style={{ width: "130px" }}> <TypewriterComponent

            options={{
              strings: ["hebe."],
              loop: true,
              autoStart: true,
              typeSpeed: 1000,
              fontSize: '200px'
            }}

          />
          </Link>
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




          <div className='navLinks'>
            {
              user.firstName!="" ? <div>
                <Image onClick={() => { setModal(!openModal) }} height="50px" className='profileImage' width="50px" borderRadius="50%" src={user.image?user.image:"https://thumbs.dreamstime.com/b/anonymous-profile-icon-cartoon-style-vector-web-design-isolated-white-background-220529850.jpg"} />
                {openModal ? <Box backgroundColor={"#caafa8"} className="dropDown" position={"fixed"} top={"9%"} right={"60px"} borderRadius={"3px"} boxShadow={"0 0 3px white"} >
                  <p className='profileDown' style={{ padding: "12px" }}>{user.firstName}</p>
                  <p className='profileDown' style={{ padding: "12px" }} onClick={() => {
                    localStorage.removeItem("token");
                    navigate('/login');
                    logoutUser(dispatch);
                  }}>LogOut</p>
                </Box> : ""}
              </div> : <Link  to="/Login"> <Icon as={PersonIcon} /></Link>
            }
            <Icon onClick={onOpen} as={SearchSharpIcon} />
      
      <Modal size={'full'} height={"100%"} isOpen={isOpen} onClose={onClose}>
        <ModalContent style={{backgroundColor:"#CAAFA8", justifyItems:"center"}} height={"100%"} >
        <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{display:"flex",margin:"auto",  alignItems:"center"}}>
            <Input value={catg} onChange={handleChange} style={styles}
            size="xl"  variant='unstyled' type={"text"} placeholder="Search Our Store"
             _placeholder={{ color: 'white.1' }}
             fontWeight={"hairline"} />
          <Link to={`/products/${catg}`}>
              <Icon  fontSize="50px" color={"white"} paddingBottom="7px" borderBottom="1px solid white" onClick={handleClick} as={SearchSharpIcon} />
          </Link>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
            <Cart />
          </div>
        </div>

      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>

  )
}

export default Navbar1