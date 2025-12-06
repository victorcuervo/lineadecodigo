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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZT4FCJS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe0h8aA4baXPmxvwujyAKVwBeEUyWUDeNHukpOabDF0AiByxvShO338jm1qJJuY%2FXM%2BQ%2BewX%2BOa9jRmvX6e3e%2BQKSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMsqt7hMD%2Fe2%2BEg0KdKtwD2Dxv1PQ5aNS9%2FqvjgYs2Tx9U1niBpJCvIQoBKYCsQ%2FkWC85GC%2BePjI1PqzT9koHyyRRbb%2FP338uFuGw5wC9TQjEdwU40sVbwfThQEkcrYK824kJjb4y%2FqqeaNTj0kkFZf5VXCdLCUNTyaIb0Bnc55c5aH7Dlb0jXYscfvC5itTq6sMTbvjRC8prMmzgds9eo6%2FR3tDgPqsPoc4i0pbyDwx3QEPvJDSoE5OJJptodJejP%2B%2F1ivsBfh34Wvo0kQXyUgE%2Fj5sCSVWG%2BRvHnCm6I4oLSPEpLdAY8ZBirqA13KuLxkMLdAOYvsWv178MmgMKFnqCDeqXbkLIUF3whOULYQ2EqpHO2L15GulEufmvthVnnnwsGLdaSIiok%2BJuEkN0H9afbWwwcUdA2HDeJckjTO%2FFAXR4FKqP35KYCfI4tnkm8p%2FGLmIqctJuMR15PCyZ97NO4IZarLrT4Bdgml79a8Ul2i5FOiosTwvlUyrJ4kfA8fNLGAEwJz5KWWI%2FHNv2t%2BsPEGVFERxDQiCoc3afxhNAuQgVPA3nrv35T5YCi556OhyVZaC%2BEhdh91wkv%2B2rOWClWjenZCe9aAXyO4kDPoQg0vOJJqz4KXdTn0hR7PY%2B8D4%2BgnCJUm2U7xCIw8p7PyQY6pgEDwaG2ipd9fw7x3CyO7Jmus53Gktd8t%2BY728uYBQZSIiaTqCEXIxj5Ro8coV4vAORqZIX4aS8ZpZuLeJhfX7HkHOoJP3sXfff6IQy3ffX569rTxuc%2BpPnibfb8Mhe0bmGu%2BfOcQGuAWNkot%2FhkKgfaB%2FSUyVUVgUMaZaKMeXYtvhffPE39Q%2F2ncKnfsek8Wus7%2BDi0gXgLCSSTwxAkL6k9iPc41Ctf&X-Amz-Signature=858a582fa8a404b739475de2377b6070d34f7e7c8743e83303d31b5ea359bb43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZT4FCJS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe0h8aA4baXPmxvwujyAKVwBeEUyWUDeNHukpOabDF0AiByxvShO338jm1qJJuY%2FXM%2BQ%2BewX%2BOa9jRmvX6e3e%2BQKSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMsqt7hMD%2Fe2%2BEg0KdKtwD2Dxv1PQ5aNS9%2FqvjgYs2Tx9U1niBpJCvIQoBKYCsQ%2FkWC85GC%2BePjI1PqzT9koHyyRRbb%2FP338uFuGw5wC9TQjEdwU40sVbwfThQEkcrYK824kJjb4y%2FqqeaNTj0kkFZf5VXCdLCUNTyaIb0Bnc55c5aH7Dlb0jXYscfvC5itTq6sMTbvjRC8prMmzgds9eo6%2FR3tDgPqsPoc4i0pbyDwx3QEPvJDSoE5OJJptodJejP%2B%2F1ivsBfh34Wvo0kQXyUgE%2Fj5sCSVWG%2BRvHnCm6I4oLSPEpLdAY8ZBirqA13KuLxkMLdAOYvsWv178MmgMKFnqCDeqXbkLIUF3whOULYQ2EqpHO2L15GulEufmvthVnnnwsGLdaSIiok%2BJuEkN0H9afbWwwcUdA2HDeJckjTO%2FFAXR4FKqP35KYCfI4tnkm8p%2FGLmIqctJuMR15PCyZ97NO4IZarLrT4Bdgml79a8Ul2i5FOiosTwvlUyrJ4kfA8fNLGAEwJz5KWWI%2FHNv2t%2BsPEGVFERxDQiCoc3afxhNAuQgVPA3nrv35T5YCi556OhyVZaC%2BEhdh91wkv%2B2rOWClWjenZCe9aAXyO4kDPoQg0vOJJqz4KXdTn0hR7PY%2B8D4%2BgnCJUm2U7xCIw8p7PyQY6pgEDwaG2ipd9fw7x3CyO7Jmus53Gktd8t%2BY728uYBQZSIiaTqCEXIxj5Ro8coV4vAORqZIX4aS8ZpZuLeJhfX7HkHOoJP3sXfff6IQy3ffX569rTxuc%2BpPnibfb8Mhe0bmGu%2BfOcQGuAWNkot%2FhkKgfaB%2FSUyVUVgUMaZaKMeXYtvhffPE39Q%2F2ncKnfsek8Wus7%2BDi0gXgLCSSTwxAkL6k9iPc41Ctf&X-Amz-Signature=213956b9f1da647553f7e2cf26eb75385fc4659d371f0efd2fd7ba0515a3a6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
