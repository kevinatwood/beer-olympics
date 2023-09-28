let team1 = [];
const teamData = async () => {
    try {
      const response = await fetch('/api/standings');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json(); // Assuming the response is JSON
      
      // Handle the data received from the server
      console.log(data)

      for (let i=0; i < data.teamData.length; i++){
        team1.push(data.teamData[i].team_name)
      }
      console.log(team1)
      // You can update your UI or perform other actions here
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('Fetch error:', error);
      // You might want to display an error message to the user
    }
  

  
// Round one team names
// var team1 = ["winner", "Loser", "team3","team4", "team5","team6", "team7","team8"];

// Round two team names
var team2 = ["team1", "team2", "team3","team4"];

// Round three team names
var team3 = ["team1", "team2"];

var champion;

// Make arrays for text insertion

const brac1 = [document.getElementById("g1t1"), document.getElementById("g1t2"), document.getElementById("g1t3"),
document.getElementById("g1t4"),document.getElementById("g1t5"),document.getElementById("g1t6"),document.getElementById("g1t7"),
document.getElementById("g1t8")];

const brac2 = [document.getElementById("g2t1"), document.getElementById("g2t2"), document.getElementById("g2t3"),
document.getElementById("g2t4")];

const brac3 = [document.getElementById("g3t1"), document.getElementById("g3t2")];

const brac4 = document.getElementById("g4t1");

const win1 = [document.getElementById("g1t1"), document.getElementById("g1t2"), document.getElementById("g1t3"),
document.getElementById("g1t4"),document.getElementById("g1t5"),document.getElementById("g1t6"),document.getElementById("g1t7"),
document.getElementById("g1t8")];

const b1t1 = document.getElementById("b1t1");
const b1t2 = document.getElementById("b1t2");
const b1t3 = document.getElementById("b1t3");
const b1t4 = document.getElementById("b1t4");
const b1t5 = document.getElementById("b1t5");
const b1t6 = document.getElementById("b1t6");
const b1t7 = document.getElementById("b1t7");
const b1t8 = document.getElementById("b1t8");

const b2t1 = document.getElementById("b2t1");
const b2t2 = document.getElementById("b2t2");
const b2t3 = document.getElementById("b2t3");
const b2t4 = document.getElementById("b2t4");

const b3t1 = document.getElementById("b3t1");
const b3t2 = document.getElementById("b3t2");


// Round 1

function rnd1team1() {
    brac1[0].innerText = team1[0] + " is the winner.";
    brac1[0].style.color= "red";
    brac1[1].innerText = team1[1] + " has lost.";
    b1t1.style.display = "none";
    b1t2.style.display = "none";
    b2t1.style.display = "block";
    team2[0] = team1[0];
    brac2[0].innerText = team2[0];

}

function rnd1team2() {
    brac1[0].innerText = team1[1] + " is the winner.";
    brac1[0].style.color= "red";
    brac1[1].innerText = team1[0] + " has lost.";
    b1t1.style.display = "none";
    b1t2.style.display = "none";
    b2t1.style.display = "block";
    team2[0] = team1[1];
    brac2[0].innerText = team2[0];
}

function rnd1team3() {
    brac1[2].innerText = team1[2] + " is the winner.";
    brac1[2].style.color= "red";
    brac1[3].innerText = team1[3] + " has lost.";
    b1t3.style.display = "none";
    b1t4.style.display = "none";
    b2t2.style.display = "block";
    team2[1] = team1[2];
    brac2[1].innerText = team2[1];
}

function rnd1team4() {
    brac1[2].innerText = team1[3] + " is the winner.";
    brac1[2].style.color= "red";
    brac1[3].innerText = team1[2] + " has lost.";
    b1t3.style.display = "none";
    b1t4.style.display = "none";
    b2t2.style.display = "block";
    team2[1] = team1[3];
    brac2[1].innerText = team2[1];
}

function rnd1team5() {
    brac1[4].innerText = team1[4] + " is the winner.";
    brac1[4].style.color= "red";
    brac1[5].innerText = team1[5] + " has lost.";
    b1t5.style.display = "none";
    b1t6.style.display = "none";
    b2t3.style.display = "block";
    team2[2] = team1[4];
    brac2[2].innerText = team2[2];;
}

function rnd1team6() {
    brac1[4].innerText = team1[5] + " is the winner.";
    brac1[4].style.color= "red";
    brac1[5].innerText = team1[4] + " has lost.";
    b1t5.style.display = "none";
    b1t6.style.display = "none";
    b2t3.style.display = "block";
    team2[2] = team1[5];
    brac2[2].innerText = team2[2];
}

function rnd1team7() {
    brac1[6].innerText = team1[6] + " is the winner.";
    brac1[6].style.color= "red";
    brac1[7].innerText = team1[7] + " has lost.";
    b1t7.style.display = "none";
    b1t8.style.display = "none";
    b2t4.style.display = "block";
    team2[3] = team1[6];
    brac2[3].innerText = team2[3];
}

function rnd1team8() {
    brac1[6].innerText = team1[7] + " is the winner.";
    brac1[6].style.color= "red";
    brac1[7].innerText = team1[6] + " has lost.";
    b1t7.style.display = "none";
    b1t8.style.display = "none";
    b2t4.style.display = "block";
    team2[3] = team1[7];
    brac2[3].innerText = team2[3];
}

for (let i = 0; i < team1.length; i++) {
    brac1[i].innerText = team1[i];
};


// Round 2

function rnd2team1() {
    brac2[0].innerText = team2[0] + " is the winner.";
    brac2[0].style.color= "red";
    brac2[1].innerText = team2[1] + " has lost.";
    b2t1.style.display = "none";
    b2t2.style.display = "none";
    b3t1.style.display = "block";
    team3[0] = team2[0];
    brac3[0].innerText = team3[0];

}

function rnd2team2() {
    brac2[0].innerText = team2[1] + " is the winner.";
    brac2[0].style.color= "red";
    brac2[1].innerText = team2[0] + " has lost.";
    b2t1.style.display = "none";
    b2t2.style.display = "none";
    b3t1.style.display = "block";
    team3[0] = team2[1];
    brac3[0].innerText = team3[0];
}

function rnd2team3() {
    brac2[2].innerText = team2[2] + " is the winner.";
    brac2[2].style.color= "red";
    brac2[3].innerText = team2[3] + " has lost.";
    b2t3.style.display = "none";
    b2t4.style.display = "none";
    b3t2.style.display = "block";
    team3[1] = team2[2];
    brac3[1].innerText = team3[1];
}

function rnd2team4() {
    brac2[2].innerText = team2[3] + " is the winner.";
    brac2[2].style.color= "red";
    brac2[3].innerText = team2[2] + " has lost.";
    b2t3.style.display = "none";
    b2t4.style.display = "none";
    b3t2.style.display = "block";
    team3[1] = team2[3];
    brac3[1].innerText = team3[1];
}

// Round 3

function rnd3team1() {
    brac3[0].innerText = team3[0] + " is the winner.";
    brac3[0].style.color= "red";
    brac3[1].innerText = team3[1] + " has lost.";
    b3t1.style.display = "none";
    b3t2.style.display = "none";
    champion = team3[0];
    brac4.innerText = champion + " is the champion!";

}

function rnd3team2() {
    brac3[0].innerText = team3[1] + " is the winner.";
    brac3[0].style.color= "red";
    brac3[1].innerText = team3[0] + " has lost.";
    b3t1.style.display = "none";
    b3t2.style.display = "none";
    champion = team3[1];
    brac4.innerText = champion + " is the champion!";

}






// for (let i = 0; i < team2.length; i++) {
//     brac2[i].innerText = team2[i];
// };

// for (let i = 0; i < team3.length; i++) {
//     brac3[i].innerText = team3[i];;
// };



// round 1

b1t1.addEventListener("click", rnd1team1);
b1t2.addEventListener("click", rnd1team2);
b1t3.addEventListener("click", rnd1team3);
b1t4.addEventListener("click", rnd1team4);
b1t5.addEventListener("click", rnd1team5);
b1t6.addEventListener("click", rnd1team6);
b1t7.addEventListener("click", rnd1team7);
b1t8.addEventListener("click", rnd1team8);

// round 2

b2t1.addEventListener("click", rnd2team1);
b2t2.addEventListener("click", rnd2team2);
b2t3.addEventListener("click", rnd2team3);
b2t4.addEventListener("click", rnd2team4);

// round 3

b3t1.addEventListener("click", rnd3team1);
b3t2.addEventListener("click", rnd3team2);

 }
  
  
 teamData()


  

