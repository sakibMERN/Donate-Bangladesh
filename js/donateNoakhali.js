
const totalDonationInputNoakhali = document.getElementById("total-donation-noakhali");
const donationAmountInputNoakhali = document.getElementById("donation-input-noakhali");

//insert total account balance
const totalAccountBalanceInputNoakhali = document.getElementById("total-account-balance");

// donation balance add and calculate for "Noakhali"
document.getElementById("donate-noakhali").addEventListener("click", function(){
    
    const donateAmount = Number(donationAmountInputNoakhali.value);

    // addAndCalculateDonation(id1, id2); 
    // id1 = donation amount id
    // id2 = amount input id
    const resultNoakhali = addAndCalculateDonation("total-donation-noakhali","donation-input-noakhali");

    if(result !== null && result != 0 && result > 0){
      totalDonationInputNoakhali.innerText = resultNoakhali;

    //total account balance
    const totalAccountResult = totalAccountBalanceUpdate("donation-input-noakhali");
    totalAccountBalanceInputNoakhali.innerText = totalAccountResult;

    const historyStatus = `
        <div class="p-8 space-y-4 border border-gray-200 rounded-2xl">
          <h4 class="text-xl font-bold ">${donateAmount} Taka is Donate for Flood at Noakhali, Bangladesh</h4>
          <p class="text-[16px] leading-7 font-light text-opacity-60">${Date()}</p>
        </div>
    `

    const history = document.getElementById("history-container");
    history.innerHTML += historyStatus;

    }
    

    // Add modal 


    

    

})