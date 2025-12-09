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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRBAFD6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMz8wNQQ2dSy69a08f7TbRUUbVR06G3Kc%2FsODIhlk%2FoAIhAPx34XUXQu6iau8O%2F%2FUY6MaZtnGWJyk71TcH6EhT%2FHrnKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3GxoZleuaSmRT1eoq3APRe7LgHTvOLBikwATPVtNeneiizLUfbhgoa6IL9eA0FLXQlSkUQ2XgVwaklFw0dtf3tVihkKbfFWa3bQhjSZXTfzK6iMvNZK6kU3NUo1%2BF%2FnO0BIUL4qcyF6suLmFfGBpJAw8qg2PvVfj6KXKwwTvKuuJLiwWIMRPFXkicJ6f5g73Wpw4cVcXNDCI9Mh64tlpiVHUbHxX2BFKhvSUy7oDqMZ8RgXXczE%2B7fwlUo5tHOkeqnJFYRQYwG3NZNXFL7g7Ly3Q%2BiXLo8rBQD4kvJp%2BBjnZOebP%2BBOfzJocPEAAxXnxzQZZXyCgqqgGcDCjV7TOj%2FH%2FzxZ08mhxTHMeHPQdfm7FKEAe1vkvbQUb3KygrhroiohYE0%2Fd30xKWpnhqIIkrJrw%2F8Ac9Cf%2B%2B78iQg70hjivvr0Pv4Gqr%2BgWt44RKN1JwoDhKoIAhGGIEmTGYeLv6iJ7MuqJ8W73AJnPf8DcLxrBgx3Td0ZHM13NW870SVxVlTLRUkyECZ0IqTp7Dc8s3ME2j206K%2BIQ9eKjJEPzzai34nD4g54R9Kvjwu6mwgegM0gtQzkiyhOU%2FyWHT4oFo1ViVZorcq0eb834GdNxLg7wKgNqXTVzauEyeUqzDTiLOt8%2FZ7zyGpwoofzDSw93JBjqkAS7QkiOMln9krnubpFkPITcb4bVfwNgSCHHGSk%2FDiYwzxX%2BqQYqzlzqYJwQQEkvwN2EIqp%2BdCHtTTFmkRU2%2F4VZ%2FV2oXsWHeUblUQ2sJRbYM6lbdRjhIj61tgTBXshXPpKrfPUEXHySpXtwVbD4Qs82e85gGsVX9Tneit%2BNnPYjoKDYTbSJcG5cVqliTFk296zUt7xcMhIWxKft7q%2BwwSyX5SxT3&X-Amz-Signature=b3016a7d5a8a4c8fd0ab6e64abb2a5ae9578a4c86cd741d9d6871ea7c932c7ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRBAFD6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMz8wNQQ2dSy69a08f7TbRUUbVR06G3Kc%2FsODIhlk%2FoAIhAPx34XUXQu6iau8O%2F%2FUY6MaZtnGWJyk71TcH6EhT%2FHrnKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3GxoZleuaSmRT1eoq3APRe7LgHTvOLBikwATPVtNeneiizLUfbhgoa6IL9eA0FLXQlSkUQ2XgVwaklFw0dtf3tVihkKbfFWa3bQhjSZXTfzK6iMvNZK6kU3NUo1%2BF%2FnO0BIUL4qcyF6suLmFfGBpJAw8qg2PvVfj6KXKwwTvKuuJLiwWIMRPFXkicJ6f5g73Wpw4cVcXNDCI9Mh64tlpiVHUbHxX2BFKhvSUy7oDqMZ8RgXXczE%2B7fwlUo5tHOkeqnJFYRQYwG3NZNXFL7g7Ly3Q%2BiXLo8rBQD4kvJp%2BBjnZOebP%2BBOfzJocPEAAxXnxzQZZXyCgqqgGcDCjV7TOj%2FH%2FzxZ08mhxTHMeHPQdfm7FKEAe1vkvbQUb3KygrhroiohYE0%2Fd30xKWpnhqIIkrJrw%2F8Ac9Cf%2B%2B78iQg70hjivvr0Pv4Gqr%2BgWt44RKN1JwoDhKoIAhGGIEmTGYeLv6iJ7MuqJ8W73AJnPf8DcLxrBgx3Td0ZHM13NW870SVxVlTLRUkyECZ0IqTp7Dc8s3ME2j206K%2BIQ9eKjJEPzzai34nD4g54R9Kvjwu6mwgegM0gtQzkiyhOU%2FyWHT4oFo1ViVZorcq0eb834GdNxLg7wKgNqXTVzauEyeUqzDTiLOt8%2FZ7zyGpwoofzDSw93JBjqkAS7QkiOMln9krnubpFkPITcb4bVfwNgSCHHGSk%2FDiYwzxX%2BqQYqzlzqYJwQQEkvwN2EIqp%2BdCHtTTFmkRU2%2F4VZ%2FV2oXsWHeUblUQ2sJRbYM6lbdRjhIj61tgTBXshXPpKrfPUEXHySpXtwVbD4Qs82e85gGsVX9Tneit%2BNnPYjoKDYTbSJcG5cVqliTFk296zUt7xcMhIWxKft7q%2BwwSyX5SxT3&X-Amz-Signature=d44661773780109ecb6fa5dfea66b7397ecc9499d02a1e5c2f812d2d7bf00459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
