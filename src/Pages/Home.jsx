// import { useLoaderData } from "react-router-dom";
import About from "./About";
import Banner from "./Banner";
import Brand from "./Brand";
import Faq from "./Faq";
import Footer from "./Footer";

const Home = () => {

    // const products = useLoaderData()

    return (
        <>
            <Banner></Banner>
            {/* <h1>this is home {products.length}</h1> */}
            <Brand></Brand>
            <About></About>
            <Faq></Faq>
            <Footer></Footer>
        </>
    )
}

export default Home;