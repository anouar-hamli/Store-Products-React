import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {

  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategory] = useState([]);

const displayCategories = () => {
    return categories.map(category=> 
      <button className="btn btn-secondary m-1" key={category} onClick={() => setSearchInput(category)}>
        {category}
      </button>)
}

const displayProducts = () => {
  const filtered = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchInput.toLowerCase())||
    product.category.toLowerCase().startsWith(searchInput.toLowerCase()) 
  );

  return filtered.map((product) => (
    <Product key={product.id} product={product} />
  ));
};



  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
     .then(data => {
                    setProducts(data);     
                    console.log(data);     
})
      .catch(error => console.error("Fetch error:", error));
  };
    const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
     .then(data => {
                    setCategory(data);     
                    console.log(data);     
})
      .catch(error => console.error("Fetch error:", error));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = document.querySelector("#search").value;
    setSearchInput(searchValue);

    
  };
  
  return (
    <div className="container mt-5 my-3">
      <h2>Search</h2>
        <form>
        <div className="container-fluid mx-auto w-75 my-3">
          <div className="mb-3">
            <label htmlFor="search" className="form-label">Search</label>
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Search for products..."
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
  </form>
      <div className="row g-3 align-items-center">
        <hr />
        <h5>Categories:</h5>
        <div className="btn-group">
          {displayCategories()}
        </div>
          
      </div>

      <h1>Product:</h1> 
      <table className="table"> {}
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          {displayProducts()}
          {/* <Product product={products[0]} /> */}
          {/* You can also use the Product component directly here if you want to display a specific product */}
        </tbody>
      </table>
      
    </div>
  );
}
