/**
 * @fileoverview Uwatch set of eslint rules
 * @author Bohdan Didyk
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


module.exports = {
  configs: {
    recommended: {
      plugins: ['@uwatch'],
      rules: {
        '@uwatch/button-has-id': 'error'
      }
    },
  },
  rules: requireIndex(__dirname + '/rules'),
};
