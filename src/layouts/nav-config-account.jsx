import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

/**
 * `Home` is swapped for `Dashboard` automatically when the user is outside the dashboard.
 * Replace the `#` links with real routes as you add them to `src/routes/paths.js`.
 */
export const _account = [
  { label: 'Home', href: '/', icon: <Iconify icon="solar:home-angle-bold-duotone" /> },
  { label: 'Profile', href: '#', icon: <Iconify icon="custom:profile-duotone" /> },
  { label: 'Account settings', href: '#', icon: <Iconify icon="solar:settings-bold-duotone" /> },
];
