export const bootstrap = {
    label: 'Bootstrap',
    link: '/bootstrap/',
    icon: 'puzzle',
    id: 'bootstrap',
    items: [
        {
            label: 'Básicos',
            autogenerate: { directory: 'bootstrap/básicos' },
        },
        {
            label: 'Texto',
            autogenerate: { directory: 'bootstrap/texto' },
        },
        {
            label: 'Imágenes',
            autogenerate: { directory: 'bootstrap/imágenes' },
        },
        {
            label: 'Listas',
            autogenerate: { directory: 'bootstrap/listas' },
        },
        {
            label: 'Formularios',
            autogenerate: { directory: 'bootstrap/formularios' },
        },
        {
            label: 'Tablas',
            autogenerate: { directory: 'bootstrap/tablas' },
        },
    ],
};
