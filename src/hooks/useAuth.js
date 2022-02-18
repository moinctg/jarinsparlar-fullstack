import  { useContext } from 'react';
import {AuthCotnext} from '../context/AuthProvider';

const useAuth = () => {
   return useContext(AuthContext)
};

export default useAuth;