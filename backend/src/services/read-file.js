import fs from "fs";

class FileService {
    #pathPrefix = "backend/src/shared/";

    async readFileHandler(path) {
        const data = fs.readFileSync(path, "utf-8").toString();
        const parsedData = data.split(/\r?\n/).map((line) => line);
        return parsedData;
    }

    async getAttributesHandler(req, res) {
        try {
            const pathToAttributes = `${this.#pathPrefix}attributes.txt`;
            const attributes = await this.readFileHandler(pathToAttributes);
            res.status(200).json(attributes);
        } catch (error) {
            res.status(400).json(`Oops! Error getting attributes. -> ${error}`);
        }
    }

    async getContragentsHandler(req, res) {
        try {
            const pathToContrAgents = `${this.#pathPrefix}contragents.txt`;
            const constragents = await this.readFileHandler(pathToContrAgents);
            const parsedData = constragents.map((el) => JSON.parse(el));
            res.status(200).json(parsedData);
        } catch (error) {
            res.status(400).json(`Oops! Error getting contragents.`);
        }
    }
}



const fileService = new FileService();

export { fileService }