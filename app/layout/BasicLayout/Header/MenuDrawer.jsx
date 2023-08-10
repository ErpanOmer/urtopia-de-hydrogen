import { Drawer } from '~/components';
import MenuMobileNav from './MenuMobileNav';

export default function ({isOpen, onClose, menu}) {
    return (
      <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="Menu">
        <div className="grid">
          <MenuMobileNav menu={menu} onClose={onClose} />
        </div>
      </Drawer>
    );
  }