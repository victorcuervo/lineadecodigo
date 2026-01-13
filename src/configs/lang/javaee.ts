export const javaee = {
    label: 'JavaEE',
    link: '/javaee/',
    icon: 'seti:java',
    id: 'javaee',
    items: [
        {
            label: 'Básicos',							
            autogenerate: { directory: 'javaee/basicos' },
        },
        {
            label: 'JSP',							
            autogenerate: { directory: 'javaee/jsp' },
        },
        {
            label: 'Servlets',
            autogenerate: { directory: 'javaee/servlet' },
        }         
    ],
};
