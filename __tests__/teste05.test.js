import { urldecode } from '../src/utils/url'

describe("Funcao 05", () => {
    const urlEncoded = 'group%20with%20spaces'
    const urlDecoded = 'group with spaces'

    it("Deve decodificar a url", () => {
        const result = urldecode(urlEncoded)
        expect(result).toBe(urlDecoded)
    })
})