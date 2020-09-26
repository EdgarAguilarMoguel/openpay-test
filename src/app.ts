import express = require("express");
// const express = require('express');
import config from './config'

async function startServer() {
  const app = express();

  app.listen(config.port, () => {
    console.log(`Example app listening at http://localhost:${config.port}`);
  });

}

startServer();