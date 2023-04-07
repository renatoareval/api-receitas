import express from 'express'
import Receita from "../models/Receita.js"

const listarReceitas = async(req, res) => {

    const receitas = await Receita.find();
    res.status(200)
    res.send(receitas)
}

const listarReceitaPorId = async (req, res) => {

    const receitas = await Receita.findById(req.params.id);
    res.status(200);
    res.send(receitas);

}

const criarReceita = async (req, res) => { 
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

const alterarReceita = (req, res) => {
    const receitas = Receita.find();
    res.status(200);
    res.send(receitas);

}

const deletarReceita = (req, res) => {
    const receitas = Receita.find();
    res.status(200);
    res.send(receitas);

}


const receitasController = {
    listarReceitas,
    listarReceitaPorId,
    criarReceita,
    alterarReceita,
    deletarReceita
}

export default receitasController;