const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');


describe("launchOutput", function(){
it("returns 'Launch!' when passed a number divisible only by 2",function(){
let output =  launchOutput(2);
assert.strictEqual(output, "Launch!");
});
it("returns 'Code' when passed a number divisible only by 3",function(){
let output =  launchOutput(3);
assert.strictEqual(output, "Code");
});
it("returns 'Launch!' when passed a number divisible only by 5",function(){
let output =  launchOutput(5);
assert.strictEqual(output, "Rocks!");
})
});