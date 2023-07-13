import { removeMailtoPrefix, addMailtoPrefix } from '../src/utils/attendee'

describe("Funcao 02, utils/attendee", () => {
	const email = 'email_teste@email.com'
	const withPrefix = 'mailto:email_teste@email.com'
	const onlyPrefix = 'mailto:'
	const emptyString = ''
	const invalidType = true

    it('Deve remover o (mailto:email) do prefixo da fonte', () => {
		expect(removeMailtoPrefix(email)).toEqual(email)
		expect(removeMailtoPrefix(withPrefix)).toEqual(email)
		expect(removeMailtoPrefix(onlyPrefix)).toEqual('')
		expect(removeMailtoPrefix(emptyString)).toEqual('')
		expect(removeMailtoPrefix(invalidType)).toEqual('')
	})

	it('Deve adicionar o (mailto:email) ao prefixo da fonte', () => {
		expect(addMailtoPrefix(email)).toEqual(withPrefix)
		expect(addMailtoPrefix(withPrefix)).toEqual(withPrefix)
		expect(addMailtoPrefix(onlyPrefix)).toEqual(onlyPrefix)
		expect(addMailtoPrefix(emptyString)).toEqual('mailto:')
		expect(addMailtoPrefix(invalidType)).toEqual('mailto:')
	})
	
}) 