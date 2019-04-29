function Calculator() {
    
    var methods = {
        '+': function(op1, op2) {
            return op1 + op2;
        },
        '-': function(op1, op2) {
            return op1 - op2;
        }
    }

    this.calculate = function (string) {
        var operand1 = +string.substring(0, string.indexOf(' ')),
            operand2 = +string.substring(string.lastIndexOf(' ') + 1, string.length),
            operation = string.substring(string.indexOf(' ') + 1, string.lastIndexOf(' '));

        return methods[operation](operand1, operand2);

    }

    this.addMethod = function (name, func) {
        methods[name] = func;
    }
}


var calc = new Calculator();
console.log( calc.calculate('3 - 18'));

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
    return a * b;
});
powerCalc.addMethod("/", function(a, b) {
    return a / b;
});
powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8