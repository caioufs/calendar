import { randomId } from '../src/utils/randomId'

describe("Funcao 03", () => {
    it("Deve retornar um id aleatorio, de acordo com o Regex", () => {
        expect(randomId()).toMatch(/^[a-f0-9]+$/)
    })
})