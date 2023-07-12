import { hexToRGB, detectColor } from '../src/utils/color'

describe("Funcao 03, utils/color", () => {

    it("Deve transformar uma cor Hexadecimal para Valores RGB", () => {
        const whiteHex = "#FFF"
        const blackHex = ""
        
        expect(hexToRGB(whiteHex)).toEqual({ red: 255, green: 255, blue: 255 })
        expect(hexToRGB(blackHex)).toEqual({ red: 0, green: 0, blue: 0 })
    })

    it("Verifica se o valor passado é uma cor valida (Hexadecimal)", () => {
        const color1 = ""
        const color2 = "#f00"
        const color3 = "f00"
        const color4 = "HHH"

        expect(detectColor(color1)).toBe(false)
        expect(detectColor(color2)).toEqual(color2)
        expect(detectColor(color3)).toEqual(`#${color3}`)
        expect(detectColor(color4)).toEqual(false)
    })
})