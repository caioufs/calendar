import { getDefaultCalendarObjectObject } from '../src/models/calendarObject'

describe("Funcao 08", () => {
    it('Deve retornar um objeto de calendario vazio', () => {
        const calendar = getDefaultCalendarObjectObject()
        const emptyCalendar = {
            calendarId: null,
			dav: null,
			calendarComponent: null,
			uid: null,
			uri: null,
			objectType: null,
			isEvent: false,
			isJournal: false,
			isTodo: false,
			existsOnServer: false,
			id: null,
        }

		expect(calendar).toEqual(emptyCalendar)
	})
})