const test1 = new Promise((resolve, reject)) => {
    resolve("Test")
})

Promise.all([
    test1
]) .then((messages) => {
    console.log(messages)
})