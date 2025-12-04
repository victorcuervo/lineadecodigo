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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNBT3T5J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC%2FcIXEQehlY2TXoK%2F3xhoMqhBegQO%2F%2BjqYX2WUMTkN1gIgHTFsIdlimbw6WoYIXfLrjrqiy%2BH6SJW%2BsstpiNjnjisq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEWQeV1WqSnn4ukDESrcA26Du5pDaTBmnB2P9DfBxMWp%2By1VJr%2FeU7N8DKTusrHBWBFzQ1rh7k%2BCv9YB9GRVucQ4fZ5fFuEHqK3affx%2BMQu%2FsIcEKuzj5SaEhonH6oTbFWEIn%2BoOO4enm31IJG33UhluSxSl31R5f2fc603AOR92%2BdUmNAcwaI5NZNMM8ZhiNBKoHiutvVIxecYZLS3ZPOxvEU7mAK%2BPWvppxdZsPgS3UFHw6tx6RfrFie7XG9O0s3QFYS8GKzGMyDiuTQd5E7HNTVLRNKVxQlDsOCnael2cUOZ9x4iM3oiRkDVXWFKRGPMWTk4NeJ1vluJPRjDnK3HtAm8%2BU%2BTkXW0kVC7pZcGee0i8cwYjZL4Vt2F16L38cHNmkCNay7I34ndmWwlLb3UVg9o%2FJYEoxMM4vf5DcqTbU1LRv9i%2BlpVzKgGAbJQs9hdrVzfK0buTY0ZG6MZawyrFYD%2FgoZ3zjXyN1147Uc83GkR1MACnxpE0pXCeka6eiZNK8Ei4irFHQsdrn%2FlTlreECzZhY0ha%2Bnj%2BK0uorEYiHZhMUA4Hf5V3wDmsDrj4fNEakix%2BdqUx5XBuzcmyfdTQYz7K12rqqGy3tX5Btx27lniDm8M5QpgtFMtCyUarH8QxYlHL06nk8JmSMJKixskGOqUBPpSCSh%2Bc%2BJ7%2BuuLB5EZWrwRmBc7pnWmOeW79Oe7d%2BIFSO49EZdYDU37p%2Bse5GjWQ%2BZgDCLh%2BJZ34Bgwl03A7Uz5bzzjJ8KPvryTln9uRd0ZDhcmjE8gHQPGiuKiFRwi2oblkAa%2FkCww1kkaX98atpJBd582PYlcK%2FyH%2B4KSm%2FLV6UB%2FhDSwHo4HX2Os1HTkT96N83wE2XqEujo4EekmIiM3pb8go&X-Amz-Signature=1e8f14dd5856a542a3e9552f3764f22fd6c05950c30b7e0aaae431e7808b0f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNBT3T5J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC%2FcIXEQehlY2TXoK%2F3xhoMqhBegQO%2F%2BjqYX2WUMTkN1gIgHTFsIdlimbw6WoYIXfLrjrqiy%2BH6SJW%2BsstpiNjnjisq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEWQeV1WqSnn4ukDESrcA26Du5pDaTBmnB2P9DfBxMWp%2By1VJr%2FeU7N8DKTusrHBWBFzQ1rh7k%2BCv9YB9GRVucQ4fZ5fFuEHqK3affx%2BMQu%2FsIcEKuzj5SaEhonH6oTbFWEIn%2BoOO4enm31IJG33UhluSxSl31R5f2fc603AOR92%2BdUmNAcwaI5NZNMM8ZhiNBKoHiutvVIxecYZLS3ZPOxvEU7mAK%2BPWvppxdZsPgS3UFHw6tx6RfrFie7XG9O0s3QFYS8GKzGMyDiuTQd5E7HNTVLRNKVxQlDsOCnael2cUOZ9x4iM3oiRkDVXWFKRGPMWTk4NeJ1vluJPRjDnK3HtAm8%2BU%2BTkXW0kVC7pZcGee0i8cwYjZL4Vt2F16L38cHNmkCNay7I34ndmWwlLb3UVg9o%2FJYEoxMM4vf5DcqTbU1LRv9i%2BlpVzKgGAbJQs9hdrVzfK0buTY0ZG6MZawyrFYD%2FgoZ3zjXyN1147Uc83GkR1MACnxpE0pXCeka6eiZNK8Ei4irFHQsdrn%2FlTlreECzZhY0ha%2Bnj%2BK0uorEYiHZhMUA4Hf5V3wDmsDrj4fNEakix%2BdqUx5XBuzcmyfdTQYz7K12rqqGy3tX5Btx27lniDm8M5QpgtFMtCyUarH8QxYlHL06nk8JmSMJKixskGOqUBPpSCSh%2Bc%2BJ7%2BuuLB5EZWrwRmBc7pnWmOeW79Oe7d%2BIFSO49EZdYDU37p%2Bse5GjWQ%2BZgDCLh%2BJZ34Bgwl03A7Uz5bzzjJ8KPvryTln9uRd0ZDhcmjE8gHQPGiuKiFRwi2oblkAa%2FkCww1kkaX98atpJBd582PYlcK%2FyH%2B4KSm%2FLV6UB%2FhDSwHo4HX2Os1HTkT96N83wE2XqEujo4EekmIiM3pb8go&X-Amz-Signature=864203517cf8913f2567a960a12d66fc8405e7d9f374bd4162f0e3e2e3c5e55e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
