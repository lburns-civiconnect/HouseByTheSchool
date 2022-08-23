'use strict';

/**
 * example-collection service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::example-collection.example-collection');
