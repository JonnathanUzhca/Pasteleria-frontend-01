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
                // items:[
                //     {
                //         routeLink: 'clientes/lavel2.1',
                //         label: 'lavel 2.1'
                //     },
                //     {
                //         routeLink: 'producto/lavel2.2',
                //         label: 'lavel 2.2',
                //         items:[
                //             {
                //                 routeLink:'product/lavel3.1',
                //                 label:'lavel 3.1'
                //             },
                //             {
                //                 routeLink:'product/lavel3.2',
                //                 label:'lavel 3.2'
                //             }

                //         ]
                //     }
                // ]
            },
            {
                routeLink: 'usuario/personal',
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
        label: 'Locales',
        // expanded: true,
        // items:[
        //     {
        //         routeLink:'local/level1.1',
        //         label:'lavel 1.1'
        //     },
        //     {
        //         routeLink: 'local/lavel1.2',
        //         label:'lavel 1.2'
        //     }
        // ]
    },
    {
        routeLink: 'invoicing',
        icon: 'si si-note',
        label: 'Facturacion',
        expanded: true,
        items: [
            {
                routeLink: 'facturacion/notValid',
                label: 'Facturas anuladas'
            },
            {
                routeLink: 'facturacion/valid',
                label: 'facturas validas'
            }
            ,
            {
                routeLink: 'facturas/delete',
                label: 'Facturas eliminadas'
            }
        ]
    }

];