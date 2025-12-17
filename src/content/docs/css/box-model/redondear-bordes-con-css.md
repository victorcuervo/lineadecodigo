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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOXVQ44%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtXuGiZRDhJXofa4%2BaJ1LKIvzsnKLJrO6MiHjtiStBawIhAOUpLYFfY0FKcYcTIx8dPqpVNpY3mZxubV1fevLi2ri2Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwQN7q3GXdz0oCdY8sq3AOORMIluoY2TvWjezLlzSti4GYkQVtro%2BIIY35hj%2BeYuLiB%2FtMwwooo3wGp%2BAkRD1QJQHlIFlIx52n9u6WX9wGU1vvmXG1WSjZRci06BtiTXdCM9in0fcH2PHoEgrK%2B5OlF4fBsdkLpNx%2BQs3TekBsfNwKbooTFwlekM7aT6rHl7dN2JyOHXytmw7ZCTVeGh2oXOK0tQhCL34ZRPYgFH8k2DTS%2B7YmOaNJiicwoQRMo%2BJ1hp%2FBQE92rqp%2FCtF7JXwNsvj4QsXmKpdV6IJyxIe3%2Bo5GSgPwjIQMKYCgs7GiaUZsgQWwvLSWoqw1gLOqMdlrsRzYR7IvpUEpt22WefOm7W%2BZDyGg5RiIwIbJs2yII8gZhHuzTHnOaj4mhypEQJGIS4Xfl75r5fiHuLpamzcGp23x0jFggGgyb1WGcJ3wkBTmbojRiyPKz7P7yLbOBeAOqY7KisC2v5Qi9iUCgiLNEBkAS3wJXXUyyXwqMQt%2FjNf1aGCcUSu5OieujrY8yxApkgG81sH%2FY%2FlhbedZKPi0hSv2tehGLzJKo1CB1yalc2kr4TrrGfP%2FSjdUqWAlpL2iKqTzMeJC2bJIlOtXmYs%2FXzR2jLylj%2F%2FBS8X%2FHBN4Q1IOA%2F1cYi7kWdgyJ3TDA3ofKBjqkAXxdrDuF2HPcl7lhgtyIBCeiBoVjWUlArFDK%2BOamCOFQMJx3fGy9jYpYO5wvM3W7u7zNqtfXIoG6%2FtbqSay5HwKGljh8OWi9%2BxkR1OoHclh4YGb1%2FKWDsRU9wk9Xw5r2Hhl6JNyyTSSjgy9fzfS%2Fnw082Fc9CSSz745DXWohwPxML63FCFu968aye9I0FiaOJ3u5QvoR4ueBtp8BXccs21mmXTlB&X-Amz-Signature=84467b547a365136f33d1755080d9efad7163ae606cd82ba6a5cbacc49e2686e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOXVQ44%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtXuGiZRDhJXofa4%2BaJ1LKIvzsnKLJrO6MiHjtiStBawIhAOUpLYFfY0FKcYcTIx8dPqpVNpY3mZxubV1fevLi2ri2Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwQN7q3GXdz0oCdY8sq3AOORMIluoY2TvWjezLlzSti4GYkQVtro%2BIIY35hj%2BeYuLiB%2FtMwwooo3wGp%2BAkRD1QJQHlIFlIx52n9u6WX9wGU1vvmXG1WSjZRci06BtiTXdCM9in0fcH2PHoEgrK%2B5OlF4fBsdkLpNx%2BQs3TekBsfNwKbooTFwlekM7aT6rHl7dN2JyOHXytmw7ZCTVeGh2oXOK0tQhCL34ZRPYgFH8k2DTS%2B7YmOaNJiicwoQRMo%2BJ1hp%2FBQE92rqp%2FCtF7JXwNsvj4QsXmKpdV6IJyxIe3%2Bo5GSgPwjIQMKYCgs7GiaUZsgQWwvLSWoqw1gLOqMdlrsRzYR7IvpUEpt22WefOm7W%2BZDyGg5RiIwIbJs2yII8gZhHuzTHnOaj4mhypEQJGIS4Xfl75r5fiHuLpamzcGp23x0jFggGgyb1WGcJ3wkBTmbojRiyPKz7P7yLbOBeAOqY7KisC2v5Qi9iUCgiLNEBkAS3wJXXUyyXwqMQt%2FjNf1aGCcUSu5OieujrY8yxApkgG81sH%2FY%2FlhbedZKPi0hSv2tehGLzJKo1CB1yalc2kr4TrrGfP%2FSjdUqWAlpL2iKqTzMeJC2bJIlOtXmYs%2FXzR2jLylj%2F%2FBS8X%2FHBN4Q1IOA%2F1cYi7kWdgyJ3TDA3ofKBjqkAXxdrDuF2HPcl7lhgtyIBCeiBoVjWUlArFDK%2BOamCOFQMJx3fGy9jYpYO5wvM3W7u7zNqtfXIoG6%2FtbqSay5HwKGljh8OWi9%2BxkR1OoHclh4YGb1%2FKWDsRU9wk9Xw5r2Hhl6JNyyTSSjgy9fzfS%2Fnw082Fc9CSSz745DXWohwPxML63FCFu968aye9I0FiaOJ3u5QvoR4ueBtp8BXccs21mmXTlB&X-Amz-Signature=606bda29ce8622a139a63be475e27fb67d55daf6fbe4bc8e6cab23fc0af0bd15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
