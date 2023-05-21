import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './components/button';
import common from './lib/common';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Button onClick={common} />);
