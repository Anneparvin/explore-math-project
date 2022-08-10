// discount price
// 1.. if a ticket number less than 100,per ticket price :100
// 2... if a ticket number more than 100,but less than 200 .first 100 ticket will be 100/ticket rest ticket will be 90 taka per price.
// 3..if you purchase more than 200 tickets
//   first 100........100tk
//   second 101-200......90 tk
//   200+......70tk 
function ticketPrice (ticketQuantity){ 
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (ticketQuantity<=100){
        const price = ticketQuantity*first100Rate;
        return price ;   
    }
    else if (ticketQuantity<=200){
        const first100Price = 100*first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity*second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice ; 
    }
    else{
        const first100Price = 100*first100Rate;
        const second100Price = 100*second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity*restTicketRate;
        const totalCost = first100Price +second100Price+ restTicketPrice; 
        return totalCost ; 
    }
    }
    const price = ticketPrice(201);
    console.log('price:', price);
    