QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(myCube(2),8, 'Tested with two small positive numbers');
	assert.equal(myCube(100),1000000, 'Tested with two large positive numbers');
    assert.equal(myCube(0),0, 'Tested with number value 0. ');
    assert.equal(myCube(500000),0,'Tested with higher number, result will be 0. ' );
    assert.equal(myCube(-6),0, 'Tested with negative number value 0. ');
});