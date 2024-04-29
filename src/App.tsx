import React, { useRef, useState } from 'react';
import { createData } from './app/data/row';
import { TableVirtuoso, VirtuosoHandle } from 'react-virtuoso';
import { RenderRow } from './app/components/RenderRow';

const renderHeader = () => <tr className='bg-neutral-700'>
  <th className="w-[150px] text-gray-200 text-left">ID</th>
  <th className="w-[150px] text-gray-200 text-left">Title</th>
</tr>

function App() {
  const [data, setData] = useState(() => createData(0, 50));
  const [isLoading, setIsLoading] = useState(false);
  const virtuosoRef = useRef<VirtuosoHandle>(null);

  const scrollToIndex = () => {
    virtuosoRef.current?.scrollToIndex({
      index: Math.random() * data.length | 0,
      behavior: 'smooth'
    });
  }

  const updatePage = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newData = createData(data.length, data.length + 50);
    setData([...data, ...newData]);
    setIsLoading(prevState => !prevState);
  }

  return (
    <div className='bg-neutral-900 h-screen flex flex-col justify-center'>
      <div className='container mx-auto'>
        <div className='my-4'>
          <h1 className='text-4xl text-gray-200 text-center mb-8'>React Virtuoso</h1>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded' onClick={scrollToIndex}>Scroll to</button>
          <TableVirtuoso
            ref={virtuosoRef}
            className='!h-[60vh] overflow-y-auto'
            data={data}
            itemContent={(_, { id, title }) => <RenderRow title={title} id={id} />}
            fixedHeaderContent={renderHeader}
            fixedFooterContent={isLoading ? () => <tr className='bg-neutral-700 text-gray-200'><td>Loading...</td></tr> : undefined}
            endReached={updatePage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
