import Head from 'next/head'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Home() {
  const [data,setData] = useState([]);
  useEffect(() => {
    const loadUsers = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      }
      loadUsers();
      
  }, [])


  return (
    <div >
      <Head>
        <title>Product Rivew</title>
        <meta name="description" content="Product Review Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Searchbar data={data}/>
        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
