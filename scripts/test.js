QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(mySquare(2),4, 'Tested with two small positive numbers');
	assert.equal(mySquare(100),10000, 'Tested with two large positive numbers');
    assert.equal(mySquare(0),0, 'Tested with number value 0. ');
    assert.equal(mySquare(500000),0,'Tested with higher number, result will be 0. ' );
    assert.equal(mySquare(-6),0, 'Tested with negative number value 0. ');
});