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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AA2LJWR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEf39at40ji9xPH3BqcuBWIgctKxCo2CaAUaufEX0LkKAiB556jiqaESoiDCNC5OsFapB%2B7k5HskIUokuAENnGnjAir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM4JM7TMpHS1c2qeRaKtwDi9AYyZsD9f14XNPPNEQydRwAmr%2FZDe1bfrmIUFRE3EO2yEQ5ld2Cv8nx7RxkFIIHsV%2Bv8u%2BaReLTIbJygKqXwc3RzV0aqrepIP7uYK%2BKymtepICYLU2gufldABnF9kORLrNbDZuBm6HdRBu1jHHaxcokgepSeEIEhK0N3rvA%2BZGiqLKaQIG5sGMOQK6TReVRMTXhObvxxgkRo2qTg9R0K9sD23mcVlkxK%2BwRDYhwWCWy5l9bnjdVVE9t0fvaS8OlQuodsfTizjOLAAknc1hnNHYiJIujcp2PYNRpAZSzCPmjbE%2FuLzc725Ytqu%2F06TCFXzdTB8S%2F9cZScuSCOXc%2FRk1HoHMCeaBNRuSvJ7o0wvb2AUltqDl%2BE%2BOwIbfhkTCnWn6OEUSvDzFzVUmqzNLBFBpRbToltEZGZGf3IgOFnuWvyoARkRfdxl2QX6k32a99lxJuWfYvHfTJW8%2FaZ9I1aCXoAxfgaQhDKFhdzMYfcAkkGDgwaajUU4TsHPj%2FTQvw0v9cj8zhk2rXeV2WcYsch%2BS%2BJRunmkc6sZHx2klj886sRACyQ63X3hVUEGwfFDM3TMOpGWuYdkn22dxEsggnW4bznO1%2FRQANn9GgqWTT%2BnJQDf35BIrhvNl7neAw2J7PyQY6pgF73nKhIBJv1Rie1Os65EysO8J7ro%2BTgIK9Y63eT5mH31o%2Fer%2Bt5xsJ82J%2Bj7cAHFGmeF9Ak6tqMivdIfS5y4PDEj9pw0akNpvqtH6WrflIi%2BwAQEPQIjF%2BTUffKDlAeFqfSugRQppLBRUP2EspX2iu0343OSGrnGZdzIhmEffu5xTECPaUuHBO3YGIIuSsjdOkD9fS5klDcYwkc4KcahuorlqX38G4&X-Amz-Signature=3af146730a80f74e3075a0552b5b35aa7ee339aff5c7feb2dffafb4e04d32919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AA2LJWR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEf39at40ji9xPH3BqcuBWIgctKxCo2CaAUaufEX0LkKAiB556jiqaESoiDCNC5OsFapB%2B7k5HskIUokuAENnGnjAir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM4JM7TMpHS1c2qeRaKtwDi9AYyZsD9f14XNPPNEQydRwAmr%2FZDe1bfrmIUFRE3EO2yEQ5ld2Cv8nx7RxkFIIHsV%2Bv8u%2BaReLTIbJygKqXwc3RzV0aqrepIP7uYK%2BKymtepICYLU2gufldABnF9kORLrNbDZuBm6HdRBu1jHHaxcokgepSeEIEhK0N3rvA%2BZGiqLKaQIG5sGMOQK6TReVRMTXhObvxxgkRo2qTg9R0K9sD23mcVlkxK%2BwRDYhwWCWy5l9bnjdVVE9t0fvaS8OlQuodsfTizjOLAAknc1hnNHYiJIujcp2PYNRpAZSzCPmjbE%2FuLzc725Ytqu%2F06TCFXzdTB8S%2F9cZScuSCOXc%2FRk1HoHMCeaBNRuSvJ7o0wvb2AUltqDl%2BE%2BOwIbfhkTCnWn6OEUSvDzFzVUmqzNLBFBpRbToltEZGZGf3IgOFnuWvyoARkRfdxl2QX6k32a99lxJuWfYvHfTJW8%2FaZ9I1aCXoAxfgaQhDKFhdzMYfcAkkGDgwaajUU4TsHPj%2FTQvw0v9cj8zhk2rXeV2WcYsch%2BS%2BJRunmkc6sZHx2klj886sRACyQ63X3hVUEGwfFDM3TMOpGWuYdkn22dxEsggnW4bznO1%2FRQANn9GgqWTT%2BnJQDf35BIrhvNl7neAw2J7PyQY6pgF73nKhIBJv1Rie1Os65EysO8J7ro%2BTgIK9Y63eT5mH31o%2Fer%2Bt5xsJ82J%2Bj7cAHFGmeF9Ak6tqMivdIfS5y4PDEj9pw0akNpvqtH6WrflIi%2BwAQEPQIjF%2BTUffKDlAeFqfSugRQppLBRUP2EspX2iu0343OSGrnGZdzIhmEffu5xTECPaUuHBO3YGIIuSsjdOkD9fS5klDcYwkc4KcahuorlqX38G4&X-Amz-Signature=b43d22f5d998dba9a8e027f975da1e699dac47064b25990f55c8d6397b112736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
