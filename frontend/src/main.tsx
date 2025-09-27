import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './util/Utilities.css';
import './util/i18n/i18n.ts';
import { RouterProvider } from "react-router/dom";
import { router } from './routes/router.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

)
