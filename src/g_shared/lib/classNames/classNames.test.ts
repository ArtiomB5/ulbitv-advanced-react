import { classNames } from "./classNames";

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    })
    test('with additional class', () => {
        expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe('someClass cls1 cls2');
    })
    test('with mods', () => {
        expect(classNames('someClass', {hovered: true, scrollable: true}, ['cls1', 'cls2'])).toBe('someClass hovered scrollable cls1 cls2');
    })
    test('with mods false', () => {
        expect(classNames('someClass', {hovered: true, scrollable: false}, ['cls1', 'cls2'])).toBe('someClass hovered cls1 cls2');
    })
    test('with mods undefined', () => {
        expect(classNames('someClass', {hovered: true}, ['cls1', 'cls2'])).toBe('someClass hovered cls1 cls2');
    })
})