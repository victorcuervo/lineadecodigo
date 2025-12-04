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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THF3MJZI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDKuDDghApu4EcG%2Fuxx6D%2FCyREL8%2BZTyyauB4a5%2B2AusAiEApaf9tFL9LIJzIU0CDbG4KWCVt1JTRSfc1OOGwjb50MEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLXS4nCDJsKJLCkY6ircA1oK9WXBt%2FO%2Ft1rNqjpE9izrL%2FntagO4FLNp1evlfHq7%2BDiZLdw1jHr8KMZ4y0olkeS5TzQBZOYbbOOpHw6VoiftkytL9sxjYk3xDAT%2BLSslmpUWdNuSSeb2vRuAsdbwgrJPMTiy40URujrTBIHfhMYZ%2BsT%2B4G1%2FyTFdU0%2FoP86BTa6MOYRXbh0DldQqYwcWhDtk5WPdFIeWdBIJMLJwLsVHrR7iD%2FJqZu1pORaD1TCKvf8Q2QFMO0K%2Fe7z9Sfr9vi88ylp3XX7jacIYAssgIID5%2FAUaiiDBDf3mjGAtn%2B66rgLAgZMqZCmA0QCmG4ezJwjKu338JXmyfawNNY2%2BRdXNDVjXOgiKquQs07mfTzMLTB0P%2Bn588nz7G1SbcDIb53uHRTwzcRDwZFp5M2Jh6HfsDfEA64koVQdh5Y0W%2B9Wj6w5k8HLSQEnCNmySBocx%2BawHK2DLUvTalCC391%2B1DPbIVuw9JHiODm5hn%2F82Ct47eLLHaxdEzV3ES3nYj39SSvj33NfzBzBnvJeYgo9i2A9kgw%2FEQM13UUqlflaJKl9Qp93eZ%2Bugd4MKwQ8ZoJm8kwyiJDQUp7M1e%2FuUNCvUFeThqpA3p1ydghVSSDYWwZwOppnpqZr8YI%2BFhtVrMO7oxMkGOqUBwTCuBIwhPJYQ2GAttr26enCpQq4KtIrbGCNYQ0oG8ADG7WQ7qqyDqrr%2Bfo7SM41qUtln%2Bdc2U%2BLw3tNssHr8yWydpGJPKQ4bHCHIlVHTkOzmFRYEAKuw%2FHGVRYtRnr9stC5tIXyj1xgiuee9UBBApOYeHXSnL%2B0hSUmI%2Bh%2F2NZqHW6OBqvKbDIe6dRlNhuw2AcQIq1ad4vtzlbCfoGvo4QUWNzjn&X-Amz-Signature=ccd13884c85e84e7c6cce46138ea1691cef7c0cfc7a02a938d1f2a995bd49834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THF3MJZI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDKuDDghApu4EcG%2Fuxx6D%2FCyREL8%2BZTyyauB4a5%2B2AusAiEApaf9tFL9LIJzIU0CDbG4KWCVt1JTRSfc1OOGwjb50MEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDLXS4nCDJsKJLCkY6ircA1oK9WXBt%2FO%2Ft1rNqjpE9izrL%2FntagO4FLNp1evlfHq7%2BDiZLdw1jHr8KMZ4y0olkeS5TzQBZOYbbOOpHw6VoiftkytL9sxjYk3xDAT%2BLSslmpUWdNuSSeb2vRuAsdbwgrJPMTiy40URujrTBIHfhMYZ%2BsT%2B4G1%2FyTFdU0%2FoP86BTa6MOYRXbh0DldQqYwcWhDtk5WPdFIeWdBIJMLJwLsVHrR7iD%2FJqZu1pORaD1TCKvf8Q2QFMO0K%2Fe7z9Sfr9vi88ylp3XX7jacIYAssgIID5%2FAUaiiDBDf3mjGAtn%2B66rgLAgZMqZCmA0QCmG4ezJwjKu338JXmyfawNNY2%2BRdXNDVjXOgiKquQs07mfTzMLTB0P%2Bn588nz7G1SbcDIb53uHRTwzcRDwZFp5M2Jh6HfsDfEA64koVQdh5Y0W%2B9Wj6w5k8HLSQEnCNmySBocx%2BawHK2DLUvTalCC391%2B1DPbIVuw9JHiODm5hn%2F82Ct47eLLHaxdEzV3ES3nYj39SSvj33NfzBzBnvJeYgo9i2A9kgw%2FEQM13UUqlflaJKl9Qp93eZ%2Bugd4MKwQ8ZoJm8kwyiJDQUp7M1e%2FuUNCvUFeThqpA3p1ydghVSSDYWwZwOppnpqZr8YI%2BFhtVrMO7oxMkGOqUBwTCuBIwhPJYQ2GAttr26enCpQq4KtIrbGCNYQ0oG8ADG7WQ7qqyDqrr%2Bfo7SM41qUtln%2Bdc2U%2BLw3tNssHr8yWydpGJPKQ4bHCHIlVHTkOzmFRYEAKuw%2FHGVRYtRnr9stC5tIXyj1xgiuee9UBBApOYeHXSnL%2B0hSUmI%2Bh%2F2NZqHW6OBqvKbDIe6dRlNhuw2AcQIq1ad4vtzlbCfoGvo4QUWNzjn&X-Amz-Signature=843c293b518d62b087478e2343ef39d2fc21c3e1bd548882a6e931b42286630d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
