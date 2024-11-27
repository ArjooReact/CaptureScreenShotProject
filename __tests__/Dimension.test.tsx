 // Adjust the import path as per your project structure
import renderer from 'react-test-renderer';
import {test, jest, describe} from '@jest/globals';
import {expect, it, beforeEach} from '@jest/globals';
import Dimension from '../src/utility/Dimension';
describe('Dimension object', () => {
  it('should have correct values for all dimensions', () => {
    expect(Dimension.PreviewImage2Dimen).toBe(100);
    expect(Dimension.PreviewImageDimen).toBe(200);
    expect(Dimension.CustomButtonWidth).toBe(160);
    expect(Dimension.CustomButtonHeight).toBe(60);
    expect(Dimension.CustomButtonMarginTop).toBe(20);
    expect(Dimension.BorderRadius).toBe(8);
    expect(Dimension.FontSize).toBe(16);
    expect(Dimension.ImageBorderRadius).toBe(12);
    expect(Dimension.ModalBorderRadius).toBe(12);
  });

  it('should not have undefined or null dimension values', () => {
    Object.keys(Dimension).forEach((key) => {
      expect(Dimension[key]).not.toBeNull();
      expect(Dimension[key]).not.toBeUndefined();
    });
  });

  it('should be an object containing dimension properties', () => {
    expect(typeof Dimension).toBe('object');
    expect(Object.keys(Dimension)).toEqual(expect.arrayContaining([
      'PreviewImage2Dimen',
      'PreviewImageDimen',
      'CustomButtonWidth',
      'CustomButtonHeight',
      'CustomButtonMarginTop',
      'BorderRadius',
      'FontSize',
      'ImageBorderRadius',
      'ModalBorderRadius'
    ]));
  });
});