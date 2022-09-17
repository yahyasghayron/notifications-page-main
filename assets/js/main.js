var marckAsRead= document.getElementById("readAll");
marckAsRead.addEventListener("click",function (){ handelClick()});


function handelClick(){
var notifCount = document.getElementById("notifCount")
  notifCount.innerHTML=0;
  var notifStates = document.getElementsByClassName("notif-state")
  console.log(notifStates);
  for (let i = 0; i < notifStates.length; i++) {
    const e  = notifStates[i];
    e.style.display = "none"
    
  } 
  var cards = document.getElementsByClassName("notif-card")
  for (let i = 0; i < cards.length; i++) {
    const e = cards[i];
    e.classList.remove("bg-1");
    
  }
}
