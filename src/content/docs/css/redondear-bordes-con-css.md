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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6FAUNZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHCuPvQpvbzXHf%2F7%2B08wNzZXDtDUkZmQ2y4f52eOWiYAiEAsOC%2B8AyVYBMZKb3ygJRZQl%2FAT73SLBXH4kpI2%2BWmvCMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIoIr2qK%2Bed%2B9skIHyrcA0GI7%2BBXdzPplbIGqvK4KIZWc2EGUwgfBKSRs2F3j6MZknrPouPyzfE1CUwKi4VVUCOgqmUKtNjT5AAJWs7S9WwCBexZFZd73i8wIP9nC2Y0Cv1yLs45RD1AqogFxradnurz6myTX%2BE7tpCPNpDHrodYOnbdmw6%2FgkAO2Ytxleps9eWzjz4zCuTncVSK6Qsqrih6iPhmIyqvmEu8gjQWdFHr9nHp1vKwmevjfWoUs3eXgVdOY4AsdUNGpIf3QwW7phke1WZF1IUDOz7FKKviaH23eJJzvVLEDKewT6DGezKrBB4%2B%2BLygQ4CQH3N%2BtHHfEGgRnHAu3RIs0plSk3MKRamhPA3lmrdFyk5DtV5mzUj9SLroU8TadSgiiVuCS8SbmDd6HQ1UjhiPtN0bT4z37kv%2FOjxXO2zbIt%2FbvYhHvWcvD84DhuTKJKEIh%2Bu%2B%2BPWf6WmCJRxRmYS8bVu6CjV1cmYb9nBY9jILZqY4%2FZOwk4OxijcZNFNtB5apFu%2BBHT6nFYzkZU8T5RpAOt2PPtxmOLGVbzmZj5y8kcVxpsu1ouVBwkm4J%2BOl53ecvUTzEEiBJIBmESUxKJl3s2UMVzbvPstNy56tyQHAH3EnX6FKAx%2BhpJZaGrcYTVV5XuogMPWm0MkGOqUBYGwDPyVLo8wXgHahxI5WhB%2BN2MEBmW7FpM2%2BUupoRwmGpe7bYs1Ivzp6s3x4ISrj62zpj2tUQWykhaMJyybYp1DWL5qXy45ZyuyhnLu805Brn8ltvcGzHyXpjC9O8%2B38Q1X3c%2BFEMGpNbYpLvUMAdXqWxIloGzQA7zEIcmHUdFdMlqJ36WDajjNyj4PYL5TewBFE4gRnk7NHMU0ZyMr3TO8rvSyT&X-Amz-Signature=fc906be03bb7930c94ff8e901aba8ca0e1406944a5f42d2668c53e229eeb39fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6FAUNZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHCuPvQpvbzXHf%2F7%2B08wNzZXDtDUkZmQ2y4f52eOWiYAiEAsOC%2B8AyVYBMZKb3ygJRZQl%2FAT73SLBXH4kpI2%2BWmvCMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIoIr2qK%2Bed%2B9skIHyrcA0GI7%2BBXdzPplbIGqvK4KIZWc2EGUwgfBKSRs2F3j6MZknrPouPyzfE1CUwKi4VVUCOgqmUKtNjT5AAJWs7S9WwCBexZFZd73i8wIP9nC2Y0Cv1yLs45RD1AqogFxradnurz6myTX%2BE7tpCPNpDHrodYOnbdmw6%2FgkAO2Ytxleps9eWzjz4zCuTncVSK6Qsqrih6iPhmIyqvmEu8gjQWdFHr9nHp1vKwmevjfWoUs3eXgVdOY4AsdUNGpIf3QwW7phke1WZF1IUDOz7FKKviaH23eJJzvVLEDKewT6DGezKrBB4%2B%2BLygQ4CQH3N%2BtHHfEGgRnHAu3RIs0plSk3MKRamhPA3lmrdFyk5DtV5mzUj9SLroU8TadSgiiVuCS8SbmDd6HQ1UjhiPtN0bT4z37kv%2FOjxXO2zbIt%2FbvYhHvWcvD84DhuTKJKEIh%2Bu%2B%2BPWf6WmCJRxRmYS8bVu6CjV1cmYb9nBY9jILZqY4%2FZOwk4OxijcZNFNtB5apFu%2BBHT6nFYzkZU8T5RpAOt2PPtxmOLGVbzmZj5y8kcVxpsu1ouVBwkm4J%2BOl53ecvUTzEEiBJIBmESUxKJl3s2UMVzbvPstNy56tyQHAH3EnX6FKAx%2BhpJZaGrcYTVV5XuogMPWm0MkGOqUBYGwDPyVLo8wXgHahxI5WhB%2BN2MEBmW7FpM2%2BUupoRwmGpe7bYs1Ivzp6s3x4ISrj62zpj2tUQWykhaMJyybYp1DWL5qXy45ZyuyhnLu805Brn8ltvcGzHyXpjC9O8%2B38Q1X3c%2BFEMGpNbYpLvUMAdXqWxIloGzQA7zEIcmHUdFdMlqJ36WDajjNyj4PYL5TewBFE4gRnk7NHMU0ZyMr3TO8rvSyT&X-Amz-Signature=e2d95e9f7e89ef8a1fece4d033f0a5f51410245046c38e13f376504995107fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
