interface parameters {
  nombre: string,
  telefono: string,
  fecha: string,
  doctor: string,
  mensaje: string,
} 

const UseMakeAppointment = () => {
    const createAppointment = async (payload: parameters, uid: string) => {
        try {

            const url = "https://repoapi.ordenaris.com/api/mensaje";
            const data = payload;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'ordProyecto': 'a6093c23ae10457c8t0b8b298fc8b500',
                    'ordCandidato': uid
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error("Error al cargar los datos")
            }
            const responseData = await response.json();
            alert(responseData.mensaje ? responseData.mensaje : 'cita creada correctamente');

        } catch (error) {
            console.error(`error al cargar la data ${error}`);
            alert('Error al crear la cita');
        }
    }

    return({createAppointment});
      
}
 
export default UseMakeAppointment;