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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YP3FTT6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmt10eyfn85tK3ha%2FklMwSy%2FH9FnDRjcamCRk9FKAO%2BAiAZKHcGyXKITgaMO2E%2FdjJyg7Az3LFjjlqe9tNgwljdvyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMFt%2FEKLdx6CTo9s7sKtwDM2yWiUdexhLwYrlovqUcDbFz36WpmMEfCVcVZSuPvoBwwjJ0eM%2BFWtjmRNZxam%2BXdj0xZlCRd3wu5xK2AW3fbFgnPejvBNV4WgLi%2FPjgLJT3dkjhki%2BiP3Nev4TBYZquWb1iW5E4qZ0Y2bzE7jEddaHA27HRIaxgjJrZYz4bRhAWODULPTS9mZv53lxd66xHeFZ3sh9ziEwRsWAv%2FPGslffBEntfYHrj61RsDVuvbOahFW3aCpYF8PM5yairB%2FiXdgAOhp0z%2B9Qyzz3s3eLrU7a%2BU6JvYI7OPgjutsKjaUygqWKTBeSoMcL2L7He%2BsPdl2mD0IxDvlEv5%2BFXEsPhiMsZBqYvoW0Z9SyenUAIM0nltTreIiQ9Q2lUn6cCSaeu12ycKRBDeUJJRHciEKk3ZJjPyFx4J1zIuGRBVVrJyfANnTpyWaYwjWRfAnwb2Bqsdwm85vwWJxwxxnU9mg5FMwY25e9qnr79gWS4F21LX8E0svsd8RWDoOQtithgJpUiMyKcaeI6STiM7e3n%2FrY5d4L57vJVvhOBjENzCtK8AtfdnYRdYctzDBQSvb%2FYFWDegvOxtAhuTgxTB0dpHDStRT8m0Hmr%2Bdc9DzuIM2dncKzQc7O1Z7YIqbGeKh4wnabQyQY6pgGStMU%2BsdVAsgSiYiclXdAJva0LLGqlw951HmKncLAbrtxSvbOwsoSOUCG4pMiB7xPtpPN4713WkEyveAs34cLCtqpCJUl%2B0mwlKjWwYJK2G2RJ%2Bxv31dPp3tw6kJ4jRlt6%2BfZ8iEgXb%2BjA3E1rCZPzA4f0FGtYxwPnI0jA%2F9qThp7nM%2BLmxKhIIae3ekr%2BZyI9kTsDMUINg5YMgWo3od%2FhKR2REcUB&X-Amz-Signature=7c8c347aa9e5a4523126f09d5599349f5a50019e7209ab12674fcc001b0cc922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YP3FTT6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmt10eyfn85tK3ha%2FklMwSy%2FH9FnDRjcamCRk9FKAO%2BAiAZKHcGyXKITgaMO2E%2FdjJyg7Az3LFjjlqe9tNgwljdvyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMFt%2FEKLdx6CTo9s7sKtwDM2yWiUdexhLwYrlovqUcDbFz36WpmMEfCVcVZSuPvoBwwjJ0eM%2BFWtjmRNZxam%2BXdj0xZlCRd3wu5xK2AW3fbFgnPejvBNV4WgLi%2FPjgLJT3dkjhki%2BiP3Nev4TBYZquWb1iW5E4qZ0Y2bzE7jEddaHA27HRIaxgjJrZYz4bRhAWODULPTS9mZv53lxd66xHeFZ3sh9ziEwRsWAv%2FPGslffBEntfYHrj61RsDVuvbOahFW3aCpYF8PM5yairB%2FiXdgAOhp0z%2B9Qyzz3s3eLrU7a%2BU6JvYI7OPgjutsKjaUygqWKTBeSoMcL2L7He%2BsPdl2mD0IxDvlEv5%2BFXEsPhiMsZBqYvoW0Z9SyenUAIM0nltTreIiQ9Q2lUn6cCSaeu12ycKRBDeUJJRHciEKk3ZJjPyFx4J1zIuGRBVVrJyfANnTpyWaYwjWRfAnwb2Bqsdwm85vwWJxwxxnU9mg5FMwY25e9qnr79gWS4F21LX8E0svsd8RWDoOQtithgJpUiMyKcaeI6STiM7e3n%2FrY5d4L57vJVvhOBjENzCtK8AtfdnYRdYctzDBQSvb%2FYFWDegvOxtAhuTgxTB0dpHDStRT8m0Hmr%2Bdc9DzuIM2dncKzQc7O1Z7YIqbGeKh4wnabQyQY6pgGStMU%2BsdVAsgSiYiclXdAJva0LLGqlw951HmKncLAbrtxSvbOwsoSOUCG4pMiB7xPtpPN4713WkEyveAs34cLCtqpCJUl%2B0mwlKjWwYJK2G2RJ%2Bxv31dPp3tw6kJ4jRlt6%2BfZ8iEgXb%2BjA3E1rCZPzA4f0FGtYxwPnI0jA%2F9qThp7nM%2BLmxKhIIae3ekr%2BZyI9kTsDMUINg5YMgWo3od%2FhKR2REcUB&X-Amz-Signature=59254cf9c30c8caff3cfd25c4b5990adb16c894a84f92a03fd627667d64eca64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
