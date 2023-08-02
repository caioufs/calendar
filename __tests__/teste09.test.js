import { getDefaultCalendarShareObject } from '../src/models/calendarShare'

describe("Funcao 09", () => {
    it('Deve retornar um objeto de calendario com campos preenchidos', () => {
        const newCalendarNullId = {}
		const newCalendarWithId = { id: '123'}
		const newCalendarExtraProp = { id: '123', stringProp: 'type string', numProp: 12, boolProp: true}

		expect(getDefaultCalendarShareObject(newCalendarNullId)).toEqual({
			id: null,
			displayName: null,
			writeable: false,
			isUser: false,
			isGroup: false,
			isCircle: false,
			uri: null,
        })
		expect(getDefaultCalendarShareObject(newCalendarWithId)).toEqual({
			id: '123',
			displayName: null,
			writeable: false,
			isUser: false,
			isGroup: false,
			isCircle: false,
			uri: null,
        })
		expect(getDefaultCalendarShareObject(newCalendarExtraProp)).toEqual({
			id: '123',
			displayName: null,
			writeable: false,
			isUser: false,
			isGroup: false,
			isCircle: false,
			uri: null,
			stringProp: 'type string',
			numProp: 12,
			boolProp: true
        })
	})
})