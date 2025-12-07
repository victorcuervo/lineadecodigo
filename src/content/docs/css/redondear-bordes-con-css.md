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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AU6L4X6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQrntFo0n4kNbQd89nA6TdFsVX625dK4QKXpxjs%2F5hDwIgGvayCG8mUi2%2FhaFXdYg4FkqzoGyUSVdBzuQrG4w0dDAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVwwKVQolBXvpyJ%2BCrcA3BxjDhNuPq77IJaN1ww5Cj%2FgQoVDojPfd1RY0b78RMvAJTdARL4I5wPG%2FMxgwkvAPLHlzfdYTrOmWrLI%2Bqnh%2BCK0Ydfq8fJRMLmLnbj5%2FdWZg1gDbF7lYO%2F9GrwMKHDvHzANtaAXtAOiNCLB64QBVkbw3NBQCj6FH9RbJggjv7wKXrPOOe3PIUIYV0u125GFPaV4wSfjxQ14%2B%2BpPp0TFfmXycCJI09eK0kza4iLhXOkzXVK%2FGw8czaI%2BeduATBMKJobPFjvycnhgxXyczBD5BbFS%2Bi%2FVHIgy9auzHemF%2Fk9D5wq1B9vsFNuUcfxpeQzM4GriPY%2BvFM7pLC367YfqC3z%2By0aQ1%2BcUNjxoafLstDe2o%2BbQv%2FcIZjz5SryvRba7%2F8v1RvHVc977Pj0WtcydqjOTacF2IIVPkuYYdP9actiWSGQTKVIpnrppe%2BSfb6i237iGNc14Soh6zUb5qMk7WPwDCqEgqbHA5jlkSY8gprcoAmRWjhpXJsZ1BNdvoVxf5EM18zJxc7oHWBgRmFzUcMYNEQEHIdkw2JR9v%2BHWQ7aY39x75E6iRa3B9GUPkf%2BXLbZjckHJ5VbmAeRQ8lmtf1o1y9WCvqQ%2Fih%2BqAiAHI81pvptL7%2BoeE%2BiA6sHMPf90skGOqUB4fWANLmuf8epn%2B439GlfFPHzQQOq%2BUqR6iAh%2ByY%2F6KLv7650SUINZqfD9nsciaVQbLRSSdovA0p8ncpPex45Lug4GEneOKsIwITJddCaoFdDyGdfiIvt1sgCks0XtbwhglppfyMg2kcc0XbE0LRg3DOBeUIEtsZmMYq8DnHpJkgmq%2FVAw6MHYWHFtNF3O%2Fls%2Flh6PVIZzwt2SaPkxVZLmVsDVuVC&X-Amz-Signature=1262c766a98f996b0546f079234f06e5eda97a3bfe2443e59b312a569db44a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AU6L4X6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQrntFo0n4kNbQd89nA6TdFsVX625dK4QKXpxjs%2F5hDwIgGvayCG8mUi2%2FhaFXdYg4FkqzoGyUSVdBzuQrG4w0dDAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVwwKVQolBXvpyJ%2BCrcA3BxjDhNuPq77IJaN1ww5Cj%2FgQoVDojPfd1RY0b78RMvAJTdARL4I5wPG%2FMxgwkvAPLHlzfdYTrOmWrLI%2Bqnh%2BCK0Ydfq8fJRMLmLnbj5%2FdWZg1gDbF7lYO%2F9GrwMKHDvHzANtaAXtAOiNCLB64QBVkbw3NBQCj6FH9RbJggjv7wKXrPOOe3PIUIYV0u125GFPaV4wSfjxQ14%2B%2BpPp0TFfmXycCJI09eK0kza4iLhXOkzXVK%2FGw8czaI%2BeduATBMKJobPFjvycnhgxXyczBD5BbFS%2Bi%2FVHIgy9auzHemF%2Fk9D5wq1B9vsFNuUcfxpeQzM4GriPY%2BvFM7pLC367YfqC3z%2By0aQ1%2BcUNjxoafLstDe2o%2BbQv%2FcIZjz5SryvRba7%2F8v1RvHVc977Pj0WtcydqjOTacF2IIVPkuYYdP9actiWSGQTKVIpnrppe%2BSfb6i237iGNc14Soh6zUb5qMk7WPwDCqEgqbHA5jlkSY8gprcoAmRWjhpXJsZ1BNdvoVxf5EM18zJxc7oHWBgRmFzUcMYNEQEHIdkw2JR9v%2BHWQ7aY39x75E6iRa3B9GUPkf%2BXLbZjckHJ5VbmAeRQ8lmtf1o1y9WCvqQ%2Fih%2BqAiAHI81pvptL7%2BoeE%2BiA6sHMPf90skGOqUB4fWANLmuf8epn%2B439GlfFPHzQQOq%2BUqR6iAh%2ByY%2F6KLv7650SUINZqfD9nsciaVQbLRSSdovA0p8ncpPex45Lug4GEneOKsIwITJddCaoFdDyGdfiIvt1sgCks0XtbwhglppfyMg2kcc0XbE0LRg3DOBeUIEtsZmMYq8DnHpJkgmq%2FVAw6MHYWHFtNF3O%2Fls%2Flh6PVIZzwt2SaPkxVZLmVsDVuVC&X-Amz-Signature=3941baa2247cb21696ae53572ac6727af59dfe730e523246db42dbbba81ddda7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
