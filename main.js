function copuponn(){
    const coopupon = document.getElementById('copupon');
    coopupon.classList.add('hidden');

}


let seatCount = 0;
let totalSeat = 16;
let selectSeatNum = 0;
let nonSelectSeat = seatCount;
const price = 550;
totalprice = 0;
const seats = document.querySelectorAll(".kbd")
for(let seat = 0; seat<seats.length; seat++){
    const seatt = seats[seat];
    seatt.addEventListener("click", function(){
        seatCount++;

        document.getElementById("selectedSeats").innerText = seatCount;

        if(totalSeat>0){
            selectSeatNum++;
            document.getElementById("selectedSeats").innerText = selectSeatNum;
            nonSelectSeat--;
            document.getElementById("non_Select_Seat").innerText = nonSelectSeat;
            seatt.style.backgroundColor = "green";
        }
        else{
            alert("All seat are fillup")
        }
        totalprice+= price;
        document.getElementById("tottaall").innerText = totalprice;


        // const seatAccess = seatt.querySelector("h3").innerText;
        // const price = parseInt(seatt.querySelector("p").innerText.split(" ")[0]);
        
        // const seatNumber = document.getElementById("seatNum");
        
        // const seatn = document.createElement("p");
        // seatn.innerText = seatAccess;
        // seatNumber.appendChild(pp);

        // const economyClasss = document.getElementById("economyClass");
        // const classss = document.createElement("p");
        // classss.innerText = "economy";
        // classss.classList.add("class");
        // economyClasss.appendChild(classss);


       
    });
}

