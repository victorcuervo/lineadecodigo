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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6Z6NYK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDigLR6EbKZVeFFzgTF6GwKxHbFyfHCYujCjFYbR0ViiAiAYBW1j0nLOXowBrVE01NXTkOjLqpBe1xhoGSZwpKrjLCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMpMdz0oQMfHVXFlYJKtwDqFjuXuHqVZ6lyFAMdJK3SVXQmVuPDsluWopH4LUqmLvUVY1bQZSwIoCvTuhE7morpHMQxJ0KMBkcUmdb%2FiCcOq76qctI5XGC%2Bu0f9%2BcpAQHzVCZSuYNCsqCFKehixKPEVf2CoKz6Ug%2B7o6CWe5zkbAxQ%2Fanf2vr0NqTMF%2BcBfxOBZ0fLdk7rDUnGYM0T6N4VOzkXT0oZM4MmSnt3u%2BWrLVVkF0evJ5FrIM6apQ7MJ0HJz9xkS4nrihMeE1w5aN%2B7fXlAMkqtA4BhfVDuGUVEvqdxWQvs2zxQdVs9bXhahFgWikIKR%2BoXVrmYiIBXHvb1zBsCCqgiPUt%2F2uDQoSk%2FZjslyF2XumldYNoXhS%2FMwmpa3twNYk8B65caFN0bfDMk9niUvPX7Wuar89wjDxC%2B2Kk6zdu%2BuJ%2Bl1DY4mbNeynxpnXf5Vj4oFbw%2FuMLlWxSl6w1ZksCN0e6txwZD3GVB7lfPqLblUzmLnvOzH03XR8yeeH2gmbRYjTvCY3UrUlpbV9XDeDjubDKSIyBNddFV7sJqciQVCUUVDkBiWNdJ5D1Fd4ojjdlrE2UWayReYUnbwHnLYncXg5qbWK7CrMRidlhyC8t9KkDwU%2Fk8wocA%2Bf5e9Hw9%2FBIuaia4h8cwqbzPyQY6pgHK8itQSFXKlG2baiPQ%2BD44Pqqn%2F5BzUI1wdycKv3Co91kq2oNVWyj0a5wZfH%2Fopvhg6cvn0mOuoDf0PTX4Fs11a7k14dzTBwl77UWMPzfuxnmGnMfNk4NDIfqPcqeja5K%2BJlMxp%2FnN6y7vOMHVooMYTyaTAddg3XauoPmkbrdS5HKkrQmhS4QKgSBclGDnq%2BnGp8cVYQ%2Bs7UBMs4wpfAtoqrHYOXcj&X-Amz-Signature=6f4127f10cde9d64ccf4ec3ad113b7a5178402b8de04eec9e3b2ee5c66f77b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6Z6NYK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDigLR6EbKZVeFFzgTF6GwKxHbFyfHCYujCjFYbR0ViiAiAYBW1j0nLOXowBrVE01NXTkOjLqpBe1xhoGSZwpKrjLCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMpMdz0oQMfHVXFlYJKtwDqFjuXuHqVZ6lyFAMdJK3SVXQmVuPDsluWopH4LUqmLvUVY1bQZSwIoCvTuhE7morpHMQxJ0KMBkcUmdb%2FiCcOq76qctI5XGC%2Bu0f9%2BcpAQHzVCZSuYNCsqCFKehixKPEVf2CoKz6Ug%2B7o6CWe5zkbAxQ%2Fanf2vr0NqTMF%2BcBfxOBZ0fLdk7rDUnGYM0T6N4VOzkXT0oZM4MmSnt3u%2BWrLVVkF0evJ5FrIM6apQ7MJ0HJz9xkS4nrihMeE1w5aN%2B7fXlAMkqtA4BhfVDuGUVEvqdxWQvs2zxQdVs9bXhahFgWikIKR%2BoXVrmYiIBXHvb1zBsCCqgiPUt%2F2uDQoSk%2FZjslyF2XumldYNoXhS%2FMwmpa3twNYk8B65caFN0bfDMk9niUvPX7Wuar89wjDxC%2B2Kk6zdu%2BuJ%2Bl1DY4mbNeynxpnXf5Vj4oFbw%2FuMLlWxSl6w1ZksCN0e6txwZD3GVB7lfPqLblUzmLnvOzH03XR8yeeH2gmbRYjTvCY3UrUlpbV9XDeDjubDKSIyBNddFV7sJqciQVCUUVDkBiWNdJ5D1Fd4ojjdlrE2UWayReYUnbwHnLYncXg5qbWK7CrMRidlhyC8t9KkDwU%2Fk8wocA%2Bf5e9Hw9%2FBIuaia4h8cwqbzPyQY6pgHK8itQSFXKlG2baiPQ%2BD44Pqqn%2F5BzUI1wdycKv3Co91kq2oNVWyj0a5wZfH%2Fopvhg6cvn0mOuoDf0PTX4Fs11a7k14dzTBwl77UWMPzfuxnmGnMfNk4NDIfqPcqeja5K%2BJlMxp%2FnN6y7vOMHVooMYTyaTAddg3XauoPmkbrdS5HKkrQmhS4QKgSBclGDnq%2BnGp8cVYQ%2Bs7UBMs4wpfAtoqrHYOXcj&X-Amz-Signature=b081140f88a5acb2aebc3c36b5ba0422962223c5d9abaabc3972b490ae7c1fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
