import React from 'react'
import { useForm } from 'react-hook-form'

/*onSubmit es pasado por Form.index.js*/
function FormLayout({onSubmit, currentValues}) {
    const defaultValues = {
        ...currentValues,
        status: currentValues.status === 'Active',
      };

    /*hook facilitado por react-hook-form*/
    /* los consts siguientes son reservados de la libreria*/
    const {register, handleSubmit, reset} = useForm({
        defaultValues,
    });

    return (
        <div>
            {/* onSubmit es pasado por Form.index.js*/}
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* los nombre de los objetos deben dejarse en ingles 
            caso contrario no los interpreta el backend
            */}

            <p>
                    <input type="text" name="name" 
                    placeholder="nombres completos" ref={register}/>
                </p>
                <p>
                    <input type="email" name="email" 
                    placeholder="correo electronico" ref={register}/>
                </p>                
                <p>
                    <select name="gender" ref={register}>
                        <option value=""></option>
                        <option value="Male">Masculino</option>
                        <option value="Female">Femenino</option>                        
                    </select>
                </p>                
                <p>
                    <input type="checkbox" name="status" ref={register} />
                    <label>Activo?</label>
                </p>                
                <p>
                    <input type="submit" value="Enviar"/>
                    <button type="reset" onClick={() => reset()}>
                        Resetear</button>
                </p>
            </form>
        </div>
    )
}

export default FormLayout