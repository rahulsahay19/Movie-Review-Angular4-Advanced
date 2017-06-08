import { MenuItem } from '../../fw/services/menu.service';

export let initialMenuItems:Array<MenuItem>=[
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: 'dashboard',
        submenu: null
    },
    {
        text: 'Movies',
        icon: 'glyphicon-film',
        route: null,
        submenu: [
            {
                text: 'Select',
                icon: 'glyphicon-expand',
                route: null,
                submenu: [
                    {
                        text: 'Godzilla',
                        icon: 'glyphicon-film',
                        route: 'movie-detail/Godzilla',
                        submenu: null
                    },
                    {
                        text: 'Titanic',
                        icon: 'glyphicon-film',
                        route: 'movie-detail/Titanic',
                        submenu: null
                    },
                    {
                        text: 'Predator',
                        icon: 'glyphicon-film',
                        route: 'movie-detail/Predator',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Top 3',
                icon: 'glyphicon-film',
                route: 'movie-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'glyphicon-film',
                route: 'movie-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'glyphicon-film',
                route: 'movie-list/0',
                submenu: null
            }
        ],
    },
    {
        text: 'Maintenance',
        icon: 'glyphicon-wrench',
        route: null,
        submenu: [
            {
                text: 'Movies List',
                icon: 'glyphicon-th-list',
                route: 'movie-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: 'settings',
                submenu: null
            }
        ]
    }
];