"use client";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isCollapsed, onResetWidth }) => {
  return (
    <div>
      <span>Navbar</span>
    </div>
  );
};

export default Navbar;
