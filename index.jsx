import React from "react"
import ReactDOM from "react-dom/client"
import { slowCountItems } from "./utils"
// import ProductsList from "./ProductsList"
import productsData from "./data"
import Product from "./Product"

const ProductsList = React.lazy(() => {
  return import("./ProductsList")
})

function App() {
  const [count, setCount] = React.useState(0)
  const [showProducts, setShowProducts] = React.useState(false)
  const [sort, setSort] = React.useState(false)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }


  const startTime1 = Date.now()
  const sortedProducts = [...productsData].sort((
    (a, b) => a.name.localeCompare(b.name)
  ))
  const endTime1 = Date.now()
  console.log(`Took ${endTime1-startTime1}ms`)

  const visibleProducts = sort ? sortedProducts : productsData

  // const productsCount = React.useMemo(() => {
  //   return slowCountItems(productsData, 500)
  // }, [productsData])
  // const productsCount = slowCountItems(ProductsList, 500)

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>
        -
            </button>
      <button className="button" onClick={increment}>
        +
            </button>
      <br />
      <br />
      {/* <button
        className="button"
        onClick={() => setShowProducts(prev => !prev)}
      >
        Show Products
            </button>
      <br />
      <br />
      <h2>There are {productsCount} products</h2>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <div className="products-list">
          {showProducts && <ProductsList />}
        </div>
      </React.Suspense> */}
      <button
        className="button"
        onClick={() => setSort(prev => !prev)}
      >
        {sort ? "Unsort" : "Sort"}
      </button>
      <br />
      <br />
      <div className="products-list">
        {
          visibleProducts.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
)
