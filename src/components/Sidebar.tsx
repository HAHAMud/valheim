import { LibrarySidebar } from '@/module/item/constants';
import { SidebarType } from '@/module/item/types';

const SidebarItem = ({ item }: { item: SidebarType }) => {
  return <div className="m-2 rounded-lg bg-white p-2 text-teal-500">{item.name}</div>;
};

export const Sidebar = () => {
  return (
    <div className="flex flex-wrap items-center justify-start p-24">
      {LibrarySidebar.map((item: SidebarType, index: number) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};
