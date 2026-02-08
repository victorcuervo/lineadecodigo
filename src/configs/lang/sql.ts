export const sql = {
    label: 'SQL',
    link: '/sql/',
    icon: 'seti:db',
    id: 'sql',
    items: [
        {
            label: 'Básicos',
            autogenerate: { directory: 'sql/basicos' },
        },
        {
            label: 'Consultas',
            autogenerate: { directory: 'sql/consultas' },
        },
        {
            label: 'Inserciones',
            autogenerate: { directory: 'sql/inserciones' },
        },
        {
            label: 'Borrados',
            autogenerate: { directory: 'sql/borrados' },
        },
        {
            label: 'Actualizaciones',
            autogenerate: { directory: 'sql/actualizaciones' },
        },
        {
            label: 'Funciones',
            autogenerate: { directory: 'sql/funciones' },
        },
    ],
};
