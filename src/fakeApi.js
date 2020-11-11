export const fakeApi = {
    async post(payload) {
        const operation = `${payload.numberA} ${payload.operation} ${payload.numberB}`;

        return {
            result: eval(operation)
        }
    }
}