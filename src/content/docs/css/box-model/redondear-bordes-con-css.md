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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYZLMI4I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHZQw9SRjuy5QNFh%2Fkp%2BjJSGSFP9G4Z6hcuObjAc4ieAiBPWMS7S%2FTkOt2pl7VNBBMI36Rx3hAYZjG%2FI6lWHoPQ2Cr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMZtl690dLq3hbIxj6KtwDxznohhzzed0KZgH77RY3vUXaKFHQwlcbi4BkMY%2F1NPCEqHkIXCTHpL%2FCUheII85WeEUUG8Nj4mg2m66McdtNYyBLjnce9W02%2FgHw2V8PLnUPkt3w8XuxyXOkkte2I5gB%2BRthuxUfFRAz3JWu9hx6WKNllSGjX3OSqN96V280vPCv2k%2FKL4yE3RE1WCXNVBixTrPXKFXGW5GkNIAdWXbUKT7moJY92dP4Vm0yDry5rgCKxQ3aD5zbi0ZfMgmYmbF5CT8Lk9KZ9Yb7mrgHP%2FoX4Kpxskm00Lz9lHAjCWEwRIQdCVYevRMEy4v8Ug1O3EIUoYtwZqOUnXveQeEecJph0f2BcTKIgHSLBI%2FckL6mOPDjdyA8VN9IHWoyXxtKepWrEpSf48ZLowwRnmF0xoI%2BW4glZCqMV%2Bw8cVku%2BySfh%2BfXS7pvxACDb8k0Wm8qg2FWBDpJvh1ylmj6izHe8mFofDOahuPteprJwzEcok2lbWyaxHRvI2TXMiocpQvw%2FARupoZG%2B3OEbSpX%2F5T3i8xyTuWHglQXsXf%2BhzG1ji%2Bu3s4JDrF1K0FsGW9DnOWIGdfPPNyPLHUEvQO6WmdHzw9RZRr0YY5CMz2SaWIkN21tQJPau1Hu9Sz%2B58%2BCuZ8w6MWKygY6pgEXpsHhvN5t%2Fopz%2BEwH%2BHdVYjR9NQQ6MWPh3mkJ0bgMumkKCaDWsu9aG6h8ArgsSNTMMQauZYSl30trYujyDiRQZicUWSJ7hL9B21tETo3B5PGZ2lSMfMlsEqEw9qIB%2FPpy0HRgYHom%2Bwk2A2fV3Dpky%2BzX2CtxIfIUB8XOkV%2FR7b85UpMZSZdlziyyrnwDnMhs7uNP%2BgugimorI3IuR3FyGNTHxe3q&X-Amz-Signature=8a7969416b14221b925a58c50be4100cb50846909ba2aee3a4f10508a0ecc2a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYZLMI4I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHZQw9SRjuy5QNFh%2Fkp%2BjJSGSFP9G4Z6hcuObjAc4ieAiBPWMS7S%2FTkOt2pl7VNBBMI36Rx3hAYZjG%2FI6lWHoPQ2Cr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMZtl690dLq3hbIxj6KtwDxznohhzzed0KZgH77RY3vUXaKFHQwlcbi4BkMY%2F1NPCEqHkIXCTHpL%2FCUheII85WeEUUG8Nj4mg2m66McdtNYyBLjnce9W02%2FgHw2V8PLnUPkt3w8XuxyXOkkte2I5gB%2BRthuxUfFRAz3JWu9hx6WKNllSGjX3OSqN96V280vPCv2k%2FKL4yE3RE1WCXNVBixTrPXKFXGW5GkNIAdWXbUKT7moJY92dP4Vm0yDry5rgCKxQ3aD5zbi0ZfMgmYmbF5CT8Lk9KZ9Yb7mrgHP%2FoX4Kpxskm00Lz9lHAjCWEwRIQdCVYevRMEy4v8Ug1O3EIUoYtwZqOUnXveQeEecJph0f2BcTKIgHSLBI%2FckL6mOPDjdyA8VN9IHWoyXxtKepWrEpSf48ZLowwRnmF0xoI%2BW4glZCqMV%2Bw8cVku%2BySfh%2BfXS7pvxACDb8k0Wm8qg2FWBDpJvh1ylmj6izHe8mFofDOahuPteprJwzEcok2lbWyaxHRvI2TXMiocpQvw%2FARupoZG%2B3OEbSpX%2F5T3i8xyTuWHglQXsXf%2BhzG1ji%2Bu3s4JDrF1K0FsGW9DnOWIGdfPPNyPLHUEvQO6WmdHzw9RZRr0YY5CMz2SaWIkN21tQJPau1Hu9Sz%2B58%2BCuZ8w6MWKygY6pgEXpsHhvN5t%2Fopz%2BEwH%2BHdVYjR9NQQ6MWPh3mkJ0bgMumkKCaDWsu9aG6h8ArgsSNTMMQauZYSl30trYujyDiRQZicUWSJ7hL9B21tETo3B5PGZ2lSMfMlsEqEw9qIB%2FPpy0HRgYHom%2Bwk2A2fV3Dpky%2BzX2CtxIfIUB8XOkV%2FR7b85UpMZSZdlziyyrnwDnMhs7uNP%2BgugimorI3IuR3FyGNTHxe3q&X-Amz-Signature=92f202b1e141b999e0e6a6201aef271999dfe7dfbe33c6caa109012a01598e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
