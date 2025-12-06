---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WRFVEJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwU7n4h8GB34dVME0gtExI9ELO4k0JVN66%2BmsvPhXTdwIgZy1fbW9NMZU%2Bzwt8iGtQV4gqShj1pbo6QpShlHsnNo8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBAxTFJaGxlyefdStSrcA3be%2FRl7ZdQd19IFf1NXqdtxNPL3%2FRpTJdGxUV5KKiSlF4mW1KXFYGwVorVWz07wQXJWjRfBqEE1xOT0KQOriJezqhJzUaPXolZsvCg6PLqEdX7cdLAE5N5LPKHaur7tdJAJUz%2B9wNLyWgFu7Nrk6tRY7lvLhYC8NiKbjJalgFsoW8l4%2BP72FB%2BkEExvvxtZA0ABNiJoHF%2B5ij38DK%2FVMp7f0P8MTmup1CVcOAEdCq0BNXLfHOTlxcoXjjTUxFlNu3VnZVw8ZfI7CC9YCWVfAO5yR6%2Fu5t8T%2BP8Xz4Q4Rqpr7m%2FF%2BBdR9sb%2FxufMsueL0wj%2BWu0g1y1rj6YUX0ARHFcCZv%2BrWhFglT2rHOBpS6fdXdRrjYTFCeyMf%2FfynBEc%2BeCm7UXl6Rj3YG4L4IzFOaLbmQhCQFYQqDEsqQ3vG%2FrY0j8Z90h9640TqALx7Ulehlq45t3x9bZNOjDRcVvNRF0PCHX6vE2cYcXnOG8oKXL2kwbTqOzDfllHFXy3vDk8zZgtr4HVRiAARDgrpTBBayx5jnyeIkC6puf64YKbIE0yWSTH9FMZ9%2F5fOHU9IjRwyLaeCpAVPO6GeB9qe05sQ0eRNW%2B2710iJlMCUSGXKiaUjxYwrXwURjpvWW3SMLXF0ckGOqUBYEuh5OsvCAelry7KXF2ZtX8BcEP%2Fki%2Fjv5Vz%2BbDH7FuXAr9TfHWSl0qJsGXoVfwdichpTfhQ%2FeYDY4NCwrIpVocoew1pYSmhX6H8g4v404RmmyrDHC3zKdvLqdRlTVbxdojXsBszggQujFI4tPss4dIvx2y2seaTjpqlX2Nn3JDNUnCKNo43qwfNSBGN5M8jj4rCvVcOUTZVU9hbW%2BynnMDcqT2p&X-Amz-Signature=3dd52c3c69b88adaa851c104b6d0f96972508f7bcf1577aaf5bb365ce8b9fa6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WRFVEJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwU7n4h8GB34dVME0gtExI9ELO4k0JVN66%2BmsvPhXTdwIgZy1fbW9NMZU%2Bzwt8iGtQV4gqShj1pbo6QpShlHsnNo8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBAxTFJaGxlyefdStSrcA3be%2FRl7ZdQd19IFf1NXqdtxNPL3%2FRpTJdGxUV5KKiSlF4mW1KXFYGwVorVWz07wQXJWjRfBqEE1xOT0KQOriJezqhJzUaPXolZsvCg6PLqEdX7cdLAE5N5LPKHaur7tdJAJUz%2B9wNLyWgFu7Nrk6tRY7lvLhYC8NiKbjJalgFsoW8l4%2BP72FB%2BkEExvvxtZA0ABNiJoHF%2B5ij38DK%2FVMp7f0P8MTmup1CVcOAEdCq0BNXLfHOTlxcoXjjTUxFlNu3VnZVw8ZfI7CC9YCWVfAO5yR6%2Fu5t8T%2BP8Xz4Q4Rqpr7m%2FF%2BBdR9sb%2FxufMsueL0wj%2BWu0g1y1rj6YUX0ARHFcCZv%2BrWhFglT2rHOBpS6fdXdRrjYTFCeyMf%2FfynBEc%2BeCm7UXl6Rj3YG4L4IzFOaLbmQhCQFYQqDEsqQ3vG%2FrY0j8Z90h9640TqALx7Ulehlq45t3x9bZNOjDRcVvNRF0PCHX6vE2cYcXnOG8oKXL2kwbTqOzDfllHFXy3vDk8zZgtr4HVRiAARDgrpTBBayx5jnyeIkC6puf64YKbIE0yWSTH9FMZ9%2F5fOHU9IjRwyLaeCpAVPO6GeB9qe05sQ0eRNW%2B2710iJlMCUSGXKiaUjxYwrXwURjpvWW3SMLXF0ckGOqUBYEuh5OsvCAelry7KXF2ZtX8BcEP%2Fki%2Fjv5Vz%2BbDH7FuXAr9TfHWSl0qJsGXoVfwdichpTfhQ%2FeYDY4NCwrIpVocoew1pYSmhX6H8g4v404RmmyrDHC3zKdvLqdRlTVbxdojXsBszggQujFI4tPss4dIvx2y2seaTjpqlX2Nn3JDNUnCKNo43qwfNSBGN5M8jj4rCvVcOUTZVU9hbW%2BynnMDcqT2p&X-Amz-Signature=4126d29ce8b2914cc0a3e8a70f39c5d808aecbeebfafc6d715000533b7eb59fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

