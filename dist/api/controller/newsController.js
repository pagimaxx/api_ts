"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsService_1 = require("../services/newsService");
const HttpStatus = require("http-status");
class NewsController {
    constructor() {
        this.sendResponse = (res, statusCode, data) => {
            res.status(statusCode).json({ result: data });
        };
    }
    get(req, res) {
        newsService_1.default.get()
            .then(news => this.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.log.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        newsService_1.default.getById(_id)
            .then(news => this.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.log.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        newsService_1.default.create(vm)
            .then(news => this.sendResponse(res, HttpStatus.OK, "Noticia cadastrada com sucesso"))
            .catch(error => console.log.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let vm = req.body;
        newsService_1.default.update(_id, vm)
            .then(news => this.sendResponse(res, HttpStatus.OK, `${news.title} alterada com sucesso`))
            .catch(error => console.log.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        newsService_1.default.delete(_id)
            .then(() => this.sendResponse(res, HttpStatus.OK, `Notícia deletada com sucesso`))
            .catch(error => console.log.bind(console, `Error ${error}`));
    }
}
exports.default = new NewsController();
