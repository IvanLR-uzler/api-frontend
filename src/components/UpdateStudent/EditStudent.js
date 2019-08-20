import React,{Component, Fragment} from 'react'
import { UpdateStudentMutation } from '../../mutations/Mutations';
import { UpdateStudent} from '../UpdateStudent/FormUpdate'
import {GETSTUDENT_QUERY} from '../../queries/Queries';
import { Query } from 'react-apollo';


class EditStudet extends Component {
 state = {}
 render(){
     const {_id} =this.props.match.params;
     console.log(_id)
     return  <Fragment>
           
            <Query query={GETSTUDENT_QUERY} variables={{_id}} > 
                {({loading, error, data}) => {
                if (loading) return "cargando"
                if (error) return `error: ${error.message}`;
                console.log(data);
                return(

                   <UpdateStudentMutation>
                      { 
                           (updateStudent, {loading, error,})=>{
    
                                    const handleSubmit = ({ _id,
                                            nombres,
                                            apellido_paterno,
                                            apellido_materno,
                                            numero_control,
                                            telefono,
                                            carrera,
                                            correo_electronico,
                                            estilo_aprendizaje }) => {
            
                                            const input = { _id,
                                                nombres,
                                                apellido_paterno,
                                                apellido_materno,
                                                numero_control,
                                                telefono,
                                                carrera,
                                                correo_electronico,
                                                estilo_aprendizaje }
                                            const variables = { input }
                                            console.log(variables)
                                            updateStudent({ variables }).then((data) => {
                                                console.log('SE REGISTRARON LOS DATOS',data);
                                                }).catch((e) => {
                                                    console.log('A OCURRIDO UN ERROR AL REGISTRAR LOS DATOS: ',e);
                                                    }
                                                );
                                        }
                                    const errorMSG = error && 'A OCURRIDO UN ERROR AL REGISTRAR LOS DATOS'
                                return(
                                    <UpdateStudent 
                                    _id
                                    student={data.getStudent}
                                    title= 'Editar Estudiante'
                                    error={errorMSG} 
                                    disabled={loading} 
                                    onSubmit={handleSubmit} />
                                )  
                           }
                      }
                    </UpdateStudentMutation>
                    )
                    
                  }
                }
             </Query>

            
       </Fragment>
 }

}
export default EditStudet;