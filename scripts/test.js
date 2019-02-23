QUnit.test('Testing Area of Square function with several sets of inputs', function (assert) {
    assert.equal(mySquare(2),4, 'Tested with two small positive numbers when side is 2 then Area = 4');
	assert.equal(mySquare(100),10000, 'Tested with two large positive numbers when side is 100 then Area = 10000');
    assert.equal(mySquare(0),0, 'Tested with number value 0, when side is 0 then Area = 0');
    assert.equal(mySquare(500000),0,'Tested with side greater than 2500, result will be 0 according to the given condition. ' );
    assert.equal(mySquare(-6),0, 'Tested with negative number -6 so the Area is 0 according to the given condition ');
});