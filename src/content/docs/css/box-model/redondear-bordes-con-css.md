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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FA2X4RO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDD9dkF1pf6GjhRXvbwVYE62JMw%2BDAjiUw%2BwHdWPKIozAiEArXBler2CaquDFEs6bLzcw7rGwCsmbYvV49gQ1C862gUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDxUAnBFx2iPTQ7eqyrcA2Rp3%2BEw7DETz3oKm6McFeCDuSy3NYVAMYE3cXw2sv%2Be17%2BJJX96Lctf8lWho9eMjK%2F3zcC0n%2BsMIwYGYO6O6gZO%2FOwSYDb7CIwrm6cBsc%2F%2FeuWADcf9plkxncQYYyURKZJUoUKiMTlhoAdgZW3okp9V1AyO%2Fy4mZsgCAOX5VDF6%2BWIrVUOeWd2jq73UV2W7ZIAXYKYH8KrupBbaNHKYQIt6I0z6L2hOUYK%2BfJd3bpIB%2B3OgWzvxVGp8H8BdFtAyu0jjAbQKZQAEfW0cySbetI3vfMmCm%2FVOCkGfL8zhlinUvpzBW5SjyF0ylI8JivNEBujreHaII0lIJUmDqgzXGLSWJo%2FMODM2p3D1Ck16LcUTBCrfPgLOYOpxT7n2Kv79w%2FIS8NLNdw8tDJCmZ9gpLOcG2STSZP9cGj9r89E8pPaydltUHh0NB%2BTCwaHtvQFJwq1wpO5kgQMqat%2BJDhVQCoacYalKJnSULvohCD29hJ0g66pTfX1jK19T2M4UP4FkNOP6BFpZLKxGEUfHcyP%2Bu8j40MyiL3q69pFDSfGVkUTE431XpqClLltGl8NIQYjX2SCBjpCO%2FJ7DonJX5u3fGaKe4CkAP4qq7ar0QSw%2F%2BPZhroH0IWyd0Ju%2FrCWsMMjfh8oGOqUBf1DBglsxeUzRwTCVUnIh3oUHtmcR2bW%2B4UKfnhFafeFuRCB0%2FabMN0wE6wzSu8Rw6kz9ZCVbL2nG2oqQS9X7V7W2sJiqXxJ%2Bhxxf0MkC0Y25OvBIV1PvrjBe4IECLaF5UQ%2B2o%2Ftt%2FdZHJ2YpkxNZF0%2B5xjTfg2iaX4qyaYImCLe6gyPxmZ7LTNb84f%2Bt8WRsMEt6GlxYED1u3ZLsDJF7Cj8DTkVp&X-Amz-Signature=e704ea3ceb912572cb1493489369544d34345510f81ca9a03cd2c0af9ef89b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FA2X4RO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDD9dkF1pf6GjhRXvbwVYE62JMw%2BDAjiUw%2BwHdWPKIozAiEArXBler2CaquDFEs6bLzcw7rGwCsmbYvV49gQ1C862gUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDxUAnBFx2iPTQ7eqyrcA2Rp3%2BEw7DETz3oKm6McFeCDuSy3NYVAMYE3cXw2sv%2Be17%2BJJX96Lctf8lWho9eMjK%2F3zcC0n%2BsMIwYGYO6O6gZO%2FOwSYDb7CIwrm6cBsc%2F%2FeuWADcf9plkxncQYYyURKZJUoUKiMTlhoAdgZW3okp9V1AyO%2Fy4mZsgCAOX5VDF6%2BWIrVUOeWd2jq73UV2W7ZIAXYKYH8KrupBbaNHKYQIt6I0z6L2hOUYK%2BfJd3bpIB%2B3OgWzvxVGp8H8BdFtAyu0jjAbQKZQAEfW0cySbetI3vfMmCm%2FVOCkGfL8zhlinUvpzBW5SjyF0ylI8JivNEBujreHaII0lIJUmDqgzXGLSWJo%2FMODM2p3D1Ck16LcUTBCrfPgLOYOpxT7n2Kv79w%2FIS8NLNdw8tDJCmZ9gpLOcG2STSZP9cGj9r89E8pPaydltUHh0NB%2BTCwaHtvQFJwq1wpO5kgQMqat%2BJDhVQCoacYalKJnSULvohCD29hJ0g66pTfX1jK19T2M4UP4FkNOP6BFpZLKxGEUfHcyP%2Bu8j40MyiL3q69pFDSfGVkUTE431XpqClLltGl8NIQYjX2SCBjpCO%2FJ7DonJX5u3fGaKe4CkAP4qq7ar0QSw%2F%2BPZhroH0IWyd0Ju%2FrCWsMMjfh8oGOqUBf1DBglsxeUzRwTCVUnIh3oUHtmcR2bW%2B4UKfnhFafeFuRCB0%2FabMN0wE6wzSu8Rw6kz9ZCVbL2nG2oqQS9X7V7W2sJiqXxJ%2Bhxxf0MkC0Y25OvBIV1PvrjBe4IECLaF5UQ%2B2o%2Ftt%2FdZHJ2YpkxNZF0%2B5xjTfg2iaX4qyaYImCLe6gyPxmZ7LTNb84f%2Bt8WRsMEt6GlxYED1u3ZLsDJF7Cj8DTkVp&X-Amz-Signature=f53527cdf548f72db07d1981c7e1c0d9453ac2782000b379f688fb2fc2513c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
