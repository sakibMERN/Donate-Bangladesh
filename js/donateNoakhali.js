
const totalDonationInputNoakhali = document.getElementById("total-donation-noakhali");
const donationAmountInputNoakhali = document.getElementById("donation-input-noakhali");

//insert total account balance
const totalAccountBalanceInputNoakhali = document.getElementById("total-account-balance");

//insert modal
const addModalNoakhali = document.getElementById("greetings-modal");

// donation balance add and calculate for "Noakhali"
document.getElementById("donate-noakhali").addEventListener("click", function(event){
    
    const donateAmount = Number(donationAmountInputNoakhali.value);

    /**Using common function */
    // addAndCalculateDonation(id1, id2); 
    // id1 = donation amount id
    // id2 = amount input id
    const resultNoakhali = addAndCalculateDonation("total-donation-noakhali","donation-input-noakhali");

    if(resultNoakhali !== null && resultNoakhali != 0 && resultNoakhali > 0){
      totalDonationInputNoakhali.innerText = resultNoakhali;

    //total account balance
    const totalAccountResult = totalAccountBalanceCalculate("donation-input-noakhali");
    // totalAccountBalanceInputNoakhali.innerText = totalAccountResult;


    //Common function for total account balance update
    totalAccountBalanceUpdate(totalAccountResult);

    // const remainingBalances = document.getElementsByClassName("total");
    //   for(let remainingBalance of remainingBalances){
    //     remainingBalance.innerText = totalAccountResult;
    //     remainingBalance++;
    //   }

    //Add Modal
    

    const historyStatus = `
        <div class="p-8 space-y-4 border border-gray-200 rounded-2xl">
          <h4 class="text-xl font-bold ">${donateAmount} Taka is Donate for Flood at Noakhali, Bangladesh</h4>
          <p class="text-[16px] leading-7 font-light text-opacity-60">${Date()}</p>
        </div>
    `
    /**Using common function */
    const history = document.getElementById("history-container");
    history.innerHTML += historyStatus;

    //implement modal
    addModalNoakhali.showModal();

    }
    

   event.stopPropagation();


    

    

})