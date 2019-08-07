import React, {Fragment}from 'react';
import { useInputValue } from '../../hok/InputValue'

export const StudentRegistrer = ({disabled, error,onSubmit, title}) => {
//estado inicial
const nombres = useInputValue('');
const apellido_paterno = useInputValue('');
const apellido_materno = useInputValue('');
const numero_control = useInputValue('');
const telefono = useInputValue(''); 
const carrera = useInputValue('');
const correo_electronico = useInputValue('');
const estilo_aprendizaje  = useInputValue('');

//control
const handleSubmit = e =>{
    e.preventDefault();
    onSubmit({ 
        nombres: nombres.value,
        apellido_paterno: apellido_paterno.value,
        apellido_materno: apellido_materno.value,
        numero_control: numero_control.value,
        telefono: telefono.value,
        carrera: carrera.value,
        correo_electronico: correo_electronico.value,
        estilo_aprendizaje: estilo_aprendizaje.value
    })
    
}
    
return <Fragment>   
            <h2 className="text-center">{title} </h2>
                <div className="row justify-content-center">
                    <form className="col-xl-10 m-3" onSubmit={handleSubmit} disabled={disabled} >
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>Nombres</label>
                                <input type="text"  className="form-control" placeholder="Nombre(s)" {...nombres} />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Apellido Paterno</label>
                                <input type="text"  className="form-control" placeholder="Apellido Paterno" {...apellido_paterno} />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Apellido Materno</label>
                                <input type="text" className="form-control" placeholder="Apellido Materno" {...apellido_materno}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>Número de control</label>
                                <input type="text"  className="form-control" placeholder="Número de control" {...numero_control} />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Teléfono</label>
                                <input type="number" className="form-control" placeholder="Teléfono" {...telefono} />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Carrera</label>
                                <select className="form-control" {...carrera} >
                                    <option value="">Elegir...</option>
                                    <option value="CONTADOR">Contador Publico</option>
                                    <option value="CIVIL">Ingenieria Civil</option>
                                    <option value="ELECTRICA">Ingenieria Electrica</option>
                                    <option value="Electromecanica">Ingenieria Electromecanica</option>
                                    <option value="GESTION">Ingenieria en Gestion Empresarial</option>
                                    <option value="SISTEMAS">Ingenieria en Sistemas Computacionales</option>
                                    <option value="INDUSTRIAL">Ingenieria Industrial</option>
                                    <option value="INFORMTICA">Ingenieria Informatica</option>
                                    <option value="MECANICA">Ingenieria Mecanica</option>
                                    <option value="MECATRONICA">Ingenieria Mecatronica</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Correo Electronico</label>
                                <input type="email" className="form-control" placeholder="Email" {...correo_electronico} />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Estilo de aprendizaje</label>
                                <select className="form-control" {...estilo_aprendizaje} >
                                    <option value="">Elegir...</option>
                                    <option value="VISUAL">VISUAL</option>
                                    <option value="AUDITIVO">AUDITIVO</option>
                                    <option value="KINESTESICO">KINESTÉSICO</option>
                                    <option value="LECTURA_ESCRITURA">LECTURA-ESCRITURA</option>
                                    <option value="MULTIMODAL">MULTIMODAL</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger float-right"> Guardar Cambios</button>
                    </form>
                    {error && <span>{error}</span>}
                </div>
           </Fragment>


}