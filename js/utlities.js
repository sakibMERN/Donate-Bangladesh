//insert total account balance
const totalAccountBalanceInput = document.getElementById(
  "total-account-balance"
);

//======>>>>>>Common function for donation
function addAndCalculateDonation(id1, id2) {
  const totalDonationInput = document.getElementById(id1);
  const donationAmountInput = document.getElementById(id2);
  const stringArray = donationAmountInput.value.split("");
 
  //detect first integer of a number and validate if start with 0
  const numberArray = Number(stringArray[0]);
  if(numberArray === 0){
    return alert("Invalid input: number cannot start with 0");
  }


//   if (/^0[0-9]+$/.test(donationAmountInput)) {
//     console.log("Invalid input: number starts with 0");
//   } else {
//     console.log("Valid input");
//   }

  // convert string to number
  const totalDonationNumber = Number(totalDonationInput.innerText);
  // console.log(totalDonationNumber);
  const donationAmountNumber = Number(donationAmountInput.value);
  // console.log(donationAmountNumber);
  const totalAccountBalanceNumber = Number(totalAccountBalanceInput.innerText);



  //validate the donation input

  if (!isNaN(donationAmountNumber) && donationAmountInput !== "") {
    if (donationAmountNumber === 0) {
      return alert("Please give a valid amount.");
    } else if (donationAmountNumber < 0) {
      return alert(
        "Negative number is not a donation amount. Please give a valid amount"
      );
    } else if (totalAccountBalanceNumber < donationAmountNumber) {
      alert("Insufficient balance!");
    } else {
      //add with total donation
      const totalDonation = totalDonationNumber + donationAmountNumber;
      // console.log("Total donation is:",totalDonation);
      return totalDonation;
    }
  } else {
    alert("Invalid number. Please, try again!");
  }
}

//======>>>>>>Common function for Total account balance calculation

function totalAccountBalanceCalculate(id) {
  const donationAmountInput = document.getElementById(id);

  // convert string to number
  const donationAmountNumber = Number(donationAmountInput.value);
  const totalAccountBalanceNumber = Number(totalAccountBalanceInput.innerText);

  if (totalAccountBalanceNumber >= donationAmountNumber) {
    // Adjust total account balance
    const updateBalance = totalAccountBalanceNumber - donationAmountNumber;
    return updateBalance;
  } else {
    return alert("Insufficient Balance");
  }
}
