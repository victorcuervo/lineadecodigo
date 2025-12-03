---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STORKOUL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDG1412IfTueclCSxHm6ZpN9X7pPjCUQIunxUxrG1rtOAiEA0V6gbkIcbdoG2111J0y0m8gpLOP6HHAq%2F6YhTWFWiowq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPeeKhiTPZFnXYj%2FhSrcAxrOHkPLVJsAZmL6xrk8bStqdMSLQGiy7NFlU1gSLgoc6p1VCjHESnNxbi9BACMZQN9%2FzkmvemijAgVDx5SU4r1XEkrdEGAOyhjCzWRTWBQ4OOfgVLLhXluc%2FTJwm1UencbF8O4egMa36MmnZctld0Lq0jReCUsn1X5IJDPQIm5aS35lZU5kt%2FWlXPnPJtjiWJgWro7m2w14cbZmjMmWP%2BHL5AY95d8mDfNEWO4QnAiLxohqHPEzB4kIrstckxWBv%2B0XLBGHMnHOLxSMH2IXcsWJyduVmbmdZA0Xy3Jzk%2BY4xV0pOR2q46omtokKWb1MZeL1%2Fa4vNyS9DFlc%2FeV3kCb9oJmkBu%2FF9A1fTGT%2BZb7YfKDtGGWWz0a6B7rzUN59797qlTjjE8x38oa7a8Bfc8BJ59O3YTKlyc3b3rDUBSVRMo9%2Bme3qXefydn6g8e34ITQwrGmYFQZqAL18SOyZ%2BeoMUKCCg85sLz3RN4oyKIxKaEx0Q2d2UqKJ6pw6LpTz0eE%2F%2FvxPUEySkr3Io0khVfo33Ef5hCuxGzxi%2FIYkibW9GsYrv%2F8Vsiss%2BPdYJS7RdW5jh3UdtNI5NcHXLdaPrhXPfPsAm61%2BR1h%2BwswiwnQLMofyei5kS38BKPIBMMr4wskGOqUBABn7g9FhkYcc%2FVcAq3lTgLr6visn188AQm0PUPs3%2FC5DLEtg00FQq751YyNkrZE0HQL3g6ocQrSt6Rl41e8QaWoOnPwK%2FsiOVZsMvYP02FkeR04WYHUTflk%2Fr%2BQtRDGBijGaGP%2BPAy7kLktGy7RXHpjFkyhmayCx%2FK11ZKllTS7w2MlT8KNe4D5H7B6hOQ0LorpVIychWObn46jbogFXL1SSpkyo&X-Amz-Signature=dd3bad6c8b2442dbe38cc72cd7015454cb4a2d5e48588f6fdfa9b0475137bbc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STORKOUL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDG1412IfTueclCSxHm6ZpN9X7pPjCUQIunxUxrG1rtOAiEA0V6gbkIcbdoG2111J0y0m8gpLOP6HHAq%2F6YhTWFWiowq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPeeKhiTPZFnXYj%2FhSrcAxrOHkPLVJsAZmL6xrk8bStqdMSLQGiy7NFlU1gSLgoc6p1VCjHESnNxbi9BACMZQN9%2FzkmvemijAgVDx5SU4r1XEkrdEGAOyhjCzWRTWBQ4OOfgVLLhXluc%2FTJwm1UencbF8O4egMa36MmnZctld0Lq0jReCUsn1X5IJDPQIm5aS35lZU5kt%2FWlXPnPJtjiWJgWro7m2w14cbZmjMmWP%2BHL5AY95d8mDfNEWO4QnAiLxohqHPEzB4kIrstckxWBv%2B0XLBGHMnHOLxSMH2IXcsWJyduVmbmdZA0Xy3Jzk%2BY4xV0pOR2q46omtokKWb1MZeL1%2Fa4vNyS9DFlc%2FeV3kCb9oJmkBu%2FF9A1fTGT%2BZb7YfKDtGGWWz0a6B7rzUN59797qlTjjE8x38oa7a8Bfc8BJ59O3YTKlyc3b3rDUBSVRMo9%2Bme3qXefydn6g8e34ITQwrGmYFQZqAL18SOyZ%2BeoMUKCCg85sLz3RN4oyKIxKaEx0Q2d2UqKJ6pw6LpTz0eE%2F%2FvxPUEySkr3Io0khVfo33Ef5hCuxGzxi%2FIYkibW9GsYrv%2F8Vsiss%2BPdYJS7RdW5jh3UdtNI5NcHXLdaPrhXPfPsAm61%2BR1h%2BwswiwnQLMofyei5kS38BKPIBMMr4wskGOqUBABn7g9FhkYcc%2FVcAq3lTgLr6visn188AQm0PUPs3%2FC5DLEtg00FQq751YyNkrZE0HQL3g6ocQrSt6Rl41e8QaWoOnPwK%2FsiOVZsMvYP02FkeR04WYHUTflk%2Fr%2BQtRDGBijGaGP%2BPAy7kLktGy7RXHpjFkyhmayCx%2FK11ZKllTS7w2MlT8KNe4D5H7B6hOQ0LorpVIychWObn46jbogFXL1SSpkyo&X-Amz-Signature=eea313e55b62b3e65a2aeee45bf8a1f5a7615635d92f27b956c33438abda6cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
