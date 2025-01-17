"use client";

import { LucideIcon } from "lucide-react";

interface ItemProps {
  label: string;
  icon: LucideIcon;
  onClick: () => {};
}

const Item: React.FC<ItemProps> = ({ label, icon, onClick }) => {
  return (
    <div>
      <span>Item</span>
    </div>
  );
};

export default Item;
