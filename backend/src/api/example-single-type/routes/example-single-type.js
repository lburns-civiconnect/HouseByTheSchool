'use strict';

/**
 * example-single-type router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::example-single-type.example-single-type');
