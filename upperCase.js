let str = "hi, im aman chauhan"

let bag = "";

let ch = str.charAt(0).toUpperCase();
bag += ch;

for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) === " " && i < str.length - 1) {
        bag += str.charAt(i);
        i++;
        bag += str.charAt(i).toUpperCase();
    } else {
        bag += str.charAt(i);
    }
}
console.log(bag);