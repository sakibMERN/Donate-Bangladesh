console.log("U FETCHER");
function activeFetcher(id){
    if(id === "donation-fetcher"){
        //Active
        document.getElementById("donation-container").classList.remove("hidden");
        document.getElementById("donation-fetcher").classList.add("bg-[#B4F461]"); 

        //disable
        document.getElementById("history-container").classList.add("hidden");
        document.getElementById("history-fetcher").classList.remove("bg-[#B4F461]");
    }
    else{
        //Active
        document.getElementById("donation-container").classList.add("hidden");
        document.getElementById("donation-fetcher").classList.remove("bg-[#B4F461]"); 

        //disable
        document.getElementById("history-container").classList.remove("hidden");
        document.getElementById("history-fetcher").classList.add("bg-[#B4F461]");
    }
    
}