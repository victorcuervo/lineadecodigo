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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU5V5GCN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxPIze8rjJXvHTog5LxqK7LClla4ObD%2BUFGtnC09VJDAiEAnUAcOH%2FFXmxRUOnoiX7RMg9qIPq3MFbZY%2Ffm0VB35Zsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDExulEq%2B8I%2Bv3tnpJyrcAxCP1MgmVlszNCC07ycQ3VAQJPNUydCZzcfv1kK1IotDEEL%2Fjnbd7L9jP9StRHtj8N5Bwh6UNvgo0siouigoyibERX67NmnKciGRnRJI1tOcnhyNn8Ge3hzaI%2BtbmKZJOHNoIPE1PNxWcKsv9Ofna9q1d89Bq1QYJISwiPzydDYpvu1VCQwuqQmfs9NWg5IAuxdaKdM300tDiJpe7yM%2B%2B0%2BUjFa41aZheFa0WziQYE0ZVNiook1541AryWUpYzHDIa%2BMl9LQFeFqopwwwuSPTbBSGrO0Ob8ohMnfsdDyIOhw4DxRTJwwsrvn3GVTsEUqritbHHz6e0lDSZ6UmoQHg0mHl0GwBz27WHRYTAl9F5I1yYKRF8LeoCVdJzo6IRzAlmFdMdkO%2F1A%2F931S5RSAq8jNbWdSQ1frAeSiGgXxGZ8axom3zfGsJqnQ0FegA9M4zXPizLaQHSQgPhKm83mSi0GdmNSv2pfvmqjz4itqJzRv%2F64URQzZufcHlv3nOQ5LGZ5l8yo6uqD9sAZcn0bwmW1YkI895o%2F5svMKFlPtPOs3wU14Ll%2FB4IWkZDUnTva4jkvaJmx5gk%2Fw1MYDmc92kpx5jLhgfRcfxBQuaMSHjnsCixUEVxqKMaBfH45HMMCdicoGOqUBPRRd9x1K%2Ftrc835Xp1fux0R%2BBLm3OOXvxR8VZ23IQ8N77UUl9PU7NwwTA2IxpsUKU5woO4ulA68luo5vTIKo8rAlitutvYqphoA6FC9tQLpot6s8iFUCAzb63gh1BpxA7gfu%2BBTuj7EPeskR8LqE%2Buqlu1QJt9CAjReHZV7ocWl7m39vCvrpAdXrQw%2FLD66GJPTf%2Fhgz1w4Y%2FwbN%2FLb9AyJv%2FxBn&X-Amz-Signature=d8fc79b1696ffdb716588fb6aaa7f5bf070b5a3facaa2590d970158cf457a937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU5V5GCN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxPIze8rjJXvHTog5LxqK7LClla4ObD%2BUFGtnC09VJDAiEAnUAcOH%2FFXmxRUOnoiX7RMg9qIPq3MFbZY%2Ffm0VB35Zsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDExulEq%2B8I%2Bv3tnpJyrcAxCP1MgmVlszNCC07ycQ3VAQJPNUydCZzcfv1kK1IotDEEL%2Fjnbd7L9jP9StRHtj8N5Bwh6UNvgo0siouigoyibERX67NmnKciGRnRJI1tOcnhyNn8Ge3hzaI%2BtbmKZJOHNoIPE1PNxWcKsv9Ofna9q1d89Bq1QYJISwiPzydDYpvu1VCQwuqQmfs9NWg5IAuxdaKdM300tDiJpe7yM%2B%2B0%2BUjFa41aZheFa0WziQYE0ZVNiook1541AryWUpYzHDIa%2BMl9LQFeFqopwwwuSPTbBSGrO0Ob8ohMnfsdDyIOhw4DxRTJwwsrvn3GVTsEUqritbHHz6e0lDSZ6UmoQHg0mHl0GwBz27WHRYTAl9F5I1yYKRF8LeoCVdJzo6IRzAlmFdMdkO%2F1A%2F931S5RSAq8jNbWdSQ1frAeSiGgXxGZ8axom3zfGsJqnQ0FegA9M4zXPizLaQHSQgPhKm83mSi0GdmNSv2pfvmqjz4itqJzRv%2F64URQzZufcHlv3nOQ5LGZ5l8yo6uqD9sAZcn0bwmW1YkI895o%2F5svMKFlPtPOs3wU14Ll%2FB4IWkZDUnTva4jkvaJmx5gk%2Fw1MYDmc92kpx5jLhgfRcfxBQuaMSHjnsCixUEVxqKMaBfH45HMMCdicoGOqUBPRRd9x1K%2Ftrc835Xp1fux0R%2BBLm3OOXvxR8VZ23IQ8N77UUl9PU7NwwTA2IxpsUKU5woO4ulA68luo5vTIKo8rAlitutvYqphoA6FC9tQLpot6s8iFUCAzb63gh1BpxA7gfu%2BBTuj7EPeskR8LqE%2Buqlu1QJt9CAjReHZV7ocWl7m39vCvrpAdXrQw%2FLD66GJPTf%2Fhgz1w4Y%2FwbN%2FLb9AyJv%2FxBn&X-Amz-Signature=4cb96717310db04befbb451083888908b85ef57c56bd6eafd43af31d357ce4c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
