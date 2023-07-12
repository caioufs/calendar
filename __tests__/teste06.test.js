import getColorForFBType from '../src/utils/freebusy'

describe("Funcao 06, utils/freebusy", () => {

    it('Deve retornar a cor (string RGB) especifica do estado (Livre/Ocupado)', () => {
		const test1 = 'BUSY'
		const test2 = ""

		expect(getColorForFBType(test1)).toEqual('rgba(255,255,255,0)')
		expect(getColorForFBType(test2)).toEqual('rgb(0,130,201)')
	})

})