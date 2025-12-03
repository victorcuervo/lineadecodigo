---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GULEWFX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICFixDRYi8vhyuyeRC9VYvpsZuYLqO6PQlGoMnxDpFqZAiEArBCtVypf%2BvBbpg3Tmmj4x9Q0%2BYpx59u4WBuuKNWY%2B3gq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNwS6oVCIEztZUNA0SrcA3PHh6vh96kcVh3WijdiFrfGs7vdokOzYj0PQaSE8vBHB4s39zfZxJnicnvrZJmPwQhkZY3CDlb0mkBS%2FfXk%2FDWHh2wtyR8yhyoKOXXuXORGkyKDKaSieyrtzOqLcIIrUF2K1Z%2BqH1CPjLbZdgTSGhfUvQNZL9lpqft3GQqqQo%2BdnGosCxYRcIQx6k9YLut5P8E5kH2EBgAQD2hj%2FZSd4HwQJeVj45SqJcYzWeSKVfgprCJLmrr9IZgCJiYY4v3ah1btGMQOeEI69htkrmi7Yft0CiO7jmIDHQUfMLNGZOpMS4Pmsp8AV0WqKLJyD%2F2c5SLRuSb2SEbctE0gDm1tcprVF6ip2EJt7LfhCcdaH%2BOKzkICvHgcFzBhLfeBL1aHqsQTNta7P3IdFEjxSBqaSezu3n9Kj%2FCGXPjf1icKabTleegWJ6j9V%2FQYOPIfrUduvAnZ5NW6eDMwUdl7W%2FwKdwok9J6SEZ7yEZtQgYrPYe%2FA268B5JuE0XGG3ZE9%2FZzac0yK84%2BF8ZIXT413q9wjz0WSw1oMXXiBYwr%2F%2F08CvrOCuZEd8X%2Fhl%2F7dkIg%2FPvnLqcv6JrcesIvel%2Frhh8h2sBhytdEAfGy%2B3bqhRExOXGUj050s0RUXR7mOTQgOMK69wskGOqUBoNwwe2nCGm01b0m10TISa2fnIeIx3PHX8wPBmrYAoXWJ3oj5%2F8GpPMW%2Bdzm6GyXVSp5OAxSqwG92BRbnNIigyyMIWE5QHqNd6mfjrPn6yu6ciLdYdyTgqN2DIg91a%2Fgl2GZe2igHvuTF67fKvkue8VWCvXLjsl6M5CrZ1NeAKJyt8Ul%2BwNKi6msPV1x6R6RkvT8qs9xbOnxr1C%2FdS4SEBEJS6xJq&X-Amz-Signature=bec5fc831c25bd909252a1e085e9e3d68b182c2d5805c93f730012e3360ab111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GULEWFX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICFixDRYi8vhyuyeRC9VYvpsZuYLqO6PQlGoMnxDpFqZAiEArBCtVypf%2BvBbpg3Tmmj4x9Q0%2BYpx59u4WBuuKNWY%2B3gq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNwS6oVCIEztZUNA0SrcA3PHh6vh96kcVh3WijdiFrfGs7vdokOzYj0PQaSE8vBHB4s39zfZxJnicnvrZJmPwQhkZY3CDlb0mkBS%2FfXk%2FDWHh2wtyR8yhyoKOXXuXORGkyKDKaSieyrtzOqLcIIrUF2K1Z%2BqH1CPjLbZdgTSGhfUvQNZL9lpqft3GQqqQo%2BdnGosCxYRcIQx6k9YLut5P8E5kH2EBgAQD2hj%2FZSd4HwQJeVj45SqJcYzWeSKVfgprCJLmrr9IZgCJiYY4v3ah1btGMQOeEI69htkrmi7Yft0CiO7jmIDHQUfMLNGZOpMS4Pmsp8AV0WqKLJyD%2F2c5SLRuSb2SEbctE0gDm1tcprVF6ip2EJt7LfhCcdaH%2BOKzkICvHgcFzBhLfeBL1aHqsQTNta7P3IdFEjxSBqaSezu3n9Kj%2FCGXPjf1icKabTleegWJ6j9V%2FQYOPIfrUduvAnZ5NW6eDMwUdl7W%2FwKdwok9J6SEZ7yEZtQgYrPYe%2FA268B5JuE0XGG3ZE9%2FZzac0yK84%2BF8ZIXT413q9wjz0WSw1oMXXiBYwr%2F%2F08CvrOCuZEd8X%2Fhl%2F7dkIg%2FPvnLqcv6JrcesIvel%2Frhh8h2sBhytdEAfGy%2B3bqhRExOXGUj050s0RUXR7mOTQgOMK69wskGOqUBoNwwe2nCGm01b0m10TISa2fnIeIx3PHX8wPBmrYAoXWJ3oj5%2F8GpPMW%2Bdzm6GyXVSp5OAxSqwG92BRbnNIigyyMIWE5QHqNd6mfjrPn6yu6ciLdYdyTgqN2DIg91a%2Fgl2GZe2igHvuTF67fKvkue8VWCvXLjsl6M5CrZ1NeAKJyt8Ul%2BwNKi6msPV1x6R6RkvT8qs9xbOnxr1C%2FdS4SEBEJS6xJq&X-Amz-Signature=2d06ec7e6b390d2ba869c63da4d826ffcc8ab012b6ce4ecc0f4a724c7aca3888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
