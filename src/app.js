const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/defaultConfig');
const route = require('./helper/route');
const openUrl = require('./helper/openUrl');

class Server {
  constructor (config) {
    this.conf = Object.assign({}, conf, config);
  }

  start () {
    const server = http.createServer((req, res) => {
      const filePath = path.join(this.conf.root, req.url);
    
      route(req, res, filePath);
    });
    
    server.listen(this.conf.port, this.conf.hostname, () => {
      const message = `http://${this.conf.hostname}:${this.conf.port}`;
      console.info(`Server started at ${chalk.green(message)}`);
      openUrl(message);
    });
  }
}

module.exports = Server;
