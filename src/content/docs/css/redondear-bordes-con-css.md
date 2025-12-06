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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CNEII3G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3GlVRk5G49e%2BMzGUioxieKrFC2tEenmslqUfDRksK%2FAiBId4o2wQQPde%2Fo9UyjHksuLCr4ay3tHYRLY%2FsNC%2FJfESr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYP2Y2jKFFKZHuAbOKtwDC%2BIjSuO2M%2Fr%2Bs0qW5IK4TKPuomZ4g2RBElyvMIyECwjwSWgwnpq1IoSTpRwsqnMjb56ZA0WsS4%2BOKlDE1PI%2FWbZnnNDwrGC6gkftXaKhw5nPPfgXUPthufdIe2J2CVqwbXK8rHQXE2dv1Gi9QGuu6wMpB0Dr1%2FfWUoWp4aYW2LumaGCgKyyB6Iw5QvMQF%2B1imqP5OB%2FP9RdRoIsTPTvuV%2FAvR%2BXMco2tuLgK%2F6x8k5xoVh81hThlfKQSGHMZECIKeKMcYHaO13T%2FY7dHXkkVw5dsmizNMuH69YOMZwvxLoXG70kRjzy7l1G0H38fMlK9LrkuHhxNNL%2BtHqRb0VAo%2FvRbkgBxrS3e4JYNOrssLS087bh2gZGQNsI%2FWx4lTgzGC1LfpkQpHrH5iPrjJJT95Ho0c6KbOSa4OSUTHw1xGvLkQ79dcbbRNfU3Y2G8occKTdu5Z0QxvLnEVrjfeRJplqymtjAdM4RFxgrDk%2BVCGTdW8GgFs1G8M%2Bm1yiXEqFBTqpqJQ6Ky09Em2JbaF0Hppopp3ODYqxRtyckJ2PNfBTxek6DtPHsaNYw9xfvBv68ex190akkc13v5pPjakbEovGRAoiCNNy7ygkyNJJxi50jxdpEbHPXCAAQuoV8wzKbQyQY6pgFV%2FSEEq2PVIUcogLoeb%2B7V8E9KwnyxuHUklvFd1e4kCT4%2BtyADehKRQpqhqvaXL5hep4PhZRBcvaPVUMsUt397LMMFqd44mWbmPYJZN2oWsk4gJdaphlIfOy0UP85%2Fm%2FW7GiZpO6MB3OMRPHThru9nY1RnE7%2BKqq0URuKSFQmc2UiCG5FgJT1PBVsX2GpVfODpG2KKZkWubUiMeQLuOibdzuYETM88&X-Amz-Signature=60d84ceeab2919c0002e93d25fa4f7dcb8c3779df24aeeb4c43abd85d460ed7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CNEII3G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3GlVRk5G49e%2BMzGUioxieKrFC2tEenmslqUfDRksK%2FAiBId4o2wQQPde%2Fo9UyjHksuLCr4ay3tHYRLY%2FsNC%2FJfESr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYP2Y2jKFFKZHuAbOKtwDC%2BIjSuO2M%2Fr%2Bs0qW5IK4TKPuomZ4g2RBElyvMIyECwjwSWgwnpq1IoSTpRwsqnMjb56ZA0WsS4%2BOKlDE1PI%2FWbZnnNDwrGC6gkftXaKhw5nPPfgXUPthufdIe2J2CVqwbXK8rHQXE2dv1Gi9QGuu6wMpB0Dr1%2FfWUoWp4aYW2LumaGCgKyyB6Iw5QvMQF%2B1imqP5OB%2FP9RdRoIsTPTvuV%2FAvR%2BXMco2tuLgK%2F6x8k5xoVh81hThlfKQSGHMZECIKeKMcYHaO13T%2FY7dHXkkVw5dsmizNMuH69YOMZwvxLoXG70kRjzy7l1G0H38fMlK9LrkuHhxNNL%2BtHqRb0VAo%2FvRbkgBxrS3e4JYNOrssLS087bh2gZGQNsI%2FWx4lTgzGC1LfpkQpHrH5iPrjJJT95Ho0c6KbOSa4OSUTHw1xGvLkQ79dcbbRNfU3Y2G8occKTdu5Z0QxvLnEVrjfeRJplqymtjAdM4RFxgrDk%2BVCGTdW8GgFs1G8M%2Bm1yiXEqFBTqpqJQ6Ky09Em2JbaF0Hppopp3ODYqxRtyckJ2PNfBTxek6DtPHsaNYw9xfvBv68ex190akkc13v5pPjakbEovGRAoiCNNy7ygkyNJJxi50jxdpEbHPXCAAQuoV8wzKbQyQY6pgFV%2FSEEq2PVIUcogLoeb%2B7V8E9KwnyxuHUklvFd1e4kCT4%2BtyADehKRQpqhqvaXL5hep4PhZRBcvaPVUMsUt397LMMFqd44mWbmPYJZN2oWsk4gJdaphlIfOy0UP85%2Fm%2FW7GiZpO6MB3OMRPHThru9nY1RnE7%2BKqq0URuKSFQmc2UiCG5FgJT1PBVsX2GpVfODpG2KKZkWubUiMeQLuOibdzuYETM88&X-Amz-Signature=53d3199908ca96e669d9c430a39ad77c8769a505a6a656a59eee1ca9fe1dfc70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
