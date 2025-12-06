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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMA4IQG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQKkm9InzXyJYpipORBCGGwkA1SIdvWwKUnkjUqROTZAIgagD9zeMaz4n8pYh15B5XkCxRPUVrWX92XEu5GrV6qOEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPkGeJ%2FRaR1wT52VbyrcA6lAka3fubeChsX59vebH3bhSiEwj5qx1lhfaAA631Jr9POO1jDUvrfHS5Je2fMYbse5629MeVStOjBH6GweJ%2Fvz%2FIhTUnGSX4JEpIfFOCyhRedHl9ycuuGFpyCbRnNN9AmwVgPzFe9pvK5B5K6Ctc%2BmapZX0TWexXx%2BjFQPsN6%2Be4n23uz9Z7O%2Bo6nKQJxfkaxc%2Fz5tMWIvUNNUDJXIKOrF1KIWnxudU2ZLiswl9m2Vtp4fsog4mVomkEFXIfUstnkM933dlf%2FHK6my%2BHq1gsgwvIvKlGcfzSu809R6bfZqm1OmBk%2FBNb1yqOIGQqFW9JSGo61X1scoQGj8Br%2Fqij3aLkoHSQDP%2B%2BwHdMqyJdrE%2Fu1uN9SyI%2BMr9CTGzDIMS8WbF7R5w%2FZATaJ1tgMpB7zUETV4LfESMgOo%2BEj0HaJaD01Zdlqt9KBIT%2Fa9WN6CQZXMqsMS9pKKjkQn2kHIcd15j%2F2%2BbfKswP4FqkMKwW8bsfn1MvlywqmTk0Y4i3FVJsjmFoXHJCzmAXUP8%2FtRQdA%2FDPyzKdqz1F8Ccv6wIgZ3prinbAaLSQxYdEQBkbh9c%2F1NxALXC5qbDgxai8KyPYOAP70fpDGMIjwqLtK%2FqSksT6FEDB%2Fz2dRvtZybMMTT0skGOqUBoMNtbrnNsD6sOWggxDpurxp2MZh2GNs3l4I0xg3iUuMsBMKaTPahWQBKmtbuhQ1pbD8SNTWy01MQn3tNvKmUtxtSxvDC1wKL31a2XphZWI8j44lGhzC6RePZGv4DVgj9iy941%2B%2FfnMRARXmXkqPbep6XxseA4BbR0BWj5PJG6Fyod4c44JMo1YCE6uwO9Hej8Dfs1iQ1gstlJM1YsEXng9nzEvIP&X-Amz-Signature=30a96be588fca33e48de26a54cd1fbe166a1028f98e24bf540b5a223546e4ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMA4IQG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQKkm9InzXyJYpipORBCGGwkA1SIdvWwKUnkjUqROTZAIgagD9zeMaz4n8pYh15B5XkCxRPUVrWX92XEu5GrV6qOEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPkGeJ%2FRaR1wT52VbyrcA6lAka3fubeChsX59vebH3bhSiEwj5qx1lhfaAA631Jr9POO1jDUvrfHS5Je2fMYbse5629MeVStOjBH6GweJ%2Fvz%2FIhTUnGSX4JEpIfFOCyhRedHl9ycuuGFpyCbRnNN9AmwVgPzFe9pvK5B5K6Ctc%2BmapZX0TWexXx%2BjFQPsN6%2Be4n23uz9Z7O%2Bo6nKQJxfkaxc%2Fz5tMWIvUNNUDJXIKOrF1KIWnxudU2ZLiswl9m2Vtp4fsog4mVomkEFXIfUstnkM933dlf%2FHK6my%2BHq1gsgwvIvKlGcfzSu809R6bfZqm1OmBk%2FBNb1yqOIGQqFW9JSGo61X1scoQGj8Br%2Fqij3aLkoHSQDP%2B%2BwHdMqyJdrE%2Fu1uN9SyI%2BMr9CTGzDIMS8WbF7R5w%2FZATaJ1tgMpB7zUETV4LfESMgOo%2BEj0HaJaD01Zdlqt9KBIT%2Fa9WN6CQZXMqsMS9pKKjkQn2kHIcd15j%2F2%2BbfKswP4FqkMKwW8bsfn1MvlywqmTk0Y4i3FVJsjmFoXHJCzmAXUP8%2FtRQdA%2FDPyzKdqz1F8Ccv6wIgZ3prinbAaLSQxYdEQBkbh9c%2F1NxALXC5qbDgxai8KyPYOAP70fpDGMIjwqLtK%2FqSksT6FEDB%2Fz2dRvtZybMMTT0skGOqUBoMNtbrnNsD6sOWggxDpurxp2MZh2GNs3l4I0xg3iUuMsBMKaTPahWQBKmtbuhQ1pbD8SNTWy01MQn3tNvKmUtxtSxvDC1wKL31a2XphZWI8j44lGhzC6RePZGv4DVgj9iy941%2B%2FfnMRARXmXkqPbep6XxseA4BbR0BWj5PJG6Fyod4c44JMo1YCE6uwO9Hej8Dfs1iQ1gstlJM1YsEXng9nzEvIP&X-Amz-Signature=a136a47e6ab20d25123da2b5243428e7dbf46fbe27aeee0adffc5e6a9b1bc723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
