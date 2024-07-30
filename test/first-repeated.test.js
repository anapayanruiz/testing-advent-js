import { describe, expect, it } from "vitest"
import { findFirstRepeated } from "../src/first-repeated"

/* 
Si hay más de un número repetido, 
debes devolver el número cuya segunda ocurrencia 
aparezca primero en la lista. 
Si no hay números repetidos, devuelve -1.

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
*/

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
