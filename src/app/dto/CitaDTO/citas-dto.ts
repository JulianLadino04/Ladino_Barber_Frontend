import { EstadoCita } from "./estado-cita"

export interface CitasDTO {
    idCita : string,
    servicio : string,
    estilista : string,
    cliente : string,
    fechaInicioCita : string
    horaCita : string
    estado : EstadoCita
}
