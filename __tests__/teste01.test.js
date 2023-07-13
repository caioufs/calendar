import { getFactorForAlarmUnit } from '../src/utils/alarms'

describe("Funcao 01, utils/alarms", () => {
    
    it('Deve retornar as unidades corretas de tempo em segundos', () => {
        const seconds = 'seconds';
        const minutes = 'minutes';
        const hours = 'hours';
        const days = 'days';
        const weeks = 'weeks';
        const defaultCase = 'months';
        const invalidType = true;

        expect(getFactorForAlarmUnit(seconds)).toEqual(1)
        expect(getFactorForAlarmUnit(minutes)).toEqual(60)
        expect(getFactorForAlarmUnit(hours)).toEqual(3600)
        expect(getFactorForAlarmUnit(days)).toEqual(86400)
        expect(getFactorForAlarmUnit(weeks)).toEqual(604800)
        expect(getFactorForAlarmUnit(defaultCase)).toEqual(1)
        expect(getFactorForAlarmUnit(invalidType)).toEqual(1)
    })
})