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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVJFMX7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSbsfDaVqn53rsDVh%2BEBWW9%2BisP5Pt3vWqWENyGJxvpwIhAJFOIRZh0oxpCd87gTgw%2BZRNF0BJXarKAlHLs5c7X9SxKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmGUOWZbPzDSCVFSMq3AP0djqnG5gf2fwRbxlZmawYF9xDXzxpf2duiarWWf90ND97vdlu9zRFf4iGg60P74242BasB1cMWmRSX0%2BlrOgAw%2FFEsXqNZI%2BtAuPt5KNhbj%2FY4QQiC1Skp8XoZoNUantwkiukpYf%2BfDnERC62%2BYMgxtRO20rncYCYUw52wfvfUe1BH3Pc6hyCdaMMhYqdPAvCq0A%2FMs0dA89ehB6Hb3KtMPowwtSpxJVdOe%2FZP5FtQ54G%2BwMfxSl9FWDIy0RLyTVZI8ke6sc8rtxx3FPV4ENkts2IOEoYptiZ5tEWVOCCq1mY6dzEJ4C62%2FkFJSSJ6voPLQMQR4MgOtY9oNgsNDJJvFkjtI4yAu4GU1cKWHV3nqrUDatXnZncMlt%2FfUqOBg7CQmo9KyRWg9M5w1u0r2G7ZswNyqex9Kodv8f0JEpE2Q2v1izW%2Fh%2FycvtUDaTy%2BSfSFiVq9Yga6Q6B2FZwmGXOjja7hyPHLKLzIN0lBM0BkNuL3J61KVjLY81K3gwmw5FVR1n3ipw9qkPJmm6%2Bazpmftc5mIX%2F2BKUjUv7tzCfZl3uScpACKlCnuOWcOuCNLc4kOt6mU25coQ2563tGzxxH7QS2lpD%2BbUi2KpZpZwtAoN4oqB51f2gVimjnzCsw93JBjqkAUK7qPYEJblxOgWmza7kTR68MWtCDTMKWQekPG8o3QS5wIASpCY%2FbBayvRG9d9ThIKXF6eSVvLVMO355hoyaWIP2szr0Mmurwt2Mnehde8%2FUT84VwnbNGo113r%2FS5jkVD3R9dBYVzXiMfqoUEMXGgsJCCzbn%2F61PdmCguMplyccBvqcfZ%2FLdug3V%2BShy3x%2FTlQGsS2PSU9Qy4nasdURtiz111Abg&X-Amz-Signature=fa1eae5f95387535cf66dbc523338986e49b81673751378c855480ca781d8896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVJFMX7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSbsfDaVqn53rsDVh%2BEBWW9%2BisP5Pt3vWqWENyGJxvpwIhAJFOIRZh0oxpCd87gTgw%2BZRNF0BJXarKAlHLs5c7X9SxKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmGUOWZbPzDSCVFSMq3AP0djqnG5gf2fwRbxlZmawYF9xDXzxpf2duiarWWf90ND97vdlu9zRFf4iGg60P74242BasB1cMWmRSX0%2BlrOgAw%2FFEsXqNZI%2BtAuPt5KNhbj%2FY4QQiC1Skp8XoZoNUantwkiukpYf%2BfDnERC62%2BYMgxtRO20rncYCYUw52wfvfUe1BH3Pc6hyCdaMMhYqdPAvCq0A%2FMs0dA89ehB6Hb3KtMPowwtSpxJVdOe%2FZP5FtQ54G%2BwMfxSl9FWDIy0RLyTVZI8ke6sc8rtxx3FPV4ENkts2IOEoYptiZ5tEWVOCCq1mY6dzEJ4C62%2FkFJSSJ6voPLQMQR4MgOtY9oNgsNDJJvFkjtI4yAu4GU1cKWHV3nqrUDatXnZncMlt%2FfUqOBg7CQmo9KyRWg9M5w1u0r2G7ZswNyqex9Kodv8f0JEpE2Q2v1izW%2Fh%2FycvtUDaTy%2BSfSFiVq9Yga6Q6B2FZwmGXOjja7hyPHLKLzIN0lBM0BkNuL3J61KVjLY81K3gwmw5FVR1n3ipw9qkPJmm6%2Bazpmftc5mIX%2F2BKUjUv7tzCfZl3uScpACKlCnuOWcOuCNLc4kOt6mU25coQ2563tGzxxH7QS2lpD%2BbUi2KpZpZwtAoN4oqB51f2gVimjnzCsw93JBjqkAUK7qPYEJblxOgWmza7kTR68MWtCDTMKWQekPG8o3QS5wIASpCY%2FbBayvRG9d9ThIKXF6eSVvLVMO355hoyaWIP2szr0Mmurwt2Mnehde8%2FUT84VwnbNGo113r%2FS5jkVD3R9dBYVzXiMfqoUEMXGgsJCCzbn%2F61PdmCguMplyccBvqcfZ%2FLdug3V%2BShy3x%2FTlQGsS2PSU9Qy4nasdURtiz111Abg&X-Amz-Signature=f6eb700d2232588ec5335039c94767b7467653f3080fb8f81b2c7904102ecdbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
