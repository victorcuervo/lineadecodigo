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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECPL4GP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdxGh%2Bc19e%2BvsAfc5j6JT2TMQauoyX4h7shPqLH0ICfAiBbqUoqbO8WtlqoBWPew6Q5jgErNBFm%2BjYgEvipeoHdHSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMuZCW%2F6NjeK%2FmJPdgKtwDBn1whlK8WWAly1U3RVT49q7usFkxBI30Cdl9ZORXwJHywSrC2E4efcoHOQIQ%2BUnMf58SYIvcE1j%2BNJByp%2BHXQyAO9FtehrPFXfED4XvyKnhOImYvuoDPkQmU3HrkA4aJX8j0DQyF1HoKMUDnNNB4kBPI6DS1lR1yroLXPeHeeboeMzb9xu7%2FqR5exV%2FSVq%2F3B5r5zt%2BOLASJaxbgxuOSxAAgqy1WaHXraTnsby4ayRa0CcGvc7ouIDaaJSvux1UDxjbLViJRv2tz%2BCalDXIK79csDZGiJv%2F8FxEu74rtFjwyvklrnL9X%2BdxLUoR6yFoSqlGsRx3Bnk5CFosA177mAmDM9FG6H5EXjegHJ%2Bd7yAbUWLI0L2fp1pNju%2Bk0CFNIhoKvV3zwHtJb07lTFtAO5jpwSiQZvDNePde9fKDYi8VZnwNrSKFVFnNRvyVB7bjnCK%2FFfefVXy%2FGmmamskIwReDCv7gB58h0ORe3RFhtsEHbLFE7fYhpZpMywKyeW%2Ftoo28pmdbNDTdvt10s0SrW5VynlVI0%2F2rE5X35iS6bYeRpJDNqH2h0UHwGOAKQG3uckuv%2FBPBBs72mm3ezqedsziVY74Z6AH3op5ivalhOKKPVowZN2DZhuNskGjkw8JjNyQY6pgG9WGocWGoMBTmPKjeQ8RducT3K9Lw9O3FlFiHjrspD7Al9iwWpNqH47eDwaFsZvH4GySynWh7YXcV2hwmDdmcOQN9gBLhEjpMqRWYnuPb8PwqQpkGEw5ETY7CWRQp27zB77hNr2kVhksupH9nRKT4GAp9JCfipVoM2EfujdMxGbTP5ryGVGyaGhPoSzx5pHrpfc67CVzJw6GNFQZuAaWf65tXEc9O0&X-Amz-Signature=2b0056770d72e3a2544814f3f0977edcbeb80318bf6a85cf2263fd789c8dcde8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECPL4GP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdxGh%2Bc19e%2BvsAfc5j6JT2TMQauoyX4h7shPqLH0ICfAiBbqUoqbO8WtlqoBWPew6Q5jgErNBFm%2BjYgEvipeoHdHSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMuZCW%2F6NjeK%2FmJPdgKtwDBn1whlK8WWAly1U3RVT49q7usFkxBI30Cdl9ZORXwJHywSrC2E4efcoHOQIQ%2BUnMf58SYIvcE1j%2BNJByp%2BHXQyAO9FtehrPFXfED4XvyKnhOImYvuoDPkQmU3HrkA4aJX8j0DQyF1HoKMUDnNNB4kBPI6DS1lR1yroLXPeHeeboeMzb9xu7%2FqR5exV%2FSVq%2F3B5r5zt%2BOLASJaxbgxuOSxAAgqy1WaHXraTnsby4ayRa0CcGvc7ouIDaaJSvux1UDxjbLViJRv2tz%2BCalDXIK79csDZGiJv%2F8FxEu74rtFjwyvklrnL9X%2BdxLUoR6yFoSqlGsRx3Bnk5CFosA177mAmDM9FG6H5EXjegHJ%2Bd7yAbUWLI0L2fp1pNju%2Bk0CFNIhoKvV3zwHtJb07lTFtAO5jpwSiQZvDNePde9fKDYi8VZnwNrSKFVFnNRvyVB7bjnCK%2FFfefVXy%2FGmmamskIwReDCv7gB58h0ORe3RFhtsEHbLFE7fYhpZpMywKyeW%2Ftoo28pmdbNDTdvt10s0SrW5VynlVI0%2F2rE5X35iS6bYeRpJDNqH2h0UHwGOAKQG3uckuv%2FBPBBs72mm3ezqedsziVY74Z6AH3op5ivalhOKKPVowZN2DZhuNskGjkw8JjNyQY6pgG9WGocWGoMBTmPKjeQ8RducT3K9Lw9O3FlFiHjrspD7Al9iwWpNqH47eDwaFsZvH4GySynWh7YXcV2hwmDdmcOQN9gBLhEjpMqRWYnuPb8PwqQpkGEw5ETY7CWRQp27zB77hNr2kVhksupH9nRKT4GAp9JCfipVoM2EfujdMxGbTP5ryGVGyaGhPoSzx5pHrpfc67CVzJw6GNFQZuAaWf65tXEc9O0&X-Amz-Signature=d4ca8552da7a754eb463289bc749df752574fd63521e46aabdcda96b2a6603b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
