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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPDF3OD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHjupjXwyrydn%2FD25eUrGzjsJK0DmGWWFzyWNmYjOIOQIhANB6%2BD0LlcN0%2BD7tD26k8AiamvyRadHmKqwJKO%2FuLS%2F%2FKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAvlq3wlUyjZhNkQYq3AMGmpT45PAD5DFwYXibApmYZ1oZ8D%2Fsg6iAjnTXrllZr4boEf8kUffSPcZTyMG6BFckQrXdw8I4SGy8QbuPYSRCueWcsCznCqC6fO%2F0c%2BU%2BqTQdAsJ8lBt7kRBihjd5v%2B3h7Ybu7BDDrS9JfNQ9Dx8ySZe2asfUpcGFCMfBlJpYcE2rZq8YFaK6V4V3Q0Me7a26Ydn%2BCorMtOaOMN8J9Vsfj7psrxQ4fuaYMdU31e2gs8Botj7CH59pktmtZVc3K0ZJ063zvhjTftjJItmovejcuw4uEbWFwFEiPYEFS2hykPDEOIkTMX8LeQvLSVAq2svnB2lBVzMH4rSThrFyMYxA6ZoJTC%2BzxBgl%2FMUoYSeii0u7HDz54yO7SeNhrP%2BmvUPXg4lj6%2BI4ohb7H%2FwpzTKPhwdDKNL8SPQEpEIVqUdYdkWzRNFbT%2FCdY0fnTabPhivSr7sEFhYZE%2FO5bRB2OY3ZNpeo8QVKjzk4IJ%2FWVl8Oa4Em0xcFPlGtE%2FVLRP%2B%2FChvuGBFVB8Z111SOxF5JXhyOquEZTYB7m8jQZrinrOsw2u2DUuqhNdMuEo8V2lBUbzmiGYPaDqDe2pGjrGR7JSDGDliT4ZOHIdxrwZu%2B2EXN0ZVs2wFkVhzpoVOwVTDJmdXJBjqkAUbfcYYcNO1Vjrjxr1EBu3t5%2FioSx8cto41HgD7abjpfDleX9naa5Z0G8agJ42pKOhxXPK5aOhN%2BiBsK36yrytdlvWQXm5N7tGhR%2B0f5foGW3HYvJOELWKzR6ZI4kO7130w%2BcXej6E62TiH5d2O12zH5cn0U4ox7tbH%2B2y3MW%2BpNgaojPiBFuiwZIiIss1OQ5S%2FSYg0%2FmQBE3o2LsZkVsvnUf3tF&X-Amz-Signature=bd1ea3aee669e1bce3199b4ee3485335f1402b872f1684c838fb5d73836eaaf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPDF3OD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHjupjXwyrydn%2FD25eUrGzjsJK0DmGWWFzyWNmYjOIOQIhANB6%2BD0LlcN0%2BD7tD26k8AiamvyRadHmKqwJKO%2FuLS%2F%2FKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAvlq3wlUyjZhNkQYq3AMGmpT45PAD5DFwYXibApmYZ1oZ8D%2Fsg6iAjnTXrllZr4boEf8kUffSPcZTyMG6BFckQrXdw8I4SGy8QbuPYSRCueWcsCznCqC6fO%2F0c%2BU%2BqTQdAsJ8lBt7kRBihjd5v%2B3h7Ybu7BDDrS9JfNQ9Dx8ySZe2asfUpcGFCMfBlJpYcE2rZq8YFaK6V4V3Q0Me7a26Ydn%2BCorMtOaOMN8J9Vsfj7psrxQ4fuaYMdU31e2gs8Botj7CH59pktmtZVc3K0ZJ063zvhjTftjJItmovejcuw4uEbWFwFEiPYEFS2hykPDEOIkTMX8LeQvLSVAq2svnB2lBVzMH4rSThrFyMYxA6ZoJTC%2BzxBgl%2FMUoYSeii0u7HDz54yO7SeNhrP%2BmvUPXg4lj6%2BI4ohb7H%2FwpzTKPhwdDKNL8SPQEpEIVqUdYdkWzRNFbT%2FCdY0fnTabPhivSr7sEFhYZE%2FO5bRB2OY3ZNpeo8QVKjzk4IJ%2FWVl8Oa4Em0xcFPlGtE%2FVLRP%2B%2FChvuGBFVB8Z111SOxF5JXhyOquEZTYB7m8jQZrinrOsw2u2DUuqhNdMuEo8V2lBUbzmiGYPaDqDe2pGjrGR7JSDGDliT4ZOHIdxrwZu%2B2EXN0ZVs2wFkVhzpoVOwVTDJmdXJBjqkAUbfcYYcNO1Vjrjxr1EBu3t5%2FioSx8cto41HgD7abjpfDleX9naa5Z0G8agJ42pKOhxXPK5aOhN%2BiBsK36yrytdlvWQXm5N7tGhR%2B0f5foGW3HYvJOELWKzR6ZI4kO7130w%2BcXej6E62TiH5d2O12zH5cn0U4ox7tbH%2B2y3MW%2BpNgaojPiBFuiwZIiIss1OQ5S%2FSYg0%2FmQBE3o2LsZkVsvnUf3tF&X-Amz-Signature=0c2d2a9c602f83e4793cce1147042389cd212cab0dda3a4abf444183d29ea2a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
