import React from "react";
import { useDispatch } from 'react-redux'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import products from "../Data/products.json";
import { addItem } from "../store/cartSlice";

function ProductPage() {
  const dispatch = useDispatch()
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {products &&
            products.fruits.map((product, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
                <Card style={{ borderRadius: 12 }} elevation={1}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product?.image}
                    alt={product?.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      fontWeight="bold"
                      textAlign="center"
                      fontSize={18}
                    >
                      {product?.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="secondary"
                      textAlign="center"
                      fontSize={16}
                    >
                      $ {product?.price}
                    </Typography>
                  </CardContent>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="success"
                    size="large"
                    onClick={()=>  dispatch(addItem(product))}
                  >
                    Add to cart
                  </Button>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}

export default ProductPage;
