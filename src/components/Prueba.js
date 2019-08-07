import React, {Fragment} from 'react';
import { Query } from 'react-apollo';
import {GETSTUDENTS_QUERY} from '../queries/index'

const Prueba = () => (
    <Query query={GETSTUDENTS_QUERY} >
        {({loading, error, data}) => {
            if (loading) return "cargando"
            if (error) return `error: ${error.message}`;
            console.log(data);
            return(
                <Fragment>
                    <div className="table-resposive">
                        <table className="table mt-4">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">Número de control</th>
                                <th scope="col">Nombre del alumno</th>
                                <th scope="col">Carrera</th>
                                <th scope="col">Correo electrónico</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Estilo de aprendizaje</th>
                                <th scope="col">Domicilio</th>
                                <th scope="col">status</th>
                            
                            </tr>
                            </thead>
                            <tbody>
                            {data.getStudents.map(i => (
                                <tr>
                                    <th scope="row">{i.numero_control}</th>
                                    <td>{i.nombres} {i.apellido_paterno} {i.apellido_materno} </td>
                                    <td>{i.carrera}</td>
                                    <td>{i.correo_electronico}</td>
                                    <td>{i.telefono}</td>
                                    <td>{i.estilo_aprendizaje}</td>
                                    <td>{i.domicilio.calle}</td>
                                    <td>{i.status}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Fragment>
            )
        }}
    </Query>
)

export default Prueba;