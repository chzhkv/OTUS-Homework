import {userAge} from "./userAge.js";
import {adminCreate} from "./adminCreate.js";

global.prompt = jest.fn();
describe('userAge function', () => {
    it('should set the age of the user and log it', () => {
        const user = {};
        prompt.mockImplementation(() => '25');
        console.log = jest.fn();
        userAge(user);
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('25');
        expect(user.age).toBe('25');
    });
});

describe('adminCreate function', () => {
    it('should create an admin field and log it', () => {
        const user = { name: 'John' };
        console.log = jest.fn();
        adminCreate(user);
        expect(console.log).toHaveBeenCalledWith(expect.objectContaining({ name: 'John', role: 'admin' }));
        expect(console.log).toHaveBeenCalledWith('John', 'admin');
    });
});