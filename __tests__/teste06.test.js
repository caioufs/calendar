import { getColorForFBType } from '../src/mock/freebusyMock'

describe("Funcao 06, utils/freebusy", () => {

    it('Deve retornar a cor (string RGB) especifica do estado (Livre/Ocupado)', () => {
		const free = 'FREE'
		const busyTentative = 'BUSY-TENTATIVE'
		const busy = 'BUSY'
		const busyUnavaliable = 'BUSY-UNAVAILABLE'
		const otherText = 'OTHER'
		const emptyString = ''
		const invalidType = true

		expect(getColorForFBType(free)).toEqual('rgba(255,255,255,0)')
		expect(getColorForFBType(busyTentative)).toEqual('rgb(221,203,85)')
		expect(getColorForFBType(busy)).toEqual('rgb(201,136,121)')
		expect(getColorForFBType(busyUnavaliable)).toEqual('rgb(182,70,157)')
		expect(getColorForFBType(otherText)).toEqual('rgb(0,130,201)')
		expect(getColorForFBType(emptyString)).toEqual('rgb(0,130,201)')
		expect(getColorForFBType(invalidType)).toEqual('rgb(0,130,201)')
	})

})