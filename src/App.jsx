import axios from "axios";
import { useState, useEffect } from "react";
import { AddProduct } from "./components/addProduct/AddProduct";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { SearchProducts } from "./components/searchProducts/SearchProducts";
import loaderImg from "./assets/preloader.svg";
// [
//   {
//     id: 1,
//     checked: false,
//     name: "Pizza",
//   },
//   {
//     id: 2,
//     checked: false,
//     name: "Coke",
//   },
// {
//   "id": 3,
//   "checked": false,
//   name: "Baxtiyor",
// },
// ]

function App() {
  const PRODUCTS_URL = "http://localhost:3800/products";

  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios(PRODUCTS_URL);
      setProducts(data);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setLoader(false);
      console.log("внутри finally");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [productName, setProductName] = useState("");

  const [search, setSearch] = useState("");

  // const setAndSaveProducts = (newProducts) => {
  //   setProducts(newProducts);
  //   localStorage.setItem("shits", JSON.stringify(newProducts));
  // };

  const handleCheck = async (id) => {
    const newProductsList = products.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    const newProduct = newProductsList.find((product) => product.id === id);

    await axios.put(`${PRODUCTS_URL}/${id}`, newProduct);

    setProducts(newProductsList);
  };

  const handleDelete = async (id) => {
    const newProductsList = products.filter((product) => product.id !== id);

    await axios.delete(`${PRODUCTS_URL}/${id}`);

    setProducts(newProductsList);
  };

  const addProduct = async (name) => {
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    const newProduct = { id, checked: false, name };

    const newProductsList = [...products, newProduct];

    await axios.post(PRODUCTS_URL, newProduct);
    setProducts(newProductsList);

    // setAndSaveProducts(newProductsList);

    setProductName("");
  };

  return (
    <div className="App">
      <Header>Список продуктов</Header>
      <AddProduct
        productName={productName}
        setProductName={setProductName}
        addProduct={addProduct}
      />

      <SearchProducts search={search} setSearch={setSearch} />

      <main style={{ textAlign: "center" }}>
        {loader && <img src={loaderImg} alt="loader" />}
        {error && <h4>{error}</h4>}

        {!loader && !error && (
          <Content
            items={products.filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase())
            )}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
