import React,{useState,useEffect} from 'react'
import {Box,Grid,Center,Heading,Text} from '@chakra-ui/react'
import { Image,Link } from '@chakra-ui/react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {fetchProducts} from '../store/actions/Productactions'

function Products() {
    const [products,setProducts] = useState([])
    const data = useSelector((state)=>state);
    const dispach = useDispatch();
    
    useEffect(() => {
      dispach(fetchProducts());
    }, [])
    
  return (

    
<Grid templateColumns={{md:'repeat(4, 1fr)',sm:'repeat(1, 1fr)' }} gap={6} ml={{md:"75px",sm:"30px",base:"10px"}} mr={{md:"75px",sm:"30px", base:"10px"}} mt={10} mb='5%'>
    {
      data.allProducts.products && data.allProducts.products.map((product,i)=>
          <Box key={i} bg="blackAlpha.200" mt={1} border="1px" borderColor='blackAlpha.200' borderRadius='sm' >
            <Link href={product.id} textDecoration='none' _hover={{textDecoration:'none'}} >
              <Center w="100%" h="40vh" bg="white" border='1px' borderColor='blue.600'>
              <Image src={product.image} width='125px' height='auto' />
              </Center>
              <Box>

              <Text fontSize={{md:'1.1em', sm:'0.8em'}} pt={2} pl='5px'>{product.title}</Text>
              
              <Text fontWeight={700} pl={2} pr={2} pt={2} fontSize='1.2em'>${product.price}</Text>
              <Text fontWeight='bold' textTransform='capitalize' p={2}>{product.category}</Text>
              <Text noOfLines={2} textTransform="inherit" pl='5px'>{product.description}</Text>
              <Text>{product.rivew}</Text>
              </Box>

          </Link>
          </Box>
      )
  }  
</Grid>
  )
}

export default Products