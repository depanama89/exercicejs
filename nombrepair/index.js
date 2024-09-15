let tab = [];
let temp = 0;
let n;
tab = [1, 2, 6, 8, 5, 12, 15, 21];
const answer = document.getElementById("answer");
console.log(answer);
for (let i = 0; i < tab.length; i++) {
  if (tab[i] % 2 == 0) {
    console.log("c'etait nombre pair :" + tab[i]);
  } else {
    console.log("c'etait nombre impair :" + tab[i]);
  }
}
//tri
