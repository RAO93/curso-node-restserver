const { response, request } = require('express');


const usersGet = (req = request, res = response) => {

    const query = req.query;


    res.json({
      msg: "get API - controller",
      query
    });
  }

  const usersPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
      msg: "put API - controller",
      id
    });
  }

  const usersPost = (req, res = response) => {

    const { nombre, edad} = req.body;

    res.json({
      msg: "post API - controller",
      nombre,
      edad
    });
  }

  const usersDelete = (req, res = response) => {
    res.json({
      msg: "delete API - controller",
    });
  }


  module.exports= {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
  }