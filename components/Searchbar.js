import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
  } from '@chakra-ui/react'
  import {Search2Icon} from '@chakra-ui/icons'

function Searchbar() {
    const [products,setProducts] = useState([]);
    const [text,setText] = useState([]);
    const [suggesions,setSuggessions] = useState([]);

    useEffect(() => {
      const loadUsers = async()=>{
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
          console.log(response.data)
        }
        loadUsers();
        
    }, [])

    const onChangeHandler =(text)=>{
        let matches = [];
        if(text.length>0){
            
           matches = products.filter(product=>{
               const regex = new RegExp(`${text}`,"gi");
               return product.title.match(regex);
           })
        }
        console.log("matches",matches)
        setSuggessions(matches);
        setText(text);
    }
    




  return (


    <Flex direction={{ base: 'column'}} w="75%" >
      


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
      <Flex key={i} ml={20} mt={2} w="30%" >{suggesion.title}</Flex>
)
  }
      
    </Flex>
  )
}

export default Searchbar