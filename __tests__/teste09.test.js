import { getDefaultCalendarShareObject } from '../src/models/calendarShare'

describe("Funcao 09", () => {
    it('Deve retornar um objeto de calendario com campos preenchidos', () => {
        const newCalendarData = { id: 'idTeste', prop: 'Propriedade Teste' }
        const newCalendar = getDefaultCalendarShareObject(newCalendarData)

		expect(newCalendar).toEqual({
            id: 'idTeste',
			displayName: null,
			writeable: false,
			isUser: false,
			isGroup: false,
			isCircle: false,
			uri: null,
			prop: 'Propriedade Teste',
        })
	})
})