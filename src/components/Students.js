import React, {Fragment} from 'react';
import { Query } from 'react-apollo';
import {GETSTUDENTS_QUERY} from '../queries/index'
import {Link} from 'react-router-dom';

const Estudiantes = () =>(
    <Query query={GETSTUDENTS_QUERY} >
        {({loading, error, data}) => {
            if (loading) return "cargando"
            if (error) return `error: ${error.message}`;
            console.log(data);
            return(
                <Fragment>
                  <h2 className="h2 text-center mt-4"> Listado de Estudiantes</h2>
                  <ul className="list-group mt-4">
                          {data.getStudents.map(item => (
                              <li key={item._id} className="list-group-item">
                                  <div className="row justify-content-between align-items-center">
                                      <div className="col-md-8 d-flex justify-content-between align-items-center">
                                          {item.nombres} {item.apellido_paterno} {item.apellido_materno} - {item.carrera}
                                      </div>
                                      <div className="col-md-4 d-flex justify-content-end ">
                                          <Link to={`/student/edit/${item._id}`} className="btn btn-success d-block d-md-inline-block">Editar estudiante</Link>
                                  </div>
                                  </div>
                              </li>
                          ))}
                  </ul>
                </Fragment>
              )
        }}
    </Query>
);

export default Estudiantes;