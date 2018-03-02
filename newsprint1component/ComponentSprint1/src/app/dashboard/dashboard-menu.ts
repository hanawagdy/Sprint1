import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  { title: 'Dashboard', icon: 'nb-home', link: '/dashboard', home: true },
  {
    title: 'Cart',
    icon: 'fa fa-shopping-basket',
    link: '/dashboard/items'
  },
    {
    title: 'Store',
    icon: 'fa fa-shopping-bag',
    link: '/dashboard/store'
  }
];
