import type { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const wrapErrorHandling =
  <T, J>(callback: (...args: J[]) => Promise<T>) =>
  async (...args: J[]): Promise<T | void | null> => {
    try {
      return await callback(...args);
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      toast.error(error.response?.data.message || 'An error occurred');
      return null;
    }
  };
