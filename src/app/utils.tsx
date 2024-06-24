import { Perfil, Imagen, Url } from './modelo';

export async function api<T>(url: string): Promise<T> {
    const urlCompleta = `${process.env.NEXT_PUBLIC_URL_API}${url}`;
    console.log(urlCompleta);
    const response = await fetch(urlCompleta);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await (response.json() as Promise<T>);
}


export interface AgregarPerfilParams { nombre: string };
export interface AgregarPerfilRespuesta { mensaje: string }


export async function agregarPerfil(params: AgregarPerfilParams): Promise<AgregarPerfilRespuesta> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/perfil/agregar`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    });

    if (!response.ok) {
        const body = await response.text();
        return { mensaje: `Error agregando perfil: ${body}` };
    } else {
        const perfil = await (response.json() as Promise<Perfil>);
        return { mensaje: `Perfil ${perfil.nombre} agregado con éxito!` };
    }
}

export interface BorrarPerfilParams { id: number };
export interface BorrarPerfilRespuesta { mensaje: string }

export async function borrarPerfil(params: BorrarPerfilParams): Promise<BorrarPerfilRespuesta> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/perfil/borrar`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    });

    if (!response.ok) {
        const body = await response.text();
        return { mensaje: `Error borrando perfil: ${body}` };
    } else {
        return { mensaje: `Perfil con ID ${params.id} borrado con éxito!` };
    }
}

export const getProfiles = async (): Promise<Perfil[]> => {
    return api<Perfil[]>('/perfil');
};

export const getImagesIdByProfile = async (profileId: number): Promise<Imagen[]> => {
    return api<Imagen[]>(`/imagenesPorPerfil/${profileId}`);
};


//obtenemos las imagenes por su id
// export const getImageById = async (imageId: number): Promise<Blob> => {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/imagen/${imageId}`);
//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return await response.blob();
// };

//obtenemos todas las imagenes de un perfil con la funcion anterior
// export const getImagesByProfile = async (profileId: number): Promise<Blob[]> => {
//     const images: Imagen[] = await getImagesIdByProfile(profileId);
//     const imageBlobs: Blob[] = await Promise.all(
//         images.map(image => getImageById(image.id))
//     );
//     return imageBlobs;
// };



export const getImagesUrlByProfile = async (profileId: number): Promise<Url[]> => {
    const images: Imagen[] = await getImagesIdByProfile(profileId);
    return images.map(i => `http://3.142.219.234/imagen/${i.id}`);
};
