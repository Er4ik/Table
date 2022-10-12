import { Router } from "express";
import { fileService } from "../services/read-file.js";

const api = Router();

api.get("/attributes", async (req, res) => {
    return await fileService.getAttributesHandler(req, res);
});

api.get("/contragents", async (req, res) => {
    return await fileService.getContragentsHandler(req, res);
});


export { api };
