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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMRHDK7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7spUcPumHrWiofe4JrFgK3dLbgWUUeSSnGHyOADwC%2BQIgOUzaqbNqDGhoSaaBl0W%2BuPFygwewMVR%2FGiSo6IECIPQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMuQQhk4Xi5H6hl4nircAzaBOzvej1yiUpXiztQx%2F6h5Mx8HmmHzHi9vSVbQf4EC7Mz%2FcK72FnClR0LUcySZpYBLKMYwmE59wu28S0aoz%2BxHXaIgLoIYDOukNToWHqcLvuDJ08GzklAhRng5uzzNZPAMLkjYM76IxyhGZUg2jFZz0YMMY%2F3koQakEfD8iARpTUf%2B9oRfMPkp6M%2BvSivN%2BQs592Y96q4G6uMzBk5w6M8wBqov0igfuLXe8QExaoM7TW2Q2KBxCdESzuuS1SkHx%2Ft9WdFl5tF3%2FhuqrN7Ih7sa%2Ba9EDzmrIFFa5XrOe7awWtBt8Bel%2FyXWVtBslfEdcrpNxxyuxiucnrRnY%2BrzgqqXtBXJxgyWv428LB8bRvfPjm92eNq1%2BuK9T4gMK5M%2Bsanmh%2BwZfDEJSg1aB8OBI8AKgYtuigxxmqsCHiWqgbFv6WGORx0eTaTiYEAcguKFz0ih2g7CW0xPIIe8t5U26cqCfVNtO0GFzTg7BySOLtDctAGK6WR8%2Fub7Ca15xv%2FGy5lMQ6b32A6VyMjblhPVhjYuGj3M1ydDJQ%2FbKZFBKN9gteiippDvDrwUBJlfi2DNIkiNN2ivsDtyQssQrJuR4IjZUqeDWm4wQaiM%2BSjXxplJtp6f2aGlbn7aGYDIMNqm0MkGOqUBwnNbwuyvWeSdXlUBYkLlaA3AL6Be5%2FxuJDvitbqk2Wmh45oMJKw8Qb98k%2B3ueIL7eWXzT4VBU%2FGFjkBO8PWIrawY59RqbF37e%2B13mo%2BgYEkeKutVlnEQa0i09u4UqYRG639VTZKYRe%2FWN0uttx%2BN4LeU3TrUwjXDNtwX2h3y%2BBou2y73oHtcIXgTfEKD6YwdSjzWRQDZ8gp6dd2TllDtoIVd4k9%2B&X-Amz-Signature=58c264c49b491ae81c1de1c7f43b9f3dfa59bedb43db0366ba8bbf4edd2d44ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMRHDK7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7spUcPumHrWiofe4JrFgK3dLbgWUUeSSnGHyOADwC%2BQIgOUzaqbNqDGhoSaaBl0W%2BuPFygwewMVR%2FGiSo6IECIPQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMuQQhk4Xi5H6hl4nircAzaBOzvej1yiUpXiztQx%2F6h5Mx8HmmHzHi9vSVbQf4EC7Mz%2FcK72FnClR0LUcySZpYBLKMYwmE59wu28S0aoz%2BxHXaIgLoIYDOukNToWHqcLvuDJ08GzklAhRng5uzzNZPAMLkjYM76IxyhGZUg2jFZz0YMMY%2F3koQakEfD8iARpTUf%2B9oRfMPkp6M%2BvSivN%2BQs592Y96q4G6uMzBk5w6M8wBqov0igfuLXe8QExaoM7TW2Q2KBxCdESzuuS1SkHx%2Ft9WdFl5tF3%2FhuqrN7Ih7sa%2Ba9EDzmrIFFa5XrOe7awWtBt8Bel%2FyXWVtBslfEdcrpNxxyuxiucnrRnY%2BrzgqqXtBXJxgyWv428LB8bRvfPjm92eNq1%2BuK9T4gMK5M%2Bsanmh%2BwZfDEJSg1aB8OBI8AKgYtuigxxmqsCHiWqgbFv6WGORx0eTaTiYEAcguKFz0ih2g7CW0xPIIe8t5U26cqCfVNtO0GFzTg7BySOLtDctAGK6WR8%2Fub7Ca15xv%2FGy5lMQ6b32A6VyMjblhPVhjYuGj3M1ydDJQ%2FbKZFBKN9gteiippDvDrwUBJlfi2DNIkiNN2ivsDtyQssQrJuR4IjZUqeDWm4wQaiM%2BSjXxplJtp6f2aGlbn7aGYDIMNqm0MkGOqUBwnNbwuyvWeSdXlUBYkLlaA3AL6Be5%2FxuJDvitbqk2Wmh45oMJKw8Qb98k%2B3ueIL7eWXzT4VBU%2FGFjkBO8PWIrawY59RqbF37e%2B13mo%2BgYEkeKutVlnEQa0i09u4UqYRG639VTZKYRe%2FWN0uttx%2BN4LeU3TrUwjXDNtwX2h3y%2BBou2y73oHtcIXgTfEKD6YwdSjzWRQDZ8gp6dd2TllDtoIVd4k9%2B&X-Amz-Signature=16c63ba13a929974614e0c311fb8ebbf91b98bf7042ff7680f2f3116210e3405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
