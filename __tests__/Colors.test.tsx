// Adjust the path as per your project structure
import renderer from 'react-test-renderer';
import {test, jest, describe} from '@jest/globals';
import {expect, it, beforeEach} from '@jest/globals';
import Colors from '../src/utility/Colors';
describe('Colors object', () => {
  it('should have correct values for all colors', () => {
    expect(Colors.TRACK_DISABLE_COLOR).toBe('#767577');
    expect(Colors.TRACK_ENABLE_COLOR).toBe('#81b0ff');
    expect(Colors.THUMB_DISABLE_COLOR).toBe('#f4f3f4');
    expect(Colors.THUMB_ENABLE_COLOR).toBe('#f5dd4b');
    expect(Colors.TOGGLE_BG_COLOR).toBe('#3e3e3e');
    expect(Colors.WHITE).toBe('#ffffff');
    expect(Colors.SKY_BLUE).toBe('#20a7db');
    expect(Colors.BLACK).toBe('#000');
  });
  it('should not have undefined or null color values', () => {
    Object.keys(Colors).forEach((key) => {
      expect(Colors[key]).not.toBeNull();
      expect(Colors[key]).not.toBeUndefined();
    });
  });
  it('should be an object containing color properties', () => {
    expect(typeof Colors).toBe('object');
    expect(Object.keys(Colors)).toEqual(expect.arrayContaining([
      'TRACK_DISABLE_COLOR',
      'TRACK_ENABLE_COLOR',
      'THUMB_DISABLE_COLOR',
      'THUMB_ENABLE_COLOR',
      'TOGGLE_BG_COLOR',
      'WHITE',
      'SKY_BLUE',
      'BLACK'
    ]));
  });
});