import express from 'express'
import Receita from "../models/Receita.js"
import receita from '../models/Receita.js';

const listar = async (req, res) => {

    const receitas = await Receita.find();
    res.status(200)
    res.send(receitas)
}

const listarPorId = async (req, res) => {

    const receitas = await Receita.findById(req.params.id);
    res.status(200);
    res.send(receitas);

}

const criar = async (req, res) => {
    const { titulo, tempoPreparo, porcoes, imagem } = req.body;
    const novaReceita = new Receita({
        titulo,
        tempoPreparo,
        porcoes,
        imagem
    });

    const receitaSalva = await novaReceita.save();
    res.status(201).send(receitaSalva);

}

const alterar = async (req, res) => { // put vai alterar tudo!!!!!!!!!!
    const receita = await Receita.findById(req.params.id);

    receita.titulo = req.body.titulo;
    receita.tempoPreparo = req.body.tempoPreparo;
    receita.porcoes = req.body.porcoes;
    receita.imagem = req.body.imagem;

    // req.body.imagem && `${receita.imagme = req.body.imagem}


    await receita.save()

    res.status(200)
    res.send(receita)

}

const deletar = async (req, res) => {
    const receita = await Receita.findByIdAndRemove(req.params.id);
    res.status(200)

    if (receita != null) {
        res.send({
            message: "Receita deletada com sucesso!",
            receita: receita
        })
    } else {
        res.send({ message: "Receita não encontrado!" })
    }

}


const receitasController = {
    listar,
    listarPorId,
    criar,
    alterar,
    deletar
}

export default receitasController;