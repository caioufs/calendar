import { getFactorForAlarmUnit } from '../src/utils/alarms'

describe("Funcao 01", () => {
    
    it('Deve retornar as unidades corretas de tempo em segundos', () => {
        expect(getFactorForAlarmUnit('minutes')).toEqual(60)
        expect(getFactorForAlarmUnit('hours')).toEqual(3600)
    })
})