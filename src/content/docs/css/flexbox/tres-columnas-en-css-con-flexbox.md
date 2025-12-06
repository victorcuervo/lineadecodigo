---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4T52NA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBba9qyoXKS%2BWvekoH8yZLj3EnJIV1ISKA6yBg3Xe3MZAiArIdAZ5mtyL8SzMUDY9Fdl0iOU1Sg%2Fs2kp2iPYlgxCwSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMB3YvSqdI6vD4EC8xKtwDpiZwtIMWxoCGlzXbJI35AVssXG%2Frjf3XnD4yvEXXbnFaAC6diPWJwPG1w3zChYaCRg5Q7OkRZug50b%2Fy9jE4VlQXKsedPyZJYq%2BoJmGqDD0vjNjrwuKeTI1imiV3Etu9DskUntZ3wRrMZuFfOYxRkNV06XkL%2FX1TwDLbkFTMZh5tKXHtVL9trW8Ct8rKxMZ3O7frvtwETizrV%2FJ%2FnVCVez%2BXQIj4crXyB2wx9R4TumBDyKeSjGXMXrIQbg8v0KlCQ%2FP8uEk1A0CIh0tehexw3JpkVroCKZLg5oBl4Ak9HllogEeLSfJNQs2aE9OFTmzySvyBPX094cIu1Mjs1SF9si72YmovQXgVrZvo5zgOb3qLSn0IFb5uv4TeLALPLDYuZQOyPmx%2BhNQAso4O7zY%2BBDGQXFK83C%2BjUpvoldVWRohSVwn7qAL1g9J8PK8yUMjR5iSJKphIuABUh5m2GZnenkx0l066CoLKmzGb21RyrZAov9X4JH%2BVVm1m2p2Zmsg%2BCnjSaG%2ByrX%2FIK%2F1oqcymM8oRogLmvcACq5TDF57hKTMd28az4CmT%2B4F%2B7z8mO%2FT7V24D0jwOOzYUnBotQgiBWNvX1Va%2Fbp9hpdnAE2yHbS9iYgcQZMBzr0H68Gwwi%2BjNyQY6pgE3eZBKwxEjytvpSU8sH%2BSFhoknyhAoTGI2uh8eBBgYkEQO8aSurxLXzOa2M%2FUPx4l3kiLstDbThfBdd1TXwXLeQhVl9EfLgdL4PyMHaEOVVQL4v0ijQCAXeRxIF7uJ%2FbMbwfAFUbcPGGx6MAXa5GwaJU2l7vtGZwXaOdm2KPFR5F7ixGn%2BZCKqL3ZvxOVdiXdECSP17zmUMqEwBSVbe%2B9tD20ovQRG&X-Amz-Signature=8240800c9da464f3813314d522fb78895660f6be4db84a47130e138b01026a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4T52NA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBba9qyoXKS%2BWvekoH8yZLj3EnJIV1ISKA6yBg3Xe3MZAiArIdAZ5mtyL8SzMUDY9Fdl0iOU1Sg%2Fs2kp2iPYlgxCwSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMB3YvSqdI6vD4EC8xKtwDpiZwtIMWxoCGlzXbJI35AVssXG%2Frjf3XnD4yvEXXbnFaAC6diPWJwPG1w3zChYaCRg5Q7OkRZug50b%2Fy9jE4VlQXKsedPyZJYq%2BoJmGqDD0vjNjrwuKeTI1imiV3Etu9DskUntZ3wRrMZuFfOYxRkNV06XkL%2FX1TwDLbkFTMZh5tKXHtVL9trW8Ct8rKxMZ3O7frvtwETizrV%2FJ%2FnVCVez%2BXQIj4crXyB2wx9R4TumBDyKeSjGXMXrIQbg8v0KlCQ%2FP8uEk1A0CIh0tehexw3JpkVroCKZLg5oBl4Ak9HllogEeLSfJNQs2aE9OFTmzySvyBPX094cIu1Mjs1SF9si72YmovQXgVrZvo5zgOb3qLSn0IFb5uv4TeLALPLDYuZQOyPmx%2BhNQAso4O7zY%2BBDGQXFK83C%2BjUpvoldVWRohSVwn7qAL1g9J8PK8yUMjR5iSJKphIuABUh5m2GZnenkx0l066CoLKmzGb21RyrZAov9X4JH%2BVVm1m2p2Zmsg%2BCnjSaG%2ByrX%2FIK%2F1oqcymM8oRogLmvcACq5TDF57hKTMd28az4CmT%2B4F%2B7z8mO%2FT7V24D0jwOOzYUnBotQgiBWNvX1Va%2Fbp9hpdnAE2yHbS9iYgcQZMBzr0H68Gwwi%2BjNyQY6pgE3eZBKwxEjytvpSU8sH%2BSFhoknyhAoTGI2uh8eBBgYkEQO8aSurxLXzOa2M%2FUPx4l3kiLstDbThfBdd1TXwXLeQhVl9EfLgdL4PyMHaEOVVQL4v0ijQCAXeRxIF7uJ%2FbMbwfAFUbcPGGx6MAXa5GwaJU2l7vtGZwXaOdm2KPFR5F7ixGn%2BZCKqL3ZvxOVdiXdECSP17zmUMqEwBSVbe%2B9tD20ovQRG&X-Amz-Signature=654ee2b187ba4d503d143ce7e9d4d8a8ee166b5a319cc13355937216eeba1f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

