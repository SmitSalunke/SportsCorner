
function paymentProcess() {



    var options = {
        "key": "rzp_test_V9k1l6BcyUYxaM", // Enter the Key ID generated from the Dashboard
        "amount": 500*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
        "currency": "INR",
        "name": "SportsCorner",
        "description": "",
        "image": "logo.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
        "handler": function (response){
            savetoDB(response);
            $('#myModal').modal();
        },
        "prefill": {
            "name": "",
            "email": "@gmail.com",
            "contact": ""
        },
        "notes": {
            "address": "note value"
        },
        "theme": {
            "color": "#FF0000"
        }
    }
    var propay = new Razorpay(options);
    propay.open();
}


function savetoDB(response) {
    console.log(response)
    var payRef = firebase.database().ref('payment');

    payRef.child('123456789').set({
    payment_id : response.razorpay_payment_id
    })
}
