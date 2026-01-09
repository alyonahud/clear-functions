import showHealth from '../character-health';

test.each([
    [
        'Маг', 90, 'healthy'
    ],
    [
        'Мечник', 10, 'critical'
    ],
    [
        'Лучник', 40, 'wounded'
    ],
])('show health for character %s and %i indicator', (name, health, expected) => {
    const result = showHealth({
        name, health
    });
    expect(result).toBe(expected);
});