const formatVolumeIconPath = require('../assets/scripts/main');

describe('formatVolumeIconPath', () => {
    test('high volume value', () => {
        expect(formatVolumeIconPath(70)).toContain('3');
    });

    test('medium volume value', () => {
        expect(formatVolumeIconPath(40)).toContain('2');
    });
    
    test('low volume value', () => {
        expect(formatVolumeIconPath(10)).toContain('1');
    });

    test('negative volume value', () => {
        expect(formatVolumeIconPath(-20)).toContain('0');
    });

});