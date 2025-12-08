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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L2LWOQV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2DPBC%2BpHkwn2urY3TxLO64uJ0zqaLtTCa1ci64ug%2BQIgck93zpymiZBPEv%2Bn9X0YNXvnaLmGiYpIVBhqWiB6s4QqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYvBQRR8cTkcYHRmSrcA6lZZ9KjXCJgqbjnmQPabzImwHLW7x%2B2DQPAXYoJMrvAUOkkFP3rrwu8qJJx62j5i8QCM2dq0DG8IjWX%2FUWJE2HK0FC2D2nQJ5%2FTAi5Irvv0hnt%2B0VS6JXIzMXXmkL%2FyGfeElTyU9v%2BGLTXgpABDyo97KasF6SnconaiIYk1DLPXwYVEK%2BUtPZfa05VQwlxWYVYWnuaJBj4uIU4QzZ2pKLYDPmv3xYgIcJOArToHjtZ2Po15gOii6NJV3c4f2V83lazMwbPEZRvfor8aY3qhS63pp0gQggSNpsam7YevLUUZ7XZWYMRmpHtDSxFo7LtdFwaUVWIL5bxVUneo1vCDXaGqsVpnclCNZiprNSSX6bx9%2Fu0bue9yzt%2FSHkYHeWy7o%2FB5tgVNR6a8fDf8QNIbEXieNgjkV8qWy9c79AsDUKJ4W6CWqW%2BCGbc8yVbU7gYYl0qS8d8eKsaS1KWfZ5OBRJvohT%2Bb%2FyY5teFY2uCGioaa1vQAvEs5SvDlCrvd4JR%2FZrsfdSfZX4KUJ2o35XzXDLzTCgqFL%2BgVD%2FKbhuBlg7Zo3tlz9pnkykxtebpNQnRf7OU1XC9KOi2EBHBCM%2B9RcVPb4Srdw0mUubAdyAb65x%2FvXeoxUb2TbHw2J0k%2FMLrC28kGOqUBwVABdgItKsrO%2FXM0FYke4imsaKb3mtpF0UXMhMdDJViTvLYO2rYBEUxw0GeaF%2BI3iJ9FnvDdX7vxfR%2BRmGX2qyRrGZTuM6%2BBzPqOJ3PySBXq4yc%2FY4R4Kf7CJsR20qoqHtKBBov%2BwsqHMdKTtBiJ%2Fm%2FRx3EIlBWqRHr%2FiweBNiMOeG%2F7xza6%2BrNtGu%2FVaDh8USuvJ5Yq4zuCk9pKSXvaJ%2Fd7AeMS&X-Amz-Signature=bdf38d68f7af02a49295956f99906018096822bb2525fda37d281f7bbf0ed0d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L2LWOQV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2DPBC%2BpHkwn2urY3TxLO64uJ0zqaLtTCa1ci64ug%2BQIgck93zpymiZBPEv%2Bn9X0YNXvnaLmGiYpIVBhqWiB6s4QqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYvBQRR8cTkcYHRmSrcA6lZZ9KjXCJgqbjnmQPabzImwHLW7x%2B2DQPAXYoJMrvAUOkkFP3rrwu8qJJx62j5i8QCM2dq0DG8IjWX%2FUWJE2HK0FC2D2nQJ5%2FTAi5Irvv0hnt%2B0VS6JXIzMXXmkL%2FyGfeElTyU9v%2BGLTXgpABDyo97KasF6SnconaiIYk1DLPXwYVEK%2BUtPZfa05VQwlxWYVYWnuaJBj4uIU4QzZ2pKLYDPmv3xYgIcJOArToHjtZ2Po15gOii6NJV3c4f2V83lazMwbPEZRvfor8aY3qhS63pp0gQggSNpsam7YevLUUZ7XZWYMRmpHtDSxFo7LtdFwaUVWIL5bxVUneo1vCDXaGqsVpnclCNZiprNSSX6bx9%2Fu0bue9yzt%2FSHkYHeWy7o%2FB5tgVNR6a8fDf8QNIbEXieNgjkV8qWy9c79AsDUKJ4W6CWqW%2BCGbc8yVbU7gYYl0qS8d8eKsaS1KWfZ5OBRJvohT%2Bb%2FyY5teFY2uCGioaa1vQAvEs5SvDlCrvd4JR%2FZrsfdSfZX4KUJ2o35XzXDLzTCgqFL%2BgVD%2FKbhuBlg7Zo3tlz9pnkykxtebpNQnRf7OU1XC9KOi2EBHBCM%2B9RcVPb4Srdw0mUubAdyAb65x%2FvXeoxUb2TbHw2J0k%2FMLrC28kGOqUBwVABdgItKsrO%2FXM0FYke4imsaKb3mtpF0UXMhMdDJViTvLYO2rYBEUxw0GeaF%2BI3iJ9FnvDdX7vxfR%2BRmGX2qyRrGZTuM6%2BBzPqOJ3PySBXq4yc%2FY4R4Kf7CJsR20qoqHtKBBov%2BwsqHMdKTtBiJ%2Fm%2FRx3EIlBWqRHr%2FiweBNiMOeG%2F7xza6%2BrNtGu%2FVaDh8USuvJ5Yq4zuCk9pKSXvaJ%2Fd7AeMS&X-Amz-Signature=ff12babb6369d8f654f38af5370c0db940b7276c7c398303d7f36bf446de04d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
