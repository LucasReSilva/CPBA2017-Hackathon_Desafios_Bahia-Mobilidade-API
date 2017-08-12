/**
 * Location.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },

    latitude: {
      float:true,
      required: true
    },

    longitude: {
      float:true,
      required: true
    },

    googlesid: {
      type: 'string',
      required: false
    },

    useremail: {
      type: 'string',
      required: true,
      email: true,
      unique: true
    }

  }
};

