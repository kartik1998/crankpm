/* eslint-disable no-undef */
const { expect } = require('chai');
const Crank = require('../crank');

describe('Crank integration test suite', () => {
  const crank = new Crank();

  it('should set key - value', () => {
    const res = crank.set('key', 'value');
    expect(res).to.equal('"key set"');
  });

  it('should get key', () => {
    crank.set('test-key', 'test-value');
    const res = crank.get('test-key');
    expect(res).to.equal('"test-value"');
  });

  it('should delete key', () => {
    crank.set('del', 'delval');
    const res = crank.delete('del');
    expect(res).to.equal('"del deleted."');
  });

  it('should correctly find', () => {
    crank.set('year', { 2019: 'covid', 2020: 'vaccine' });
    const res = crank.find({ 2019: 'covid' });
    expect(res).to.equal('[{"2019":"covid","2020":"vaccine"}]');
  });

  it('should return not found for key that is not persisted', () => {
    const res = crank.get('untitled');
    expect(res).to.equal('"Not found"');
  });
});
