const totalDonationInputFeni = document.getElementById("total-donation-feni");
const donationAmountInputFeni = document.getElementById("donation-input-feni");

//insert total account balance
const totalAccountBalanceInputFeni = document.getElementById(
  "total-account-balance"
);

//insert modal
const addModalFeni = document.getElementById("greetings-modal");

// donation balance add and calculate for "Noakhali"
document
  .getElementById("donate-feni")
  .addEventListener("click", function (event) {
    const donateAmount = Number(donationAmountInputFeni.value);

    /**Using common function */
    // addAndCalculateDonation(id1, id2);
    // id1 = donation amount id
    // id2 = amount input id
    const result = addAndCalculateDonation(
      "total-donation-feni",
      "donation-input-feni"
    );

    if (result !== null && result != 0 && result > 0) {
      // console.log("the donation is 0" ,result);
      totalDonationInputFeni.innerText = result;

      //Common function for total account balance calculation
      const totalAccountResult = totalAccountBalanceCalculate(
        "donation-input-feni"
      );

      //Common function for total account balance update
      totalAccountBalanceInputFeni.innerText = totalAccountResult;

      //history structure
      const historyStatus = `
          <div class="p-8 space-y-4 border border-gray-200 rounded-2xl">
            <h4 class="text-xl font-bold">${donateAmount} Taka is Donate for Flood Relief in Feni,Bangladesh</h4>
            <p class="text-white text-[16px] bg-slate-400 leading-7 font-light  rounded-lg pl-4">${Date()}</p>
          </div>
      `;
      /**Using common function */
      const history = document.getElementById("history-container");
      history.innerHTML += historyStatus;

      //Clear the input field
      document.getElementById("donation-input-feni").value = "";

      // implement modal
      addModalFeni.showModal();
    }

    event.stopPropagation();
  });
