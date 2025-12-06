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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDWQFPW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHA5ZxQlLSn%2F8PyZ0cm6yB5NarCXjjnH7MzuRBAEwwJQIhAKNNAH19b0MFbXVO3O%2BrCmCMNlxZVfuFSzM5ifvnlVLSKv8DCGsQABoMNjM3NDIzMTgzODA1Igxxh%2B0nWtovQM80FfUq3ANc3wV03efdAdgmQxfPv%2BkUH0%2BVfJJn8ibMnQFq6cLv54cTZGiuc0mt5Nr1%2BOUn2bMWtCJvN4eagg9MVmQ6Yh1gmnF6n0fI49wKbt1KeAK%2Bs4Tx468kbzVZghe0D9WPBT5fzRjmDU0abRCSaTwjg7x%2BEU98rZdQEBLkoGR0uArnUsTpr8GC%2BY9B4n5NZbVNiFmyVC1APdMX14DpTXSr1ukGSTgZ99G9d48FOdl%2BEAwHh8tzYGtUnvwQL5%2F%2BwRj8zo8KXInwvXYA52yVgfy0C%2F5VrtHVQBHY7tWfaaegvDPrkw0KGxm4jODsiNUfYMD00DkxpQIaX1ZdNA4jE6%2BHywfmzcbL36E3piMD%2F2uxrWyogRgOyEKjbXAsO6osZAaknps3i7qUujXVX5bUL%2BxhcYZfW1OLiTMeKdScFN6Xx97gxfoHj6W%2F0kWdIZnRp228TrdM2foLOH%2B%2FEwFEhM0rkDdoBc%2BVADa2Kl6axjEU3g6egza%2FrZXotmlI2GhpM88q9ngTCNWOURZAhdY9iqruEUgLme5DxT3SfoGA%2F2lA0PJOfBF8jjkCQT9V%2BxZQ8Y0j5WXIvAtVDJZDT4%2BNkJW2DUPYVRq1xBYEiaaAaeRjBHH5xgwkyDFNyq6Jr0y%2F8zDgp87JBjqkAUkNg9iHu%2FmhVNZAWzUoOd648G5Yvu30IT6MyYTH6Ufksy7hiLuyM127lMJZLNT%2FW2aqpazEAKYXGzkTU1hCDF9v8BTU5VixXppMkwBsaOj9Mj3d6h84cT9bIEYcBS3In9aG3aVKCdbY%2F29DtrVSV%2FdF7q2TFMSwKzimYltiUCaIjHhUCyBybnBedFRcSIpOu%2FD8yD%2BlBbLaBRXznrWLDbBICE2f&X-Amz-Signature=7c6b8b1661a7dcb26269f5623c03919fc6e2bafac27134ce330f69cf1fdfae5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDWQFPW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHA5ZxQlLSn%2F8PyZ0cm6yB5NarCXjjnH7MzuRBAEwwJQIhAKNNAH19b0MFbXVO3O%2BrCmCMNlxZVfuFSzM5ifvnlVLSKv8DCGsQABoMNjM3NDIzMTgzODA1Igxxh%2B0nWtovQM80FfUq3ANc3wV03efdAdgmQxfPv%2BkUH0%2BVfJJn8ibMnQFq6cLv54cTZGiuc0mt5Nr1%2BOUn2bMWtCJvN4eagg9MVmQ6Yh1gmnF6n0fI49wKbt1KeAK%2Bs4Tx468kbzVZghe0D9WPBT5fzRjmDU0abRCSaTwjg7x%2BEU98rZdQEBLkoGR0uArnUsTpr8GC%2BY9B4n5NZbVNiFmyVC1APdMX14DpTXSr1ukGSTgZ99G9d48FOdl%2BEAwHh8tzYGtUnvwQL5%2F%2BwRj8zo8KXInwvXYA52yVgfy0C%2F5VrtHVQBHY7tWfaaegvDPrkw0KGxm4jODsiNUfYMD00DkxpQIaX1ZdNA4jE6%2BHywfmzcbL36E3piMD%2F2uxrWyogRgOyEKjbXAsO6osZAaknps3i7qUujXVX5bUL%2BxhcYZfW1OLiTMeKdScFN6Xx97gxfoHj6W%2F0kWdIZnRp228TrdM2foLOH%2B%2FEwFEhM0rkDdoBc%2BVADa2Kl6axjEU3g6egza%2FrZXotmlI2GhpM88q9ngTCNWOURZAhdY9iqruEUgLme5DxT3SfoGA%2F2lA0PJOfBF8jjkCQT9V%2BxZQ8Y0j5WXIvAtVDJZDT4%2BNkJW2DUPYVRq1xBYEiaaAaeRjBHH5xgwkyDFNyq6Jr0y%2F8zDgp87JBjqkAUkNg9iHu%2FmhVNZAWzUoOd648G5Yvu30IT6MyYTH6Ufksy7hiLuyM127lMJZLNT%2FW2aqpazEAKYXGzkTU1hCDF9v8BTU5VixXppMkwBsaOj9Mj3d6h84cT9bIEYcBS3In9aG3aVKCdbY%2F29DtrVSV%2FdF7q2TFMSwKzimYltiUCaIjHhUCyBybnBedFRcSIpOu%2FD8yD%2BlBbLaBRXznrWLDbBICE2f&X-Amz-Signature=4889d8bc8c87a3f4e18d9979a2439a58af054d801130156193184fee31117e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
