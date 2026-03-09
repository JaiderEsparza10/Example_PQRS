let listaPqrs = [];
let contadorId = 1;

export function crear(datos){
    let nuevaPqrs = {
        id : contadorId,
        fecha : new Date(),
        ...datos
    };
    contadorId++;
    listaPqrs.push(nuevaPqrs);
    return nuevaPqrs;
}

export function verTodas(){
    return listaPqrs;
}

export function verUna(id){
    return listaPqrs.find(p => p.id == id);
}

export function actualizar(id, newDatos){
    let pqrs = verUna(id);
    if (pqrs){
        Object.assign(pqrs, newDatos);
        return pqrs;
    }
    return null;
}

export function eliminar(id){
    let indicePqrs = listaPqrs.findIndex(p => p.id == id);
    if (indicePqrs !== -1){
        listaPqrs.splice(indicePqrs, 1);
        return true;
    }
    return false;
}