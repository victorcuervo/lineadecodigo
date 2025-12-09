---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NH5BLEG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzuz7uYtbbBUSRLCpmUgA2kDIMvJoBRl69ccB0k%2FTauQIhAMbDTK50yNThVuz%2BBjc6snpZslkStnCO%2BynTpVRaBo9lKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmhE8vWRn723VUs9oq3APLrVH2sigE0be8a%2F55C5miQb46sRwI5wy%2FGfUarVK%2F%2B7gRvf00D07V0bsFzXHJpSl7PGQWEg2DWDKblbGsj1MUBvibxTibjELavngi0mlT%2BN2m%2F%2FuvzGH44q3o3gflMuz7zTp9d2ZGVcfOUsH6KUOs87jjcttsy8jG6h5KzkySoLxg%2B0D9L6%2BCAmCPkX0k3%2F2YnnT0FFAyET9u2GT0gcvy2cJ1%2Bj6B7z8324%2FGBGEAYkabBByR%2BJNVo9LqOr0JRGZcdQoxK2A3eArh6L9haW%2B%2BNVlWpiL6acnJkjOPiX1fP0REyDNsTb4XrIdZToPJJANFqcD54fb8yg4GiMzkusEwU5LMFDTiBrsXlZZrQnIne2zhed2myR3UgM7AmXe%2FMlLMHmYC%2Foy60x1vLPEeOigBsrvG46wty6qd1QIheMVW6Pxpe5gzIhnmdbW8K2vWmWcz1aCMzFtmNgUqU4KvLjUlvBDrOIcwpiDGwqe9nrLuJ1qAH2dJB9jBDUdaM5YVGaBquaSHAe3uCyY%2BacTbEXQRgvzlDoHF4MxJjl8H84AbgRtLGIxgVuufsWfOAeQEQiT4H85bzkKoZsGsj6SO%2FMXtiBwOILi4iVaBG79k%2F1eziuV9PPiMW47PLPIeGTDepN%2FJBjqkAXZy1QHpHJUqyhXPl29xye98RB4GiLSqiNNHQL6uQe1jkqvawXPoXgwkXWUdyTxbPof%2BlZTnO%2F%2FCyG6UGagtiFRTi1pyiA8wLNo6MP6WN0CCzgw%2FOfOugysTl3%2B9VpcwNJ9lWp3G0ro4wlly%2BFhr6Z%2BZW6QkNBXcn7tNlH8AgfiEasJDJXPSxBsBCMppbp36p2xARARHT4gmExsQlS6bgzgFo1Ec&X-Amz-Signature=c12e05f80bd2ac239ed080d1f19ada90e0472f533014e640e78a9a28b3ff8755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NH5BLEG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzuz7uYtbbBUSRLCpmUgA2kDIMvJoBRl69ccB0k%2FTauQIhAMbDTK50yNThVuz%2BBjc6snpZslkStnCO%2BynTpVRaBo9lKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmhE8vWRn723VUs9oq3APLrVH2sigE0be8a%2F55C5miQb46sRwI5wy%2FGfUarVK%2F%2B7gRvf00D07V0bsFzXHJpSl7PGQWEg2DWDKblbGsj1MUBvibxTibjELavngi0mlT%2BN2m%2F%2FuvzGH44q3o3gflMuz7zTp9d2ZGVcfOUsH6KUOs87jjcttsy8jG6h5KzkySoLxg%2B0D9L6%2BCAmCPkX0k3%2F2YnnT0FFAyET9u2GT0gcvy2cJ1%2Bj6B7z8324%2FGBGEAYkabBByR%2BJNVo9LqOr0JRGZcdQoxK2A3eArh6L9haW%2B%2BNVlWpiL6acnJkjOPiX1fP0REyDNsTb4XrIdZToPJJANFqcD54fb8yg4GiMzkusEwU5LMFDTiBrsXlZZrQnIne2zhed2myR3UgM7AmXe%2FMlLMHmYC%2Foy60x1vLPEeOigBsrvG46wty6qd1QIheMVW6Pxpe5gzIhnmdbW8K2vWmWcz1aCMzFtmNgUqU4KvLjUlvBDrOIcwpiDGwqe9nrLuJ1qAH2dJB9jBDUdaM5YVGaBquaSHAe3uCyY%2BacTbEXQRgvzlDoHF4MxJjl8H84AbgRtLGIxgVuufsWfOAeQEQiT4H85bzkKoZsGsj6SO%2FMXtiBwOILi4iVaBG79k%2F1eziuV9PPiMW47PLPIeGTDepN%2FJBjqkAXZy1QHpHJUqyhXPl29xye98RB4GiLSqiNNHQL6uQe1jkqvawXPoXgwkXWUdyTxbPof%2BlZTnO%2F%2FCyG6UGagtiFRTi1pyiA8wLNo6MP6WN0CCzgw%2FOfOugysTl3%2B9VpcwNJ9lWp3G0ro4wlly%2BFhr6Z%2BZW6QkNBXcn7tNlH8AgfiEasJDJXPSxBsBCMppbp36p2xARARHT4gmExsQlS6bgzgFo1Ec&X-Amz-Signature=e60d7c8917d39c327391651b017330ce825605de59449d371a02ff85329c3766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

