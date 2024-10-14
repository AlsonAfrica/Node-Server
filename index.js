const express = require('express');
const app = express();

// Port Defined
const port = process.env.PORT || 3000;



// root response, with a Hello response
app.get("/",(req,res)=>{
    res.send('Hello');
});

// another response route
app.get('/greet', (req, res) => {
    res.json({ message: 'Hello from the API!' });
  });


// Server listening on port
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost: ${PORT}`);
})



