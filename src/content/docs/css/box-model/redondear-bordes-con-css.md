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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3V4GS4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTGlBDg2fR1aSAFaNmUne%2F29ebKp4heUAiEeJX1iymYAIgEHqOUlcdr%2FyCyjieUOOt81tlW47e6EdAp%2Bj4ztfkPO4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEm8Rz3NkwQeYo3e5CrcAxLJGYRfPeV7bClfdZMuGbCubVss733hG9G%2FzVDHsxlfhkqRw8uxSGd5xYBlBsca0GXN9C%2BV7EVswvSz53Cs17ZBEKIXF0GUbAb1hWoGyZeq%2BuTKijr0HMD8oR7fc9%2Fv5igu7uz9mm2lwf2CpQ3FrbjePrxvyGTgD4cQ%2BKK2ymr4BJ2E4o2Pc1c7P2umq5KPmJQ8bBQMz1nwqEum7Q5dXkIKgOpFu%2FBWOxqZvjOP0dr17VgMzQrINPFxMaScq0eakOX%2Fa29%2FHYcwskb43WgxIMKns8M7N%2F6CVfPyKntFURcvSDdRInZHLkb47O84qxJt98HVOJFj2IPr5KpbBYVEHAcVPSWW7gwZ0R0KikPXMhoHdOM5IDV8Rl2zyxUtL88HzponbdYRMvliZkWzNv3dQav9bslzNhYRHxP7y7QTwixz4bT1M%2FY7vTg%2BlSyePZyjFZxUZEFNvpm%2FagRtQ1S6xPLc3IQfoKXS8zsfWx2U0DigURTwgjrWYgEldPSvQtjgihtFK6ZIQss8D9nZcZJIvMdUeO5ujNxT%2BTaFRS6WEa1PKz2Pn%2BYmv3rcCvPeSEpJ7H%2BOIUr7DOQp7uS7cbVfv48OCWbrLqcY%2FkwLg4zHy%2BXH%2FUt8z0zs6JHsN%2FIcMOmqisoGOqUBVUX5l5NbfiANAUbFm1yf3s9uP%2F1C6LhxRmhqj7NaJIjcm5WlC72tXr3HlioZNtcrfwv8yTz0%2BallkcJ6C2u5sDcXBV1yrLxgN1aqtVmcr%2F4VK8mL7qijwOOOPmj0tVo%2FiaRbpfoVGyQtU24leLsIXamOcTAEPNHiuQc1NlQxwFGpFOBmfX9EYyGeCGiGGetxMHKkhUDow0bKGSRHGgVimdPvCoGe&X-Amz-Signature=a84636e01e050137ab5865d1dcd94996267ea06fd7a30b752a55ca8f5d18cd8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3V4GS4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTGlBDg2fR1aSAFaNmUne%2F29ebKp4heUAiEeJX1iymYAIgEHqOUlcdr%2FyCyjieUOOt81tlW47e6EdAp%2Bj4ztfkPO4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEm8Rz3NkwQeYo3e5CrcAxLJGYRfPeV7bClfdZMuGbCubVss733hG9G%2FzVDHsxlfhkqRw8uxSGd5xYBlBsca0GXN9C%2BV7EVswvSz53Cs17ZBEKIXF0GUbAb1hWoGyZeq%2BuTKijr0HMD8oR7fc9%2Fv5igu7uz9mm2lwf2CpQ3FrbjePrxvyGTgD4cQ%2BKK2ymr4BJ2E4o2Pc1c7P2umq5KPmJQ8bBQMz1nwqEum7Q5dXkIKgOpFu%2FBWOxqZvjOP0dr17VgMzQrINPFxMaScq0eakOX%2Fa29%2FHYcwskb43WgxIMKns8M7N%2F6CVfPyKntFURcvSDdRInZHLkb47O84qxJt98HVOJFj2IPr5KpbBYVEHAcVPSWW7gwZ0R0KikPXMhoHdOM5IDV8Rl2zyxUtL88HzponbdYRMvliZkWzNv3dQav9bslzNhYRHxP7y7QTwixz4bT1M%2FY7vTg%2BlSyePZyjFZxUZEFNvpm%2FagRtQ1S6xPLc3IQfoKXS8zsfWx2U0DigURTwgjrWYgEldPSvQtjgihtFK6ZIQss8D9nZcZJIvMdUeO5ujNxT%2BTaFRS6WEa1PKz2Pn%2BYmv3rcCvPeSEpJ7H%2BOIUr7DOQp7uS7cbVfv48OCWbrLqcY%2FkwLg4zHy%2BXH%2FUt8z0zs6JHsN%2FIcMOmqisoGOqUBVUX5l5NbfiANAUbFm1yf3s9uP%2F1C6LhxRmhqj7NaJIjcm5WlC72tXr3HlioZNtcrfwv8yTz0%2BallkcJ6C2u5sDcXBV1yrLxgN1aqtVmcr%2F4VK8mL7qijwOOOPmj0tVo%2FiaRbpfoVGyQtU24leLsIXamOcTAEPNHiuQc1NlQxwFGpFOBmfX9EYyGeCGiGGetxMHKkhUDow0bKGSRHGgVimdPvCoGe&X-Amz-Signature=6dcbaa417936e870e628281498b1f62b9c2b13603a3ef250f9ddd77a851e4a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
