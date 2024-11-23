const express = require ('express');
const fs = require ('fs').promises;

const app = express();
const PORT = 3000; // assign the port number to 3000


app.get("/", async(req, res) => {

    try {
        //example.txt is the file being read by the fs module
        const data = await fs.readFile("example.txt", "utf-8");
        res.send(data); //send the data as response to the front-end
    } catch (error) { // handles any error encounter
        console.error('Error reading file:', error); // return a string 'Error reading file:' and the entire error stack to the console log
        res.status(500).send("Internal Server Error"); // send back the HTTP status code 500 and 
                                                        //a message 'Internal Srever Error' to tell that there is wrong on the server side
    }
});


//Listening on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);// display a message in the console log to tell that letting you know that the server is running 
                                                                 //and can be accessed thru http://localhost:3000 in the browser
});
