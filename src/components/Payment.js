
import React, {useState } from 'react';
import { Container, Typography, Button, Box, Grid, FormControl, InputLabel, Select, MenuItem, TextField} from '@mui/material';
import { useCart } from './CartContext';
import Layout from './Layout';
import './Payment.css';
import PayPalPayment from './PayPalPayment';


const Payment = () => {
  const { cart, totalPrice } = useCart();
  const [paymentMethod, setPaymentMethod] = React.useState('creditCard');
  const [discountCode, setDiscountCode] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice);

  const applyDiscount = () => {
    const discount = discountCode === 'SAVE10' ? 0.1 : 0; // 10% discount
    const newPrice = totalPrice * (1 - discount);
    setDiscountedPrice(newPrice);
  };
  const [cardDetails, setCardDetails] = React.useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  
  const handleError=(error)=>{
    console.error('PayPal Payment Error: ',error);
  };

  const handleCancel=()=>{
    console.log('Transaction cancelled');
  };

  const handleCardDetailsChange = (event) => {
    const { name, value } = event.target;
    setCardDetails({
      ...cardDetails,
      [name]: value
    });
  };

  const handlePlaceOrder = () => {
    console.log('Order placed with details:', { paymentMethod, cardDetails, cart });
  };

  return (
    <Layout>
      <Container style={{ marginTop: '4rem' }} className='payment-page'>
        <Grid>
              <Typography variant="h5"  gutterBottom>Order Summary</Typography>
            <Grid elevation={3} >
                  <Typography variant="h6" style={{marginTop:'1rem'}}>Cart Items:</Typography>
              {cart.map(item => (
                <Box key={item.id} style={{ marginBottom: '0.5rem' }}>
                  <Typography variant="body1">{item.name} - ₹{item.price} x {item.count}</Typography>
                </Box>
              ))}
              <Typography variant="h6" >Total Price: ₹{totalPrice.toFixed(2)}</Typography>
              <Typography variant="h6" style={{marginBottom:'2rem'}}>Discounted Price: ₹{discountedPrice.toFixed(2)}</Typography>
            </Grid>
            <Typography variant="h6" gutterBottom>Apply Discount</Typography>
            <TextField
              label="Discount Code"
              variant="outlined"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={applyDiscount}
              className='apply-button'
            >
              Apply
            </Button>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className='payment-header'>Payment Method</Typography>
            <FormControl fullWidth style={{ marginTop: '20px', marginBottom: '20px' }}>
              <InputLabel id="payment-method-label">Select Payment Method</InputLabel>
              <Select
                labelId="payment-method-label"
                id="payment-method"
                value={paymentMethod}
                label="Select Payment Method"
                onChange={handlePaymentMethodChange}
              >
                <MenuItem value="creditCard">Credit Card</MenuItem>
                <MenuItem value="debitCard">Debit Card</MenuItem>
                <MenuItem value="paypal">PayPal</MenuItem>
              </Select>
            </FormControl>
            {paymentMethod === 'creditCard' && (
              <Box>
                <TextField
                  fullWidth
                  label="Card Number"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardDetailsChange}
                  style={{ marginBottom: '20px' }}
                />
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                  <TextField
                    label="Expiry Date"
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleCardDetailsChange}
                    style={{ marginRight: '10px' }}
                  />
                  <TextField
                    label="CVV"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardDetailsChange}
                  />
                </Box>
              </Box>
            )}
            {paymentMethod === 'paypal' && (
              <Grid item xs={12} md={6}>
              <PayPalPayment totalPrice={totalPrice} onError={handleError} onCancel={handleCancel} />
            </Grid>
            )}
            <Button variant="contained" onClick={handlePlaceOrder} style={{ marginTop: '20px', backgroundColor: 'purple', width: '100%' }}>
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Payment;
