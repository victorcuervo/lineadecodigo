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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3GZDA7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDjFAGbL%2FDcX%2Fy6P1hodEqTVr2xHVHPCA2pPxy2bLZ2qgIhAMvZpV8rS1Sb7VRCqkOB72kFZynJHWkSor0wuaTPYGtFKv8DCD0QABoMNjM3NDIzMTgzODA1IgyBtNC96AJiMTRjHnsq3AMEPdXQr8Ef6MU0ShQ%2BX4WBzj1OlFo4jA1xIyUyS%2FJsGa0wVhRq%2BP2dPry7eHm4%2B2Oplt6mAPjWWK6n0XX8PCgbdMM56F23h3XJdN%2Bpud2MSNkk2OF9eRSF4jyX6aJXHAgblLuctOgVWqW1PEC7iFzkh974yRLWQDhSYj1hMTGsHGp4qvL%2B6t9DDA5e8AVtLDmtYANzu%2FGM6qkxa83S9ThfYR0fqyX4K0y3wKzbFMses0Eddj0cj3LuI9eXZfgiCEuGimqhGfVnjHCyIdtnk5L3VzN9wJXqWgPOlAVbwjVHcG08bqXlGXnFHwjs0kxbtzvW1lCDvdygZeYOxT7FSnOse4mxlfXEFBWuYg8X9W2%2BdGoBuKuJMABjOwJg3cN3DsLjPWoXCw7O2Jh4k43ZJSEss9Jjs%2Bnz5FlQe8OV1vzCL%2BjD6bYJK1gpzJn13Cdk1tOD6P0zdoi5vo7EaZA%2F6tzNLmIYarInW%2B3sPeE%2BaWqSUCWcC%2BzJptntr9kW1amFHbZnsFpqbmiPN5lXpK%2BM9zt0CMfbxHHrXB6Hu8NwUgKHi0f1ZdKnGsoUgIoGsgE%2BlljNSr86mDv%2F2fkjbPzZcC1V8zFpZG%2F8b8elrVHZYjYEyT8GSupqP9H2dRMySTCNkMTJBjqkASebZWmd6IJrWcULHe7hSH9Qq%2BLlbxWDHxmP5gMRKOrBjkKhCCqEb4u6tPT0rtO%2BYVkAZPL6YBEir8JCeD%2B%2BlIosPlK6NqYv61UxGRy%2FIptpsKRuwRxYoSKZKycsrKVrkomAD3ABRFGo160a8ApLSFi0WRUniK9xqfGEmPVCkuU2EdJXvZNsjw1t2fNW6sKiXAriHcgtnYVGpys0ew%2Fdzmp4WspS&X-Amz-Signature=cc0ef0cec746c9216e90038ef56a0b911c5d834a5b69a5ec4345bf7e35c9458f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3GZDA7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDjFAGbL%2FDcX%2Fy6P1hodEqTVr2xHVHPCA2pPxy2bLZ2qgIhAMvZpV8rS1Sb7VRCqkOB72kFZynJHWkSor0wuaTPYGtFKv8DCD0QABoMNjM3NDIzMTgzODA1IgyBtNC96AJiMTRjHnsq3AMEPdXQr8Ef6MU0ShQ%2BX4WBzj1OlFo4jA1xIyUyS%2FJsGa0wVhRq%2BP2dPry7eHm4%2B2Oplt6mAPjWWK6n0XX8PCgbdMM56F23h3XJdN%2Bpud2MSNkk2OF9eRSF4jyX6aJXHAgblLuctOgVWqW1PEC7iFzkh974yRLWQDhSYj1hMTGsHGp4qvL%2B6t9DDA5e8AVtLDmtYANzu%2FGM6qkxa83S9ThfYR0fqyX4K0y3wKzbFMses0Eddj0cj3LuI9eXZfgiCEuGimqhGfVnjHCyIdtnk5L3VzN9wJXqWgPOlAVbwjVHcG08bqXlGXnFHwjs0kxbtzvW1lCDvdygZeYOxT7FSnOse4mxlfXEFBWuYg8X9W2%2BdGoBuKuJMABjOwJg3cN3DsLjPWoXCw7O2Jh4k43ZJSEss9Jjs%2Bnz5FlQe8OV1vzCL%2BjD6bYJK1gpzJn13Cdk1tOD6P0zdoi5vo7EaZA%2F6tzNLmIYarInW%2B3sPeE%2BaWqSUCWcC%2BzJptntr9kW1amFHbZnsFpqbmiPN5lXpK%2BM9zt0CMfbxHHrXB6Hu8NwUgKHi0f1ZdKnGsoUgIoGsgE%2BlljNSr86mDv%2F2fkjbPzZcC1V8zFpZG%2F8b8elrVHZYjYEyT8GSupqP9H2dRMySTCNkMTJBjqkASebZWmd6IJrWcULHe7hSH9Qq%2BLlbxWDHxmP5gMRKOrBjkKhCCqEb4u6tPT0rtO%2BYVkAZPL6YBEir8JCeD%2B%2BlIosPlK6NqYv61UxGRy%2FIptpsKRuwRxYoSKZKycsrKVrkomAD3ABRFGo160a8ApLSFi0WRUniK9xqfGEmPVCkuU2EdJXvZNsjw1t2fNW6sKiXAriHcgtnYVGpys0ew%2Fdzmp4WspS&X-Amz-Signature=893098916856accefb264b5b09152195ba71a8ace45d3f68cc052a8fefc19887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
