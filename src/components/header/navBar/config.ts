import { GoOrganization } from 'react-icons/go';
import { MdEmail, MdStore } from 'react-icons/md';
import { TiHome } from 'react-icons/ti';

export const config = {
  items: [
    {
      data: {
        icon: TiHome,
        label: 'Home',
        url: '/home',
      },
      id: 'home',
    },
    {
      data: {
        icon: MdStore,
        label: 'Shop',
        url: '/shop',
      },
      id: 'shop',
    },
    {
      data: {
        icon: GoOrganization,
        label: 'About',
        url: '/about',
      },
      id: 'about',
    },
    {
      data: {
        icon: MdEmail,
        label: 'Contacts',
        url: '/contacts',
      },
      id: 'contacts',
    },
  ],
};
