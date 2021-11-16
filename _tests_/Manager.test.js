const Manager = require('../lib/Manager')

describe('Manager Class', () => {
    describe('Initialization', () => {
        it('Create an object with id and name', () => {
            const manager = new Manager(123, 'Tammy')

            expect(manager.id).toEqual(123);
            expect(manager.name).toEqual('Tammy');
        });
    });
});