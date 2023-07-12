import { getDefaultAttendeeObject } from '../src/models/attendee'

describe("Funcao 07", () => {
    it('Deve retornar um participante em estado default (Vazio)', () => {
        const participante = getDefaultAttendeeObject()
        const participanteVazio = {
            attendeeProperty: null,
			commonName: null,
			calendarUserType: 'INDIVIDUAL',
			participationStatus: 'NEEDS-ACTION',
			role: 'REQ-PARTICIPANT',
			rsvp: false,
			uri: null,
        }

		expect(participante).toEqual(participanteVazio)
	})
})