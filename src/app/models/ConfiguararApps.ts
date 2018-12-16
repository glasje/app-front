export const ConfigurarApps = {
    nombre: '',
    descripcion: '',
    fecha_creacion: new Date().toISOString().substring(0, 10),
    autor: '',
    config:{
		splash:'',
        icono:'',
        logo: ''
	},
    modulos: []
};
