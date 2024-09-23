
const totalDonationInputQuota = document.getElementById("total-donation-quotaMovement");
const donationAmountInputQuota = document.getElementById("donation-input-quotaMovement");

//insert total account balance
const totalAccountBalanceInputQuota = document.getElementById("total-account-balance");

//Insert Modal
const addModalQuota = document.getElementById("greetings-modal");

// donation balance add and calculate for "Noakhali"
document.getElementById("donate-quotaMovement").addEventListener("click", function(){
    
    const donateAmount = Number(donationAmountInputQuota.value);
    
    // addAndCalculateDonation(id1, id2); 
    // id1 = donation amount id
    // id2 = amount input id
    const result = addAndCalculateDonation("total-donation-quotaMovement","donation-input-quotaMovement");

    if(result !== null && result != 0 && result > 0){
      totalDonationInputQuota.innerText = result;

      //total account balance
      const totalAccountResult = totalAccountBalanceUpdate("donation-input-quotaMovement");
      totalAccountBalanceInputQuota.innerText = totalAccountResult;
  
      const historyStatus = `
          <div class="p-8 space-y-4 border border-gray-200 rounded-2xl">
            <h4 class="text-xl font-bold ">${donateAmount} Taka is Aid for Injured in the Quota Movement</h4>
            <p class="text-[16px] leading-7 font-light text-opacity-60">${Date()}</p>
          </div>
      `
  
      const history = document.getElementById("history-container");
      history.innerHTML += historyStatus;
  
      // implement modal 
      addModalQuota.showModal();
  
      

    }
   

    

})