---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRKSN2K7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICIEpejRfl%2F%2FSA%2F%2BiYTKg0Pnkn%2Fubb9UKxA0GWfYWoXBAiAZxeJqMRQ8kweMqfPIl3VKCfe5HsNy5LlfNVu4GCw%2BgSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMtpnHj37ml62faDHGKtwDHJ%2Fx9JKmW0xdRli8xrnG2Z27ipkFz4k3mvoSmLIIXtEB2V8%2FkNCYhhJ0g2AZ8941sO2s5aFDzbpbEhLQRR%2Bb09xJm8x6DKQBZgbHKlvhGPa8DwOpQOsVmNlgujRP4QDL7t1a1Gb62%2FLFTHGgVnWsSRZ9cWlv85gRR7v66Jhj7mJUuj%2BQbC5POggCIY5HlHkUJCELx0zPZyOx199zYnCrrZ4oMeZAlLGMaYES8yYbnPVf5fhu9BDt8yWB7kpY8IU7WvUhYq8kT2xbZwPrxJyUU6l8PNRHFg080SM9o%2BNerE2zieehyLMmwVjY%2BjIN4drmK7n6%2B8M%2FXOLZVw0s4YeVZwww1cYP3AXL3zuwnQNIynVUoGHk%2FvKggitW6VseKcYfpWuQ5awjH5xualYEqwLV3LF4oJ1gHP8h1i8Jnwmaxr%2FQH3yfd2165fKU1g6e%2FddbecjDNYtPZTbmsmYtqWsGTUV2ruv%2BifQcHm6wep0tVqzJWyRD%2FcrIwcjnHgUNXmqdgBZwLHIxnmGgF%2BGavFrtJTBWwuKAd5SkIm0KTJgN1H47RJzg3uZ%2Bvr5i1TqpJDq3ezfZmvRDwSBHR%2BlEWGBey2p6OnFv0zQ0ANv%2BoNQKB80qS7GLCwKYsKMobF0w%2BMjFyQY6pgHQKCWya%2FkKUH4qLjKMxZscMMw2jVSGGKh2c4bba%2BB9vygOw5IIy6pK4%2FWWOSghygGMkkpGmaKu72WYOHcaQhd5MoAZop9BSsb7bOdGrpI81I4Bjen83QJ%2FH%2FRadbPiYDT5spUbccV5Y%2FLGKEZ%2Fqa1urfjugigQSD9Qdw5GQA3aJvOcIMlR5XSwMr9V4s2A3mFEkTGc5ZeAO7QfJ68FTQedNsuwyMZt&X-Amz-Signature=268d9c64ce2128976e0d7a1cd95788f309866eb44bbf1d6376e757a877b68163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRKSN2K7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICIEpejRfl%2F%2FSA%2F%2BiYTKg0Pnkn%2Fubb9UKxA0GWfYWoXBAiAZxeJqMRQ8kweMqfPIl3VKCfe5HsNy5LlfNVu4GCw%2BgSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMtpnHj37ml62faDHGKtwDHJ%2Fx9JKmW0xdRli8xrnG2Z27ipkFz4k3mvoSmLIIXtEB2V8%2FkNCYhhJ0g2AZ8941sO2s5aFDzbpbEhLQRR%2Bb09xJm8x6DKQBZgbHKlvhGPa8DwOpQOsVmNlgujRP4QDL7t1a1Gb62%2FLFTHGgVnWsSRZ9cWlv85gRR7v66Jhj7mJUuj%2BQbC5POggCIY5HlHkUJCELx0zPZyOx199zYnCrrZ4oMeZAlLGMaYES8yYbnPVf5fhu9BDt8yWB7kpY8IU7WvUhYq8kT2xbZwPrxJyUU6l8PNRHFg080SM9o%2BNerE2zieehyLMmwVjY%2BjIN4drmK7n6%2B8M%2FXOLZVw0s4YeVZwww1cYP3AXL3zuwnQNIynVUoGHk%2FvKggitW6VseKcYfpWuQ5awjH5xualYEqwLV3LF4oJ1gHP8h1i8Jnwmaxr%2FQH3yfd2165fKU1g6e%2FddbecjDNYtPZTbmsmYtqWsGTUV2ruv%2BifQcHm6wep0tVqzJWyRD%2FcrIwcjnHgUNXmqdgBZwLHIxnmGgF%2BGavFrtJTBWwuKAd5SkIm0KTJgN1H47RJzg3uZ%2Bvr5i1TqpJDq3ezfZmvRDwSBHR%2BlEWGBey2p6OnFv0zQ0ANv%2BoNQKB80qS7GLCwKYsKMobF0w%2BMjFyQY6pgHQKCWya%2FkKUH4qLjKMxZscMMw2jVSGGKh2c4bba%2BB9vygOw5IIy6pK4%2FWWOSghygGMkkpGmaKu72WYOHcaQhd5MoAZop9BSsb7bOdGrpI81I4Bjen83QJ%2FH%2FRadbPiYDT5spUbccV5Y%2FLGKEZ%2Fqa1urfjugigQSD9Qdw5GQA3aJvOcIMlR5XSwMr9V4s2A3mFEkTGc5ZeAO7QfJ68FTQedNsuwyMZt&X-Amz-Signature=6abf8592e42241b197a037140075a721984f53b2b725430c27c15c197a7ae2f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

