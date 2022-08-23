'use strict';

/**
 * example-single-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::example-single-type.example-single-type');
