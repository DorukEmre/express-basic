const express = require('express');
const app = express();

app.get('*', function (req, res) {  
  const page = req.url;
  console.log('page', page);

  if (page == '/') {
    res.sendFile(__dirname + '/index.html')
  }else if (page == '/about') {
      res.sendFile(__dirname + '/about.html')
  } else if (page == '/contact-me') {
      res.sendFile(__dirname + '/contact-me.html')
  } else {
    res.sendFile(__dirname + '/404.html')
  }
})

app.listen(8000);