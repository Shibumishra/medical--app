import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import MedicineData from './MedicineData';
import MedicineNavbar from './MedicineNavbar';
import { Switch, Route } from "react-router-dom";
import Cart from './Cart';
import ProductsSlider from './ProductsSlider';
import { AddCart } from '../../redux/actions/MedicineShoping';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  product_title: {
    fontWeight: "600",
    marginTop: "12px",
    fontSize: "14px",
    color: "#686868",
    opacity: "0.8",
  },
  product_brand: {
    fontWeight: "600",
    fontSize: "15px",
    color: "black",
    opacity: "0.8",
  },
  product_price: {
    margin: "0",
    marginTop: "12px",
    fontWeight: "600",
    color: "#009688",
    fontSize: '14px',
  },
});


const CardDetails = (props) => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [cardData, setCardData] = useState('');
  const { _products } = props._products;

  const addToCount = (e) => {
    setCount(count + 1)
    console.log(e.currentTarget.parentNode.parentNode)
    setCardData(e.currentTarget.parentNode.parentNode)
  }

  // the search result
  const [foundProduct, setFoundProduct] = useState(_products);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = _products.filter((product) => {
        return product.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundProduct(results);
    } else {
      setFoundProduct(_products);
    }
    setName(keyword);
  };

  return (<div>
    <MedicineNavbar count={count} filter={filter} name={name} />
    <ProductsSlider filter={filter} name={name} />
    <div id="main-container">
      <div id="clothing-section">
        {foundProduct.map((item) => (
          <Card className={`product-card-wrapper ${classes.root}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={item.brand}
                image={item.preview}
                title={item.brand}
              />
              <div className="product-content">
                {/* <h4 className="product-name">{name}</h4>
                  <h5 className="product-brand">{brand}</h5>
                  <p className="product-price">{price}</p> */}
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h4" className={classes.product_brand}>
                    {item.name}
                  </Typography>
                  <Typography gutterBottom variant="h4" component="h4" className={classes.product_title}>
                    {item.brand}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.product_price}>
                    Rs: {item.price}
                  </Typography>
                </CardContent>
              </div>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" style={{ color: "#fff", backgroundColor: "#1258a3", width: '100%', position: 'absolute', bottom: '0%', left: "0%", outline: 'none' }} onClick={() => props.AddCart(item)}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
    <Switch>
      <Route path="/cart" component={() => <Cart cardData={cardData} />} />
    </Switch>
  </div>);
}


const mapStateToProps = state => {
  return {
    _products: state.ShopApp,
    items: state.ShopApp
  };
}
function mapDispatchToProps(dispatch) {
  return {
    AddCart: item => dispatch(AddCart(item))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardDetails)