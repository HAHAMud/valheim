import LibraryCard from '@/components/LibraryCard';
import Sidebar from '@/components/Sidebar';
import { Berries } from '@/moduel/library';

const Library = () => {
  // TODO: filter by category

  return (
    <div>
      <Sidebar />
      <LibraryCard list={Berries} />
    </div>
  );
};

export default Library;
