import React from 'react'
import { Card, CardHeader, CardBody, CardFooter ,Button,ButtonGroup,Divider,Text,Heading,Stack,Image} from '@chakra-ui/react'
import img from "./images/banner_2.jpg"

const Jewellery = () => {
  return (
    <div style={{backgroundColor:"#CAAFA8"}}>
          
          <div className='image'>
              <img src="https://img.freepik.com/free-photo/jewels-sparkle-golden-wedding-rings-lying-leather_8353-763.jpg?size=626&ext=jpg" alt="dresses" style={{height:"600px",width:"100%"}} />
          </div>
          <div style={{display:"grid",gap:"20px",gridTemplateColumns:"repeat(3,1fr"}}>
          <Card maxW='sm'>
                  <CardBody>
                      
                      <Image
                          src="https://www.bookeventz.com/blog/wp-content/uploads/2018/11/South-Indian-Bridal-Jewellery.jpg"
                          alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color="white">Bridal Jewellery</Heading>
     
      <Text color='white' fontSize='2xl'>
       Rs. 16000.00
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  
              </Card>
              <Card maxW='sm'>
                  <CardBody>
                      
                      <Image
                          src="https://m.media-amazon.com/images/I/81AtLV0+-+L._UL1500_.jpg"
                          alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color="white">Ring</Heading>
     
      <Text color='white' fontSize='2xl'>
       Rs. 50000.00
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  
              </Card>
              <Card maxW='sm'>
                  <CardBody>
                      
                      <Image
                          src="https://m.media-amazon.com/images/I/81aUa3LrDzL._UY500_.jpg"
                          alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color="white">Necklace and Earrings</Heading>
     
      <Text color='white' fontSize='2xl'>
       Rs. 187000.00
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  
              </Card>
              <Card maxW='sm'>
                  <CardBody>
                      
                      <Image
                          src="https://www.kalyanjewellers.net/images/Jewellery/Gold/images/rebha-sankalp-gold-necklace.jpg"
                          alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color="white">Necklace</Heading>
     
      <Text color='white' fontSize='2xl'>
       Rs. 48002.00
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  
</Card>
          </div>
    </div>
  )
}

export default Jewellery