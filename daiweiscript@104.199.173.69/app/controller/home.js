'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log(this.ctx.req.body)
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
