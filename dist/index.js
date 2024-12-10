// let sumElement: number;
// let tipEl: number;
// let numberOfFriendsEl: number;
// function calculateTip(sumElement: number, tipEl: number) {
//   sumElement = parseFloat(document.querySelector("#sum").value);
//   tipEl = parseFloat(document.querySelector("#tip").value);
//   return sumElement * tipEl;
// }
// function divideTotal() {
//   numberOfFriendsEl = parseFloat(
//     document.querySelector("#numberOfFriends").value
//   );
//   sumElement = parseFloat(document.querySelector("#sum").value);
//   const calculatedTip = calculateTip(sumElement, tipEl);
//   const total = (calculatedTip + sumElement) / numberOfFriendsEl;
//   return total;
// }
// function showDividedSum() {
//   const total = divideTotal();
//   document.querySelector("#friendSum").innerHTML = total + " kr";
// }
// document
//   .querySelector("#calculateButton")
//   .addEventListener("click", function () {
//     showDividedSum();
//     document.querySelector("#showSum").classList.toggle("hide");
//     document.querySelector("#inputForm").classList.toggle("hide");
//   });
let sumElement;
let tipValue;
let tipEl;
let sumValue;
let numberOfFriendsEl;
let numberOfFriendsValue;
function calculateTip() {
    let sumElement = document.querySelector("#sum");
    if (sumElement) {
        sumValue = parseFloat(sumElement.value);
        // Gör något med sumValue
    }
    else {
        console.error("Elementet med id 'sum' hittades inte.");
    }
    // kolla på alla dessa sen..
    // de e för checka så de de fångar upp om de e NULL
    // as HTMLInputElement  kolla de me..
    // o hur hela koden är, vad den gör etc..
    const tipEl = document.querySelector("#tip");
    if (tipEl) {
        tipValue = parseFloat(tipEl.value);
        // Gör något med tipValue
    }
    else {
        console.error("Elementet med id 'tip' hittades inte.");
    }
    return sumValue * tipValue;
}
function divideTotal() {
    const numberOfFriendsElement = document.querySelector("#numberOfFriends");
    if (numberOfFriendsElement) {
        numberOfFriendsValue = parseFloat(numberOfFriendsElement.value);
        // Gör något med numberOfFriendsValue
    }
    else {
        console.error("Elementet med id 'numberOfFriends' hittades inte.");
    }
    let sumElement = document.querySelector("#sum");
    if (sumElement) {
        sumValue = parseFloat(sumElement.value);
        // Gör något med sumValue
    }
    else {
        console.error("Elementet med id 'sum' hittades inte.");
    }
    const calculatedTip = calculateTip();
    const total = (calculatedTip + sumValue) / numberOfFriendsValue;
    return total;
}
function showDividedSum() {
    const total = divideTotal();
    document.querySelector("#friendSum").innerHTML = total + " kr";
}
document
    .querySelector("#calculateButton")
    .addEventListener("click", function () {
    showDividedSum();
    document.querySelector("#showSum").classList.toggle("hide");
    document.querySelector("#inputForm").classList.toggle("hide");
});
