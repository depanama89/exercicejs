// const tab = [
//   [2, 6, 8, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], [13, 14], 20],
// ];
// const arrTree = [3, 8, 10];
// console.log(tab[2].pop());
// const tab = [3, 4, 5];
// tab.push([3, 6, 7]);
// const tab1 = tab.pop();
// console.log(tab1);
// console.log(tab);
// const arrOne = arrTree.pop();
// console.log(arrOne);
// console.log(arrTree);
/**shift supprimer le premier elemet du tableau */
// const deleteArray = arrTree.shift();
// console.log(arrTree);
// const tab1 = tab.shift();
// console.log(tab);
/**function */
// function transfert(parm1, parm2) {
//   console.log(parm1 + parm2);
// }

// transfert(1, 2);

// function somme(params) {
//   return params + 2;
// }
// console.log(somme(5));
// const tab = ["a", "a", "c", "c", "c", "c", "c"];
// tab.sort();
// console.log(tab);
// for (let i = 0; i < tab.length; i++) {
//   console.log(i + " " + `${tab[i].sort()}  `);
// }
// console.log(tab.reverse());
// for (let j = tab.length - 1; j <= tab.length; j++) {
//   console.log(j + " " + `${tab[j]}  `);
// }
/** calcul de l'occurence dans un tableau */
// let occ = 0;
// let x;
// x = "c";

// for (let i = 0; i < tab.length; i++) {
//   if (tab[i] == x) {
//     occ++;
//   }
// }
// console.log(`${x} est repeté ${occ} fois `);
const tab = [0, 100, 2, 4, 5, 6, 7, 40, 41, 8, 9, 10, 11];
// let som = 0;
// let moyenne;
// let max = tab[0];
// let size = tab.length;
// for (let i = 0; i < size; i++) {
//   som += tab[i];
//   if (tab[i] > max) {
//     //10<10 f
//     max = tab[i];
//   }
// }
// moyenne = som / size;
// console.log(`le tableau est : ${tab}`);
// console.log(`la taille du tableau est : ${size}`);
// console.log(`la somme du tableau est : ${som}`);
// console.log(`la moyenne est :  ${moyenne}`);
// console.log(`la valeur  max :  ${max}`);
// const fn = (tab) => {
//   let unique = [];
//   let double = [];
//   for (let i = 0; i < tab.length; i++) {
//     if (!unique.includes(tab[i])) {
//       unique.push(tab[i]);
//     } else {
//       double.push(tab[i]);
//       unique.splice(unique.indexOf(tab[i]), 1);
//     }
//   }
//   return [{ unique: unique }, { double: double }];
// };
const fn = (tab) => {
  let distances = [];
  for (let i = 0; i < tab.length; i++) {
    console.log("li" + i);
    for (let j = i; j < tab.length; j++) {
      console.log("col" + j);
      if (tab[j] > tab[i]) {
        let distance = j - i;
        distances.push(tab[i] + " - " + tab[j] + " : " + distance);
        j = tab.length;
      }
    }
  }
  return distances;
};
console.log(fn([1, 0, -2, 3, 2, 5, 7, 4]));
