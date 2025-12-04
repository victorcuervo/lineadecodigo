---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCJKQRX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzuRZ53%2B8euLy9rY0y9AcgiL8LwJZsyjm%2FXYeFr9us5AIhAMmMaTlLNu1EJm6LgnxDN4l78P7SiYhhVw0h8KYfi3vBKv8DCE8QABoMNjM3NDIzMTgzODA1IgzZAMS0lhMRvlKvSMIq3ANoEGnBquVqHi4q%2F1Vfc3pjzoCCBm%2BlbIcmPoqtp2JHXNfD2BzVQ9pg3OEgXZOgTBu4Z6VljK5dbA9eyZz5WZrKh76gpao%2FeMWthGcZNEuLFFyoUg7IDtR%2B0WskJWOilrtsKsXsxR%2F5AuNQuGsWQdqfKZTpMcXKAf83xu3T4%2FKhMyvA%2Bc881LIlTMfCa5M1XBgKWvuh2%2FqYKPVjIbSujrvtfS%2BX5SIu6EyauqGg%2BqIkqefFf1LG1x%2BQbgoPTEPNbxunhzfqBXBXhe2tn%2Fqps5gB%2B5y2wFWdibjNR%2BbB6hoKN1H2hkIgxMXuvuUQwVWKG1uLF%2Ft3NI3y2Ts6%2BN6T%2FymWEaTjQe7GGCEe2sqJ8V055m%2BJuVGSOBx3vBmgeUkvxN15s1xLCgSgrL7emMzMAEl9xHkXmBDPjWVEsF4WkQ3tBq2VdExwSxISG4wQWfVuEKi9zpmhZOqEIl10kiXzY5oqAih6jZRxLq5w2nexdGg6APL8QBzEhvZg0LpiHIBFYgSparUsyuNryS9eEtKdm%2B6u64cLQYxHenZRRpOFgRn3Maqb%2BNu%2FhDz378gwxmTet5N5uFyEXK1fWC6RVFseso53YczCNgt5cg8qmzHKM5BERi9yLo%2BClxYmnP1uPzDgjMjJBjqkAfjgMyM8DP%2BIXjxAFtAjcqpMGyjF94YgyFKFpGUSLEwiC6OzbStP6Se35Dzj5h91NSYEdv8YRio%2FWR%2FvI6IkDx%2Ffn%2B4Db5Aml%2FeBzcYZi2LFpZV%2Fe81%2Bv%2FaCZ%2FZhbcKMmxrfrLDeLMVH76aEhOtbTD0QbkvBTyvIkax1YT847O29arV1bBdiqB7QCrDRTxBtlTBJF6EYaq8bHPEcVZGkJh6r2OGU&X-Amz-Signature=d70680e924ed3dc4324add223b97d7228313045e401dfc185d9737c23b8b6f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCJKQRX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzuRZ53%2B8euLy9rY0y9AcgiL8LwJZsyjm%2FXYeFr9us5AIhAMmMaTlLNu1EJm6LgnxDN4l78P7SiYhhVw0h8KYfi3vBKv8DCE8QABoMNjM3NDIzMTgzODA1IgzZAMS0lhMRvlKvSMIq3ANoEGnBquVqHi4q%2F1Vfc3pjzoCCBm%2BlbIcmPoqtp2JHXNfD2BzVQ9pg3OEgXZOgTBu4Z6VljK5dbA9eyZz5WZrKh76gpao%2FeMWthGcZNEuLFFyoUg7IDtR%2B0WskJWOilrtsKsXsxR%2F5AuNQuGsWQdqfKZTpMcXKAf83xu3T4%2FKhMyvA%2Bc881LIlTMfCa5M1XBgKWvuh2%2FqYKPVjIbSujrvtfS%2BX5SIu6EyauqGg%2BqIkqefFf1LG1x%2BQbgoPTEPNbxunhzfqBXBXhe2tn%2Fqps5gB%2B5y2wFWdibjNR%2BbB6hoKN1H2hkIgxMXuvuUQwVWKG1uLF%2Ft3NI3y2Ts6%2BN6T%2FymWEaTjQe7GGCEe2sqJ8V055m%2BJuVGSOBx3vBmgeUkvxN15s1xLCgSgrL7emMzMAEl9xHkXmBDPjWVEsF4WkQ3tBq2VdExwSxISG4wQWfVuEKi9zpmhZOqEIl10kiXzY5oqAih6jZRxLq5w2nexdGg6APL8QBzEhvZg0LpiHIBFYgSparUsyuNryS9eEtKdm%2B6u64cLQYxHenZRRpOFgRn3Maqb%2BNu%2FhDz378gwxmTet5N5uFyEXK1fWC6RVFseso53YczCNgt5cg8qmzHKM5BERi9yLo%2BClxYmnP1uPzDgjMjJBjqkAfjgMyM8DP%2BIXjxAFtAjcqpMGyjF94YgyFKFpGUSLEwiC6OzbStP6Se35Dzj5h91NSYEdv8YRio%2FWR%2FvI6IkDx%2Ffn%2B4Db5Aml%2FeBzcYZi2LFpZV%2Fe81%2Bv%2FaCZ%2FZhbcKMmxrfrLDeLMVH76aEhOtbTD0QbkvBTyvIkax1YT847O29arV1bBdiqB7QCrDRTxBtlTBJF6EYaq8bHPEcVZGkJh6r2OGU&X-Amz-Signature=746bed9aa2d7954bb6a2d824d41ae3066920542bd54fd95d3ac4954e0116988f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

