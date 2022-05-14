import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
import {useSelector,useDispatch} from 'react-redux'
import { fetchProduct } from '../store/actions/Productactions'
import {Flex,Box,Image,Text} from '@chakra-ui/react'

function ProductDetails() {
    const router = useRouter()
    const { id } = router.query
    const product =useSelector((state) => state.product);
    const dispatch = useDispatch();
    console.log(id);
    console.log(product);
    useEffect(() => {
      if(id && id !=="")
      dispatch(fetchProduct(id));
    }, [id])
    
  return (
    <Flex flexDirection={{base:'column',md:'row'}}>
      <Box ml={{md:"10%",base:"2%"}} mt="10%" >
    <Image src={product.image} w='350px' h="auto"/>
      </Box>
      <Box ml="13%" mt="5%" w={{md:"30%", base:"80%"}}>
        <Text fontSize="1.4em">
          {product.title}
        </Text>
        <Text fontSize='1.6em' mt='6'>
          ${product.price}
        </Text>
        <Text fontSize='1.3em' fontWeight={600} mt='4'>About this item</Text>
        <Text mt='2'>{product.description}</Text>
      </Box>
    </Flex>
  )
}

export default ProductDetails