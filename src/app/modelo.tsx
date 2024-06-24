export interface Usuario {
    nombre: string,
    clave: string,
    email: string
}
export interface Perfil {
    id: number,
    nombre: string,
    idUltimaPublicacion: string
}
export interface Imagen {
    id: number,
    Perfil: number
}