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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQIRTFD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwG%2FWs0LJ4u75%2BGUUtvGHr3Aw21zZ2xu9M2UV6%2FPA7YCIQDFj5grmzcOo1bzXxAqQeiGWDY%2B0Rct%2F4S%2BWi26V8sH3iqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcVhxJcl1WquxqdQGKtwDYTg5K837fqxoBOgjXPJX%2B5Jtw3iqdI5D9nJCN%2Fl4%2FelaMYMizYtRC3mTLRx%2FYaQFN2GNV37JpxUoU45SEp185vsWfSkY1%2F5ONfUy%2FuqoC7nFY%2F7CwWurxZlx%2BVOLb%2FBnvwZ0WNRVPBCgX%2BjQav9yrNDN9CDFBt7JdVcHfBC%2Be6E655XxaKRG0jcU0cTKPEpm1ceB09TmtL%2FvgEked6UTGnLC5nAnbIZGdOfTOcp23vFDMQ7%2Bn0UVUg%2BUK9PISRZpJBGmPmQUZH2EVydgkRcykyOiX0oCqicXjIUfr%2BNi1D5V%2FU56L%2FgdqtQ%2FJqn7f%2FJFeIwSXzbAFHfvZGK5P1heeWz3iLAC0ZUhJuUn8b9PPn0fP9wvT84cZpYjsmJqvOW7mDYOjwE4wnAlV62VIyIC7owVOHzPcjuzuvFBLNeIs39RhdpoJnpcOx%2FEOcrvQ881Bi21G65AN7nu37I3RBNuKnz%2F58eNPAQeDAPWsCZh21GSwa5dLoFCwvrCBi%2F6YPUDn6P4c%2FG2Nn7kpt56fsWzp5bma%2B8TOii7hREXHkC%2BddTr%2FqGByHKgY0O1l6DorsOJV90WyntxJtEaymaq9UeECbkm0MzhIe1co36XdZ6v53lTXoaVHjpYNymz5OIwkvTayQY6pgEryyxd2RuvkPlZk3dbyl4AfvA6o6BafMv%2FWTUTeIqpI1zv9JWnbo1xdfbYEMrlQnO5IZqflK7ADdHhiEK60RBPhTbNXHBI6CDCvqMbY%2BopMw9s7wDb1KrqOeRj2ODNzm%2FcfPk5KoHfRaqVhXMR9lFSLshfizRw4QMxmE%2FYDM8PI1NqXaPicTbEC5gqom8vXjx4hzMWTbS%2BVlXaZhEz4kknbbC4Okvv&X-Amz-Signature=320ae2b6ec9c8d7176b154548a45491297ba5d6b196a359cfd338c68beeab997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQIRTFD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwG%2FWs0LJ4u75%2BGUUtvGHr3Aw21zZ2xu9M2UV6%2FPA7YCIQDFj5grmzcOo1bzXxAqQeiGWDY%2B0Rct%2F4S%2BWi26V8sH3iqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcVhxJcl1WquxqdQGKtwDYTg5K837fqxoBOgjXPJX%2B5Jtw3iqdI5D9nJCN%2Fl4%2FelaMYMizYtRC3mTLRx%2FYaQFN2GNV37JpxUoU45SEp185vsWfSkY1%2F5ONfUy%2FuqoC7nFY%2F7CwWurxZlx%2BVOLb%2FBnvwZ0WNRVPBCgX%2BjQav9yrNDN9CDFBt7JdVcHfBC%2Be6E655XxaKRG0jcU0cTKPEpm1ceB09TmtL%2FvgEked6UTGnLC5nAnbIZGdOfTOcp23vFDMQ7%2Bn0UVUg%2BUK9PISRZpJBGmPmQUZH2EVydgkRcykyOiX0oCqicXjIUfr%2BNi1D5V%2FU56L%2FgdqtQ%2FJqn7f%2FJFeIwSXzbAFHfvZGK5P1heeWz3iLAC0ZUhJuUn8b9PPn0fP9wvT84cZpYjsmJqvOW7mDYOjwE4wnAlV62VIyIC7owVOHzPcjuzuvFBLNeIs39RhdpoJnpcOx%2FEOcrvQ881Bi21G65AN7nu37I3RBNuKnz%2F58eNPAQeDAPWsCZh21GSwa5dLoFCwvrCBi%2F6YPUDn6P4c%2FG2Nn7kpt56fsWzp5bma%2B8TOii7hREXHkC%2BddTr%2FqGByHKgY0O1l6DorsOJV90WyntxJtEaymaq9UeECbkm0MzhIe1co36XdZ6v53lTXoaVHjpYNymz5OIwkvTayQY6pgEryyxd2RuvkPlZk3dbyl4AfvA6o6BafMv%2FWTUTeIqpI1zv9JWnbo1xdfbYEMrlQnO5IZqflK7ADdHhiEK60RBPhTbNXHBI6CDCvqMbY%2BopMw9s7wDb1KrqOeRj2ODNzm%2FcfPk5KoHfRaqVhXMR9lFSLshfizRw4QMxmE%2FYDM8PI1NqXaPicTbEC5gqom8vXjx4hzMWTbS%2BVlXaZhEz4kknbbC4Okvv&X-Amz-Signature=1bcc460f7774bba4ddf5f83638b2810b2c9f5b14f51d7baefde071074cb1b141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
