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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHAZNNB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhcFIAIyThtyEJ7MYF66Kk3m2rztbzFeDGCle93DGIDgIhAJJXd4%2FwTt9AJov%2FjRShcO1r9ETAXxsSn56i8vkgKeFuKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI5PZvO09vNnQwbKEq3APKqUBWuWvswGKRAvrc3lmuAAgdG8qGJidXMsWUIaYttfAWxzKTq%2B9M0dNgk12BOCiCPY4QPWhvcjwGadbAJJp3DH%2FiP0dF4sIAOlrH2tDdP0qg%2Ba7HyUxQdDIJmzP3S57MXRzBLX565Fs1G%2BSOaYr9jdObYyYEKsrVWTGcKc5yR7yfV4WEiYYc2en%2B9%2BVdHGgYcG0pK1Inj3Dk1Ukw3stg1vVfsXwnNODx3Il2arNhNl29k7M65dmXNjxKx1fQy9Cn8cik%2B%2Bo7MpdYsQUEx0N%2FC0NfJqOfzzUyRUFKoxFP5QWUtKgW2HfqQ7ujVh6eh63SI8Rx%2FqFzJ%2Be3qQKVLAFT2eTs5v6sNb0nKWmKW5E8HeUg6D3%2FCVAO4jNPE4yNUxxwgt6t6Bro3bP82Jhpg%2B0r2uSzJze%2FeS1IAw2MAqVLmhTA1oBePzOQ1TDkOSsH2xmCgUWL44m22UKaYlgluPd3HM%2B7IXtxwshGOOjZS%2BNjUgXEKMpEsHhbDt8Xp5oRgtJWnVlhgEQuvHmPQp22yV%2FMzGKNXwYM7krt%2Fh5sy9nl7KtccjARz%2FJs7muzxHa4Kt0i4I5ZeetUi9N094ri3amkA8ukWKzvim7VmkepQ2p8xsw4scxepQSlmeMeFzDLwt3JBjqkAZiOVRsAfaPmaAz27xsun5mHKBsBAm4se9sLo5lGVdPiFkKvMMTzohA3WRuJa%2B8zAf44GbloMTDOKlSXU2h6xHa2b4XNtRngjX9kA68dbJWEvXe9O3bCz59hA8HlB70NDp5uSKbvIFNdujecX%2FF57O211nRVkCT4D7ZgFFlhVJRoebPud7LLh5fVo4NYnqcvUwbO%2B3vwfIhx9W2XByIdBJ2%2F63eq&X-Amz-Signature=7408d9903fbbd5cbf38409275ac3fe9e17e4eaeeee9e733978a0a7c409e35d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHAZNNB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhcFIAIyThtyEJ7MYF66Kk3m2rztbzFeDGCle93DGIDgIhAJJXd4%2FwTt9AJov%2FjRShcO1r9ETAXxsSn56i8vkgKeFuKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI5PZvO09vNnQwbKEq3APKqUBWuWvswGKRAvrc3lmuAAgdG8qGJidXMsWUIaYttfAWxzKTq%2B9M0dNgk12BOCiCPY4QPWhvcjwGadbAJJp3DH%2FiP0dF4sIAOlrH2tDdP0qg%2Ba7HyUxQdDIJmzP3S57MXRzBLX565Fs1G%2BSOaYr9jdObYyYEKsrVWTGcKc5yR7yfV4WEiYYc2en%2B9%2BVdHGgYcG0pK1Inj3Dk1Ukw3stg1vVfsXwnNODx3Il2arNhNl29k7M65dmXNjxKx1fQy9Cn8cik%2B%2Bo7MpdYsQUEx0N%2FC0NfJqOfzzUyRUFKoxFP5QWUtKgW2HfqQ7ujVh6eh63SI8Rx%2FqFzJ%2Be3qQKVLAFT2eTs5v6sNb0nKWmKW5E8HeUg6D3%2FCVAO4jNPE4yNUxxwgt6t6Bro3bP82Jhpg%2B0r2uSzJze%2FeS1IAw2MAqVLmhTA1oBePzOQ1TDkOSsH2xmCgUWL44m22UKaYlgluPd3HM%2B7IXtxwshGOOjZS%2BNjUgXEKMpEsHhbDt8Xp5oRgtJWnVlhgEQuvHmPQp22yV%2FMzGKNXwYM7krt%2Fh5sy9nl7KtccjARz%2FJs7muzxHa4Kt0i4I5ZeetUi9N094ri3amkA8ukWKzvim7VmkepQ2p8xsw4scxepQSlmeMeFzDLwt3JBjqkAZiOVRsAfaPmaAz27xsun5mHKBsBAm4se9sLo5lGVdPiFkKvMMTzohA3WRuJa%2B8zAf44GbloMTDOKlSXU2h6xHa2b4XNtRngjX9kA68dbJWEvXe9O3bCz59hA8HlB70NDp5uSKbvIFNdujecX%2FF57O211nRVkCT4D7ZgFFlhVJRoebPud7LLh5fVo4NYnqcvUwbO%2B3vwfIhx9W2XByIdBJ2%2F63eq&X-Amz-Signature=57c750c400d2c870cae1e84465c8f42219dee771410e479dada259108fb7e29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
