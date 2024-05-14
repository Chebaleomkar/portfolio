import React from 'react';

const Tag = ({ tag, color }: { tag: string; color?: string }) => {
  return (
    <span className={`text-white p-2 border h-9   rounded-md text-[11px] inline-block relative overflow-hidden ${color ? color : ''}`}>
      {tag}
    </span>
  );
};

export default Tag;
