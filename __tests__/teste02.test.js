import { removeMailtoPrefix } from '../src/utils/attendee'

describe("Funcao 02", () => {
    it('Deve remover o (mailto:email) da fonte', () => {
		const email = 'email_teste@email.com'
		expect(removeMailtoPrefix(email)).toEqual(email)
		expect(removeMailtoPrefix(`mailto:${email}`)).toEqual(email)
	})
}) 