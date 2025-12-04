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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F22VOLQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD65%2Bsut2%2F2OsIEu0%2B1GsLwM9uUVla778FnW5PNB6qtiAIgI6%2FGEkM0nD%2FNwO0RkHE8EEV1iH3pb2dnfIi09gi%2F7LQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDO%2F0lg2YWwb1YH4i%2BircA268SRposcLUY6fK4ysyb%2F%2F5r2y6eKV9q2U6Fqdwrk3N6o0obCXF56eN4Vz%2FAgSqUroICVYZ8cHv92mI4tHlceqej9Sv7gOpsVc5Oekqil7ATR3%2BPInefTc3iLt83xCInF8KvOjAg23knFnVXYYDUpIOZC75k0gMepFhzVJDgDXVUUWLEs%2Bf0tCHlJqOzvIw%2FjQWIfNoM1AGDeezRWmJoiKwAc1rhjd8CMViG8fH72rt8YPTLi5nAkEEKuC%2FVr8xBV0wlNOeI3dj1M3YD882bkXu5XFXReVkHFlJ6rnGAK2cG%2FQkE0zuB%2FvMZ6xEBObvr%2BX8A6nLOzVKxWH%2F2CprP1kaMIFckh86MNaQZ7HXbrZa0k9io8jPQBZjIHJNYmHhtZeZUCuNJYf%2BcRVCgatazSLT9HQb5Y0aajsDPL0mP39P42VeYfYdAiJVfNnNMbaoYXSGm6bt8lPS01%2BFHFyIIjNbCKcVVLpFIIFD08WIPtY%2FtMVZQ1AR6J7iBdM1IKp71s9q%2FVSImHe3XbGNPKLWmCQ9ApycQ6nzEz51kvItJKYlFPLcbNDgAhLjKF%2F4rW8p8bKU5qfnr%2F2%2FGxIVaOC543FFvUCks%2F0yZuj2rNlfWOoHbT%2FuV5lsOfjZ4h32MOSExckGOqUBopAUu2VRRGVSojd5o6pbCQhq9Bfx3d4q%2FjWVpS56iwtdFjzc3PdcZ%2BDNO3UegywTgDv2RBZCT7kBX54BURIn7l9%2BIp63%2Ftsbl93nqnovQbA0vOSBxjVnM2ebSFK9C0b5XUQ4LShQs6NiSmMBWm8XHUgapN80h1gDu%2B%2Bp2Hd2XaUfIH6RxSYZlPc4ebGmU5kd7kmfL9molTXaqxNN0SKYNAIjiIAc&X-Amz-Signature=ce26d9558bb3de2c20eb22e212b19803f6b22d32cb84bd9aa63db665fb9407c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F22VOLQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD65%2Bsut2%2F2OsIEu0%2B1GsLwM9uUVla778FnW5PNB6qtiAIgI6%2FGEkM0nD%2FNwO0RkHE8EEV1iH3pb2dnfIi09gi%2F7LQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDO%2F0lg2YWwb1YH4i%2BircA268SRposcLUY6fK4ysyb%2F%2F5r2y6eKV9q2U6Fqdwrk3N6o0obCXF56eN4Vz%2FAgSqUroICVYZ8cHv92mI4tHlceqej9Sv7gOpsVc5Oekqil7ATR3%2BPInefTc3iLt83xCInF8KvOjAg23knFnVXYYDUpIOZC75k0gMepFhzVJDgDXVUUWLEs%2Bf0tCHlJqOzvIw%2FjQWIfNoM1AGDeezRWmJoiKwAc1rhjd8CMViG8fH72rt8YPTLi5nAkEEKuC%2FVr8xBV0wlNOeI3dj1M3YD882bkXu5XFXReVkHFlJ6rnGAK2cG%2FQkE0zuB%2FvMZ6xEBObvr%2BX8A6nLOzVKxWH%2F2CprP1kaMIFckh86MNaQZ7HXbrZa0k9io8jPQBZjIHJNYmHhtZeZUCuNJYf%2BcRVCgatazSLT9HQb5Y0aajsDPL0mP39P42VeYfYdAiJVfNnNMbaoYXSGm6bt8lPS01%2BFHFyIIjNbCKcVVLpFIIFD08WIPtY%2FtMVZQ1AR6J7iBdM1IKp71s9q%2FVSImHe3XbGNPKLWmCQ9ApycQ6nzEz51kvItJKYlFPLcbNDgAhLjKF%2F4rW8p8bKU5qfnr%2F2%2FGxIVaOC543FFvUCks%2F0yZuj2rNlfWOoHbT%2FuV5lsOfjZ4h32MOSExckGOqUBopAUu2VRRGVSojd5o6pbCQhq9Bfx3d4q%2FjWVpS56iwtdFjzc3PdcZ%2BDNO3UegywTgDv2RBZCT7kBX54BURIn7l9%2BIp63%2Ftsbl93nqnovQbA0vOSBxjVnM2ebSFK9C0b5XUQ4LShQs6NiSmMBWm8XHUgapN80h1gDu%2B%2Bp2Hd2XaUfIH6RxSYZlPc4ebGmU5kd7kmfL9molTXaqxNN0SKYNAIjiIAc&X-Amz-Signature=539932146623897b06ff756f3941e401fa1172884bf9b2a5f756417c929dcada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
