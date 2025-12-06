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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOZEI5W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FZKq5OfdhUmIuEP5KcjbZoixeoXB0QfHdVOlmbT1yYAiEA%2FHKylS0v7yR2YKmVfMQLpq1ih3Y59w8O88nAjGt9%2Bxkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEmzdjuK3HdjH4j1uSrcA0hIKlNNcJTcpqOqpHPJoyga0vxEVZ8q%2FMbsw33FpHVdv1xCDqxhAMdO8anf7DkopGkkGtYoC%2B4d8bV%2FVt%2FDNGKHfX6L4kXvC9chEf2dvW5m8lb%2BZFltYPn2Tkk9i7VCKBt3R2YJUUv7Mr3b9JdUCJI8drD0vdLAGNHNGLHDj5p0XqLhypLVcGszjf7bObtm7HNMZkzkGs9pU47mObGkT9Z%2FfzWuGH%2FQoLV0dFJUqDwEqxP2X9L8ulZJRivn8ZP0BJm2QJdcxcB8Ilho0TKggsaqwgNQXBXjvIFVv3%2BbtmJ3IIPcVkcV5H86EnS9aeIiqXs3T5poEPR%2ByY2oAbXY6B4rQ7Bkc7O2zuFbmdN5W4Q2H7As83bkWXEAOFmY689bkBcFBl0jaz2MJxAmdiRigCMdscqZeSzVvqL9EAGqgCGSrgy6aFfn0cDIgQ24YE2a675zf4Vp6Age9kZxOB1nir8sA7vasn9DUbGoG1n%2BFsw%2FntugMyeEuK0ET6gEWvpusdXwdvOhk27MJ9St6FGjb2T1RyBR%2FRDypL3oX0QDSMjW4DMtTqUmwYQoC9xS8CDiQ0nIntmpleEU68t2j59OrC83TrTqw5YClE4xG4aWJd%2FsouBoJwq3zfK%2F%2FpTLMOmG0skGOqUBxKxKt4%2FarxHcTPUHl5dRKGqJrzgh3bTtxgslVDAsuQV1bfy9XDUhgsb0axEU2Pq4OTrUb6Bi8BDwC2Q5GZnB6a197Oeu9O5CyA%2F9ZnMHM73nNWowSL8%2FV9PJYk65vVe5V521BuMnDDFUxH%2FYipsccZuq8k5%2BNXhwgWsRsR5Fa3dOLavBayzwfLkHA23kfMWVY5HgYbCugMwsr7Wbckx7BWZr6%2Bw2&X-Amz-Signature=fb683f960600878df2bf6027bcf07a8dcc78f10425f14fa34cba773632c59598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOZEI5W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FZKq5OfdhUmIuEP5KcjbZoixeoXB0QfHdVOlmbT1yYAiEA%2FHKylS0v7yR2YKmVfMQLpq1ih3Y59w8O88nAjGt9%2Bxkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEmzdjuK3HdjH4j1uSrcA0hIKlNNcJTcpqOqpHPJoyga0vxEVZ8q%2FMbsw33FpHVdv1xCDqxhAMdO8anf7DkopGkkGtYoC%2B4d8bV%2FVt%2FDNGKHfX6L4kXvC9chEf2dvW5m8lb%2BZFltYPn2Tkk9i7VCKBt3R2YJUUv7Mr3b9JdUCJI8drD0vdLAGNHNGLHDj5p0XqLhypLVcGszjf7bObtm7HNMZkzkGs9pU47mObGkT9Z%2FfzWuGH%2FQoLV0dFJUqDwEqxP2X9L8ulZJRivn8ZP0BJm2QJdcxcB8Ilho0TKggsaqwgNQXBXjvIFVv3%2BbtmJ3IIPcVkcV5H86EnS9aeIiqXs3T5poEPR%2ByY2oAbXY6B4rQ7Bkc7O2zuFbmdN5W4Q2H7As83bkWXEAOFmY689bkBcFBl0jaz2MJxAmdiRigCMdscqZeSzVvqL9EAGqgCGSrgy6aFfn0cDIgQ24YE2a675zf4Vp6Age9kZxOB1nir8sA7vasn9DUbGoG1n%2BFsw%2FntugMyeEuK0ET6gEWvpusdXwdvOhk27MJ9St6FGjb2T1RyBR%2FRDypL3oX0QDSMjW4DMtTqUmwYQoC9xS8CDiQ0nIntmpleEU68t2j59OrC83TrTqw5YClE4xG4aWJd%2FsouBoJwq3zfK%2F%2FpTLMOmG0skGOqUBxKxKt4%2FarxHcTPUHl5dRKGqJrzgh3bTtxgslVDAsuQV1bfy9XDUhgsb0axEU2Pq4OTrUb6Bi8BDwC2Q5GZnB6a197Oeu9O5CyA%2F9ZnMHM73nNWowSL8%2FV9PJYk65vVe5V521BuMnDDFUxH%2FYipsccZuq8k5%2BNXhwgWsRsR5Fa3dOLavBayzwfLkHA23kfMWVY5HgYbCugMwsr7Wbckx7BWZr6%2Bw2&X-Amz-Signature=af34ac931a22237ff40dca67519e72ec905d81f5208870f55e2714f6f90e147c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
