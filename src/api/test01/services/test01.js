'use strict';

/**
 * test01 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test01.test01');
