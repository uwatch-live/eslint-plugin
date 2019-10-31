/**
 * @fileoverview Enforce all buttons to have id
 * @author Bohdan Didyk
 */
"use strict";

const getProp = require('jsx-ast-utils/getProp');
const docsUrl = require('../util/docsUrl');
const pragmaUtil = require('../util/pragma');

function isCreateElement(node, context) {
    const pragma = pragmaUtil.getFromContext(context);
    return node.callee &&
      node.callee.type === 'MemberExpression' &&
      node.callee.property.name === 'createElement' &&
      node.callee.object &&
      node.callee.object.name === pragma &&
      node.arguments.length > 0;
}


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: 'Forbid "button" element without an explicit "id" attribute',
            category: 'Possible Errors',
            recommended: false,
            url: docsUrl('button-has-id')
        },
        schema: [{
            type: 'object',
            additionalProperties: false
        }]
    },

    create(context) {
        function reportMissing(node) {
            context.report({
                node,
                message: 'Missing an explicit id attribute for button'
            });
        }

        return {
            JSXElement(node) {
                if (node.openingElement.name.name !== 'button') {
                    return;
                }

                const idProp = getProp(node.openingElement.attributes, 'id');

                if (!idProp) {
                    reportMissing(node);
                }
                // todo maybe implement regex?
            },
            CallExpression(node) {
                if (!isCreateElement(node, context)) {
                    return;
                }

                if (node.arguments[0].type !== 'Literal' || node.arguments[0].value !== 'button') {
                    return;
                }

                if (!node.arguments[1] || node.arguments[1].type !== 'ObjectExpression') {
                    reportMissing(node);
                    return;
                }

                const props = node.arguments[1].properties;
                const idProp = props.find(prop => prop.key && prop.key.name === 'id');

                if (!idProp || idProp.value.type !== 'Literal') {
                    reportMissing(node);
                }
                // todo maybe implement regex?
            }
        };
    }
};
