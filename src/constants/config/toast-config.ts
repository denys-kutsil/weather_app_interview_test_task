import type { ToastContainerProps } from 'react-toastify/dist/types';

export const toastConfig: ToastContainerProps = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: true,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
};
