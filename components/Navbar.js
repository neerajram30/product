import React,{useState} from 'react'
import {
    Flex,
    Button,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
  } from '@chakra-ui/react'
  import {Search2Icon} from '@chakra-ui/icons'
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Searchbar from './Searchbar'



function Navbar() {
    // const { colorMode, toggleColorMode } = useColorMode()
    // const isDark = colorMode === 'dark'

    const [display, changeDisplay] = useState('none')
  return (
    
    <Flex justifySelf="start">
      <Flex
        position="fixed"
        top="1rem"
        
        align="center"
      >
        {/* Desktop */}
        <Flex
          display={['none', 'none', 'flex','flex']}
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={1}
              w="100%"
            >
              Home
                    </Button>
          </NextLink>
        </Flex>
        {/* <Flex >
          
        <InputGroup ml={5}>
    <InputLeftElement
      pointerEvents='none'
      children={<Search2Icon/>}
    />
    <Input type='search' placeholder='Search the products'  />
  </InputGroup>

        </Flex> */}
      <Searchbar/>


        {/* Mobile */}

  
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={1}
          ml={5}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        {/* <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
        /> */}
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
                    </Button>
          </NextLink>

          {/* <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
            >
              About
                    </Button>
          </NextLink> */}

          {/* <NextLink href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Contact
            </Button>
          </NextLink> */}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar