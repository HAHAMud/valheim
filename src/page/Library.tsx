import { Sidebar } from '@/components/Sidebar';
import { ItemCard } from '@/components/Card';
import { Berries } from '@/module/item/constants';

const Library = () => {
  // TODO: filter by category

  return (
    <div>
      <Sidebar />
      <ItemCard list={Berries} />
    </div>
  );
};

export default Library;
