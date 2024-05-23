type StateType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType = {
    type: string
    [key: string]: any
}


export const userReduser = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            state.age = state.age + 1;
            return state;

        case 'INCREMENT-CHILDREN-COUNT':
            state.childrenCount = state.childrenCount + 1;
            return state;

        default:
            throw new Error("I do not understand this action type")

    }
}