// import { useEffect, useState } from "react";
// import { Button, createTheme, ThemeProvider } from "flowbite-react";

import { useEffect, useState } from "react";

// const ProductCard = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const data = await fetch("https://fakestoreapi.com/products");
//       const Response = await data.json();
//       setProducts(Response);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <section className="bg-gray-50 py-8 antialiased md:py-12">
//         <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
//           <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
//               >
//                 <div className="h-56 w-full">
//                   <a href="#">
//                     <img
//                       className="mx-auto h-full dark:hidden"
//                       src={product.image}
//                       alt={product.title}
//                     />
//                     <img
//                       className="mx-auto hidden h-full dark:block"
//                       src={product.image}
//                       alt={product.title}
//                     />
//                   </a>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-xl font-bold">{product.title}</h2>
//                   <p className="text-lg font-semibold">${product.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }
// };
// export default ProductCard;

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const Response = await data.json();
      setProducts(Response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <section className="bg-gray-50 py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 grid gap-8 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((item) => (
                <div key={item.id} className="image  bg-amber-300 p-3 rounded-lg shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="text-center mt-2">
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <p>{item.description}</p>
                    <button className="p-2 bg-white rounded-2xl">
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
};
export default ProductCard;
