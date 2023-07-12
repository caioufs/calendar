import contactsStore from '../src/store/contacts'

describe("Funcao 06", () => {
    it('Deve retornar o estado padrao dos contatos', () => {
		expect(contactsStore.state.contacts).toEqual([])
		expect(contactsStore.state.contactByEMail).toEqual({})
	})
})