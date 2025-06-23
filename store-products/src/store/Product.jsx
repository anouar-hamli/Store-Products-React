import Rating from "./Raiting";

export default function Product({ product }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price} $</td>
      <td>{product.description}</td>
      <td>{product.category}</td>
      <td>
        <img src={product.image} alt={product.title} width="50" />
      </td>
      <td><Rating rate={product.rating.rate} count={product.rating.count}/></td>
    </tr>
  );
}
