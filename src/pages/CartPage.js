import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { decrementItem, incrementItem, removeItem } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.carts);

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  return (
    <div>
      <Paper
        style={{ padding: 12, borderRadius: 8, background: "#2a2829" }}
        elevation={5}
      >
        <Typography fontSize={26} color={"#fff"} marginBottom={5}>
          My Cart
        </Typography>
        {cartItems &&
          cartItems.map((item, index) => (
            <div style={{ marginBottom: 12 }} key={index}>
              <Box sx={{ display: "flex", marginTop: 2 }}>
                <Avatar
                  variant="square"
                  alt="Remy Sharp"
                  src={item.image}
                  sx={{ width: 56, height: 56 }}
                />
                <Typography marginLeft={4} color={"#fff"}>
                  {item.name}
                </Typography>

                <Typography
                  marginLeft={"auto"}
                  color={"#fff"}
                >{`$ ${item.price}`}</Typography>
              </Box>

              <Box sx={{ display: "flex", marginLeft: 10, marginTop: -4 }}>
                <ButtonGroup
                  variant="outlined"
                  style={{
                    borderRadius: 120,
                    height: 30,
                    marginTop: 8,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ width: "auto" }}
                    onClick={() => dispatch(incrementItem(item.id))}
                  >
                    <Typography fontSize={18} color="#fff">
                      +
                    </Typography>
                  </Button>
                  <Typography
                    fontSize={14}
                    marginTop={0.8}
                    paddingLeft={2}
                    paddingRight={2}
                    color={"#fff"}
                  >
                    {item?.quantity}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ width: "auto" }}
                    onClick={() => dispatch(decrementItem(item.id))}
                  >
                    <Typography fontSize={18} color="#fff">
                      -
                    </Typography>
                  </Button>
                </ButtonGroup>
                <IconButton
                  onClick={() => dispatch(removeItem(item.id))}
                  aria-label="delete"
                  size="medium"
                  style={{ marginLeft: "auto", color: "red", marginTop: 12 }}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Box>
            </div>
          ))}
        {cartItems.length === 0 && (
          <Typography margin={2} fontSize={18} color={"#fff"}>
            Your Cart is Empty
          </Typography>
        )}
        <Divider sx={{ background: "#fff" }} />
        <div style={{ marginBottom: 12 }}>
          <Box sx={{ display: "flex" }}>
            <Typography margin={2} fontSize={18} color={"#fff"}>
              Total
            </Typography>

            <Typography
              margin={1}
              marginBottom={2}
              marginLeft={"auto"}
              color={"#fff"}
              fontSize={18}
            >
              {`$ ${cartTotal}`}
            </Typography>
          </Box>
          {cartItems.length === 0 ? null : (
            <Button variant="contained">
              <Typography fontSize={16}>Proceed to Checkout</Typography>
            </Button>
          )}
          <Button
            variant="contained"
            sx={{ ml: 2 }}
            onClick={() => navigate("/products")}
          >
            <Typography fontSize={16}>go Back</Typography>
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default CartPage;
