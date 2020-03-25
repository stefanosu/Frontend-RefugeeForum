import {store} from './store' 
import expect from 'expect'


describe('store', () => {
  it('should initialize', () => {
    const actual = store.getState()
    const expected = {
      user
    }
    expect(actual).toEqual(expected)
  })
});