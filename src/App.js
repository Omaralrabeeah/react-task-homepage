import "./App.css";
import Prodacuts from "./Prodacuts";
function App() {
  const productlist = Prodacuts.map((product) => {
    return (
      <div>
        <img src={product.image} alt="" className="product-image"></img>
        <h4>{product.name}</h4>
        <h4>{product.price}</h4>
      </div>
    );
  });
  return (
    <div className="App">
      <h1>Cookies and beyond</h1>
      <h4>You'll never leave the cafe</h4>
      <img
        className="small"
        alt=""
        src="https://blog.common.com/blog/wp-content/uploads/2020/06/batchcookieco_90996522_573003480089527_373127690297320544_n.jpg"
      />
      <div className="omar">{productlist}</div>
    </div>
  );
}

export default App;
