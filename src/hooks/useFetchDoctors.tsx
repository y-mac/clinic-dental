import { useState } from "react";

interface doctor {
  name: string,
  photo: string,
  specialty: string,
  university: string
} 

const UseFetchDoctors = () => {
    const getDoctorList = async (payload:string) => {
       console.log({payload}); 
       const url = "https://repoapi.ordenaris.com/api/listaDoctores";
       try{
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                'ordProyecto':'a6093c23ae10457c8t0b8b298fc8b500',
                'ordCandidato':payload
            },
        });
        if(!response.ok) {
          throw new Error("Error al cargar los datos")
        }
        const responseData = await response.json();
        setDoctorsList(responseData.list);
       } catch(error) {
         console.error(error);
       }
    }

    const [doctorsList, setDoctorsList] = useState<doctor[]>([]);

    return ({doctorsList, getDoctorList});
}
 
export default UseFetchDoctors;