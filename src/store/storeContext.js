import { createContext, useState } from 'react';
import { sampleList } from './sampleData';

export const StoreContext = createContext();

export const Store = ({ children }) => {
  const [data, setData] = useState(sampleList);
  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};
