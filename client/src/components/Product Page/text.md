import {
Drawer,
DrawerBody,
DrawerFooter,
DrawerHeader,
DrawerOverlay,
DrawerContent,
DrawerCloseButton,
} from '@chakra-ui/react'

function SizeExample() {
const [size, setSize] = React.useState('')
const { isOpen, onOpen, onClose } = useDisclosure()

const handleClick = (newSize) => {
setSize(newSize)
onOpen()
}

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

return (
<>
{sizes.map((size) => (
<Button
onClick={() => handleClick(size)}
key={size}
m={4} >{`Open ${size} Drawer`}</Button>
))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>

)
}
