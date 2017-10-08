 if(window.PaymentRequest)
 {
   const creditCardPaymentMethod =
   {
     supportedMethods: ['basic-card'],
     data:
     {
       supportedNetworks: ['visa', 'mastercard', 'amex'],
       supportedTypes: ['credit', 'debit']
     }
   };

   const supportedPaymentMethods = [
     creditCardPaymentMethod
   ];

   const paymentDetails =
   {
     total:
     {
       label: 'Mindsharp Ticket',
       amount:
       {
         currency: 'THB',
         value: 0
       }
     }
   };
   const options = {
     requestPayerName: true,
     requestPayerPhone: true,
     requestPayerEmail: true
   };
   const paymentRequest = new PaymentRequest(
     supportedPaymentMethods,
     paymentDetails,
     options
   );
   paymentRequest.show()
    .then((paymentResponse) => {
      return validatePaymentWithBackend(paymentResponse)
      .then((success) => {
        if (success) {
          return paymentResponse.complete('success');
        } else {
          return paymentResponse.complete('fail');
        }
      });
    })
    .catch((err) => {
      // The API threw an error or the user closed the UI
    });
 }
 else
 {
    //LEGACY PAYMENTS
 }
