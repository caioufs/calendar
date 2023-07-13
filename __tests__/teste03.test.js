import { hexToRGB, detectColor } from '../src/utils/color'

describe("Funcao 03, utils/color", () => {
    const shortHex = "#0F0"
    const fullHex = "#00FF00"
    const nullable = null
    const empty = ""

    it("Deve transformar uma cor Hexadecimal para Valores RGB", () => {        
        const rgbWhite = { red: 0, green: 0, blue: 0 }
        const rgbGreen = { red: 0, green: 255, blue: 0 };

        expect(hexToRGB(shortHex)).toEqual(rgbGreen)
        expect(hexToRGB(fullHex)).toEqual(rgbGreen)
        expect(hexToRGB(nullable)).toEqual(rgbWhite)
        expect(hexToRGB(empty)).toEqual(rgbWhite)
    })

    it("Retorna a cor Hexadecimal caso seja válida, ou false caso não seja", () => {
        const invalidHex = "#SSFF00"

        expect(detectColor(shortHex)).toBe(shortHex)
        expect(detectColor(fullHex)).toEqual(fullHex)
        expect(detectColor(invalidHex)).toEqual(false)
        expect(detectColor(nullable)).toEqual(false)
        expect(detectColor(empty)).toEqual(false)
    })
})