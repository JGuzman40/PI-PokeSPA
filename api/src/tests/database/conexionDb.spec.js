const { expect } = require('chai');
const { conn } = require('../../db'); 
const { TEST_DB_NAME } = process.env;

describe('Database connection', function() {
  it('should connect to the test database', function() {
    const dbName = conn.config.database;
    expect(dbName).to.equal(TEST_DB_NAME);
  });
});