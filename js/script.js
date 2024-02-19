const seats= document.querySelectorAll('.seats');
// const totalSeats= document.getElementById('totalSeats');
// totalSeats.innerText=seats.length;


const seatsName=[]
seats.forEach((e)=>{
 e.addEventListener('click',(e)=>{
  if(seatsName.length < 4){
    // if(seatsName.includes('C2')){}
    seatsName.push(e.target.value);
    e.target.style.backgroundColor="lime";
    document.getElementById('seatCount').innerText=seatsName.length;
    // bus seat function 
    busSeat(seatsName)
    decreaseSeat(seatsName.length)
    increasePrice(seatsName.length)
  }else{
    alert("You already selected 4 Seats");
  }
 })
})
function busSeat(seat) {
  const tr= document.createElement('tr');
  const className= document.createElement('td');
  const econ= document.createElement('td');
  const price= document.createElement('td');
  for (const s of seat) {
  className.innerText=s;
  tr.appendChild(className);
  econ.innerText='Economy';
  tr.appendChild(econ);
  price.innerText='550';
  tr.appendChild(price);
  }
  document.getElementById('ticketInfo').appendChild(tr);
}

function decreaseSeat(arrLength){
const totalSeat=document.getElementById('totalSeats').innerText;
let decrSeat= parseInt(totalSeat)-1;
let total= totalSeat.innerText= decrSeat;
document.getElementById('totalSeats').innerText=total;
// console.log(total);
}
let price=0;
function increasePrice(arrval){
    price=price+550;
    document.getElementById('totalPrice').innerText=price;
    document.getElementById('grandPrice').innerText=price;
    return price;
}

// coupon code functionlatiy


document.getElementById('inputBox').addEventListener('keyup',(e)=>{
  const couponCode=e.target.value.toUpperCase()
  if(couponCode==='NEW15'){
    document.getElementById('coupnBtn').removeAttribute('disabled');
    document.getElementById('coupnBtn').addEventListener('click',()=>{
     const grandPrice= document.getElementById('grandPrice').innerText;
      const amount= parseInt(grandPrice);
      console.log(amount);
      const dis=15/100*amount;
      const payAmount= amount-dis;
      document.getElementById('grandPrice').innerText=payAmount;
      document.getElementById('inputField').style.display='none';
    })
  }else if(couponCode==='COUPLE 20'){
    document.getElementById('coupnBtn').removeAttribute('disabled');
    document.getElementById('coupnBtn').addEventListener('click',()=>{
     const grandPrice= document.getElementById('grandPrice').innerText;
      const amount= parseInt(grandPrice);
      console.log(amount);
      const dis=20/100*amount;
      const payAmount= amount-dis;
      document.getElementById('grandPrice').innerText=payAmount;
      document.getElementById('inputField').style.display='none';
    })
  }
  else{
    document.getElementById('coupnBtn').setAttribute('disabled',true);
  }
  
})

document.getElementById('nextbtn').addEventListener('click',()=>{
this.event.preventDefault();  
})

