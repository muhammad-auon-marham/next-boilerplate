// Placeholder user for layout UI (account drawer, nav upgrade, role checks).

// To get the real user from the <AuthContext/>, change:
// import { useMockedUser } from 'src/auth/hooks';
// const { user } = useMockedUser();

// To:
// import { useAuthContext } from 'src/auth/hooks';
// const { user } = useAuthContext();

// ----------------------------------------------------------------------

export function useMockedUser() {
  const user = {
    id: '1',
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    photoURL: '',
    role: 'admin',
  };

  return { user };
}
