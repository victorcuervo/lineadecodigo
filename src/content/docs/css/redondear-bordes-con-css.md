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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7T6QSP3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAiLRyH2DUKMG1dGXi6m1QuqKjA%2F20cNBPMfVCVanAxtAiAXaHC1NqHRAc3q%2B9WmlwhrWd5W%2BN62OyifCuKozClauir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMzZ%2Fq%2FWoFOdv%2FXrKKKtwDxREeAzA5aPYybuVDy4%2BtNUaFEmHiTBKMh4IvtseWZD5yt8oP9NOQAtHDcnE3EiCMY3N9ol85bwA6YICVW0xR4xN9y%2FnmAEBWJQ19Fgyv%2BVh9OCZuaO9nZdzOQkVj15kq5x3vw1oD7jF4KuQJtk3SdmUqbCVSMm5FxJfz9HNIewsf0m6FedKsqZ6A6nFWt0YNZQlkdYlI9ISb7Xb8sf50MMbfmTmAY50i27JefTxWlZZBCLZwaLh45hyII0jMSp1dbBr8Sj8rII4rhk8GHKOK6spsIvKag1yHw2quY933DMYUUdl1pykS8T1svvkoyVeKrVh79LkKGCbS6tPIpc1WjG%2BsiB%2Ff7M1gly1gI4AqJJ1amP%2BsFMic9O%2Fio5OHK1MNZFOANIjABig2zlUUkkzh122BUF1fi7VznbJHmixoZBSzLi%2BKjG61zFC%2B3VKc2UZTvmQk8Uo4vVxSbHq68jUY%2FGSoSGlIpXcQjOXuExkoS%2FwhoXarNOo4W3T%2BBY0X4GmLksasc%2FpnjShM8OPCVW54sQ5Hem9eIIiyNW4RK%2BDWnNRKURDr1yld8yg7wgTqrCl7eD%2BUcH1aXESlSfctVTiyZ3b31Gr0S2HylZMunmNbIx6qtRfYHoG7sRqAvFUw6qHGyQY6pgFzluD%2FlGh6Xl6PjqyjkFUZtFD1%2FHFjqMGK6%2BiI%2FJeDzIg9I1nuC5eFXt59KN2Jbe2J800L8e82yUEwDbUkKyJZDr7cpr5EMuhDu1C6P4iR4OU89ltFS7QSuDhGKEIOFg9plQghTF99tRRrWYMb4fKF5O7kQqj0izpQX4uJ9alVc6P0g9qf4aHmU1d53zAYAhMTURm27IMssMpNG34FAy8nFZxIUtfG&X-Amz-Signature=a82e6f4b919f400c2a3c0a4f2ee2829ab816b68043c472725ecd9925d6a89b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7T6QSP3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAiLRyH2DUKMG1dGXi6m1QuqKjA%2F20cNBPMfVCVanAxtAiAXaHC1NqHRAc3q%2B9WmlwhrWd5W%2BN62OyifCuKozClauir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMzZ%2Fq%2FWoFOdv%2FXrKKKtwDxREeAzA5aPYybuVDy4%2BtNUaFEmHiTBKMh4IvtseWZD5yt8oP9NOQAtHDcnE3EiCMY3N9ol85bwA6YICVW0xR4xN9y%2FnmAEBWJQ19Fgyv%2BVh9OCZuaO9nZdzOQkVj15kq5x3vw1oD7jF4KuQJtk3SdmUqbCVSMm5FxJfz9HNIewsf0m6FedKsqZ6A6nFWt0YNZQlkdYlI9ISb7Xb8sf50MMbfmTmAY50i27JefTxWlZZBCLZwaLh45hyII0jMSp1dbBr8Sj8rII4rhk8GHKOK6spsIvKag1yHw2quY933DMYUUdl1pykS8T1svvkoyVeKrVh79LkKGCbS6tPIpc1WjG%2BsiB%2Ff7M1gly1gI4AqJJ1amP%2BsFMic9O%2Fio5OHK1MNZFOANIjABig2zlUUkkzh122BUF1fi7VznbJHmixoZBSzLi%2BKjG61zFC%2B3VKc2UZTvmQk8Uo4vVxSbHq68jUY%2FGSoSGlIpXcQjOXuExkoS%2FwhoXarNOo4W3T%2BBY0X4GmLksasc%2FpnjShM8OPCVW54sQ5Hem9eIIiyNW4RK%2BDWnNRKURDr1yld8yg7wgTqrCl7eD%2BUcH1aXESlSfctVTiyZ3b31Gr0S2HylZMunmNbIx6qtRfYHoG7sRqAvFUw6qHGyQY6pgFzluD%2FlGh6Xl6PjqyjkFUZtFD1%2FHFjqMGK6%2BiI%2FJeDzIg9I1nuC5eFXt59KN2Jbe2J800L8e82yUEwDbUkKyJZDr7cpr5EMuhDu1C6P4iR4OU89ltFS7QSuDhGKEIOFg9plQghTF99tRRrWYMb4fKF5O7kQqj0izpQX4uJ9alVc6P0g9qf4aHmU1d53zAYAhMTURm27IMssMpNG34FAy8nFZxIUtfG&X-Amz-Signature=32fb0a434f62cd50cd589e4b28231bc996d3b58d7b60c954836c2d086164eff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
