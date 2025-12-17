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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VSSTYCG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg1wAcffKP5WzitgxdtEmKDMTEJhpqIZUdCJa2kpGOYAIhAOnKrO5CQdUXmM0F6dEKpcqs%2BmCe5%2BhnjxSQdWd7VfF9Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzcZJp2l3Cu4r1UN%2F4q3ANnpgl3cmxtZIZpLHLleUAz3pfalhwS1YN5DYjuZkgxrmoFJ21yMZ7YvIY2o3NZQtEc4qn4itT%2FB8WxS0jU1sBv74GgH8IOSkx8qcfYvaNkFUEzAIwmbEd%2BxDYvohcp58fxohlyJ1GOck9qO1giQpGLmYAoLHCLLPN0LBBJhQQGfJNgvdL2YhlCQo%2BFB%2BUg4PGlYz0xaGEO%2BSyvV33nqUH94LBIPqiA27ksbsTqZzE1fq23DlXyhkIfqF%2Bn9q7HjeOvMN7OrUwhZkt7rXdmEWMhxoRL2m1sMjwD4me9DsbLyQyxHYsQf6MCKlyv%2FwlDPAF0yN3k6LgAxbPLL4H1wtYVQofGirPQeCdgRZop9lLFLKfwZlaABq61tZdaGlNH7x3KHcbc9KoPM1SJAoHfvhJ%2BIXB9DCm2XfQ0ILQ5yPoGTS3QQ%2FIoKFXIE17bu4mVjr%2FsqQ4QxKo0VVIuhgRd%2BAWDuEOrEfk%2Bt%2FdP%2FeTdcAGDwky%2B%2B50ktyxbcBhHejWVPqZ9n1TU2gwT7lCPOt68FBnfzbhIfE3jA6k1ZfdDEES9ti6tLz%2FVzElgmHvaaPBsOCPwWyoxHQXG730WtrihB81F%2BK%2FWR%2BpsqICTOdFyHZ1qJ8LsubzFWQZvaYS6ZjC%2FsYjKBjqkAQLRnRNhkpHoNccMjaGPzTMWUD2iCIANu47xghV82XQZhkUqXi7Barwg2cE5cBewUQ7wwuHC4iprcP1pRuZVK%2B2vbBD0b5qr4kijP4sAjbewDqKn6e7P71Pn3lc%2FDW7aMiI6FmoEFCFEbN%2BMBtSh2NwIo8iSrrhD8niOHfZhByR8qB7lmmaetOA7s%2BIu1yPtM0rSNP3xdGsejNIxcQF4jCXW5gRa&X-Amz-Signature=4ce5b5f11456a63145a7699c41a39eb569156e4f8e4ec40715e72018fe4c08d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VSSTYCG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg1wAcffKP5WzitgxdtEmKDMTEJhpqIZUdCJa2kpGOYAIhAOnKrO5CQdUXmM0F6dEKpcqs%2BmCe5%2BhnjxSQdWd7VfF9Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzcZJp2l3Cu4r1UN%2F4q3ANnpgl3cmxtZIZpLHLleUAz3pfalhwS1YN5DYjuZkgxrmoFJ21yMZ7YvIY2o3NZQtEc4qn4itT%2FB8WxS0jU1sBv74GgH8IOSkx8qcfYvaNkFUEzAIwmbEd%2BxDYvohcp58fxohlyJ1GOck9qO1giQpGLmYAoLHCLLPN0LBBJhQQGfJNgvdL2YhlCQo%2BFB%2BUg4PGlYz0xaGEO%2BSyvV33nqUH94LBIPqiA27ksbsTqZzE1fq23DlXyhkIfqF%2Bn9q7HjeOvMN7OrUwhZkt7rXdmEWMhxoRL2m1sMjwD4me9DsbLyQyxHYsQf6MCKlyv%2FwlDPAF0yN3k6LgAxbPLL4H1wtYVQofGirPQeCdgRZop9lLFLKfwZlaABq61tZdaGlNH7x3KHcbc9KoPM1SJAoHfvhJ%2BIXB9DCm2XfQ0ILQ5yPoGTS3QQ%2FIoKFXIE17bu4mVjr%2FsqQ4QxKo0VVIuhgRd%2BAWDuEOrEfk%2Bt%2FdP%2FeTdcAGDwky%2B%2B50ktyxbcBhHejWVPqZ9n1TU2gwT7lCPOt68FBnfzbhIfE3jA6k1ZfdDEES9ti6tLz%2FVzElgmHvaaPBsOCPwWyoxHQXG730WtrihB81F%2BK%2FWR%2BpsqICTOdFyHZ1qJ8LsubzFWQZvaYS6ZjC%2FsYjKBjqkAQLRnRNhkpHoNccMjaGPzTMWUD2iCIANu47xghV82XQZhkUqXi7Barwg2cE5cBewUQ7wwuHC4iprcP1pRuZVK%2B2vbBD0b5qr4kijP4sAjbewDqKn6e7P71Pn3lc%2FDW7aMiI6FmoEFCFEbN%2BMBtSh2NwIo8iSrrhD8niOHfZhByR8qB7lmmaetOA7s%2BIu1yPtM0rSNP3xdGsejNIxcQF4jCXW5gRa&X-Amz-Signature=cc300155ce3c9a0b9a56dcc9081c6c96e6817a0a00fa083cdbf93fbf3e570f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
