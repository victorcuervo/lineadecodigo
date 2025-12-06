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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WPPPGOQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5fBpqUamMxu3sToFMhGPVz9%2FIjk8Ok7nH83o%2FO7yvdAiEA2RnJQTq%2BfPOT7NOt7fxGEreSlmfF1qFX%2B6Mfs0Gk1zAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI9N9pzi8uf3O5huECrcA8RD49d1RuuzCpUUVvY4HAToKZ78dnaRsQU5UyI3Q7b9F5BgbSTiYw6ULDi0LibvzLkYF%2F0kaPkJi%2B4CPwRD8neq4bF5LIUqlFBGxB7KGok2oYukjI3xTgQ89YN4Sl6ZQ4wNm9adoT9ubrSigctrBRXpL23Er7rzWJk09buhawKqnMlMAMO%2Bim2YkGrB94Bg89gOfgOJiwKKCJX7V7xaCb%2FLp0%2FCt1fd000dW%2BENR5VMDEg%2FGSjA0XR7RUoF%2BTbfxuoYf03JlU9Qgy49zeiJLUbBoCd27WwkIfzkKsXTVF8dEbGKqQo4Z1UTMOZkTVSV5SzNa%2FgRYkKMg%2FnixLn0yQElVK4oYKr9yXwY0zMFMw4Qb34jeHSAuUDFMWcSp2isjTAr41p9AO8tXzcbuyDAy4RTYWuNgMyZSkatgMnuDyRHArstnnLPjKvPoXAx6kN0a%2FJ1dpw%2FfPYhIJI50w%2FaaSKFOhGnu%2BV0c8Cm4Imw6kSNcIep%2Fc9SurQL3WOtm%2BbOsRUPwdItc3kCtjMEubEHKmCW1Ez4FXnfv9XRMUmFyNeRuMeEaipH717LO6jLZaby%2BbrJX0EeMlXeFsjBMZX7a%2BFfWKc8w9%2BgXg975wvxWEh9CEuuAtvzLYcJX%2BtdMIGn0MkGOqUBxCjp9oHmSs3PJk0%2BkX7xvgk70cdpVj%2FdXp9id9ZicSmcAtAFdFbnzxd%2B9tz7OSHQhuQfJgCs0BAoO4%2BCMr%2FSAil%2FPSmEX7T8pD30WHfGzmtBUYyrQwLVuaeGNXpF0g4JSIKYq4zLCLBkVOmnMidsWrgMXWhEax8M0DOgroBNkjWL76EE642gZ069qIP8bbD5a128fSf%2BHEQSmr9uLmEZeIKuoxuK&X-Amz-Signature=f9f03973dd8c16f1ab1c3fb2cae5de6ed616376a24507342b531bd07f17e9072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WPPPGOQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5fBpqUamMxu3sToFMhGPVz9%2FIjk8Ok7nH83o%2FO7yvdAiEA2RnJQTq%2BfPOT7NOt7fxGEreSlmfF1qFX%2B6Mfs0Gk1zAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI9N9pzi8uf3O5huECrcA8RD49d1RuuzCpUUVvY4HAToKZ78dnaRsQU5UyI3Q7b9F5BgbSTiYw6ULDi0LibvzLkYF%2F0kaPkJi%2B4CPwRD8neq4bF5LIUqlFBGxB7KGok2oYukjI3xTgQ89YN4Sl6ZQ4wNm9adoT9ubrSigctrBRXpL23Er7rzWJk09buhawKqnMlMAMO%2Bim2YkGrB94Bg89gOfgOJiwKKCJX7V7xaCb%2FLp0%2FCt1fd000dW%2BENR5VMDEg%2FGSjA0XR7RUoF%2BTbfxuoYf03JlU9Qgy49zeiJLUbBoCd27WwkIfzkKsXTVF8dEbGKqQo4Z1UTMOZkTVSV5SzNa%2FgRYkKMg%2FnixLn0yQElVK4oYKr9yXwY0zMFMw4Qb34jeHSAuUDFMWcSp2isjTAr41p9AO8tXzcbuyDAy4RTYWuNgMyZSkatgMnuDyRHArstnnLPjKvPoXAx6kN0a%2FJ1dpw%2FfPYhIJI50w%2FaaSKFOhGnu%2BV0c8Cm4Imw6kSNcIep%2Fc9SurQL3WOtm%2BbOsRUPwdItc3kCtjMEubEHKmCW1Ez4FXnfv9XRMUmFyNeRuMeEaipH717LO6jLZaby%2BbrJX0EeMlXeFsjBMZX7a%2BFfWKc8w9%2BgXg975wvxWEh9CEuuAtvzLYcJX%2BtdMIGn0MkGOqUBxCjp9oHmSs3PJk0%2BkX7xvgk70cdpVj%2FdXp9id9ZicSmcAtAFdFbnzxd%2B9tz7OSHQhuQfJgCs0BAoO4%2BCMr%2FSAil%2FPSmEX7T8pD30WHfGzmtBUYyrQwLVuaeGNXpF0g4JSIKYq4zLCLBkVOmnMidsWrgMXWhEax8M0DOgroBNkjWL76EE642gZ069qIP8bbD5a128fSf%2BHEQSmr9uLmEZeIKuoxuK&X-Amz-Signature=093427c9a463fa87203980e0c1a64f66d4afa5066a9e5d537f0c6c1d593eb22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
