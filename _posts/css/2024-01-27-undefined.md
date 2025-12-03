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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJATUEB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDBjWTQSNLSz%2Fvc5OXExzMrdj9yByizap7Dox6EDavfOAIhANavhQVN7d77thb7ADmAczAg3Qw6dhvdVWRQswK2fO%2FqKv8DCDAQABoMNjM3NDIzMTgzODA1IgzrEOoJy1b6obtZAvsq3AMwmcvZkLsbDvGY7C2TK%2BWuS6rHch%2B0zgu9IqUPBRhXPMMpgYp33r5CpgSHgLNWnh%2BazL83SutkH5yHs3WJyvWMnNzxZrOnZnAHhsRH9%2F%2BATWYUSWKbgfB5Yf8B9EVM9vqDrMqUk1z3avyP%2Bu11ARClb9Dwxz80nDH2IhAWC2bRz6ce2j97x3HT%2BhfP2OJbiZOVYVHe3pR0oCMcfeT56V14sxSLq3eHoH06on46l0pd7rvOC%2BLBDuOp2ElxxTQIOEn%2Fn1M7jjbqu0h7z4Tox6F16pfvENDEYg5g3%2FEIZ%2FqlZWHszC9D2blyxcXY3Zt6%2FBH3EeufbXIPE67ExxuBBdE2T5bxygvm4xmgBJ%2Fjc4geOcFm5AkbtnX0o3obEJkUTCXfWFg9eETICHg33OgEs4UOERXqFUYhz91iRG2BSjsNai28IYdQGPmt7rM5Bm%2By24cPKqGU84lZsJ1esqkRu%2BmWJmnLMJMxPjYvfY93d7BN22XqIngexZIz8Y%2Bq5bwSAxopC7N4QL91il1k%2BLGDSj14OHw7NbW%2FBqobGYexpUznF6vfLBz4KC3%2BnTeTTfU1olf3KnhUXcPXvkrXPlj49KoGMh3CJeTrtf6cvnsIEO3Fx4Il0RwyVUXR63udVzDrpsHJBjqkATT9G9AOknAPMf2CrHavYF4JSlllNdoWfaBkaKz1C%2F66EUyqxqvaOB%2B3Hi8W7s%2Bs5BbeCcSJR%2Fw3Z7Npi1T3t%2F%2Bd0aQoT9K49mv0G10cOkQhgoriSmSaASt3WZDRc5ft28lhXMOmXPMGbJpnsDEuhBnar9ozfaQQPVy3zWzw4bhY220EE2aJLPP7sik8EGWPRfhmN8usgZHk0PUTCkzelMszrbAM&X-Amz-Signature=e80ebb0a7f18473042661fa7447361e5fe841acbb8f89ec9f3cc2949c7212c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJATUEB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDBjWTQSNLSz%2Fvc5OXExzMrdj9yByizap7Dox6EDavfOAIhANavhQVN7d77thb7ADmAczAg3Qw6dhvdVWRQswK2fO%2FqKv8DCDAQABoMNjM3NDIzMTgzODA1IgzrEOoJy1b6obtZAvsq3AMwmcvZkLsbDvGY7C2TK%2BWuS6rHch%2B0zgu9IqUPBRhXPMMpgYp33r5CpgSHgLNWnh%2BazL83SutkH5yHs3WJyvWMnNzxZrOnZnAHhsRH9%2F%2BATWYUSWKbgfB5Yf8B9EVM9vqDrMqUk1z3avyP%2Bu11ARClb9Dwxz80nDH2IhAWC2bRz6ce2j97x3HT%2BhfP2OJbiZOVYVHe3pR0oCMcfeT56V14sxSLq3eHoH06on46l0pd7rvOC%2BLBDuOp2ElxxTQIOEn%2Fn1M7jjbqu0h7z4Tox6F16pfvENDEYg5g3%2FEIZ%2FqlZWHszC9D2blyxcXY3Zt6%2FBH3EeufbXIPE67ExxuBBdE2T5bxygvm4xmgBJ%2Fjc4geOcFm5AkbtnX0o3obEJkUTCXfWFg9eETICHg33OgEs4UOERXqFUYhz91iRG2BSjsNai28IYdQGPmt7rM5Bm%2By24cPKqGU84lZsJ1esqkRu%2BmWJmnLMJMxPjYvfY93d7BN22XqIngexZIz8Y%2Bq5bwSAxopC7N4QL91il1k%2BLGDSj14OHw7NbW%2FBqobGYexpUznF6vfLBz4KC3%2BnTeTTfU1olf3KnhUXcPXvkrXPlj49KoGMh3CJeTrtf6cvnsIEO3Fx4Il0RwyVUXR63udVzDrpsHJBjqkATT9G9AOknAPMf2CrHavYF4JSlllNdoWfaBkaKz1C%2F66EUyqxqvaOB%2B3Hi8W7s%2Bs5BbeCcSJR%2Fw3Z7Npi1T3t%2F%2Bd0aQoT9K49mv0G10cOkQhgoriSmSaASt3WZDRc5ft28lhXMOmXPMGbJpnsDEuhBnar9ozfaQQPVy3zWzw4bhY220EE2aJLPP7sik8EGWPRfhmN8usgZHk0PUTCkzelMszrbAM&X-Amz-Signature=8668f2a817287af6fdab17273785d6adcf1c5db3cf7429c22ff402df4d175425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

