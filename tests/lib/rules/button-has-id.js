/**
 * @fileoverview Forbid "button" element without an explicit "id" attribute
 * @author Bohdan Didyk
 */

'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/button-has-id');

const parserOptions = {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true
    }
};

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({parserOptions});
ruleTester.run('button-has-id', rule, {
    valid: [
        {code: '<span/>'},
        {code: '<span id="foo"/>'},
        {code: '<button id="some_id"/>'},
        {code: 'React.createElement("span")'},
        {code: 'React.createElement("span", {id: "foo"})'},
        {code: 'React.createElement("button", {id: "some_button"})'},
        {code: 'document.createElement("button")'},
        {
            code: 'Foo.createElement("span")',
            settings: {
                react: {
                    pragma: 'Foo'
                }
            }
        }
    ],
    invalid: [
        {
            code: '<button/>',
            errors: [{
                message: 'Missing an explicit id attribute for button'
            }]
        },
        {
            code: 'React.createElement("button")',
            errors: [{
                message: 'Missing an explicit id attribute for button'
            }]
        },
        {
            code: 'Foo.createElement("button")',
            errors: [{
                message: 'Missing an explicit id attribute for button'
            }],
            settings: {
                react: {
                    pragma: 'Foo'
                }
            }
        }
    ]
});
