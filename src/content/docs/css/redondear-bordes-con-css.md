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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXGC7NHY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDLmwvIHNuTt2zBx6gdn%2FX%2FolcEHG2U84%2B85FFenJnvMAiBpOY9kHXYcp2%2FCfikxqM4aFzN8O3WqHkQHPPIS%2FFh%2BfSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM99hx3TS9bcD%2BVVUEKtwDynJ9vOa54eOurULRVE6p8%2Bcnf3AX%2BCpwLfR7TPgm7tPFlZ4CKsjG9mgYwDrZJ65i21PVr8WZB21iPM9BCBWslv%2F696qrxjKNVCAxG0MsUSiiK0Y0GKbu64oh0UIemUuvY5egrNzgV6mhlN5yzQkOPLvf23zS9AFkDPs7leBD4lUMFHEtSOPkTycJ1b%2F1zfXAzSOEizno5BOfVxwDh%2BF7FTjS9bs9FSzywuCD99QnRBMmZ5G0%2BdpbgX8YUWdU%2BvEoIGVx853nIDhcP9GEE3k9a5yhDIkYTl5G26xTYwryubs1Re%2FqJ7yAcSZb3IFXw83YXJ2Kt6BytJtU8GnKohoVAa%2Fi7d%2Bxvj7y2b3BOCFH3QIlb4f%2Bd4KJpJYobf13w0eFUHfm9Zen9Db0QeRHm3Gy20yiLRpVzI2JYH3Zhv4hiorqS5eb%2FJyt6TP4OILXk5w%2F%2FbPPyB8%2BCtHy7LqV%2B2xbJkk6r7u0Wid%2FZOjYFNs2u7bmP%2BKmR6CYIJeqHiejfJgnsQDLkoM%2BEYkHydD20uFswjnwSvx3OIN34oF4k%2FN25GUyfRXiO%2Fggk4V2C9lpgDgpWGSicqWNufRYf5lOMRmP4etbx1Uj4XDfwxprx4dp3%2Bbu61uHiQV8%2FQ4IwD8w4sjFyQY6pgG5lWKPkn7nsds0qqrzXIaQfA%2BPFlKkTuaoOkRLR0F10zgkYuRGcqoWwqOoKADJYHBgLUT0QcLlasFFX%2Fr9NFtESV4TkLvyx5%2FYG980cOckhvF71zDxZ2tdPW4M0mWwVgtYIkJxky3oYB7pwCUIjR%2Bop%2BvTPoO6%2FnIev97A8BXVGIBqjlyKk5VBfIcVsoNffdzNsizJAHY%2Fo3S8GJxedorzQIo5%2F4at&X-Amz-Signature=fb336f9b474c5ea32e0f62e4f7980192f076b24aecca8b9e8e238c016caedcfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXGC7NHY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDLmwvIHNuTt2zBx6gdn%2FX%2FolcEHG2U84%2B85FFenJnvMAiBpOY9kHXYcp2%2FCfikxqM4aFzN8O3WqHkQHPPIS%2FFh%2BfSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM99hx3TS9bcD%2BVVUEKtwDynJ9vOa54eOurULRVE6p8%2Bcnf3AX%2BCpwLfR7TPgm7tPFlZ4CKsjG9mgYwDrZJ65i21PVr8WZB21iPM9BCBWslv%2F696qrxjKNVCAxG0MsUSiiK0Y0GKbu64oh0UIemUuvY5egrNzgV6mhlN5yzQkOPLvf23zS9AFkDPs7leBD4lUMFHEtSOPkTycJ1b%2F1zfXAzSOEizno5BOfVxwDh%2BF7FTjS9bs9FSzywuCD99QnRBMmZ5G0%2BdpbgX8YUWdU%2BvEoIGVx853nIDhcP9GEE3k9a5yhDIkYTl5G26xTYwryubs1Re%2FqJ7yAcSZb3IFXw83YXJ2Kt6BytJtU8GnKohoVAa%2Fi7d%2Bxvj7y2b3BOCFH3QIlb4f%2Bd4KJpJYobf13w0eFUHfm9Zen9Db0QeRHm3Gy20yiLRpVzI2JYH3Zhv4hiorqS5eb%2FJyt6TP4OILXk5w%2F%2FbPPyB8%2BCtHy7LqV%2B2xbJkk6r7u0Wid%2FZOjYFNs2u7bmP%2BKmR6CYIJeqHiejfJgnsQDLkoM%2BEYkHydD20uFswjnwSvx3OIN34oF4k%2FN25GUyfRXiO%2Fggk4V2C9lpgDgpWGSicqWNufRYf5lOMRmP4etbx1Uj4XDfwxprx4dp3%2Bbu61uHiQV8%2FQ4IwD8w4sjFyQY6pgG5lWKPkn7nsds0qqrzXIaQfA%2BPFlKkTuaoOkRLR0F10zgkYuRGcqoWwqOoKADJYHBgLUT0QcLlasFFX%2Fr9NFtESV4TkLvyx5%2FYG980cOckhvF71zDxZ2tdPW4M0mWwVgtYIkJxky3oYB7pwCUIjR%2Bop%2BvTPoO6%2FnIev97A8BXVGIBqjlyKk5VBfIcVsoNffdzNsizJAHY%2Fo3S8GJxedorzQIo5%2F4at&X-Amz-Signature=11e56c7ca4a76fc2a1053073028185716bbd4d1bd641e2e096b47125cbd7235e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
