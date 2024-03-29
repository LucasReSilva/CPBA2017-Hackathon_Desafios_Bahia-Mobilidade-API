/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true,
      alpha: true
    },
    
    email: {
      type: 'string',
      required: true,
      email: true,
      unique: true
    },

    password: {
      type: 'string',
      required: true,
      minLength: 8,
      maxLength: 32
    },

  }
};

