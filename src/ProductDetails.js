import React from 'react';
import './ProductDetails.css';

function ProductDetails(props) {
  return (
    <div class="product-deatils-container ">
      <h1>Product details page</h1>

      <div className="product-details-grid">  
        <div>Product ID</div>
        <div><input type="text" value={props.ProductId} /></div>

        <div>UPC</div>
        <div><input type="text" value={props.Upc} /></div>

        <div>MPN</div>
        <div><input type="text" value={props.Mpn} /></div>

        <div>SKU</div>
        <div><input type="text" value={props.Sku} /></div>

        <div>Quantity</div>
        <div><input type="text" value={props.Quantity} /></div>

        <div>Title</div>
        <div><input type="text" value={props.Title} /></div>

        <div>Short Description</div>
        <div><input type="text" value={props.ShortDescription} /></div>

        <div>Description</div>
        <div><input type="text" value={props.Description} /></div>

        <div>Price</div>
        <div><input type="text" value={props.Price} /></div>

        <div>Category</div>
        <div><input type="text" value={props.CategoryId} /></div>

        <div>Width</div>
        <div><input type="text" value={props.Width} /></div>

        <div>Height</div>
        <div><input type="text" value={props.Height} /></div>

        <div>Length</div>
        <div><input type="text" value={props.Length} /></div>

        <div>Image 1</div>
        <div><input type="text" value={props.Image1} /></div>

        <div>Image 2</div>
        <div><input type="text" value={props.Image2} /></div>

        <div>Image 3</div>
        <div><input type="text" value={props.Image3} /></div>
      </div>
    </div>
  );
}

export default ProductDetails;
