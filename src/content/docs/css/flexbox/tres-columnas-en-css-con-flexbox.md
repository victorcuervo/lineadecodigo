---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVOVRTR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnhDvAc8oZJlBVp4JLW7YAUaqHoaeta853U4U5JNt1PAiAxaMVQrYspUH8FEh9SImWnPq64I1%2FMeTasV%2FXa9dePnSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMibjQAieA70sBmaZoKtwDv6TqL7bcMqQSYbWzdRGAYSqgsZRREKhgvkvqzw4%2FyQ8Us95UvRXVly%2FMxHnRsr9225WDu0u0w9khNp3zByxPFLsoK74cQ3TeqCiYW6p2iJdQrxXwYn6Gsos3kHBWXO78CqkV8Ry%2B0Xt74VZmBXOAitDZ1oW0mlhTO84PX367oIG3ktubqZnNOtlP4dO5MWBGbVFKIycGiQyVNSXp6D5dL0v2McJ791GPdgsuv4inDGJN2QLwQuCrjOnJc7VgxJAgVXzp85ctP3QVSElWbYrDHJP2hISaD6r4S4GjNIvZk7EMK88yUIPM8Vwp4sqNiQw1fCWEF0lcuZTB87sQITWFEk%2F8QAKkiPw99hXFLTQ3EFW6LHWHOHKxd2rwUNWU1tHKgHQCQnmnTc37MBmJ5o%2BUXJRkryGmJgAGo1Claw0NXFsygasxcemBPRNXBDxIX15q2JKqdHztcuCZoc0htZE4ckKLMchKqpqasKQyAY%2FMCx3%2FdTqB4bm%2FOJGJW81CAn7SXR%2FfeIoV2fRqiZM1NJOLhULT%2Bc8yKYfxELyH%2F%2B1Bde0LQO1ZkXj8ZG9ODpq5AIp7xM6JWN%2F9LQ4%2Ba6ITh90GSY4%2FqpWzX4Sk%2B%2B8VntN66DifVoyC%2B5MN5TiGog0w9dzcyQY6pgFKkN5ZCvsGP75XsYLw1mZZbv28qKjCvuDPtJo92SkD0DoQo23b5Mrbqgrq3VdU7c1EzqV61Y5od32qTWxxk2AmCF5SS48g9TQAyU6dYOxa2ayin2tJZRzgsqzu0j8liNu%2B6vAMhAjZ%2FAMnBVwcqQHFi%2BEDNXg3UrxDw19eXBCeS%2BiCb31MiT7Ci4lH4y6XHfhx4DWV%2Bx%2BjTF%2FALDtC27MUDH7Z9OMi&X-Amz-Signature=fdbde726ed6bd3557df7eb3ab49dc11e051941eacc7889fc11b0971d8441607c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVOVRTR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnhDvAc8oZJlBVp4JLW7YAUaqHoaeta853U4U5JNt1PAiAxaMVQrYspUH8FEh9SImWnPq64I1%2FMeTasV%2FXa9dePnSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMibjQAieA70sBmaZoKtwDv6TqL7bcMqQSYbWzdRGAYSqgsZRREKhgvkvqzw4%2FyQ8Us95UvRXVly%2FMxHnRsr9225WDu0u0w9khNp3zByxPFLsoK74cQ3TeqCiYW6p2iJdQrxXwYn6Gsos3kHBWXO78CqkV8Ry%2B0Xt74VZmBXOAitDZ1oW0mlhTO84PX367oIG3ktubqZnNOtlP4dO5MWBGbVFKIycGiQyVNSXp6D5dL0v2McJ791GPdgsuv4inDGJN2QLwQuCrjOnJc7VgxJAgVXzp85ctP3QVSElWbYrDHJP2hISaD6r4S4GjNIvZk7EMK88yUIPM8Vwp4sqNiQw1fCWEF0lcuZTB87sQITWFEk%2F8QAKkiPw99hXFLTQ3EFW6LHWHOHKxd2rwUNWU1tHKgHQCQnmnTc37MBmJ5o%2BUXJRkryGmJgAGo1Claw0NXFsygasxcemBPRNXBDxIX15q2JKqdHztcuCZoc0htZE4ckKLMchKqpqasKQyAY%2FMCx3%2FdTqB4bm%2FOJGJW81CAn7SXR%2FfeIoV2fRqiZM1NJOLhULT%2Bc8yKYfxELyH%2F%2B1Bde0LQO1ZkXj8ZG9ODpq5AIp7xM6JWN%2F9LQ4%2Ba6ITh90GSY4%2FqpWzX4Sk%2B%2B8VntN66DifVoyC%2B5MN5TiGog0w9dzcyQY6pgFKkN5ZCvsGP75XsYLw1mZZbv28qKjCvuDPtJo92SkD0DoQo23b5Mrbqgrq3VdU7c1EzqV61Y5od32qTWxxk2AmCF5SS48g9TQAyU6dYOxa2ayin2tJZRzgsqzu0j8liNu%2B6vAMhAjZ%2FAMnBVwcqQHFi%2BEDNXg3UrxDw19eXBCeS%2BiCb31MiT7Ci4lH4y6XHfhx4DWV%2Bx%2BjTF%2FALDtC27MUDH7Z9OMi&X-Amz-Signature=837fd92d428e6b77c941186e9d518f1f5593d8a674687decc77a9e293b2df2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

