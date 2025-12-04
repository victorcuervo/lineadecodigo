---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PVSTGH7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCad8FbHFugFVp049SBpciM6WJ%2FADvvlcFOOQF4p60dCgIhAKla52QtTz25J7TR%2FHk357diwNPfR6M2y7QI3bhOL5FSKv8DCDsQABoMNjM3NDIzMTgzODA1IgyluQXYDUBVGKBLES0q3APr9VgyMwMi3cULOziTsVQzgohEJogUs%2BUHLuH%2BI2E9C4aL5CndybaZGus5m996EabRnky8jovj6zvesYQQLH4fkLIR9IKEU6Aoe%2B9zQqVGUKF33Ckp5hFUubMlSFxRS3POKIsW0VVv5Ny7CnWVymEY4J4Wh%2F9sBd1VS9Pn8fJznNBaqgwpni4ciipH2%2BZTE2lhn0%2FKKdhTSwpKy1k56q1j6kg5uMsCpummndfW9kdCFwDImF%2FpeWCM7Gmc7kGyq5TSTS01%2F60%2BFyM7t2I5HJy9S7dsPZDIf7jBrNdyRwC5RHiyL1iM6ZmSNIv2krJe4ct809vE51caUPflldIkcbaVA88ltz6Z3cVQNxNMiloZbGwxnpTZBxDTQE1gqNW0iflQzrairDrGqQBKgc7HZ%2FwA4soO24kSycsYKQx4YgYtd%2Fu6UCYXt5WCNoXy8Mi8C5Nc6nSVzyoNqRSopFaVrP2cy60%2FFLkFhvdBU7UahN7tiaXAP4r2rTOhzVmXftVQGrddktcDeqW61o5ISR4%2FHeyVFThgHbI%2BB%2BHu1lN2a5lBKOxGZ2NyEJI4ip0mrlCqEEZeFFNQoSJgus%2BfNBao2NN29yy9NCSjj9zH83vab3Wm31aESSQbenayy9sL1zC11MPJBjqkAXlP2u73qbaBxGivRG612yUA1G6esTjfm9%2BKZKHq6guk7vuGrvOZGgf9d46uUm2ATxoovBi7WWQ9UEVOGUbMnnH3CbHtKqclSo2BMzB9WU1ZexarxciWSGFHOqHOt4fFa5gTHVjjsApZZSR65cGoPQ2nDieObJwpmjjbXN7bNJra6GNXsKwXfSnnku4DovNE22NibLDnGnLAUqmHvlsnUEgLET8x&X-Amz-Signature=a99debbf02d302d67c504a3b9582d17dd887d51ea33c5ee536b44acfea593251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PVSTGH7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCad8FbHFugFVp049SBpciM6WJ%2FADvvlcFOOQF4p60dCgIhAKla52QtTz25J7TR%2FHk357diwNPfR6M2y7QI3bhOL5FSKv8DCDsQABoMNjM3NDIzMTgzODA1IgyluQXYDUBVGKBLES0q3APr9VgyMwMi3cULOziTsVQzgohEJogUs%2BUHLuH%2BI2E9C4aL5CndybaZGus5m996EabRnky8jovj6zvesYQQLH4fkLIR9IKEU6Aoe%2B9zQqVGUKF33Ckp5hFUubMlSFxRS3POKIsW0VVv5Ny7CnWVymEY4J4Wh%2F9sBd1VS9Pn8fJznNBaqgwpni4ciipH2%2BZTE2lhn0%2FKKdhTSwpKy1k56q1j6kg5uMsCpummndfW9kdCFwDImF%2FpeWCM7Gmc7kGyq5TSTS01%2F60%2BFyM7t2I5HJy9S7dsPZDIf7jBrNdyRwC5RHiyL1iM6ZmSNIv2krJe4ct809vE51caUPflldIkcbaVA88ltz6Z3cVQNxNMiloZbGwxnpTZBxDTQE1gqNW0iflQzrairDrGqQBKgc7HZ%2FwA4soO24kSycsYKQx4YgYtd%2Fu6UCYXt5WCNoXy8Mi8C5Nc6nSVzyoNqRSopFaVrP2cy60%2FFLkFhvdBU7UahN7tiaXAP4r2rTOhzVmXftVQGrddktcDeqW61o5ISR4%2FHeyVFThgHbI%2BB%2BHu1lN2a5lBKOxGZ2NyEJI4ip0mrlCqEEZeFFNQoSJgus%2BfNBao2NN29yy9NCSjj9zH83vab3Wm31aESSQbenayy9sL1zC11MPJBjqkAXlP2u73qbaBxGivRG612yUA1G6esTjfm9%2BKZKHq6guk7vuGrvOZGgf9d46uUm2ATxoovBi7WWQ9UEVOGUbMnnH3CbHtKqclSo2BMzB9WU1ZexarxciWSGFHOqHOt4fFa5gTHVjjsApZZSR65cGoPQ2nDieObJwpmjjbXN7bNJra6GNXsKwXfSnnku4DovNE22NibLDnGnLAUqmHvlsnUEgLET8x&X-Amz-Signature=afed1a61ca255ac52a99813389eb781b7ab7f018aec041fffd7cb0f00dd13fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

