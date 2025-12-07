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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX265F67%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrhQj7RBtSBZ3Z%2Bf4IqkfjvN1zfhVuZ5heSP%2FGikseBAIhAOcJpljRrq%2BrefS5hRumHW%2BqxWFSvfFoJw93lfUsW0OtKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5Maz6FKlzvLNOZbkq3ANZgPfOZO7E3QAj0B791xu6VG8eEK2uK%2BV2zinfEpTZWfoQf9oe29EscS9oM%2FCc9sJk7a7EBIUduNDN8ylxYIr82hO%2B%2B%2FchhW5NupvzYEOmEPz%2Fw%2FcXK7y3sN%2F6YqOfwVjkx%2FuCjwWM7yZDiQMZJuFDSB9srrlry9nvPpym5EuBSct9VKSZ35jPK6aFZr5gh1VFBEHv0sRuik1Qw%2BXsokp97vfWgKqKRUQ%2F%2F0oDfwK%2FqKxdtpq3NuFi5kfGakIkJafTgVHcgO5Phol1okNN5DYZXiG2Hgjja6dhJfM6Lo6TPaUsMLPtP26ynsS52it0Kwg0P5LSysJ0SPnWieHeh%2B5FhgE2Efv6vOEPzQq5CMWrV%2FgOp8BxAyVduwGtttMIb%2BQljJNWnMiB%2FhVMJeF%2FAQFbh7sMRupFFG29VGbyRsN7I12%2B6%2FtqikNkHDVsKbfJo1QlDBrZGNdoAvF8FztzMIKxLZLtPbORZ%2B9nfGDDZ%2F3RhiGAJjqgvZHOzDh%2BQfL3o9lxcx%2FWPdwNTiApeIuIWKsiHJClAF89qs5DKQQLAC34kAkTEEFjR1Jm4LuSpcqoQt4GvuHpVGPjVyvtZ%2BDBSigC99UtVvziOsQ8a66Em2PmihX2IUodPowDl0iNJjD%2FhNjJBjqkAc2RcokohKA1udHwlU5fxB%2F%2FkYWCwV5WTNbelVeuQAsjBVhG82MvwLY2pXa057qipq8dY2l%2F7NJKxrnvmen3xpbnEFetIHE2KR4GZZrJA7CAvh9kbszLGmxJivZlN37Yf%2FQ3esQPgpJq6X%2BbeDTCcQU%2BR20yXpHdMDyedjLZrv0eoIwOtmjxL6NtUQptiqZGZWoDXBYcRlETXbEiP8H2X8XvylSS&X-Amz-Signature=4ef45da34863422876b6395543b0f22802842d95ec98421ac6db79b8e6d9057f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX265F67%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrhQj7RBtSBZ3Z%2Bf4IqkfjvN1zfhVuZ5heSP%2FGikseBAIhAOcJpljRrq%2BrefS5hRumHW%2BqxWFSvfFoJw93lfUsW0OtKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5Maz6FKlzvLNOZbkq3ANZgPfOZO7E3QAj0B791xu6VG8eEK2uK%2BV2zinfEpTZWfoQf9oe29EscS9oM%2FCc9sJk7a7EBIUduNDN8ylxYIr82hO%2B%2B%2FchhW5NupvzYEOmEPz%2Fw%2FcXK7y3sN%2F6YqOfwVjkx%2FuCjwWM7yZDiQMZJuFDSB9srrlry9nvPpym5EuBSct9VKSZ35jPK6aFZr5gh1VFBEHv0sRuik1Qw%2BXsokp97vfWgKqKRUQ%2F%2F0oDfwK%2FqKxdtpq3NuFi5kfGakIkJafTgVHcgO5Phol1okNN5DYZXiG2Hgjja6dhJfM6Lo6TPaUsMLPtP26ynsS52it0Kwg0P5LSysJ0SPnWieHeh%2B5FhgE2Efv6vOEPzQq5CMWrV%2FgOp8BxAyVduwGtttMIb%2BQljJNWnMiB%2FhVMJeF%2FAQFbh7sMRupFFG29VGbyRsN7I12%2B6%2FtqikNkHDVsKbfJo1QlDBrZGNdoAvF8FztzMIKxLZLtPbORZ%2B9nfGDDZ%2F3RhiGAJjqgvZHOzDh%2BQfL3o9lxcx%2FWPdwNTiApeIuIWKsiHJClAF89qs5DKQQLAC34kAkTEEFjR1Jm4LuSpcqoQt4GvuHpVGPjVyvtZ%2BDBSigC99UtVvziOsQ8a66Em2PmihX2IUodPowDl0iNJjD%2FhNjJBjqkAc2RcokohKA1udHwlU5fxB%2F%2FkYWCwV5WTNbelVeuQAsjBVhG82MvwLY2pXa057qipq8dY2l%2F7NJKxrnvmen3xpbnEFetIHE2KR4GZZrJA7CAvh9kbszLGmxJivZlN37Yf%2FQ3esQPgpJq6X%2BbeDTCcQU%2BR20yXpHdMDyedjLZrv0eoIwOtmjxL6NtUQptiqZGZWoDXBYcRlETXbEiP8H2X8XvylSS&X-Amz-Signature=3aaddde3d431951325834ad03851deeaeb6cefa7718828a9fccf878df11510c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
