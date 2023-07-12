import closestColor from '../src/utils/closestColor'

describe("Funcao 07, utils/closestColor", () => {
    it('Deve retornar uma cor conhecida mais proxima do valor Hex fornecido', () => {
		const blue = '#00f'
		const yellow = '#ff2'


		expect(closestColor(blue, { detailed: true })).toEqual({ name: 'blue', hex: "#0000ff" })
		expect(closestColor(yellow, { detailed: true })).toEqual({ name: 'yellow', hex: "#ffff00" })
	})
})