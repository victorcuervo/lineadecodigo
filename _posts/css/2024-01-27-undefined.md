---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNO2CQ3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCICzTq%2F2K8HfwHiR960Sa4l%2FX9kF5PJFpNR7sxr%2FyANXRAiEA0N%2BRrDi6xzKWd%2BDG9tpY6VOUOxgJdqobTnEvZh9iGtgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPWXxoAZbrJ9psnzCircAygO0XkdNNVaDC14yOT8DwVbdlYZwpFmVC%2ByGhHn9TDzl2FJgSbib1zMc9vDwqXT4D1wDRoT1z%2Bfi0Ziqb3ZwoZo4abGBSh9DSP8MzjGsVltasaymcg3rIuzdSVgfUBvYRiNwJOB9aQ4T8DEe47iFGvbbOsqT7BIsAHE%2BNOMEifW6iiPhuyEz0UAGuQnQoLJSoWKeKt9dWNhFQnM9e3%2BHsTqbjmQmLAalqsFUMLlbajPGj5ui%2Fk8hnG86ieHtHQR5KgLq1Qy0OldrAPwjFGng4zQGkoneXzxIcP7rxb1ovSKN7k7UgnICwHMZ81ijqa6nzM2RfR3Xr%2F%2FE7v%2FydAAEjT9rHd9Z2obcEj%2FN6W9vvkCoSFlk1XosR3IC%2Fw41tdQSxfqo4u0ONz0oZXbdU3Mt7Mncs9yxcwfHzUr1DFwIDIoM7Y5f2SzV7hLwoFZwQc6%2FGHXsO65Kb%2F3rX6BYqeqAWzmgsyNHJ9UgHxKszZx0wEfcIfgMrkhcBHokYx%2FaF869a9srw2c6%2F78EdhXLSuz7uIe8ypa%2FNh9i0GzySj%2Fdnp6ktEi85BatkUoZWS%2FA52GwiQtCHNPFKY5%2B%2BPCPfrOaNwrC3Qb%2BCKwdxWfhYiURQ24gqnANlt2TqbH3jBwMKC6v8kGOqUBcXU4y%2Bpq1NpJ9nvVWBwG8nwler5xQi4CFQdyKx%2FC3QJ3aGRZ99LlkyWjs7o4bDGuTGnBKfXeMI3AmpBa0%2F4xJQ1fdoJ5JZCPziVjZOs286VIPHlk9FW2rfRoa0MaBiT3teDvTwocm1NVSBVEZk7B0lQocueAQhVVem%2BKK0fnYhb3BcTRUjZfdmABP%2FWthgesITRVA4D%2FCsbbuQvdVMaekEyGbN%2B4&X-Amz-Signature=6df847a241770e2455d4410f278f70602fe786cb488675663ae8bb58f09c51a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNO2CQ3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCICzTq%2F2K8HfwHiR960Sa4l%2FX9kF5PJFpNR7sxr%2FyANXRAiEA0N%2BRrDi6xzKWd%2BDG9tpY6VOUOxgJdqobTnEvZh9iGtgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPWXxoAZbrJ9psnzCircAygO0XkdNNVaDC14yOT8DwVbdlYZwpFmVC%2ByGhHn9TDzl2FJgSbib1zMc9vDwqXT4D1wDRoT1z%2Bfi0Ziqb3ZwoZo4abGBSh9DSP8MzjGsVltasaymcg3rIuzdSVgfUBvYRiNwJOB9aQ4T8DEe47iFGvbbOsqT7BIsAHE%2BNOMEifW6iiPhuyEz0UAGuQnQoLJSoWKeKt9dWNhFQnM9e3%2BHsTqbjmQmLAalqsFUMLlbajPGj5ui%2Fk8hnG86ieHtHQR5KgLq1Qy0OldrAPwjFGng4zQGkoneXzxIcP7rxb1ovSKN7k7UgnICwHMZ81ijqa6nzM2RfR3Xr%2F%2FE7v%2FydAAEjT9rHd9Z2obcEj%2FN6W9vvkCoSFlk1XosR3IC%2Fw41tdQSxfqo4u0ONz0oZXbdU3Mt7Mncs9yxcwfHzUr1DFwIDIoM7Y5f2SzV7hLwoFZwQc6%2FGHXsO65Kb%2F3rX6BYqeqAWzmgsyNHJ9UgHxKszZx0wEfcIfgMrkhcBHokYx%2FaF869a9srw2c6%2F78EdhXLSuz7uIe8ypa%2FNh9i0GzySj%2Fdnp6ktEi85BatkUoZWS%2FA52GwiQtCHNPFKY5%2B%2BPCPfrOaNwrC3Qb%2BCKwdxWfhYiURQ24gqnANlt2TqbH3jBwMKC6v8kGOqUBcXU4y%2Bpq1NpJ9nvVWBwG8nwler5xQi4CFQdyKx%2FC3QJ3aGRZ99LlkyWjs7o4bDGuTGnBKfXeMI3AmpBa0%2F4xJQ1fdoJ5JZCPziVjZOs286VIPHlk9FW2rfRoa0MaBiT3teDvTwocm1NVSBVEZk7B0lQocueAQhVVem%2BKK0fnYhb3BcTRUjZfdmABP%2FWthgesITRVA4D%2FCsbbuQvdVMaekEyGbN%2B4&X-Amz-Signature=a4710cd4bb2dbdddf503bcee672165e014695c162d1c3e1a6a7404add03929d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

