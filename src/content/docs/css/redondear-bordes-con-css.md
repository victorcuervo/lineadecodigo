---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6HS3J4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHD2BiXy631I7Sk7Zx4cjnW9VX0p0d63lA4RFJOe1x%2F2AiEA8%2FAVBPv6sPsqjCZ8EcLO5j1UzoM%2FxO%2FuDI6vKDUPyiAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUyYZ61XrOAG6CHYyrcA%2BswF20g86%2B1267mKgWoJhL6mHMipx6c9%2BtZu%2BVhlxzlIliWL5JkUBOVkEg7hOk774LuOT2%2BnDq6VtBO%2Fuzh0DDiareus7t%2F3d1WFpPp8qoJRrBzPftUumDB3JhYGOfH6Fj2dcSf9Y595%2BLvxLnIcWZhT9fS1qBe5sJvxR4j34o4OPTPyEtAXZuE9fd9LXl1v%2BXYAFsWD3b0XuHdjuGC0qfSIjtUXdz5lnT1TVElaSRcc91PDK0LRRkt0h%2BGldEFmndyvzAU1XHeESpDTsT8Tgjmdn57ZeuVKF%2BU7Ksm0OPxrcr2IE%2ByVznShnICQcUpNgYzpw5Q5LReP8pNuOS3M2RNcJtRZEIqr6By5lu2hcOHA5qOrEm%2FnXKk018vtgjenX4jeINvd9XQGIOHLOSAVgeeezWRUHvQzc57bNr4ry5WVJT8klzjvsagKZf18%2FaxifDOMo0kPLevBkqI6GoeHBMr8NdLI2PHEMfTO2Gh6mvWo8KyKk8A%2F6so7TygvnHd6gWuPVjjgk4Rm1dpVZqb6nwAjTsrMh7yhDTD71Dy1j1CyDuYp29nVqWOsgSH25crTh%2FGrszStfIeEKEuJ59UnLkMqp8FqlT3obnciJOC4afoPnj%2FXHYJwCObKEPgMOPB28kGOqUBjofzPEiAN6VlMKRoNvrZah2ipuvK5hkx748oKXLxQLkT1E5UFS23fe%2BNVhXEyHkNE2uPJJ5u%2BaDQbjWoH%2B6mRGmb%2FlTeEzEBx5E%2BBatNnZryVQYuOpSa0%2BZCY%2B2xLvy5LxToAuw1p5MIOKlpiH6DU50NtFcvvOX4HSMILsBWrEE1Ia%2BYLrNGAfFvd1Hyzk2Xq4SLba0q2K5cqB8QMS3dICJyqBf%2F&X-Amz-Signature=13a53bb660c7624ac06231d861697cd224cbac52182b5b3ea1ef21dfcf30394d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6HS3J4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHD2BiXy631I7Sk7Zx4cjnW9VX0p0d63lA4RFJOe1x%2F2AiEA8%2FAVBPv6sPsqjCZ8EcLO5j1UzoM%2FxO%2FuDI6vKDUPyiAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUyYZ61XrOAG6CHYyrcA%2BswF20g86%2B1267mKgWoJhL6mHMipx6c9%2BtZu%2BVhlxzlIliWL5JkUBOVkEg7hOk774LuOT2%2BnDq6VtBO%2Fuzh0DDiareus7t%2F3d1WFpPp8qoJRrBzPftUumDB3JhYGOfH6Fj2dcSf9Y595%2BLvxLnIcWZhT9fS1qBe5sJvxR4j34o4OPTPyEtAXZuE9fd9LXl1v%2BXYAFsWD3b0XuHdjuGC0qfSIjtUXdz5lnT1TVElaSRcc91PDK0LRRkt0h%2BGldEFmndyvzAU1XHeESpDTsT8Tgjmdn57ZeuVKF%2BU7Ksm0OPxrcr2IE%2ByVznShnICQcUpNgYzpw5Q5LReP8pNuOS3M2RNcJtRZEIqr6By5lu2hcOHA5qOrEm%2FnXKk018vtgjenX4jeINvd9XQGIOHLOSAVgeeezWRUHvQzc57bNr4ry5WVJT8klzjvsagKZf18%2FaxifDOMo0kPLevBkqI6GoeHBMr8NdLI2PHEMfTO2Gh6mvWo8KyKk8A%2F6so7TygvnHd6gWuPVjjgk4Rm1dpVZqb6nwAjTsrMh7yhDTD71Dy1j1CyDuYp29nVqWOsgSH25crTh%2FGrszStfIeEKEuJ59UnLkMqp8FqlT3obnciJOC4afoPnj%2FXHYJwCObKEPgMOPB28kGOqUBjofzPEiAN6VlMKRoNvrZah2ipuvK5hkx748oKXLxQLkT1E5UFS23fe%2BNVhXEyHkNE2uPJJ5u%2BaDQbjWoH%2B6mRGmb%2FlTeEzEBx5E%2BBatNnZryVQYuOpSa0%2BZCY%2B2xLvy5LxToAuw1p5MIOKlpiH6DU50NtFcvvOX4HSMILsBWrEE1Ia%2BYLrNGAfFvd1Hyzk2Xq4SLba0q2K5cqB8QMS3dICJyqBf%2F&X-Amz-Signature=b0d087eb139a7740813200c5fecc7a331cc64034df43bd6560c6587b271ca312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
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


```text
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
