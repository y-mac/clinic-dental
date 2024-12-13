import { createContext, useState, useEffect } from "react";

interface UserContextType {
  uid: string,
  loading: boolean,
  /* getOrdersList: (url: string) => void;
  filterOrderList: (txt:string) => void; */
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{children:React.ReactNode}> = ({children}) => {
  const [loading, setLoading] = useState(false);  
  const [uid, setUid] = useState<string>('');

  const getOrdersList = async (url: string) => {
    try{
        const data = {
            correo: 'yahir.ramirez23@gmail.com'
        }
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'ordProyecto':'a6093c23ae10457c8t0b8b298fc8b500'
            },
            body: JSON.stringify(data)
        });
        if(!response.ok) {
          throw new Error("Error al cargar los datos")
        }
        const responseData = await response.json();
        console.log({responseData});
        setUid(responseData.uuid);
      } catch(error) {
          console.error(`error al cargar la data ${error}`);
      } finally {
         setLoading(false);
      }
  }

  useEffect(()=>{
    getOrdersList('https://repoapi.ordenaris.com/api/candidato');
  },[])


  return (
    <UserContext.Provider
      value={{  uid, loading }}
    >
      {children}
    </UserContext.Provider>
  )
}