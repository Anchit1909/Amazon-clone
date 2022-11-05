import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/*Banner*/}
        <Banner />
        {/*ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

/*By using this, we tell nextjs that it is no longer a static website, it has to do server side rendering.
This means that now it has to do some calculations in the server and then send it to the browser for it to get displayed.
*/
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
