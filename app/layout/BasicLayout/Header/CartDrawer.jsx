import { Await, useMatches } from '@remix-run/react';
import { Suspense } from 'react';
import { Drawer, Cart, CartLoading } from '~/components';

export default function ({isOpen, onClose}) {
    const [root] = useMatches();
  
    return (
      <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="right">
        <div className="grid">
          <Suspense fallback={<CartLoading />}>
            <Await resolve={root.data?.cart}>
              {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart} />}
            </Await>
          </Suspense>
        </div>
      </Drawer>
    );
  }