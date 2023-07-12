import { getDefaultContactsObject } from '../src/models/contact'

describe("Funcao 10", () => {
    it('Deve retornar um objeto de contato padrao (Vazio)', () => {
        const contato = getDefaultContactsObject()

		expect(contato).toEqual({
			name: null,
			calendarUserType: 'INDIVIDUAL',
			isUser: false,
			userId: null,
			hasPhoto: false,
			photoUrl: null,
			hasIcon: false,
			iconClass: null,
			emails: [],
			language: null,
			timezoneId: null,
		})
	})
})