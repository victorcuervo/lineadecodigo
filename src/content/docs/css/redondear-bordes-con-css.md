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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPKZKSRP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA3Um%2FNZWJ6EMbPEjeC%2Ff1OR8Q7DJHjKICwjndD8VrvgIgQWP9MwpvCpnFcGbcEJB0ILinm9J8NVWN1Oax5F1A2rMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOGOTk7JFWpg3QNx%2FCrcA3hPTQED4VmOsv%2FxUeOqKUFXNX9gcm1JarxZU5b%2B6RMrF5FLKiPEEmLfpSOsi2GhjCaW%2BK7hbErmexcBFMkEvIOJqxQqwyOjmbVHo%2BVYKt5yh4VaEeMmh1PK%2BoK6BuD3r3cP4xHsgjxVg8hcCqTWllverI34R%2FMF29MxINKLRLw0BCpXJ4%2Frbmqhw%2FUo6uuMaGzeuWTn6rLZLEB2Fivpo67MB7VOFAPgzoNmb83GT2JrI0CGRSKGuV1YSR%2FpKWo8f1vCgNkgeYaBdka5vtlxnTzGX4u3OYavKLvrQSZjCEq%2F7I39U%2BEH0NO%2FKmjLPDXs9jWHmEoKlXU468OEoNgPkSiO99rv0l64x65EVmvrcI4Hb0cMZuKShP8asePPF%2BU7x27t1hBFsE4jE8NeXsdzatHePZjsiFs1fBj5uXfwLGlF3jsrk%2BudOZAx1%2BINGQ5LeURqTDjlBIUNbgm3SB25BjQtIH52kFpPy912062L39UoGR%2BM3o%2FtrNxQVT22PxKc8CKdQ7UvcaTCrld1N3uX4ZFMR948Hf0BDiX1j%2FirT00CB1Kzu06rpa7Qf7wdnzv1RhVi8Q3sL4Hzo6MeV2lUrKKZEofj%2FGCzvXaq0LI8agvhyrGYdnwYcycUN5gDMLzzy8kGOqUBYmOltNwaNtjGu%2FGWtGpubsY1dxsrIdk1QyzHa89d2oFV51TN1vFcPMwZQS4NRRJzLA4BQ6%2BPHDHlhIHWcMmz20Jd5UPIjpY8ioo8tZAjFayQ0gpag%2F3Ok9IxOkNnfvE2e3ZIyNeZPXrDwvAaRRB7v08am6o8ORmBYmz7OBW7Ci%2B8eN0d7yDMwJaAW1iFirW1jpStYCbQVr5HsTrr0t8DZlGqFhh0&X-Amz-Signature=80e8b97e75be016d6ddcb195ab7b20155b0e52e42737250ee123e9ca7889fd8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPKZKSRP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA3Um%2FNZWJ6EMbPEjeC%2Ff1OR8Q7DJHjKICwjndD8VrvgIgQWP9MwpvCpnFcGbcEJB0ILinm9J8NVWN1Oax5F1A2rMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOGOTk7JFWpg3QNx%2FCrcA3hPTQED4VmOsv%2FxUeOqKUFXNX9gcm1JarxZU5b%2B6RMrF5FLKiPEEmLfpSOsi2GhjCaW%2BK7hbErmexcBFMkEvIOJqxQqwyOjmbVHo%2BVYKt5yh4VaEeMmh1PK%2BoK6BuD3r3cP4xHsgjxVg8hcCqTWllverI34R%2FMF29MxINKLRLw0BCpXJ4%2Frbmqhw%2FUo6uuMaGzeuWTn6rLZLEB2Fivpo67MB7VOFAPgzoNmb83GT2JrI0CGRSKGuV1YSR%2FpKWo8f1vCgNkgeYaBdka5vtlxnTzGX4u3OYavKLvrQSZjCEq%2F7I39U%2BEH0NO%2FKmjLPDXs9jWHmEoKlXU468OEoNgPkSiO99rv0l64x65EVmvrcI4Hb0cMZuKShP8asePPF%2BU7x27t1hBFsE4jE8NeXsdzatHePZjsiFs1fBj5uXfwLGlF3jsrk%2BudOZAx1%2BINGQ5LeURqTDjlBIUNbgm3SB25BjQtIH52kFpPy912062L39UoGR%2BM3o%2FtrNxQVT22PxKc8CKdQ7UvcaTCrld1N3uX4ZFMR948Hf0BDiX1j%2FirT00CB1Kzu06rpa7Qf7wdnzv1RhVi8Q3sL4Hzo6MeV2lUrKKZEofj%2FGCzvXaq0LI8agvhyrGYdnwYcycUN5gDMLzzy8kGOqUBYmOltNwaNtjGu%2FGWtGpubsY1dxsrIdk1QyzHa89d2oFV51TN1vFcPMwZQS4NRRJzLA4BQ6%2BPHDHlhIHWcMmz20Jd5UPIjpY8ioo8tZAjFayQ0gpag%2F3Ok9IxOkNnfvE2e3ZIyNeZPXrDwvAaRRB7v08am6o8ORmBYmz7OBW7Ci%2B8eN0d7yDMwJaAW1iFirW1jpStYCbQVr5HsTrr0t8DZlGqFhh0&X-Amz-Signature=c60e370026853368b9b65c32b2cf31f66a82b7e49cba44e5d7a31ddb34bff5a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
