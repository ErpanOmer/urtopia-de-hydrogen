import { useMatches } from '@remix-run/react';
import { IconLogin, IconAccount, Link } from '~/components';

export default function ({className}) {
    const [root] = useMatches();
    const isLoggedIn = root.data?.isLoggedIn;
    return isLoggedIn ? (
      <Link to="/account" className={className}>
        <IconAccount />
      </Link>
    ) : (
      <Link to="/account/login" className={className}>
        <IconLogin />
      </Link>
    );
  }