import NewsService from '../services/newsService';
import * as HttpStatus from 'http-status';

class NewsController {

    sendResponse = (res, statusCode, data) => {
        res.status(statusCode).json({result: data});
    }

    get(req, res) {
        NewsService.get()
            .then(news => this.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.log.bind(console, `Error ${error}`));
    }

    getById(req, res) {
        const _id = req.params.id;
        NewsService.getById(_id)
            .then(news => this.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.log.bind(console, `Error ${error}`));
    }

    create(req, res) {
        let vm = req.body;
        NewsService.create(vm)
            .then(news => this.sendResponse(res, HttpStatus.OK, "Noticia cadastrada com sucesso"))
            .catch(error => console.log.bind(console, `Error ${error}`));
    }

    update(req, res) {
        const _id = req.params.id;
        let vm = req.body;
        NewsService.update(_id, vm)
            .then(news => this.sendResponse(res, HttpStatus.OK, `${news.title} alterada com sucesso`))
            .catch(error => console.log.bind(console, `Error ${error}`));
    }

    delete(req, res) {
        const _id = req.params.id;
        NewsService.delete(_id)
            .then(() => this.sendResponse(res, HttpStatus.OK, `Notícia deletada com sucesso`))
            .catch(error => console.log.bind(console, `Error ${error}`));
    }
}

export default new NewsController();