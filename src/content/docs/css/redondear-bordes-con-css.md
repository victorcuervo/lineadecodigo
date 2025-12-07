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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTKT4S5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz0KKuNO09TN1P6yZtCQD4cBu81VSEvcw0VxceDlVCqwIhAOmetDxyJv5svVOTsd8TNspZAWsBhmr5tXytqhoqWK8kKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQA0JeaNlCn6rPQK0q3AOMd0LCDpI6FdEb2KRCObOYKxRWvW869g388y8H2i%2BksotcC26k%2FmJgCHAtmZJyWYddPgM7rAo7ZMkZMdbhbJ%2FwWUntspanLkpx4GQWPyrNCvKJDMYt268oH%2FaBRI13etFuUDEJhfSR78acTaJpyZJzR0hkmC0z%2BF0TWuYd6TSd%2FPkoQtz4ZCwke9lH3CaL0rPjFVDWkFgN9YR73uGI36WsDzmX42TdauK8H78WyGBNZr7CrZMk4z8pDIKf0hvWYf60x1Mm2bDj7Ff%2BczKDGqSAmHZ136zwQXNaV%2B%2BnCsJZYOmJRTdihUqVgmnlbqLRcUNpQNZcwXkBCQM0rjDobLV%2F0LNTBECv3XPFuWs7%2FyXqP4xjr5NJFJX0OgbMDjY%2BzTIwUoSBhWR7Iyx9BCQ5%2Fin%2BXQgfrihzlQF80OlxhDpSwkvnl3ttmJAYw%2BG53aY3aXy2aq%2FCUd6QNKjDWkv%2Brhlxca1lRHpuxj39V7Tvc740c2Ez%2Bh28XPTPKm2jcu1erP8RPHv8y8bIU2LSIH5W1DLMj9uzDFyzTWuvwxJ3ws8rw3RJvUs8IyuKa3X0PqPRa5W9L9QwDy78Ii4bpjxKBgyKT2TECQTF%2FPQY41cKyAth5jEiYOcV7LTMLCO2BjCi%2FdLJBjqkAf34oNZocoWMbE5jFlMv2uQKVhzIoL0D4OTu9Tc4RVyphGNyPnvmsatMuBRFYGNJ2vgX2iCehRaETknA3pCNCYAdisKrKIWk0IfnXraU0FXhSWIKVD8bKr1mH7DMKe5ztphsxRQxqMbL%2Fs0K2yay4K%2FKsHT3yFbkYl3Nv%2FqHgXHbjMQiscfC%2B%2F%2BnSdShcqECEkE4J31rYszjgIzLlAIHHF2B5tKW&X-Amz-Signature=8cb85361ab17856205a27e1bac26b5bcb8dc5d0fa0629c2e7fd28ef1a2daeaef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTKT4S5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz0KKuNO09TN1P6yZtCQD4cBu81VSEvcw0VxceDlVCqwIhAOmetDxyJv5svVOTsd8TNspZAWsBhmr5tXytqhoqWK8kKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQA0JeaNlCn6rPQK0q3AOMd0LCDpI6FdEb2KRCObOYKxRWvW869g388y8H2i%2BksotcC26k%2FmJgCHAtmZJyWYddPgM7rAo7ZMkZMdbhbJ%2FwWUntspanLkpx4GQWPyrNCvKJDMYt268oH%2FaBRI13etFuUDEJhfSR78acTaJpyZJzR0hkmC0z%2BF0TWuYd6TSd%2FPkoQtz4ZCwke9lH3CaL0rPjFVDWkFgN9YR73uGI36WsDzmX42TdauK8H78WyGBNZr7CrZMk4z8pDIKf0hvWYf60x1Mm2bDj7Ff%2BczKDGqSAmHZ136zwQXNaV%2B%2BnCsJZYOmJRTdihUqVgmnlbqLRcUNpQNZcwXkBCQM0rjDobLV%2F0LNTBECv3XPFuWs7%2FyXqP4xjr5NJFJX0OgbMDjY%2BzTIwUoSBhWR7Iyx9BCQ5%2Fin%2BXQgfrihzlQF80OlxhDpSwkvnl3ttmJAYw%2BG53aY3aXy2aq%2FCUd6QNKjDWkv%2Brhlxca1lRHpuxj39V7Tvc740c2Ez%2Bh28XPTPKm2jcu1erP8RPHv8y8bIU2LSIH5W1DLMj9uzDFyzTWuvwxJ3ws8rw3RJvUs8IyuKa3X0PqPRa5W9L9QwDy78Ii4bpjxKBgyKT2TECQTF%2FPQY41cKyAth5jEiYOcV7LTMLCO2BjCi%2FdLJBjqkAf34oNZocoWMbE5jFlMv2uQKVhzIoL0D4OTu9Tc4RVyphGNyPnvmsatMuBRFYGNJ2vgX2iCehRaETknA3pCNCYAdisKrKIWk0IfnXraU0FXhSWIKVD8bKr1mH7DMKe5ztphsxRQxqMbL%2Fs0K2yay4K%2FKsHT3yFbkYl3Nv%2FqHgXHbjMQiscfC%2B%2F%2BnSdShcqECEkE4J31rYszjgIzLlAIHHF2B5tKW&X-Amz-Signature=62bd236b3f5fdb226683fadfee961c1b713826efe0d30b96ec2de8dde68006a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
