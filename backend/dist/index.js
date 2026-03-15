import express from "express";
const app = express();
app.use(express.json());
app.get('/', (req, res, next) => {
    res.json({
        message: "This is message",
    });
});
app.listen(5000, () => {
    console.log("Server is running at port 3000");
});
