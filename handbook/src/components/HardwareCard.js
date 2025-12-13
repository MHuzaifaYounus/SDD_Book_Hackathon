import React from 'react';

export default function HardwareCard({title, spec}) {
  return (
    <div style={{border: '1px solid #ccc', padding: '16px', borderRadius: '8px', marginBottom: '16px'}}>
      <h3>{title}</h3>
      <p>{spec}</p>
    </div>
  );
}
