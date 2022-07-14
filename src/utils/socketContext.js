import { createContext } from 'react';
import socketio from 'socket.io-client';

const baseUrl = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_GWIZA_GW_URL
  : process.env.REACT_APP_GWIZA_GW_DEV_URL;

const SOCKET_URL = baseUrl?.split('/api')[0];

export const socket = socketio.connect(SOCKET_URL);
export const socketContext = createContext();
