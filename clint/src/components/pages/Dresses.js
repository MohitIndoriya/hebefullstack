import React from 'react'
import img from "./images/banner_1.jpg"
import "./Dresses.css"
import { Card, CardHeader, CardBody, CardFooter ,Button,ButtonGroup,Divider,Text,Heading,Stack,Image} from '@chakra-ui/react'

const Dresses = () => {
  return (
      <div style={{backgroundColor:"#CAAFA8"}}>
          
          <div className='image'>
              <img src={img} alt="dresses" style={{height:"600px",width:"100%",objectFit:"parent"}} />
          </div>
          <div style={{display:"grid",gap:"20px",gridTemplateColumns:"repeat(3,1fr"}}>
          <Card maxW='sm'>
                  <CardBody>
                      
                      <Image
                          src="https://assets.ajio.com/medias/sys_master/root/20220617/4ASV/62ac820eaeb26921af36258b/-473Wx593H-464497062-pink-MODEL.jpg"
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color="white">Anytime Mini Dress</Heading>
     
      <Text color='white' fontSize='2xl'>
       Rs. 8000.00
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  
              </Card>
              <Card maxW='sm'>
                  <CardBody>
                      
                      <Image
src="https://assets.ajio.com/medias/sys_master/root/20220308/DZmO/62274520f997dd03e20720fd/-473Wx593H-463962995-pink-MODEL.jpg"
                          alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color="white">Cali Midi Dress</Heading>
     
      <Text color='white' fontSize='2xl'>
       Rs. 9100.00
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  
              </Card>
              <Card maxW='sm'>
                  <CardBody>
                      
                      <Image
                          src="https://images.meesho.com/images/products/103713364/0ioi6_512.jpg"
                          alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color="white">Clementine Dress</Heading>
     
      <Text color='white' fontSize='2xl'>
       Rs. 18700.00
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  
              </Card>
              <Card maxW='sm'>
                  <CardBody>
                      
                      <Image
                          src="https://cdn.shopify.com/s/files/1/1816/6561/products/1_27.jpg?v=1651738513"
                          alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color="white">Earth Angel Dress</Heading>
     
      <Text color='white' fontSize='2xl'>
       Rs. 18600.00
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  
</Card>
          </div>
    </div>
  )
}

export default Dresses