
import React ,{createContext} from 'react';
import useFirebase from '../hooks/useFirebase';

const authProvider = ( {children}) => {
   const allContext = useFirebase();

    return (
        <AuthContaxt.Provider value={allContext}>
            {children}
            
        </AuthContaxt.Provider>
    );
};

export default authProvider;