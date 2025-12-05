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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ4XJ3ZF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpg9gyjd5mlIPzLGyeaMZtoh68YFBCCCWZ0yPFVECGzAiA9vjGzZbvgs%2FEkDA3fYd12ygBNcz779BPYsCXZF7%2FG0Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMQ84%2Fq5kt2JWD8BvdKtwDE0sRoKKE73bQ2%2F89%2BrVeOpIwjigTxqk%2B0IpCy%2F%2FJsH%2FAFihUqGD9fC3VnaPdOE5xx4vuRVDRUWY3URQa0fxrd%2FiEALGxIox11QuwpzAha%2Bwk5kC2MNFg%2FfJC%2FWKos6SnXxNgmBmy1mxGqq%2BH7NCFq1wx%2BbSCTHI0K9hxKrOB6Emop9H%2FHdvOkcadeGXz54nSX%2F3tUpJ9h5XlcJnFQqYaWoCV73%2BQZ%2Fw%2FE8m0xjXvMJgEcjBr5uJC8Mjf%2FfllNkTJ3sMQydWxwgBPh8oew3K02uhUVFfLHhlYmaz8TN6vG83Awm9DRQN4xNOj7xx4wOd6JM3izquvcHHpMIdkoZZGOInlmmEvZ1bf9sy3M5J0D6YjnUm%2Bx0obx3unAhism%2B4pFol1Jnkfz3bOyszXbBQ2CITooVGktD7InlSYNEeiD8EHUWZYGlB2XxkojyrmL%2FHwIdoKWVVUvKhwpKEtayBhSDWc8zjNwszWZ2GyVxM5ONtvbFnvPhcgg7C%2BE6ncRiI2W%2BZ%2BbXNs884v9nldrBTOo1dBrABuAhY0XQczjPxrnijbdExbBzcQFo3u%2FZ2lK8wd1Fp9nO6n%2FQRaypFGupl%2Ba%2BMnJ7TABM1HoQwzIf2wXqdUdhbMmTKHMC7bJn8woIzIyQY6pgELecPV1C6QO1mzq%2BADGJZ2%2BwnGw%2BZc%2FYrUyYa6UaTZHvm4wlm8BL1LIOLrhA0eOYfw%2BrczWVDpLCCHMtF4CUotLccbUFZ3fOg9YmxU5lsGZuNtuMeZ7LN5Ds0t8jVTHunto7CTClC%2F5r2EOFVlu72mCOpCAoIbd%2BOYTYRUiNc7Wk58X9Fr5N%2FAjsq2VR4d8sk%2BWVcciwjxRSfmO9zI5n63S1qrRIjB&X-Amz-Signature=edeaa96bf3d1ef115637bec8d397961ad47699747d9908a722f7d81f3669f0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ4XJ3ZF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpg9gyjd5mlIPzLGyeaMZtoh68YFBCCCWZ0yPFVECGzAiA9vjGzZbvgs%2FEkDA3fYd12ygBNcz779BPYsCXZF7%2FG0Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMQ84%2Fq5kt2JWD8BvdKtwDE0sRoKKE73bQ2%2F89%2BrVeOpIwjigTxqk%2B0IpCy%2F%2FJsH%2FAFihUqGD9fC3VnaPdOE5xx4vuRVDRUWY3URQa0fxrd%2FiEALGxIox11QuwpzAha%2Bwk5kC2MNFg%2FfJC%2FWKos6SnXxNgmBmy1mxGqq%2BH7NCFq1wx%2BbSCTHI0K9hxKrOB6Emop9H%2FHdvOkcadeGXz54nSX%2F3tUpJ9h5XlcJnFQqYaWoCV73%2BQZ%2Fw%2FE8m0xjXvMJgEcjBr5uJC8Mjf%2FfllNkTJ3sMQydWxwgBPh8oew3K02uhUVFfLHhlYmaz8TN6vG83Awm9DRQN4xNOj7xx4wOd6JM3izquvcHHpMIdkoZZGOInlmmEvZ1bf9sy3M5J0D6YjnUm%2Bx0obx3unAhism%2B4pFol1Jnkfz3bOyszXbBQ2CITooVGktD7InlSYNEeiD8EHUWZYGlB2XxkojyrmL%2FHwIdoKWVVUvKhwpKEtayBhSDWc8zjNwszWZ2GyVxM5ONtvbFnvPhcgg7C%2BE6ncRiI2W%2BZ%2BbXNs884v9nldrBTOo1dBrABuAhY0XQczjPxrnijbdExbBzcQFo3u%2FZ2lK8wd1Fp9nO6n%2FQRaypFGupl%2Ba%2BMnJ7TABM1HoQwzIf2wXqdUdhbMmTKHMC7bJn8woIzIyQY6pgELecPV1C6QO1mzq%2BADGJZ2%2BwnGw%2BZc%2FYrUyYa6UaTZHvm4wlm8BL1LIOLrhA0eOYfw%2BrczWVDpLCCHMtF4CUotLccbUFZ3fOg9YmxU5lsGZuNtuMeZ7LN5Ds0t8jVTHunto7CTClC%2F5r2EOFVlu72mCOpCAoIbd%2BOYTYRUiNc7Wk58X9Fr5N%2FAjsq2VR4d8sk%2BWVcciwjxRSfmO9zI5n63S1qrRIjB&X-Amz-Signature=9e80ef7d4fb86c9d9eb8f5145567a8338a7c463f3702ebf9ad2ea7d02a98adff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
