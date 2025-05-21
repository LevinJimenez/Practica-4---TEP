class Persona {
    nombre: string;
    fechaNacimiento: Date;
}

const listaPersonas: Persona[] = [{nombre: "Juan", fechaNacimiento: new Date("1990-01-01")}, 
    {nombre: "Pedro", fechaNacimiento: new Date("1985-05-15")}, 
    {nombre: "Maria", fechaNacimiento: new Date("2000-10-10")}, 
    {nombre: "Ana", fechaNacimiento: new Date("1995-07-20")}, 
    {nombre: "Luis", fechaNacimiento: new Date("1988-12-30")}, 
    {nombre: "Laura", fechaNacimiento: new Date("1992-03-25")}, 
    {nombre: "Carlos", fechaNacimiento: new Date("1980-11-11")}, 
    {nombre: "Sofia", fechaNacimiento: new Date("1998-08-08")}, 
    {nombre: "Javier", fechaNacimiento: new Date("1993-04-04")}, 
    {nombre: "Clara", fechaNacimiento: new Date("1987-09-09")}]; ;
    
function calculoEdadCallback(listaPersonas: Persona[], callback: (personaEdad : {nombre: string, edad: number}[]) => void): void {
    console.log("Calculando edades...");
    setTimeout(() => {
        const resultados: { nombre: string, edad: number }[] = [];
            for (let i = 0; i < listaPersonas.length; i++) {
                const fechaNacimiento = listaPersonas[i].fechaNacimiento;
                const fechaActual = new Date();
                let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                if (fechaActual.getMonth() < fechaNacimiento.getMonth() || (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) { 
                    edad--;
                }
                resultados.push({ nombre: listaPersonas[i].nombre, edad: edad });
            }
            callback(resultados);
        
    }, 3000);
}

function mostrarEdad(arrayPersonasConEdad): void {
    console.log("Cálculo completado. Edades:");
        arrayPersonasConEdad.forEach(personaConEdad => {
            console.log(`La edad de ${personaConEdad.nombre} es ${personaConEdad.edad} años.`);
        });
}

calculoEdadCallback(listaPersonas, mostrarEdad);