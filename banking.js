document
  .getElementById('deposit-button')
  .addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input')
    const newDepositAmountText = depositInput.value
    const newDepositAmount = parseFloat(newDepositAmountText)
    const depositTotal = document.getElementById('deposit-total')
    //console.log(depositTotal.innerText)
    const previousDepositText = depositTotal.innerText
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDepositTotal = previousDepositAmount + newDepositAmount
    depositTotal.innerText = newDepositTotal

    //update acccout  balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    const newBalanceTotal = previousBalanceTotal + newDepositAmount
    balanceTotal.innerText = newBalanceTotal

    //clear the field
    depositInput.value = ''

    //handle withdraw :
    document
      .getElementById('withdraw-button')
      .addEventListener('click', function () {
        const withdrawInput = document.getElementById('withdraw-input')
        const withdrawAmountText = withdrawInput.value
        const newWithdrawAmount = parseFloat(withdrawAmountText)
        //set withdrawTotal
        const withdrawTotal = document.getElementById('withdraw-total')
        const previousWithdrawText = withdrawTotal.innerText
        const previousWithdrawTotal = parseFloat(previousWithdrawText)
        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
        withdrawTotal.innerText = newWithdrawTotal
        //update balance
        const balanceTotal = document.getElementById('balance-total')
        const previousBalanceText = balanceTotal.innerText
        const previousBalanceTotal = parseFloat(previousBalanceText)
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
        balanceTotal.innerText = newBalanceTotal
        // clear withdraw
        withdrawInput.value = ''
      })
  })
