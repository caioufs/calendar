import closestColor from '../src/utils/closestColor'

describe("Funcao 07, utils/closestColor", () => {
    it('Deve retornar uma cor conhecida mais proxima do valor Hex fornecido', () => {
		const blue = '#00f'
		const closeToBlue = '#22f'
		const blueAdjacent = '#0C46E8'

		expect(closestColor(blue, { detailed: true })).toEqual({ name: 'blue', hex: "#0000ff" })
		expect(closestColor(closeToBlue, { detailed: true })).toEqual({ name: 'blue', hex: "#0000ff" })
		expect(closestColor(blueAdjacent, { detailed: true })).toEqual({ name: 'mediumslateblue', hex: "#7b68ee" })
	})
})