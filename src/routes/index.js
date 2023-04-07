import express from "express";
import receitasRoutes from "./receitasRoutes.js"

const routes = (app) => {

    app.route('/ping').get((req,res) =>{
        res.status(200)
        res.send({resposta: 'pong'})
    })

    app.use(receitasRoutes) //express.json(),

}

export default routes;