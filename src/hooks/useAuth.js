import  { useContext } from 'react';
import {AuthCotnext} from '../context/authProvider';

const useAuth = () => {
   return useContext(AuthContext)
};

export default useAuth;