var btnplus = document.querySelectorAll(".btnplus");
var btnminus = document.querySelectorAll(".btnminus");
var card = document.querySelectorAll(".card");
var total = document.querySelector(".total");
var remove = document.querySelectorAll(".trash");
var removeAll = document.querySelector(".Action");
var totalAmount = document.querySelector(".total-amount");

btnplus.forEach((el) =>
  el.addEventListener("click", () => {
    el.nextElementSibling.innerHTML++;
    calcTotal();
  })
);
btnminus.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.previousElementSibling.innerHTML > 1) {
      el.previousElementSibling.innerHTML--;
      calcTotal();
    }
  })
);

remove.forEach((el, index) =>
  el.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.remove();
    calcTotal();
  })
);
removeAll.addEventListener("click", (e) => {
  console.log("test");
  document.querySelectorAll(".Cart-Items").forEach((el) => el.remove());
  calcTotal();
});

// calculate the total price
function calcTotal() {
  var count = document.querySelectorAll(".count");
  var amount = document.querySelectorAll(".amount");
  var nbrOfItems = document.querySelector(".items");
  nbrOfItems.innerText =
    count.length === 1 ? count.length + " item" : count.length + " items";
  // initialize total to 0
  var total = 0;
  // loop through all count/amount element
  count.forEach((el, idx) => {
    // remove $ from amount and parse it from string to number
    var parcedAmount = +amount[idx].innerText.replace("$", "");
    // calculate the total price of all products
    total += Number(count[idx].innerText) * parcedAmount;
  });
  // assign the value of total to the html element .total-amount and fix the number to 2 numbers after the . (x.xx)
  totalAmount.innerText = "$" + total.toFixed(2);
}
