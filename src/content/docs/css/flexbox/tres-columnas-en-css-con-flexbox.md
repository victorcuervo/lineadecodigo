---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFU5AWG4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS1ExOwaLTidoYYkD%2FCNpC62S95fCHshX7O9FS6cjEGAiASPKij7PG9LUZEqAwkzNlh0j2ShGXgY3nK4GjKF922%2FCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMA3TFb25o6c2JlT8eKtwDsj8JB9UU496wMFIXaHj6Syhu4PuLH3etWFzIGbOIyApQleOkrrjP1BCB5110L3Lc%2BYuon%2BB7f1ZM35LWjFg4RnAKQSBWGzc6HTKbCy9EgdKvQmw3161bMbRI6fN22lIqDQQG0kLBrhGDJ5neBYiPjC%2F1OMF5K%2F6oJjRK5X%2FsNDhYFFyU7Eoh1aPITsoT2seCD7CgVxODzu4sKm%2FBLKuJNzsD65vFXVGHumFRDOFsvoHOGYQkmb5c8CDXOXz77lerOfdDI1DTtU08llJ6iczmLwugRPAUcBI2eGHjozUV%2BUZbyv5mPjbNc5J7dZ%2BhBMsoJ0n3MqcLeHX%2FaO14hYvwnJCfiz2GSGk6Dw%2Fujw9Z3R7NJ7czCBmO7EYYItCEpU4bhO9z9PO8JA0tN8%2F%2F9%2BXWSH9r0RRzCxAtGwbNNe8Ew7sObSxxE8Lxz8bkHEHXvsiG0IcQ%2BwXd9TIV07nTGKORDFdiMv5%2BqdjYXhb55kErrxeNqZmMhbMOLB50AKavJcb4Km%2Bat%2ByQfsbgM67RPzHL3c5uutzGSgmUkewaOLSEPD1%2BJ8id4Bzb0MchhSPlAClVSgOdawkLJ0qcxmCTyYwArEsAN692jFl6FcZJuKYy%2FG7YvS8Yfqg0FP9z%2FZMw%2F6bQyQY6pgG8DMHBbEZbWYKl9N1U4PVldiS4wAX2tUgNgHHkF4yyPvjY%2FphdEo%2BkeByuf6o%2Be%2FUDrUZ8BJqWh4nEPRF%2FnDt9RSjeaNI1aJLA3kXzeZjs7B3Eq3blN%2BVBKcH1LCLbvAkmVn38FFzq3QbHZlQu8sENvg26PAJkYVFbDoGbbb0GHbtMndV%2F4yiT3ec1Ssv7osAbbYD%2BFNQ5pqsblBS6SzAVVcr1pTlo&X-Amz-Signature=d6591ce95eb9152d2182979db1d3e2f99d473f1ccb69db58b44127186fb2b91f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFU5AWG4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS1ExOwaLTidoYYkD%2FCNpC62S95fCHshX7O9FS6cjEGAiASPKij7PG9LUZEqAwkzNlh0j2ShGXgY3nK4GjKF922%2FCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMA3TFb25o6c2JlT8eKtwDsj8JB9UU496wMFIXaHj6Syhu4PuLH3etWFzIGbOIyApQleOkrrjP1BCB5110L3Lc%2BYuon%2BB7f1ZM35LWjFg4RnAKQSBWGzc6HTKbCy9EgdKvQmw3161bMbRI6fN22lIqDQQG0kLBrhGDJ5neBYiPjC%2F1OMF5K%2F6oJjRK5X%2FsNDhYFFyU7Eoh1aPITsoT2seCD7CgVxODzu4sKm%2FBLKuJNzsD65vFXVGHumFRDOFsvoHOGYQkmb5c8CDXOXz77lerOfdDI1DTtU08llJ6iczmLwugRPAUcBI2eGHjozUV%2BUZbyv5mPjbNc5J7dZ%2BhBMsoJ0n3MqcLeHX%2FaO14hYvwnJCfiz2GSGk6Dw%2Fujw9Z3R7NJ7czCBmO7EYYItCEpU4bhO9z9PO8JA0tN8%2F%2F9%2BXWSH9r0RRzCxAtGwbNNe8Ew7sObSxxE8Lxz8bkHEHXvsiG0IcQ%2BwXd9TIV07nTGKORDFdiMv5%2BqdjYXhb55kErrxeNqZmMhbMOLB50AKavJcb4Km%2Bat%2ByQfsbgM67RPzHL3c5uutzGSgmUkewaOLSEPD1%2BJ8id4Bzb0MchhSPlAClVSgOdawkLJ0qcxmCTyYwArEsAN692jFl6FcZJuKYy%2FG7YvS8Yfqg0FP9z%2FZMw%2F6bQyQY6pgG8DMHBbEZbWYKl9N1U4PVldiS4wAX2tUgNgHHkF4yyPvjY%2FphdEo%2BkeByuf6o%2Be%2FUDrUZ8BJqWh4nEPRF%2FnDt9RSjeaNI1aJLA3kXzeZjs7B3Eq3blN%2BVBKcH1LCLbvAkmVn38FFzq3QbHZlQu8sENvg26PAJkYVFbDoGbbb0GHbtMndV%2F4yiT3ec1Ssv7osAbbYD%2BFNQ5pqsblBS6SzAVVcr1pTlo&X-Amz-Signature=74a94cfb53b5c7ba39d169a73b27214cfa830d58101d4e15ab90557f1a6234ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

