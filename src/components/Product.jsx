
const Product = (props) => {
    const {url, title, price, rating, desc, btn} = props;
    return  <article>

                <div className="product p-2">
                    <img src={url} alt="Product-Image" />
                    <div className="details d-flex flex-column gap-1 p-1">
                        <h3>{title}</h3>
                        <p>{price}</p>
                        <p>{rating}</p>
                        <p>{desc}</p>
                        <div className="button">
                            <button>{btn}</button>
                        </div>
                    </div>
                </div> 

            </article>
}
export default Product;