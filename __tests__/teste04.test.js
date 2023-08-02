import { getWeekDayFromDate } from '../src/utils/recurrence'

describe("Funcao 04, utils/recurrence", () => {

    it("Deve retornar o dia da semana de acordo com a data", () => {
        const sunday = new Date(2023, 0, 1)
        const monday = new Date(2023, 0, 2)
        const tuesday = new Date(2023, 0, 3)
        const wednesday = new Date(2023, 0, 4)
        const thursday = new Date(2023, 0, 5)
        const friday = new Date(2023, 0, 6)
        const saturday = new Date(2023, 0, 7)
        // const invalidDate = new Date(2023, 20, 35)

        expect(getWeekDayFromDate(sunday)).toEqual('SU')
        expect(getWeekDayFromDate(monday)).toEqual('MO')
        expect(getWeekDayFromDate(tuesday)).toEqual('TU')
        expect(getWeekDayFromDate(wednesday)).toEqual('WE')
        expect(getWeekDayFromDate(thursday)).toEqual('TH')
        expect(getWeekDayFromDate(friday)).toEqual('FR')
        expect(getWeekDayFromDate(saturday)).toEqual('SA')
        // expect(getWeekDayFromDate(invalidDate)).toThrow('Invalid date-object given')
    })
    
})