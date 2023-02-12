const app = require("./index");

const server = app.listen(5000, () => {
    console.log(`Listening to port: 5000`);
})

//unhandled promise rejetcion
process.on("unhandledRejection", (err:any) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down server  ")
    server.close(() => {
        process.exit(1);
    })
})