import React from 'react';
import { Row } from '../data/row';

export const RenderRow: React.FC<Row> = ({ id, title }) => {
  return (
    <>
      <td className=" text-gray-200">{id}</td>
      <td className=" text-gray-200">{title}</td>
    </>
  );
};