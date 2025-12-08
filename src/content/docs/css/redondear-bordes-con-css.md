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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLD2E3HE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC10PSwctnydprKbtubAD983IFpZS0LPC4pKIhLb3StHAiEA%2BmwwAlSGWvXv%2FELiv1%2F91%2BS9gpm7raC73MTZBmQx67oqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdXJoFsQ5TnIW%2FpBircAx7bTSz4jfs%2BHnwlHFBFsneQsUg79F74l9nphWeuf5J%2BQAF2vL7DrG44KtLWSCcBiNkXMPl8t8H2uX9tE0fpVrzRB7GrijysqUdoch8%2BgUWLTDUgyaMUGzXsZawqX6hZVX5jBO9C8o8r8V7O%2BrykX6cIb%2Flflb7fJu%2FAMgiyje0XfmRDkuVPGPP%2FMlbLkd0%2BuKHidwLZTNU2dofr6GoxYdmD9ROOo2tcUCl6DTlChto5qI5OGIT%2FGz1sNn8Wt0KITDqzuPrYb6y3zbJt1Z4izICp67ONw%2Bml13WCTmql4t9bAtfpx8sS5lTmWd6M72pE5RZ60lvg8hRebFAFALthcOaFtISgK0X0VQq%2BwWI5qZQq2vY99m%2BkXdVk5zI7HF61pUGiOTxHbfPIUAscpBxXfEV54P%2F57y1x8KyzwzrclYuhKKH5AkDlipcf7BSWvbWTvAoSpwCyuDQj4IlFGG%2Fa%2BbOjJ9TM11%2FeAPFMmJdNG95GPTQOlvmhsf3bvqyrNLgeO2tzSmO7456YIm6z%2BW0B5F9cm0qgszJmMkoWGkKTHY%2FxLKi%2BQtpv2KgJ%2F0D8l0%2BQCz1fBSLKJ0HkIhQFLk%2F0jSfwQ9PkyobfkyHqfmYddc8PedeN9GZejAHp3tz7MOnt2ckGOqUBx9wMrC5Nc6O9%2BmV%2FmzU%2FRLcqd3t3cwOLku%2Bqa%2BmAHdz1MXVtYFNhCSbBsl6hudM7hQbu2GMNSBqPEmWmN6hGnwtwFPKI7hfD66lhQ18Xxm08BhslI1j9Tqp0La7Z8z2in1KlBN7c52H6xE4Wrc1gi0Z8psNuTen4uGq9LNtsnhzRUTkOD5HrxSeUWQMdyIIcrcnxnufpGzBJZulyx81UabcEkn6y&X-Amz-Signature=6d86b0901fab1afdee9c18cc0a517c1c741a5278ebe1115ede50fe7a21d9a969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLD2E3HE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC10PSwctnydprKbtubAD983IFpZS0LPC4pKIhLb3StHAiEA%2BmwwAlSGWvXv%2FELiv1%2F91%2BS9gpm7raC73MTZBmQx67oqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdXJoFsQ5TnIW%2FpBircAx7bTSz4jfs%2BHnwlHFBFsneQsUg79F74l9nphWeuf5J%2BQAF2vL7DrG44KtLWSCcBiNkXMPl8t8H2uX9tE0fpVrzRB7GrijysqUdoch8%2BgUWLTDUgyaMUGzXsZawqX6hZVX5jBO9C8o8r8V7O%2BrykX6cIb%2Flflb7fJu%2FAMgiyje0XfmRDkuVPGPP%2FMlbLkd0%2BuKHidwLZTNU2dofr6GoxYdmD9ROOo2tcUCl6DTlChto5qI5OGIT%2FGz1sNn8Wt0KITDqzuPrYb6y3zbJt1Z4izICp67ONw%2Bml13WCTmql4t9bAtfpx8sS5lTmWd6M72pE5RZ60lvg8hRebFAFALthcOaFtISgK0X0VQq%2BwWI5qZQq2vY99m%2BkXdVk5zI7HF61pUGiOTxHbfPIUAscpBxXfEV54P%2F57y1x8KyzwzrclYuhKKH5AkDlipcf7BSWvbWTvAoSpwCyuDQj4IlFGG%2Fa%2BbOjJ9TM11%2FeAPFMmJdNG95GPTQOlvmhsf3bvqyrNLgeO2tzSmO7456YIm6z%2BW0B5F9cm0qgszJmMkoWGkKTHY%2FxLKi%2BQtpv2KgJ%2F0D8l0%2BQCz1fBSLKJ0HkIhQFLk%2F0jSfwQ9PkyobfkyHqfmYddc8PedeN9GZejAHp3tz7MOnt2ckGOqUBx9wMrC5Nc6O9%2BmV%2FmzU%2FRLcqd3t3cwOLku%2Bqa%2BmAHdz1MXVtYFNhCSbBsl6hudM7hQbu2GMNSBqPEmWmN6hGnwtwFPKI7hfD66lhQ18Xxm08BhslI1j9Tqp0La7Z8z2in1KlBN7c52H6xE4Wrc1gi0Z8psNuTen4uGq9LNtsnhzRUTkOD5HrxSeUWQMdyIIcrcnxnufpGzBJZulyx81UabcEkn6y&X-Amz-Signature=23dea7926bd4dea139a7b4a437f74b6002f5998910c8a8ff27e37237f31464c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
