import Head from 'next/head'
import Navbar from '../components/Navbar'
import Products from '../components/Products'


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
        <Navbar/>
        {/* <Searchbar/> */}
        <Products/>
        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
