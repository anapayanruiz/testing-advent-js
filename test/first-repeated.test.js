import { describe, expect, it } from "vitest"
import { findFirstRepeated } from "../src/first-repeated"

describe('findFirstRepeated', () => {
    // it('should be a function', () => {
    //     expect(typeof findFirstRepeated).toBe('function')
    // })

    it('should throw a specific error message if not array is provided as parameter', () => {
        expect(() => findFirstRepeated()).toThrow('parameter provided must be an array')
    })

    it('should throw a specific error message if not array is provided as parameter', () => {
        expect(() => findFirstRepeated('a')).toThrow('parameter provided must be an array')
    })

    it('should throw a specific error message if there are no elements in the array', () => {
        expect(() => findFirstRepeated([])).toThrow('parameter provided must be an array with elements')
    })

    it('should throw a specific error message if there are no number elements in the array', () => {
        expect(() => findFirstRepeated(['a', 'b', 2])).toThrow('parameter provided must be an array with number elements')
    })

    it('should return -1 if there is no repeated number in the array', () => {
        expect(findFirstRepeated([1, 2, 3, 4])).toBe(-1)
    })

    it('should return number whose second occurrence appears first in the list', () => {
        expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3)
    })

    it('should return number whose second occurrence appears first in the list', () => {
        expect(findFirstRepeated([5, 1, 5, 1])).toBe(5)
    })

    it('should return number whose second occurrence appears first in the list', () => {
        expect(findFirstRepeated([2, 2, 3, 5, 3, 2])).toBe(2)
    })

    it('should return number whose second occurrence appears first in the list', () => {
        expect(findFirstRepeated([2, 8, 1, 8, 8, 2])).toBe(8)
    })
})

