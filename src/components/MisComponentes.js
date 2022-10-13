const MisComponentes = (props) => {
//    console.log(props)
//    return (
//        <h1>El precio es de {props.value} pesos</h1>
//    )


    const task = new Promise (( resolve, rejet) => {
        rejet('Error: los datos no se encuentran :P')
        setTimeout(() => {
        resolve(true)
        },6000) // el true aparecera a los 6 segundos
    })
    console.log(task);

    task
        .then((result) => {
            console.log(result);
        })
        .catch((error) =>{
            console.warn(error);
        })
        .finally(() => {
            console.log('Promesa finalizada :D')
        })
};



export default MisComponentes;
