import { LibrarySidebar } from '@/moduel/library';
import { SidebarType } from '@/moduel/library/type';

const SidebarItem = ({ item }: { item: SidebarType }) => {
  return <div className="m-2 p-2 rounded-lg bg-white text-teal-500">{item.name}</div>;
};

const Sidebar = () => {
  return (
    <div className="p-24 flex flex-wrap items-center justify-start">
      {LibrarySidebar.map((item: SidebarType, index: number) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
