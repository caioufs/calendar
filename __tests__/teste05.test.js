import { urldecode } from '../src/utils/url'

describe("Funcao 05, utils/url", () => {

    it("Deve decodificar a url", () => {
        const urlEncoded = 'group%20with%20spaces'
        const urlDecoded = 'group with spaces'

        expect(urldecode(urlEncoded)).toBe(urlDecoded)
    })

})