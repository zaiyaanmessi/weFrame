import Head from 'next/head';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Product from './component/Product';
import Breadcrumbs from './component/Breadcrumbs';
import UNavbar from './component/Uppernav';
import Footer from './component/Footer';
import PageNavigator from './component/pagenumber';



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black ">
      <Head>
        <title>Product Listing</title>
      </Head>
      <UNavbar />
      {/* Navbar */}
      <Breadcrumbs />
      <Navbar/>
     
      
     
      <main className="container mx-auto flex flex-wrap pt-6">
        
        {/* Sidebar */}
        <Sidebar/>

        {/* Product Grid */}
       <Product/>
      
       
     
      </main>
      <PageNavigator />
      <Footer />
     
    </div>
    
  );
}
