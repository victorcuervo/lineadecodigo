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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUHNSIQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTuY0b%2FJhXR1RkIuVrYbR7chYaag%2FTST1%2FFCnqcRRxhAIgVVjYRRE0yFtVq%2BaSjxMJagVlsoOoiZ1Nh3jYjnP316AqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkAkBogjHu3zonCNCrcAxfH%2BBoIH1hsbmGtnQvHcmsBtLOqjDTl5KmRRTJq6s5n0fOyCpXJItCic2SfhAIzU6WSOdcJH9rAFwGfaN%2FawO9hk48TmlBEz6vnBDqMGjCIOSG3BI5diz2dZY%2BMl%2BfCeI55bVVlKFCVLJCnOp20nl%2FLl9Njq9AYmx8Q%2F1IHIYpZJnn5UVnYtJmpDiPcGg50WdSq1vegD%2Bq7xGWZ91SuEGtR3EPerK2yPCRRa4X0xMlbQfzLJdqowlNlt6VeRw49D2OFFVjzJ%2BNp1qDjw%2FF7%2BfyXUnXJbhjIH8xs7SmwgwjksnHU0RvsYaY7UWFmKkgykKkdEZw8VqgPo8ddZHpuFNOaSiVdc9djz%2BkRvU1Htq%2BLXaY1lsl%2BDJ6THwg2%2F7nXzSCEbIz6Tsim9u08q%2BzCEUe3cEmqrzqBF%2BQ6SDWnmOhH%2BKLI1AbddRWYPsbH68qYBOj4zTxlHTjjUSsYxdDeiUQq4GekWKdR%2BmPBdEOD1oxtmHGrsAebRvsGEw4uTm3MPHlZQ6SwzdMhRDT8T2kMuFxrrYCrAm9992Ly52tDwm8Y7b2SeumT5YyRWvnvlarfceBkloIURVMo0xBWSFriG%2BA81gMXCj430t6ACm8K3CzRi2LSAdfS0i67sXqHMNPl3skGOqUBmhzu%2FD6nPo4EPwqASxrEB8v%2Fbctdrj7RwoO8%2BFjjIwh6t8JZB9g%2F0nKoZnWT%2B6kmtpLNpnqLUhqmW7uw2YJJj6MsFnsT2xQv2k2rfENOXVKebRac8ctq1nL1J69dsnnx6SDmwvO0U619RbUCKkxjTzweF2fX1FDq3u9HIpdLECxS7x82leI2Ipxd2bYcT76Hp2o%2FStRVCi2maJUNW9e3Rds4TGkU&X-Amz-Signature=7e62844cbdb7f2d51c34c079a200f4c2f3f2fecfe07fd831f9e2256cf76e0ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUHNSIQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTuY0b%2FJhXR1RkIuVrYbR7chYaag%2FTST1%2FFCnqcRRxhAIgVVjYRRE0yFtVq%2BaSjxMJagVlsoOoiZ1Nh3jYjnP316AqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkAkBogjHu3zonCNCrcAxfH%2BBoIH1hsbmGtnQvHcmsBtLOqjDTl5KmRRTJq6s5n0fOyCpXJItCic2SfhAIzU6WSOdcJH9rAFwGfaN%2FawO9hk48TmlBEz6vnBDqMGjCIOSG3BI5diz2dZY%2BMl%2BfCeI55bVVlKFCVLJCnOp20nl%2FLl9Njq9AYmx8Q%2F1IHIYpZJnn5UVnYtJmpDiPcGg50WdSq1vegD%2Bq7xGWZ91SuEGtR3EPerK2yPCRRa4X0xMlbQfzLJdqowlNlt6VeRw49D2OFFVjzJ%2BNp1qDjw%2FF7%2BfyXUnXJbhjIH8xs7SmwgwjksnHU0RvsYaY7UWFmKkgykKkdEZw8VqgPo8ddZHpuFNOaSiVdc9djz%2BkRvU1Htq%2BLXaY1lsl%2BDJ6THwg2%2F7nXzSCEbIz6Tsim9u08q%2BzCEUe3cEmqrzqBF%2BQ6SDWnmOhH%2BKLI1AbddRWYPsbH68qYBOj4zTxlHTjjUSsYxdDeiUQq4GekWKdR%2BmPBdEOD1oxtmHGrsAebRvsGEw4uTm3MPHlZQ6SwzdMhRDT8T2kMuFxrrYCrAm9992Ly52tDwm8Y7b2SeumT5YyRWvnvlarfceBkloIURVMo0xBWSFriG%2BA81gMXCj430t6ACm8K3CzRi2LSAdfS0i67sXqHMNPl3skGOqUBmhzu%2FD6nPo4EPwqASxrEB8v%2Fbctdrj7RwoO8%2BFjjIwh6t8JZB9g%2F0nKoZnWT%2B6kmtpLNpnqLUhqmW7uw2YJJj6MsFnsT2xQv2k2rfENOXVKebRac8ctq1nL1J69dsnnx6SDmwvO0U619RbUCKkxjTzweF2fX1FDq3u9HIpdLECxS7x82leI2Ipxd2bYcT76Hp2o%2FStRVCi2maJUNW9e3Rds4TGkU&X-Amz-Signature=bb1dbc8814a4c33f4a587628069735df56ff771bdd4990871f3a023882198d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
