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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TIERABJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEtt4En4lRPjb1No4Ifgto5mvtogNSti4ht5Q8MPvqtQIgawIVSsveVb31DxJr0gU7ah%2BVukbe1olROMq0B7EN6esq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGDQjkI1ULlxVymSzSrcAw%2F7OZFugyIkkrhGeRcjaY6FY3SKQBm7W7vXv0XcPuR%2FHxM4DU58yFPCKDW1NxlIM9gCVzDoSOdyf05Ppvb6Hz52slRuHQP%2B1fZeStkf9Wj9VZGfyqbW0bQs4JPUL0LfoXd18%2B4dTo7ECOgzHI%2B9rek9CFFVIXa7fQDo5kMKsUcrjAd8kwuHhbEcdmx3RWrxHQkj6Ri3twFxAdh0yHc9F2wGu3BCu%2BX43Q%2FJ1OrIShODYinBGU72owp15CDa8jtRzCkD0gbFckDkPErrmHS699z2D09P0I1KGgxuVImdrUO6Zf0M6gsFac0GoZ%2FJn4YUymlb34uR%2BU%2FTTHIpeKvgH7pVhyqfspSjdDLN6uUmp4FsY0DCvDcv9YW53Pn5Y%2FMo6uUXl5v4QMoil5PhlyZ5E0W913BI3ZS6zKp5Q5UGIbQDjnGZHHicB9Wx04SFlopkDfvigk6jHhi9EBQjLQwSZ93CSWPKQ5jEbUckVP8qmzrjW4Oymw5bH8mQrVAhXjI15qroH%2Fd9Spz%2BEuFMzEjw%2FLdMYIDQzC1ZL88cLXx0bVMYSTjCOdiYsHGB0Qav4OPsWEJQ%2FxJPGzlcq5O9be8KVu8zMTANwuGpyimJ7T1JWA%2FKouLwLHbQjdscmR3DMJ7jisoGOqUBUvvX8S3R7SWGYmFN%2BDl3MGXCwcpfPy2NuFWYqMrCqvD%2B15wYlsf7uVz0HsvBEwIcFZvTtZqz4x36qrCEf4A%2BpSsTYp%2FKktf%2BEad8eXo3PWH5EeOoxKxS5dqSkxlbD2ua%2F%2B54AkRAKQ2ird2YoqM%2BbtEgtYCRlESrFih0yoNQO6VpCk%2FhvLkTlL%2Fuf2IRUiABdyjtKAZ3suV%2F%2Fv5JYuaCOqW9sy5J&X-Amz-Signature=58cefd9387061f198008dd6ae946ec513dfc30c8ed19a38a850d98c7ceaf34d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TIERABJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEtt4En4lRPjb1No4Ifgto5mvtogNSti4ht5Q8MPvqtQIgawIVSsveVb31DxJr0gU7ah%2BVukbe1olROMq0B7EN6esq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGDQjkI1ULlxVymSzSrcAw%2F7OZFugyIkkrhGeRcjaY6FY3SKQBm7W7vXv0XcPuR%2FHxM4DU58yFPCKDW1NxlIM9gCVzDoSOdyf05Ppvb6Hz52slRuHQP%2B1fZeStkf9Wj9VZGfyqbW0bQs4JPUL0LfoXd18%2B4dTo7ECOgzHI%2B9rek9CFFVIXa7fQDo5kMKsUcrjAd8kwuHhbEcdmx3RWrxHQkj6Ri3twFxAdh0yHc9F2wGu3BCu%2BX43Q%2FJ1OrIShODYinBGU72owp15CDa8jtRzCkD0gbFckDkPErrmHS699z2D09P0I1KGgxuVImdrUO6Zf0M6gsFac0GoZ%2FJn4YUymlb34uR%2BU%2FTTHIpeKvgH7pVhyqfspSjdDLN6uUmp4FsY0DCvDcv9YW53Pn5Y%2FMo6uUXl5v4QMoil5PhlyZ5E0W913BI3ZS6zKp5Q5UGIbQDjnGZHHicB9Wx04SFlopkDfvigk6jHhi9EBQjLQwSZ93CSWPKQ5jEbUckVP8qmzrjW4Oymw5bH8mQrVAhXjI15qroH%2Fd9Spz%2BEuFMzEjw%2FLdMYIDQzC1ZL88cLXx0bVMYSTjCOdiYsHGB0Qav4OPsWEJQ%2FxJPGzlcq5O9be8KVu8zMTANwuGpyimJ7T1JWA%2FKouLwLHbQjdscmR3DMJ7jisoGOqUBUvvX8S3R7SWGYmFN%2BDl3MGXCwcpfPy2NuFWYqMrCqvD%2B15wYlsf7uVz0HsvBEwIcFZvTtZqz4x36qrCEf4A%2BpSsTYp%2FKktf%2BEad8eXo3PWH5EeOoxKxS5dqSkxlbD2ua%2F%2B54AkRAKQ2ird2YoqM%2BbtEgtYCRlESrFih0yoNQO6VpCk%2FhvLkTlL%2Fuf2IRUiABdyjtKAZ3suV%2F%2Fv5JYuaCOqW9sy5J&X-Amz-Signature=a715d348d1866064952e53f5b0fc0448f9b34f4b5ee50063007f95b599a0c2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
