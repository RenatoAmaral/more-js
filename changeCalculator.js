

function calculateChange(transaction, cashPaid) {
  var change = (cashPaid - transaction) * 100 ; //change
  var cashBack = {};
    if ((change - (change % 2000)) % 2000 == 0) {
      cashBack.twentyDollar = (change - (change % 2000)) / 2000;
      change = change % 2000;
        if (cashBack.twentyDollar == 0)
          delete cashBack.twentyDollar;
    }
    if ((change - (change % 1000)) % 1000 == 0) {
      cashBack.tenDollar = (change - (change % 1000)) / 1000;
      change = change % 1000;
        if (cashBack.tenDollar == 0)
          delete cashBack.tenDollar;
    }
    if ((change - (change % 500)) % 500 == 0) {
      cashBack.fiveDollar = (change - (change % 500)) / 500;
      change = change % 500;
        if (cashBack.fiveDollar == 0)
          delete cashBack.fiveDollar;
    }
    if ((change - (change % 200)) % 200 == 0) {
      cashBack.twoDollar = (change - (change % 200)) / 200;
      change = change % 200;
        if (cashBack.twoDollar == 0)
          delete cashBack.twoDollar;
    }
    if ((change - (change % 100)) % 100 == 0) {
      cashBack.dollar = (change - (change % 100)) / 100;
      change = change % 100;
        if (cashBack.dollar == 0)
          delete cashBack.dollar;
    }
    if ((change - (change % 25)) % 25 == 0) {
      cashBack.quarter = (change - (change % 25)) / 25;
      change = change % 25;
        if (cashBack.quarter == 0)
          delete cashBack.quarter;
    }
    if ((change - (change % 10)) % 10 == 0) {
      cashBack.dime = (change - (change % 10)) / 10;
      change = change % 10;
        if (cashBack.dime == 0)
          delete cashBack.dime;
    }
    if ((change - (change % 5)) % 5 == 0) {
      cashBack.nickel = (change - (change % 5)) / 5;
      change = change % 5;
        if (cashBack.nickel == 0)
         delete cashBack.nickel;
    }
    if ((change - (change % 1)) % 1 == 0) {
      cashBack.penny = (change - (change % 1)) / 1;
      change = change % 1;
        if (cashBack.penny == 0)
          delete cashBack.penny;
    }
    return cashBack;
  }



console.log(calculateChange(17.87, 20));
console.log(calculateChange(26.23, 40));
console.log(calculateChange(5.01, 10));
