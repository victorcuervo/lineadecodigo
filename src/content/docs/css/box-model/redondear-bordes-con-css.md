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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRFE4MK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLmwewKp4T60AZGQl3pzs6rnK2SDFtdenWfirIqp3XUAiADuq4wgbpYDClZZRWrtiq%2BudGogUjOk7eGkFsVyWv6iSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV%2Bg4QdhjUtO1Vf5gKtwDS8BJMFwf%2FXEGqbo5KaXnEWi9PrqCkdbknRflQsAYRfcD6rqRFOHqx3TH0j2sNnFBFH%2BLT3e7%2F3CaSRY6BBoE9pfzMSf7FNPlUde1ArcElUqqXEXgfikNHBzJs4BE52WIoOXwZ%2FC55eRkuEGgMWcv5Jqst3mHy8PWHejMJpKWhiM9Vk5XDQvoepJP%2F%2BLIoCQMRlOHs7EQl2t6v5423NoWGjhRxhVYCA%2BbKTP%2BPQU0StW75HPkb3p0EZ%2FdChfakATf42lNpBE3JeHZZvA%2FVm%2FnxVxH41djxTu2dwj6OshESadusW9KspzCDgJBIO9Fp79Yc1l3kTTUvsA%2BMXXyLrYNvGke5uJ%2BpCcAjxBfLX9YL06FfEZ3J3hrRp3QXZuy6QEjySs2FNJhAKkcPSy9KdNIizkpr8apxo2xaSxK4xB%2FUA7lH8leUzig3J5ObX%2FriLBveVXAxvBo6%2FnRMNMe%2BoIUC%2Bn%2B8oN9FRG%2BI9FMs8RikxMWDB0DKHaVaM3z20%2FBT8XCW6ZUGLNgtIKkqNO7GhHzpMxr%2BUq%2Ff0UNDjhyyhwPQuEgPgNCiQQq4zVzE45pdRoEErViFGySSttxgG2X5BuwPJJyzEHt%2FyMrOGQEOKl7L88JoiXXIJHlm2IQA7kwwoqMygY6pgGuUOtIw3%2BmnBEWLK%2BGMdeCiL51PwrAYLVGVJFWFgiNOj4PKb5ghxg5DyMJt9Se%2FLQbXE%2Fyq1OkWvGhF77ejRoeGkqVSwmf5L27m%2BDNSl6gS1lNbbwW2FhTR3FlHtS0oNomT082hDrP3JKlUWGAbbloENJrJgfsCUKo8IR8Hznd7fs2ieoMVJAV%2BZRQ8lTtPFxcuCZysYPekbnG1IArM%2Fe2y0nqg%2Fkt&X-Amz-Signature=598e67a44174a89289062e8544d986a467f299c1c168d45a4fe3d9fb72f62b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRFE4MK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLmwewKp4T60AZGQl3pzs6rnK2SDFtdenWfirIqp3XUAiADuq4wgbpYDClZZRWrtiq%2BudGogUjOk7eGkFsVyWv6iSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV%2Bg4QdhjUtO1Vf5gKtwDS8BJMFwf%2FXEGqbo5KaXnEWi9PrqCkdbknRflQsAYRfcD6rqRFOHqx3TH0j2sNnFBFH%2BLT3e7%2F3CaSRY6BBoE9pfzMSf7FNPlUde1ArcElUqqXEXgfikNHBzJs4BE52WIoOXwZ%2FC55eRkuEGgMWcv5Jqst3mHy8PWHejMJpKWhiM9Vk5XDQvoepJP%2F%2BLIoCQMRlOHs7EQl2t6v5423NoWGjhRxhVYCA%2BbKTP%2BPQU0StW75HPkb3p0EZ%2FdChfakATf42lNpBE3JeHZZvA%2FVm%2FnxVxH41djxTu2dwj6OshESadusW9KspzCDgJBIO9Fp79Yc1l3kTTUvsA%2BMXXyLrYNvGke5uJ%2BpCcAjxBfLX9YL06FfEZ3J3hrRp3QXZuy6QEjySs2FNJhAKkcPSy9KdNIizkpr8apxo2xaSxK4xB%2FUA7lH8leUzig3J5ObX%2FriLBveVXAxvBo6%2FnRMNMe%2BoIUC%2Bn%2B8oN9FRG%2BI9FMs8RikxMWDB0DKHaVaM3z20%2FBT8XCW6ZUGLNgtIKkqNO7GhHzpMxr%2BUq%2Ff0UNDjhyyhwPQuEgPgNCiQQq4zVzE45pdRoEErViFGySSttxgG2X5BuwPJJyzEHt%2FyMrOGQEOKl7L88JoiXXIJHlm2IQA7kwwoqMygY6pgGuUOtIw3%2BmnBEWLK%2BGMdeCiL51PwrAYLVGVJFWFgiNOj4PKb5ghxg5DyMJt9Se%2FLQbXE%2Fyq1OkWvGhF77ejRoeGkqVSwmf5L27m%2BDNSl6gS1lNbbwW2FhTR3FlHtS0oNomT082hDrP3JKlUWGAbbloENJrJgfsCUKo8IR8Hznd7fs2ieoMVJAV%2BZRQ8lTtPFxcuCZysYPekbnG1IArM%2Fe2y0nqg%2Fkt&X-Amz-Signature=f4bcfcff3c92a3521908911303907bfab778bc591a29a254a73e5e1dfb2c8909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
