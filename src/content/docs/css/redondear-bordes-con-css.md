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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHEBVT5Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbhiqnwjMRr9zzZpwEDpPK5jqTC2n35LcYsxXRf%2FkHhAiEArhlFDnu9hN26WfDZich8pgDqIwfS7CYw3U7WO%2Fz9FgoqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2QcDQIsSn6NC1RkircA1TydMYfRT39g9LW5Kj%2Fh2FW5CYZtaq2WEbVy%2Fsfv6WRpFiY3ojmZDp2lm%2BgFjv%2BIhcmR12r8R%2Fa30JB3HfCqWokt9Z6UGTlKUE0EQuFg6rEBAccMDSZv4lzQBTM9rSks5065R6G8KLJnbGfM75HZohMoCOeRZnxypCTbwvickWTLR9PKpVmtHr0Z3Yw45jqTYgp2oXPAEWGK7r4cvmUdxpRDepsw050FqMg3AHmC9zATuOA2JjS3BhDHHtSRFblUBZpAD1SBn8Gn0nG0ZJT32INRC815Vjf0n%2B7RfxfoXwPFJEabYVnSBVSYwzl9WhdeSxBuuALJR5KJDkudKMZGsSk7A65%2FCmtY1nOrt9d4Wag7sLplzacP4wm1uYl6jhx83ryRTASESesFdCyox3sR6cagjR59c6Y2ZH5mY%2BrWGBkrdiY3MdIHV2Ya3nxm1c%2B7a816pjM16%2F0f9hCb5uI8SsQtcQOLFckPyxIQYrD0Z7EiJFAUScrf2XsXFfduUZk642z1J%2BqG%2FGCO2hJQq7KH5RKVMhDaYw03xkKkT2fzakNWIZIpf2bXRjbVn4984x7PfpgNw2z9Yl6E6bFG8VbfN78KpmS0K3bTcvibGv7m4LMhK9XF0WaI5t3BddkMPG71skGOqUBi%2BgdDQbKu3yVN88ODI7VwcjfWY%2B3h9cdGaqzEZ7Uq4A38yNEG2gaJvVINOhp8p4LGlIh%2FKkAewvs5ryM8Q1S2pqBE%2BHmA0pf9cgouF%2BqexHzSLwrGtDGhYuc%2FqU4OOO1IQiipq86vgCQ7zWtmpEV1YjcGPtEXFHX5c8TcKwTZpw900AkYIam3Z%2B2qC%2FMIsUeo4MqtPwSmvsc52ZrfTMmzzzIhxy7&X-Amz-Signature=16c93e721ec271f47dfbbd07012ed2f3a38879dd1024a688594be29a0a9b03ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHEBVT5Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbhiqnwjMRr9zzZpwEDpPK5jqTC2n35LcYsxXRf%2FkHhAiEArhlFDnu9hN26WfDZich8pgDqIwfS7CYw3U7WO%2Fz9FgoqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2QcDQIsSn6NC1RkircA1TydMYfRT39g9LW5Kj%2Fh2FW5CYZtaq2WEbVy%2Fsfv6WRpFiY3ojmZDp2lm%2BgFjv%2BIhcmR12r8R%2Fa30JB3HfCqWokt9Z6UGTlKUE0EQuFg6rEBAccMDSZv4lzQBTM9rSks5065R6G8KLJnbGfM75HZohMoCOeRZnxypCTbwvickWTLR9PKpVmtHr0Z3Yw45jqTYgp2oXPAEWGK7r4cvmUdxpRDepsw050FqMg3AHmC9zATuOA2JjS3BhDHHtSRFblUBZpAD1SBn8Gn0nG0ZJT32INRC815Vjf0n%2B7RfxfoXwPFJEabYVnSBVSYwzl9WhdeSxBuuALJR5KJDkudKMZGsSk7A65%2FCmtY1nOrt9d4Wag7sLplzacP4wm1uYl6jhx83ryRTASESesFdCyox3sR6cagjR59c6Y2ZH5mY%2BrWGBkrdiY3MdIHV2Ya3nxm1c%2B7a816pjM16%2F0f9hCb5uI8SsQtcQOLFckPyxIQYrD0Z7EiJFAUScrf2XsXFfduUZk642z1J%2BqG%2FGCO2hJQq7KH5RKVMhDaYw03xkKkT2fzakNWIZIpf2bXRjbVn4984x7PfpgNw2z9Yl6E6bFG8VbfN78KpmS0K3bTcvibGv7m4LMhK9XF0WaI5t3BddkMPG71skGOqUBi%2BgdDQbKu3yVN88ODI7VwcjfWY%2B3h9cdGaqzEZ7Uq4A38yNEG2gaJvVINOhp8p4LGlIh%2FKkAewvs5ryM8Q1S2pqBE%2BHmA0pf9cgouF%2BqexHzSLwrGtDGhYuc%2FqU4OOO1IQiipq86vgCQ7zWtmpEV1YjcGPtEXFHX5c8TcKwTZpw900AkYIam3Z%2B2qC%2FMIsUeo4MqtPwSmvsc52ZrfTMmzzzIhxy7&X-Amz-Signature=ef7a0f3fa21bedf24d7577c47c725dd049c1503154fed0e3d587f235ff56b3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
