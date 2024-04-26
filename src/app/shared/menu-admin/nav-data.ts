import { INavbarData } from "src/app/core/interface/helper";

export  const navbarData:INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'si si-home',
        label: 'Dashboard',
    },
    {
        routeLink: 'user',
        icon: 'si si-user',
        label: 'Usuarios',
        items:[
            {
                routeLink: 'user/client',
                label:'clientes',
            },
            {
                routeLink: 'user/person',
                label:'Mi Personal'
            },

        ]
        
    },
    {
        routeLink: 'product',
        icon: 'si si-layers',
        label: 'Productos'
    },
    {
        routeLink: 'stores',
        icon: 'si si-organization',
        label: 'Locales'
    },
    {
        routeLink: 'invoicing',
        icon: 'si si-note',
        label: 'Facturacion',
    }

];