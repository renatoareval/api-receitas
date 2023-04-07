import mongoose from "mongoose";

const receitaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    tempoPreparo: { type: Number, required: true },
    porcoes: { type: Number, required: true },
    imagem: { type: String, required: true }
})

const receita = mongoose.model('Receita', receitaSchema);

export default receita;