import React from 'react'
import {Box,Grid,Center,Heading,Text} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
function Products({data}) {
    console.log(data);
  return (

    
<Grid templateColumns={{md:'repeat(4, 1fr)',sm:'repeat(1, 1fr)' }} gap={6} ml={{md:"40px",sm:"30px",base:"10px"}} mr={{md:"40px",sm:"30px", base:"10px"}} mt={10} >
  {
      data && data.map((products,i)=>

          <Box key={i} bg="blackAlpha.200" mt={1} border="1px" borderColor='blackAlpha.200' borderRadius='sm'>
              <Center w="100%" h="40vh" bg="white">
              <Image src={products.image} width='125px' height='auto' bg="blackAlpha.200"/>
              </Center>
              <Text fontSize={{md:'1.1em', sm:'0.8em'}} pt={2} pl='5px'>{products.title}</Text>
              
              <Text fontWeight={700} pl={2} pr={2} pt={2} fontSize='1.2em'>₹{products.price}</Text>
              <Text fontWeight='bold' textTransform='capitalize' p={2}>{products.category}</Text>
              <Text noOfLines={2} textTransform="inherit" pl='5px'>{products.description}</Text>
              <Text>{products.rivew}</Text>

          </Box>
      )
  }
</Grid>
  )
}

export default Products