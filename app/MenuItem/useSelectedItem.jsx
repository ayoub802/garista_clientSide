// useSelectedItem.js
"use client";
import { useContext } from 'react';
import { SelectedItemContext } from './SelectedItemContext';

const useSelectedItem = () => {
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);
  return { selectedItem, setSelectedItem };
};

export default useSelectedItem;
