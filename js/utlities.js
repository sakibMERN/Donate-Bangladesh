
//insert total account balance
const totalAccountBalanceInput = document.getElementById("total-account-balance");

//======>>>>>>Common function for donation
function addAndCalculateDonation(id1, id2){
    const totalDonationInput = document.getElementById(id1);
    const donationAmountInput = document.getElementById(id2);
    
    // convert string to number
    const totalDonationNumber = Number(totalDonationInput.innerText);
    // console.log(totalDonationNumber);
    const donationAmountNumber = Number(donationAmountInput.value);
    // console.log(donationAmountNumber);
    const totalAccountBalanceNumber = Number(totalAccountBalanceInput.innerText);

    //validate the donation input 

    if(!isNaN(donationAmountNumber) && donationAmountInput !== ""){
        if( donationAmountNumber === 0){
            return alert("Please give a valid amount.");
        }
        else if(donationAmountNumber < 0){
            return alert("Negative number is not a donation amount. Please give a valid amount");
        }
        else if(totalAccountBalanceNumber < donationAmountNumber){
            alert("Insufficient balance!");
        }
        else{
            //add with total donation
            const totalDonation = totalDonationNumber + donationAmountNumber;
            // console.log("Total donation is:",totalDonation);
            return totalDonation;

        }
    }
    else{
        alert("Invalid number. Please, try again!");
    }
};

//======>>>>>>Common function for Total account balance calculation

function totalAccountBalanceCalculate(id){
    const donationAmountInput = document.getElementById(id);

    // convert string to number
    const donationAmountNumber = Number(donationAmountInput.value);
    const totalAccountBalanceNumber = Number(totalAccountBalanceInput.innerText);


    if(totalAccountBalanceNumber >= donationAmountNumber){
        // Adjust total account balance
        const updateBalance = totalAccountBalanceNumber - donationAmountNumber;
        return updateBalance;
    }else{
        return alert("Insufficient Balance");
    }
    
};

