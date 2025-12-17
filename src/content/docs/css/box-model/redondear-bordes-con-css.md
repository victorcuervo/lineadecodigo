---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPDICNC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMGZGpt8Z%2BcC4w2v6uOqWu%2B7iKn4LH6XbmWIgvxTWDJQIgN3NGSnMuyha72nSA1x%2FzT6o4V2l14KjRfIRC9fZZSacq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP4wj4Rccsw90yMhOSrcA1hFB2ek53PKAYH55BgiEATb7T1XkIhSBuSZq17JSD31Q6oC4uDDnEqUMLgbDyoSG6Tedww%2BQ12kod1eBb7Jn9y7pN6WDUhT8TfqebQZH61At3d3T2%2B2sVL7px8iStitDaznnH2H1Q7CYCCD%2BDAwP%2BnF6ZJ95m6HS81ZXfTnkb2XMvPE5BE0X90OlBxbTM2N91oZzGFpGgDaytuywejojc96VATVyHWGeU1Fgo3MyTEwj6b9S3O5zAjCEoHF%2BVKAfQN281PXoAEZ6sccMkMw4AbLbJNkIvtFFQL9DyFkq2TAFFSmga40d7%2FoR%2BXlDI8XWvjRpzdSbThRhMqgu4iLaQys8tIgzdjnkmHXBdBS2AMKTs%2BtvdkwndQsOnQ04frY2U58ed87K0gScQSuN%2BQSXGUTKQRyx3YrjPbdUa%2F%2FxMyuUgqmPGCw3ljJR51Dbn57WnfyWUl9uP63p1KGDvHkziYcy9B3lbJxunvbBBVYBlXOyuFFo81%2FHJ%2BYAEmwOxHkCBtcZ0o%2BKTEKfPV5kJBChvL1ALXCdCkax4F%2FJqhxAkQt0%2BnpQZGwV4FXypAMd2RFz6lmsGz3mb5TlAjM4ss8WHdrKJVy4fvxDjf1wZbQmcZy3ZUoJpjIJ9d69uVfMPzOiMoGOqUBqyX78kKKbzwpy0NmGcErbPGR9EgAxmKF7twaihdb9Fp123Kec7h6ds38uSklFP1JVpiUt2xr0gUVNeZ%2FITDBTspVCWvxPHWJaoobSGxD9ZLBGLdvh4o7bOVKTm1wlbwwOndHfkAomlLrwioALEs1vIV4pKQzhtQV%2B%2FzwSAqhu%2B2NQI5Gr2lvrs7Bf22fwuqQ9%2BwO6JeW5h%2B7pLTqRHGv1GaEAZfL&X-Amz-Signature=1fcd014850d442aaf804af0ecaabca18cf31c8816e4576d21d075230de904657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPDICNC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMGZGpt8Z%2BcC4w2v6uOqWu%2B7iKn4LH6XbmWIgvxTWDJQIgN3NGSnMuyha72nSA1x%2FzT6o4V2l14KjRfIRC9fZZSacq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP4wj4Rccsw90yMhOSrcA1hFB2ek53PKAYH55BgiEATb7T1XkIhSBuSZq17JSD31Q6oC4uDDnEqUMLgbDyoSG6Tedww%2BQ12kod1eBb7Jn9y7pN6WDUhT8TfqebQZH61At3d3T2%2B2sVL7px8iStitDaznnH2H1Q7CYCCD%2BDAwP%2BnF6ZJ95m6HS81ZXfTnkb2XMvPE5BE0X90OlBxbTM2N91oZzGFpGgDaytuywejojc96VATVyHWGeU1Fgo3MyTEwj6b9S3O5zAjCEoHF%2BVKAfQN281PXoAEZ6sccMkMw4AbLbJNkIvtFFQL9DyFkq2TAFFSmga40d7%2FoR%2BXlDI8XWvjRpzdSbThRhMqgu4iLaQys8tIgzdjnkmHXBdBS2AMKTs%2BtvdkwndQsOnQ04frY2U58ed87K0gScQSuN%2BQSXGUTKQRyx3YrjPbdUa%2F%2FxMyuUgqmPGCw3ljJR51Dbn57WnfyWUl9uP63p1KGDvHkziYcy9B3lbJxunvbBBVYBlXOyuFFo81%2FHJ%2BYAEmwOxHkCBtcZ0o%2BKTEKfPV5kJBChvL1ALXCdCkax4F%2FJqhxAkQt0%2BnpQZGwV4FXypAMd2RFz6lmsGz3mb5TlAjM4ss8WHdrKJVy4fvxDjf1wZbQmcZy3ZUoJpjIJ9d69uVfMPzOiMoGOqUBqyX78kKKbzwpy0NmGcErbPGR9EgAxmKF7twaihdb9Fp123Kec7h6ds38uSklFP1JVpiUt2xr0gUVNeZ%2FITDBTspVCWvxPHWJaoobSGxD9ZLBGLdvh4o7bOVKTm1wlbwwOndHfkAomlLrwioALEs1vIV4pKQzhtQV%2B%2FzwSAqhu%2B2NQI5Gr2lvrs7Bf22fwuqQ9%2BwO6JeW5h%2B7pLTqRHGv1GaEAZfL&X-Amz-Signature=5734dadfd6de4702778fe46f71b790d04994272a507eafa7f5aa9941cb610b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```css
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
