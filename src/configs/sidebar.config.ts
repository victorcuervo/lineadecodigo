export const sidebar = [
    {
        label: 'HTML',
        link: '/html/',
        icon: 'seti:html',
        items: [
            {
            label: 'Básicos',
            autogenerate: { directory: 'html/basicos' },
            },
            {
            label: 'Formularios',
            autogenerate: { directory: 'html/formularios' },
            }],
    },    
    {
        label: 'Java',
        link: '/java/',
        icon: 'seti:java',
        items: [
            {
                label: 'Arrays',							
                autogenerate: { directory: 'java/arrays' },
            },
            {
                label: 'Java',
                autogenerate: { directory: 'java' },
            }
        ],
    },
    {
        label: 'MongoDB',
        link: '/mongodb/',
        icon: 'seti:db',
        items: [
            {
            label: 'Reference',
            autogenerate: { directory: 'guides' },
            }],
    },
    {
        label: 'Python',
        link: '/python/',
        icon: 'seti:python',
        items: [
            {
            label: 'Básicos',
            autogenerate: { directory: 'python/basicos' },
            }],
    },
    {
        label: 'Javascript',
        link: '/javascript/',
        icon: 'seti:javascript',
        items: [
            {
            label: 'Reference',
            autogenerate: { directory: 'javascript' },
            }],
    },
]