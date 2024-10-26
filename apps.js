const loginBtn= document.getElementById('login');
loginBtn.addEventListener('click',function(){
 const loginArea =document.getElementById('login-area');
 loginArea.style.display='none';
 const transactionArea = document.getElementById('transaction-area');
 transactionArea.style.display='block'
})



const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click',function(){
    const depositAmount=document.getElementById('depositAmount').value; 

   const depositNumber=parseFloat(depositAmount)


// const currentDeposit = document.getElementById('currentDeposit').innerText;
// const currentDepositNumber=parseFloat(currentDeposit);
// const totalDeposit = depositNumber + currentDepositNumber;
// // console.log(totalDeposit)
// document.getElementById('currentDeposit').innerText=totalDeposit;


// const currentBalance = document.getElementById('currentBalance').innerText;
// const currentBalanceNumber=parseFloat(currentBalance);
// const totalBalance = depositNumber+ currentBalanceNumber;
// // console.log(currentDeposit)
// document.getElementById('currentBalance').innerText = totalBalance;


// depositBtn
updateSpanText("currentDeposit",depositNumber)

updateSpanText("currentBalance",depositNumber)


document.getElementById("depositAmount").value=""

}) 


// withdwrabtn
const withdrawBtn=document.getElementById('addwithdraw');
withdrawBtn.addEventListener('click',function(){
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  const withdrawNumber = parseFloat(withdrawAmount)


  updateSpanText("currentwithdrw",withdrawNumber);
  updateSpanText("currentBalance",-1*withdrawNumber)


document.getElementById("withdrawAmount").value=""

})
 
function updateSpanText(id,depositNumber){
    const current = document.getElementById(id).innerText;
const currentNumber=parseFloat(current);
const total = depositNumber+ currentNumber;
// console.log(currentDeposit)
document.getElementById(id).innerText = total;
}