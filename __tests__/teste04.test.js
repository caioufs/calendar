import { getWeekDayFromDate } from '../src/utils/recurrence'

describe("Funcao 04, utils/recurrence", () => {

    it("Deve retornar o dia da semana de acordo com a data", () => {
        const date = new Date(2023, 0, 1)
        expect(getWeekDayFromDate(date)).toEqual('SU')
    })
    
})