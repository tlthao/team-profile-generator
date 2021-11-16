const Employee = require('../lib/Employee')

describe('Employee Class', () => {
    describe('Initialization', () => {
        it('Create an object with id and name', () => {
            const employee = new Employee(123, 'Tammy')

            expect(employee.id).toEqual(123);
            expect(employee.name).toEqual('Tammy');
        });
    });
});