import React from 'react'
import Searchbar from './Searchbar'
import {Flex,Box} from '@chakra-ui/react'
function Navbar() {
  return (
    <nav>
      <Flex w="100%" h='60px' >
        
        <Box w="100%">

        <Searchbar/>
        </Box>
      </Flex>

    </nav>
  )
}

export default Navbar