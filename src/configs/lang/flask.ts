export const flask = {
    label: 'Flask',
    link: '/flask/',
    id: 'flask',
    icon: 'seti:python',
    items: [
        {
            label: 'Básicos',
            autogenerate: { directory: 'flask/básicos' },
        },
        {
            label: 'Rutas y Vistas',
            autogenerate: { directory: 'flask/rutas' },
        },
        {
            label: 'Plantillas',
            autogenerate: { directory: 'flask/plantillas' },
        },
        {
            label: 'Formularios',
            autogenerate: { directory: 'flask/formularios' },
        },
        {
            label: 'Petición y Respuesta',
            autogenerate: { directory: 'flask/peticion-respuesta' },
        },
        {
            label: 'Sesión',
            autogenerate: { directory: 'flask/sesión' },
        },
        {
            label: 'Bases de Datos',
            autogenerate: { directory: 'flask/bases-datos' },
        },
        {
            label: 'Seguridad',
            autogenerate: { directory: 'flask/seguridad' },
        },
        {
            label: 'Testing',
            autogenerate: { directory: 'flask/testing' },
        },
        {
            label: 'Errores',
            autogenerate: { directory: 'flask/errores' },
        },
        {
            label: 'Despliegue',
            autogenerate: { directory: 'flask/despliegue' },
        },
    ],
};
