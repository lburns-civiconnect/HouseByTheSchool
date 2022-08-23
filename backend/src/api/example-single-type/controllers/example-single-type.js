'use strict';

/**
 *  example-single-type controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::example-single-type.example-single-type');
