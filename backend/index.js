const express = require("express"); // To run our HTTP server
const axios = require('axios');

//To call the server from any other origin
const cors = require("cors"); 
const app = express()
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/", 
            { username: username, secret: username, first_name: username },
            { headers: {"Private-key": "80bac971-80d6-4894-a2fb-5a20bc7fbe81"} }
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        if (e.response) {
            return res.status(e.response.status).json(e.response.data);
        } else if (e.request) {
            console.error(e.request);
            return res.status(500).json({ error: 'No response received from the request' });
        } else {
            console.error('Error', e.message);
            return res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
})


app.listen(3001);