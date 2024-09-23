
const totalDonationInputFeni = document.getElementById("total-donation-feni");
const donationAmountInputFeni = document.getElementById("donation-input-feni");

//insert total account balance
const totalAccountBalanceInputFeni = document.getElementById("total-account-balance");

// donation balance add and calculate for "Noakhali"
document.getElementById("donate-feni").addEventListener("click", function(){
    
    const donateAmount = Number(donationAmountInputFeni.value);
    
    // addAndCalculateDonation(id1, id2); 
    // id1 = donation amount id
    // id2 = amount input id
    const result = addAndCalculateDonation("total-donation-feni","donation-input-feni");
    if(result !== null && result != 0 && result > 0){
      console.log("the donation is 0" ,result);
      totalDonationInputFeni.innerText = result;
  
      //total account balance
      const totalAccountResult = totalAccountBalanceUpdate("donation-input-feni");
      totalAccountBalanceInputFeni.innerText = totalAccountResult;
  
      const historyStatus = `
          <div class="p-8 space-y-4 border border-gray-200 rounded-2xl">
            <h4 class="text-xl font-bold ">${donateAmount} Taka is Donate for Flood Relief in Feni,Bangladesh</h4>
            <p class="text-[16px] leading-7 font-light text-opacity-60">${Date()}</p>
          </div>
      `
  
      const history = document.getElementById("history-container");
      history.innerHTML += historyStatus;
  
      // Add modal 
  
  
    }
    

    

})