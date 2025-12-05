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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKYTTJD7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnZR8dZRYLFrHtu4%2B68OTY1T8EH5NUNJp%2FIR%2FNh0MzBAiEAooMrTZmr5LuWITpMAD%2Bzey6hmovqRPPkL00elG45hiIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDA8h%2FXvqbAJ8p3eUCrcA21X1MtkvICvhOKqGXCaFrsd8z6Wmzs904acr1LLI5orVQTPB7bOqsbADWNMyqOzfVQZ5s0g5m%2FcKJvr%2Bp0XLDzzhAeW956B8NTYRtqV%2B6PaURw2XVbvdYCExXTGYA6vrAW%2Fbaith1pTT19n9FELxNbKpO86tKQ%2FnNpVeVSGiJIFnSe9EJiSTzkrQ6DJOFEbNQV8SbxwPBOHBSOjSrLe6ehaXQKUSmb8Lx5DLNuLdu6iE52sO%2FFqIPSnyDxQN%2BSNPfYCS3uIAjI1dLwrT7CCqRporJyHjqAcNjtupQDQqiCqmC05pZqeyLM4Wnov2EiFdTujr5R1EOP6zNmcfGIHuYgs%2BSiRUGts7ofDPdC6oG3qF14Vn2PJWsr3XQf9u4cfHaAexogEGQ8Kv87Zg3Lm8y%2FFkP1U2F63D8fkc4qlznN7Zv9iLtlT%2FM5%2FshxLCYTI3UhYcW5IYwOS8gbbAl85g%2FYIMLeoM%2BpqV2IG6OJVYLgoAQ0ek5%2BaWuhGxzTnoLWRSyULHkFuN1P0T15gjwxuORrhx%2FcAwKbye2Xc9NJye0E35cVR5okIwtEPF0byI3RN9tvfNoTDmh6%2Feo9yAz3yJ8MJkIgRs7jKFZowh3oD0ktkGXnMv7Av5EueigHeMNKuyckGOqUBXNe%2BBpsCaXPnNo%2FxPjHhb0SNkLrcv1b2gr7T%2F0Fd%2BfsDuxqYdvdBuLtyGtCau1uYgqMWe9lWf%2BZXw3TQEt1dVRup7Rtx9xQQEs7HU%2FfqWw3zvwsC1qCb2x3jYD3XHUsLunJhAi4lok7IUcFZs%2BZwxwWO0ZtozU0tedQBnDpEDZxXtBvxJKyJFrDr73SOKuL7KigR73uvZrtiMZZyCcKr9rX0vsmS&X-Amz-Signature=7160d6f3490e5c354cdbdf9bacb9f32c1152ab704434f48bb5caec1877d35f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKYTTJD7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnZR8dZRYLFrHtu4%2B68OTY1T8EH5NUNJp%2FIR%2FNh0MzBAiEAooMrTZmr5LuWITpMAD%2Bzey6hmovqRPPkL00elG45hiIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDA8h%2FXvqbAJ8p3eUCrcA21X1MtkvICvhOKqGXCaFrsd8z6Wmzs904acr1LLI5orVQTPB7bOqsbADWNMyqOzfVQZ5s0g5m%2FcKJvr%2Bp0XLDzzhAeW956B8NTYRtqV%2B6PaURw2XVbvdYCExXTGYA6vrAW%2Fbaith1pTT19n9FELxNbKpO86tKQ%2FnNpVeVSGiJIFnSe9EJiSTzkrQ6DJOFEbNQV8SbxwPBOHBSOjSrLe6ehaXQKUSmb8Lx5DLNuLdu6iE52sO%2FFqIPSnyDxQN%2BSNPfYCS3uIAjI1dLwrT7CCqRporJyHjqAcNjtupQDQqiCqmC05pZqeyLM4Wnov2EiFdTujr5R1EOP6zNmcfGIHuYgs%2BSiRUGts7ofDPdC6oG3qF14Vn2PJWsr3XQf9u4cfHaAexogEGQ8Kv87Zg3Lm8y%2FFkP1U2F63D8fkc4qlznN7Zv9iLtlT%2FM5%2FshxLCYTI3UhYcW5IYwOS8gbbAl85g%2FYIMLeoM%2BpqV2IG6OJVYLgoAQ0ek5%2BaWuhGxzTnoLWRSyULHkFuN1P0T15gjwxuORrhx%2FcAwKbye2Xc9NJye0E35cVR5okIwtEPF0byI3RN9tvfNoTDmh6%2Feo9yAz3yJ8MJkIgRs7jKFZowh3oD0ktkGXnMv7Av5EueigHeMNKuyckGOqUBXNe%2BBpsCaXPnNo%2FxPjHhb0SNkLrcv1b2gr7T%2F0Fd%2BfsDuxqYdvdBuLtyGtCau1uYgqMWe9lWf%2BZXw3TQEt1dVRup7Rtx9xQQEs7HU%2FfqWw3zvwsC1qCb2x3jYD3XHUsLunJhAi4lok7IUcFZs%2BZwxwWO0ZtozU0tedQBnDpEDZxXtBvxJKyJFrDr73SOKuL7KigR73uvZrtiMZZyCcKr9rX0vsmS&X-Amz-Signature=dc3e861ac892396dd90aea383faef676a71df6e2768b23f1230ee5a089e8c5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
