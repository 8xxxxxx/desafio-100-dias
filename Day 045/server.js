const express = require('express');
const cors = require('cors');
const axios = require('axios');

const api_key = 'live_3mZvZovQCrRMv7Rukbe5HqYerAWEHOzTcT2S7WkLZ99WdHieZBWFgHtnuBYPMmpu';

const app = express();
app.use(cors());
app.use(express.json());

// Creating the route (API state)
app.get('/random-cats', async (req, res) => {
    // API consumption with axios
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10', {
            headers: {
                "x-api-key": api_key,
            },
        });

        // Request response.
        req.json(response.data);

    } catch (error) {
        console.log("Error consuming api: ", error);
        res.status(500).json({ error: "Error consuming API"});

    }
})

// Creating the server
const port = 8081;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}!`);
})


/*
    }*/