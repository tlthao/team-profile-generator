const Intern = require('../lib/Intern')

describe('Intern Class', () => {
    describe('Initialization', () => {
        it('Create an object with id and name', () => {
            const intern = new Intern(123, 'Tammy')

            expect(intern.id).toEqual(123);
            expect(intern.name).toEqual('Tammy');
        });
    });
});