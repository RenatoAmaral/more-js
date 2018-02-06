var multiplicationTable = function(maxValue) {
var printOut = "";
var cicle = 1;
var grid = maxValue * maxValue;

printOut += ("+--" + "-".repeat(grid.toString().length - cicle.toString.length + 1)).repeat(maxValue) + "\+\n";

    for (i = 1; i <= maxValue; i ++) {

      if (i == maxValue) {
        printOut += "| " + (cicle * maxValue) + " ".repeat(grid.toString().length - (cicle  * maxValue).toString().length + 1) + "|\n";
        printOut += ("+--" + "-".repeat(grid.toString().length - cicle.toString.length + 1)).repeat(maxValue) + "\+\n";
        cicle ++;

        if (cicle > maxValue) {
          break;
        }
        else
          printOut += "| " + cicle + " ".repeat(grid.toString().length - cicle.toString().length + 1);
          i = 1
        }
      else
        printOut += "| " + (i * cicle) + " ".repeat(grid.toString().length - (i * cicle).toString().length + 1);
    }

    return printOut;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
