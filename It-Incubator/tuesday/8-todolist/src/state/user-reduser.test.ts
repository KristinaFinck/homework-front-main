import {userReduser} from "./user-reduser";

test('user reduser should increment only age', () => {
    const startState = {age: 28, childrenCount: 2, name: 'Dimych'};
    const endState = userReduser(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(29);
    expect(endState.childrenCount).toBe(2);
});

test('user reduser should increment only childrenCount', () => {
    const startState = {age: 28, childrenCount: 2, name: 'Dimych'};
    const endState = userReduser(startState, {type: 'INCREMENT-CHILDREN-COUNT'});
    expect(endState.childrenCount).toBe(3)
    expect(endState.age).toBe(28);
});