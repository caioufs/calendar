import { urldecode } from '../src/utils/url'

describe("Funcao 05, utils/url", () => {

    it("Deve decodificar a url", () => {
        const urlEncoded = 'text%20with%20spaces'
        const urlDecoded = 'text with spaces'
        const multipleTags = 'text%20%20with%20%20spaces'
        const multipleSpaces = 'text  with  spaces'
        const onlyTags = '%20%20%20'
        const onlySpaces = '   '
        const emptyString = ''

        expect(urldecode(urlEncoded)).toBe(urlDecoded)
        expect(urldecode(urlDecoded)).toBe(urlDecoded)
        expect(urldecode(multipleTags)).toBe(multipleSpaces)
        expect(urldecode(emptyString)).toBe(emptyString)
        expect(urldecode(onlyTags)).toBe(onlySpaces)
    })

})