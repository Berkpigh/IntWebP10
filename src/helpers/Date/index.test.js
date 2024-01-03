/**
 * 
 */
import { getMonth } from './index'

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        const da1 = new Date('2022-01-01')
        it("the function return janvier for 2022-01-01 as date", () => {
            expect(getMonth(da1)).toBe('janvier')
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            const da2 = new Date('2022-07-08')
            expect(getMonth(da2)).toBe('juillet')
        });
        it("the function not return juillet for 2022-08-08 as date", () => {
            const da3 = new Date('2022-08-08')
            expect(getMonth(da3)).not.toEqual('juillet')
        });
    });
})
