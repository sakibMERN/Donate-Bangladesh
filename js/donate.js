// Insert data
const totalDonationInput = document.getElementById("total-donation");
const donationAmountInput = document.getElementById("donation-input-noakhali");

// donation balance add and calculate for "Noakhali"
document.getElementById("donate-noakhali").addEventListener("click", function(){
    
    
    // addAndCalculateDonation(id1, id2); 
    // id1 = donation amount id
    // id2 = amount input id
    const result = addAndCalculateDonation("total-donation","donation-input-noakhali");

    //total account balance 
    
    const totalAccountResult = totalAccountBalanceUpdate("donation-input-noakhali");

    // Add modal 

    
    

    

})