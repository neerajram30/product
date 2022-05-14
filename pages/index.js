import Head from 'next/head'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import {useEffect} from 'react'
import axios from 'axios'
import Products from '../components/Products'
import { useDispatch,useSelector } from 'react-redux'
import { setProducts,fetchProducts } from '../store/actions/Productactions'

export default function Home() {
  //  const dispach = useDispatch();


  //  const loadProducts = async()=>{
  //      const response = await axios.get('https://fakestoreapi.com/products').
  //      catch((err)=>{
  //        console.log("error",err);
  //      });
  //      dispach(setProducts(response.data))
  //    }


  //  useEffect(() => {
  //      dispach(fetchProducts());
  //  }, [])


  return (
    <div >
      <Head>
        <title>Product Rivew</title>
        <meta name="description" content="Product Review Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Searchbar/>
        <Products/>
        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
