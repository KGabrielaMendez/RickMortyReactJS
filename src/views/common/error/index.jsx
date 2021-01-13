const ErrorComponent = ({ error }) => {
    return(
        <div>
        <p>Ups! Algo falló al traer las películas</p>
        <p>{error}</p>
        </div>
   )
    };

export default ErrorComponent;