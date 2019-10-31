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
  rules: requireIndex(__dirname + '/rules'),
};
