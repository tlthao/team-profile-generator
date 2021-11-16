
const Engineer = require('../lib/Engineer')

describe('Engineer Class', () => {
    describe('Initialization', () => {
        it('Create an object with id and name', () => {
            const engineer = new Engineer(123, 'Tammy')

            expect(engineer.id).toEqual(123);
            expect(engineer.name).toEqual('Tammy');
        });
    
    
    });
});