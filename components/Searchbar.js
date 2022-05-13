import React,{useState,useEffect} from 'react'
import axios from 'axios'
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

function Searchbar({data}) {
    // const [products,setProducts] = useState([]);
    const [text,setText] = useState([]);
    const [suggesions,setSuggessions] = useState([]);

    // useEffect(() => {
    //   const loadUsers = async()=>{
    //       const response = await axios.get('https://fakestoreapi.com/products');
    //       setProducts(response.data);
    //       console.log(response.data)
    //     }
    //     loadUsers();
        
    // }, [])

    const onChangeHandler =(text)=>{
        let matches = [];
        if(text.length>0){
            
           matches = data.filter(product=>{
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


    <Flex direction={{ base: 'column'}} w="75%"  >
      


<InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<Search2Icon/>}
    />
    <Input type='text' placeholder='Search the products' value={text}
    onChange={e=>
        onChangeHandler(e.target.value)
    }
    />
  </InputGroup>
  {suggesions && 
  suggesions.map((suggesion, i)=>
        <Link href={suggesion.id} key={i} mt={2}>
          <Flex  mt={2} w="30%" zIndex={100} >
        <Box w={50} h={50}>
        <Image src={suggesion.image} mr={10} />
        </Box>    
        <Flex ml={5}>{suggesion.title}</Flex>
        </Flex>
        </Link>
)
}
      
    </Flex>
</Center>
  )
}

export default Searchbar