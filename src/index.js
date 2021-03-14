module.exports = function toReadable(number) {
    if (number == 0) return "zero";

    const onesNames = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tensNames = [
        "",
        "",
        "twenty ",
        "thirty ",
        "forty ",
        "fifty ",
        "sixty ",
        "seventy ",
        "eighty ",
        "ninety ",
    ];

    let hundreads = Math.floor(number / 100);
    let tens = Math.floor((number - hundreads * 100) / 10);
    let ones = number - hundreads * 100 - tens * 10;

    if (tens == 1) {
        tens = 0;
        ones = number - hundreads * 100;
    }
    return hundreads
        ? (
              onesNames[hundreads] +
              " hundred " +
              tensNames[tens] +
              onesNames[ones]
          ).trim()
        : (tensNames[tens] + onesNames[ones]).trim();
};
