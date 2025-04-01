const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Node.jss!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
