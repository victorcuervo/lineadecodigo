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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3QAZVI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzBVKRXEpa2uHE2d0R%2F7bgcxpL5vV0WViDFmb4MJBBcgIgXt86XsLd2CoFcVt2Ms2%2FKz7Wcs1AsMfXrFGlGNWLDeEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdOl%2BjlZuAHZTcuOircA3QEv6IZB7tFwAogbRvbd5ugTfJB%2Fi2ztOa6Ublercf0t%2FBXvlcfem2iRbnP38HPNXnLTp5ksJ%2FqBh04bSu8APa4wYOM%2F4tnNedUbzpPaLfVXYMZg%2BhoMQwrRH%2BJ411VL%2Fb2USanOB27ugrwgTcNFU2ZG3L1YEm6ibBVkzOR4QGRXZEZsgxfFoUEYc2dP7ggSnf2oOFtBKj1GxJSqkY%2BfAKxyN0twpjcc7ImHC13R1Fzl%2BrDE1dP%2BchR58BDJdn%2Bzk4wh2H%2FJ0n7W6w8Py6M%2Fp4mBqltfoNUHJ%2F3xjwn31DDDakFhVZqf8uAjc%2FU5dL91OQlLWWM3jjT7u2vrIBOzpW2IWecQB6zTs9Gf17jRRgrFWmAWCKftiw26iRlH9xYpIWJkp3WnYHHhVaympzjk9RmBHD4iTXP8ttJCmHvcETq%2FbCe35ssjwoP98qRXxJKBLxce7BeWXJmip2y7rmz5fQvEKrvCt7EPAfVVF90MpzIV8mAFSoPzEryE%2BPuyznftzpmugtdtuYGsZ63ONVZ%2B4er57g4mwFBqkaX2WoRWVjgYyB0JTz%2FZjo2KhayTDzfbHXNMpn7NakFNBUOsQdx1igK8YC5lKUdmiyoJ65rscP7SvcavC4Y1gbuIf8lML%2BQ3skGOqUB7MKvzsEvvcUkokvTKt1FUnZ%2FXxuexdXKzlk6sE1xnBg7qAHkVi7ns83BTUPgXikG0UfKUyRzbOSBBAglPwmMohPWUjeUaTRNUq1LMfoBRD7mmrEYsAaVZcSr353Yw9KrN%2B92co364GkNO5cQEgRqRz3h6VPDRU9KYl0um21Uzzbg6d%2BitlDXP8GUWFqXGelS5d5N2PfiArW3vU8yZYV48Du81jsX&X-Amz-Signature=ad8627797368afe7afca680ef5b6f45e966f1501ba7d945643ee3826159c3dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3QAZVI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzBVKRXEpa2uHE2d0R%2F7bgcxpL5vV0WViDFmb4MJBBcgIgXt86XsLd2CoFcVt2Ms2%2FKz7Wcs1AsMfXrFGlGNWLDeEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdOl%2BjlZuAHZTcuOircA3QEv6IZB7tFwAogbRvbd5ugTfJB%2Fi2ztOa6Ublercf0t%2FBXvlcfem2iRbnP38HPNXnLTp5ksJ%2FqBh04bSu8APa4wYOM%2F4tnNedUbzpPaLfVXYMZg%2BhoMQwrRH%2BJ411VL%2Fb2USanOB27ugrwgTcNFU2ZG3L1YEm6ibBVkzOR4QGRXZEZsgxfFoUEYc2dP7ggSnf2oOFtBKj1GxJSqkY%2BfAKxyN0twpjcc7ImHC13R1Fzl%2BrDE1dP%2BchR58BDJdn%2Bzk4wh2H%2FJ0n7W6w8Py6M%2Fp4mBqltfoNUHJ%2F3xjwn31DDDakFhVZqf8uAjc%2FU5dL91OQlLWWM3jjT7u2vrIBOzpW2IWecQB6zTs9Gf17jRRgrFWmAWCKftiw26iRlH9xYpIWJkp3WnYHHhVaympzjk9RmBHD4iTXP8ttJCmHvcETq%2FbCe35ssjwoP98qRXxJKBLxce7BeWXJmip2y7rmz5fQvEKrvCt7EPAfVVF90MpzIV8mAFSoPzEryE%2BPuyznftzpmugtdtuYGsZ63ONVZ%2B4er57g4mwFBqkaX2WoRWVjgYyB0JTz%2FZjo2KhayTDzfbHXNMpn7NakFNBUOsQdx1igK8YC5lKUdmiyoJ65rscP7SvcavC4Y1gbuIf8lML%2BQ3skGOqUB7MKvzsEvvcUkokvTKt1FUnZ%2FXxuexdXKzlk6sE1xnBg7qAHkVi7ns83BTUPgXikG0UfKUyRzbOSBBAglPwmMohPWUjeUaTRNUq1LMfoBRD7mmrEYsAaVZcSr353Yw9KrN%2B92co364GkNO5cQEgRqRz3h6VPDRU9KYl0um21Uzzbg6d%2BitlDXP8GUWFqXGelS5d5N2PfiArW3vU8yZYV48Du81jsX&X-Amz-Signature=92fed6ff144ea02006cc8e9bdc4ae23b56595164c02699179aa3c2ac870a5f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
