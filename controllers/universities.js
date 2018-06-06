const universityModel = require('../models/university');

const index = (request, response) => {
  universityModel.index()
    .then(result => { response.send( result ); })
    .catch(error => { console.error( error ); })
}

const show = (request, response) => {
  universityModel.show(request.params.id)
    .then( result => { response.send( result ); })
    .catch(error => { console.error( error ); });
}

const create = (request, response) => {
  universityModel.create(request.body)
    .then( result => { response.send( result ); })
    .catch(error => { console.error( error ); });
}

const update = (request, response) => {
  universityModel.update(request.params.id, request.body)
    .then( result => { response.send( result ); })
    .catch( error => { console.error( error ); });
}

const destroy = (request, response) => {
  universityModel.destroy(request.params.id)
    .then( result => { response.send( result ); })
    .catch( error => { console.error( error ); });
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
