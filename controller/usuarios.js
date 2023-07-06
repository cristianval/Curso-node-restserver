import { response, request } from "express";


const usuariosGet = (req= request, res = response) => {

    const {q, nombre, apikey} = req.query;
    res.json({
        msg : 'get api - Controlador',
        q,
        nombre,
        apikey
    });
  }

  const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msg : 'Post api - Controlador',
        body
    });
  }

  const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg : 'Put api - Controlador',
        id 
    });
  }


  const usuariosPatch = (req, res = response) => {
    res.json({
        msg : 'Patch api - Controlador',
    });
  }
  const usuariosDelete = (req, res = response) => {
    res.json({
        msg : 'Delete api - Controlador',
    });
  }

  export {
    usuariosGet, 
    usuariosPut,
    usuariosPost,
    usuariosDelete, 
    usuariosPatch}