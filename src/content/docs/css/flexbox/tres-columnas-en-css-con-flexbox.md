---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACYRUJY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJoOibcPrvDAlBYIGbP31RnihchiCi5OujmL2EvGrESAiAnO%2BXvz66U22uOetb3Z3xIXSTDy8J4%2FkXKgVNSR7k7Nyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMyIeHuVisF5K9nlFIKtwD9NO8VbZa24OY9qq31c%2FxSdgZ6sv9UF6G7DGvxgA8aKZam8nXkbP916njLGKbawiv0kx7aktjFfMaRxNeB4b9TBno%2B0hC7V15u3mHfVQp%2BlBUWjbqPmp7XaC2PB%2B20NYHMWbC2kzD4KFkrtuk5IWFw2iaTJ1tp6YnUVr%2F1%2Fs%2FweSkPLWjCP0R%2F%2FOxUgn236Sb8shi6Yh5xF2lV7Bv%2BXqf6QfCcYo1vf%2FdLeGKdQT8vF1lkxtzJTpHTGceM20igMBlzwpXa3V8OCu%2BnBK%2FUS8eRObT6gcDLB%2BVMD%2Bu8YOB%2FPUJbpTNIRy2NZr9MqZAnezrIar0f4VJTkZ%2Br%2FIWDPOOXjAx1O1sVgNlAK048nMU4KMTOigEtFv7jwxBuZBgPxInfKIx%2BXGV4jMeojLolzTXN9inbaPBx8af%2BaRqXpY7H6q6OUfP5c%2B82V6%2Fkwi7bpCw37tpBcw3RBOkt2xuyweuUndFD74i1jRYcx03ylqMzLsmQiIGbBW50QmLSKbOoJt2f%2BZFaL7zVOMskqD5qWB4QEjch5Vz45J1s05bt3WQTodJjpyYX2UMV75PPWdxNtoQvm%2ByT%2B6we8n8UcTlvjrPvyNPzTahzcjvU9oovHi31H7q9N6ZdUxJACL9WzQwnejLyQY6pgHKjoo90ugoGBeruJT9ZRBdxY0Xiefez%2BUlpHlMvaabz1uDE%2BWx8RIv5Lo%2FZGpBBO7IYUIAH7gGmoDR%2B5knIwfbcG4uIVP3J344UbhVnpYgy3ceGSrEWNix%2Ba4SshISmadC4rDNy2b3gA7xbds9qla0aNUnRG5Nk68wCLo%2FVmovE7Dy00AUbPOl71oADM6HhGNBWZQn%2BYHOsGsO9c%2B0JYPpIcdONF%2FW&X-Amz-Signature=995d6f461ac289db2096a18c5b91332bd3d0edeeeccca2fc0b9c23edd6b02c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACYRUJY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJoOibcPrvDAlBYIGbP31RnihchiCi5OujmL2EvGrESAiAnO%2BXvz66U22uOetb3Z3xIXSTDy8J4%2FkXKgVNSR7k7Nyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMyIeHuVisF5K9nlFIKtwD9NO8VbZa24OY9qq31c%2FxSdgZ6sv9UF6G7DGvxgA8aKZam8nXkbP916njLGKbawiv0kx7aktjFfMaRxNeB4b9TBno%2B0hC7V15u3mHfVQp%2BlBUWjbqPmp7XaC2PB%2B20NYHMWbC2kzD4KFkrtuk5IWFw2iaTJ1tp6YnUVr%2F1%2Fs%2FweSkPLWjCP0R%2F%2FOxUgn236Sb8shi6Yh5xF2lV7Bv%2BXqf6QfCcYo1vf%2FdLeGKdQT8vF1lkxtzJTpHTGceM20igMBlzwpXa3V8OCu%2BnBK%2FUS8eRObT6gcDLB%2BVMD%2Bu8YOB%2FPUJbpTNIRy2NZr9MqZAnezrIar0f4VJTkZ%2Br%2FIWDPOOXjAx1O1sVgNlAK048nMU4KMTOigEtFv7jwxBuZBgPxInfKIx%2BXGV4jMeojLolzTXN9inbaPBx8af%2BaRqXpY7H6q6OUfP5c%2B82V6%2Fkwi7bpCw37tpBcw3RBOkt2xuyweuUndFD74i1jRYcx03ylqMzLsmQiIGbBW50QmLSKbOoJt2f%2BZFaL7zVOMskqD5qWB4QEjch5Vz45J1s05bt3WQTodJjpyYX2UMV75PPWdxNtoQvm%2ByT%2B6we8n8UcTlvjrPvyNPzTahzcjvU9oovHi31H7q9N6ZdUxJACL9WzQwnejLyQY6pgHKjoo90ugoGBeruJT9ZRBdxY0Xiefez%2BUlpHlMvaabz1uDE%2BWx8RIv5Lo%2FZGpBBO7IYUIAH7gGmoDR%2B5knIwfbcG4uIVP3J344UbhVnpYgy3ceGSrEWNix%2Ba4SshISmadC4rDNy2b3gA7xbds9qla0aNUnRG5Nk68wCLo%2FVmovE7Dy00AUbPOl71oADM6HhGNBWZQn%2BYHOsGsO9c%2B0JYPpIcdONF%2FW&X-Amz-Signature=7991ab61f1fcd6ce7ba9097443ba3f03bebdac3b5b1bbe2930aee25f54becbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

