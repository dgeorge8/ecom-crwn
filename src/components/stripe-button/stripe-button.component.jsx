import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51HtxihLIKLpdyQMyGrrxG60n5qL52znw6dhguDGimxtz14bXgBvEpLVIq3xPpI2FE1Z9dLfbXnuMPoFjdvHkBQ5E0057LJvusy';

    const onToken = token => {
        console.log(token);
        alert('Payment  Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing LTD'
            billingAddress
            shippingAdress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;