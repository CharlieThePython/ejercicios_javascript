/*
Dado el siguiente objeto que representa un punto en coordenadas,
utiliza la desestructuración para extraer las propiedades x y y
en variables separadas y calcula la distancia euclidiana desde el origen (0,0).
*/

const punto = {
    x: 3,
    y: 4,
  };

  //Desestructuración
  const {x,y} = punto;

  function euclideanDistance(punto1, punto2) {
    // punto1 y punto2 deben ser objetos con propiedades x e y
    const dx = punto2.x - punto1.x;
    const dy = punto2.y - punto1.y;
  
    // Aplicar la fórmula de distancia euclidiana
    const distancia = Math.sqrt(dx * dx + dy * dy);
  
    return distancia;
  }

  const puntoA = {x:0,y:0};
  const puntoB = {x,y};


  console.log(`La distancia entre los dos puntos es ${euclideanDistance(puntoA,puntoB)}`);
