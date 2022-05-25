import React,{useState,useEffect} from 'react'
import { Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

import {
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Center,
    Box
  } from '@chakra-ui/react'
  import {Search2Icon} from '@chakra-ui/icons'
  import {useSelector} from 'react-redux'
  import {fetchProducts} from '../store/actions/Productactions'
  import {useDispatch} from 'react-redux'

function Searchbar() {
   const [products,setProducts] = useState([]);
    const [text,setText] = useState([]);
    const [suggesions,setSuggessions] = useState([]);
    const data = useSelector((state)=>state);
    
    const dispach = useDispatch();

    useEffect(() => {
      dispach(fetchProducts());
      
    }, [])

    const onChangeHandler =(text)=>{
        let matches = [];
        if(text.length>0){
            
           matches = data.allProducts.products.filter(product=>{
               const regex = new RegExp(`${text}`,"gi");
               return product.title.match(regex);
           })
        }
        console.log("matches",matches)
        setSuggessions(matches);
        setText(text);
    }
    




  return (
    <Center mt={2}>


    <Flex direction={{ base: 'column'}} w={{base:"75%", md:"60%",sm:"75%"}}  >
      


<InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<Search2Icon/>}
      bg='blue.600'
      color='white'
    />
    <Input type='text' placeholder='Search the products' value={text}
    onChange={e=>
        onChangeHandler(e.target.value)
    }
    />
  </InputGroup>
  <Box   zIndex={1} bg='white' ml={5} mt={2}>

  {suggesions && 
  suggesions.map((suggesion, i)=>{
  <Link href={suggesion.id} key={i} mt={4} >
          <Flex  mt={2} w="90%">
        <Center w={50} h={50}>
        <Image src={suggesion.image} mr={10} />
        </Center>    
        <Flex ml={5}>{suggesion.title}</Flex>
        </Flex>
        </Link>}
)
}
</Box>
      
    </Flex>
</Center>
  )
}

export default Searchbar