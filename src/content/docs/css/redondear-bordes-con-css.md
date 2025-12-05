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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQJ72PN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDowj4aFCjIzhQ4vMJp0TGxFRVljs4DtB4TFTGWKR8irAiA8Rq4Nmp3XbR5iG7E2mgVpH2%2B4PD%2BALIH39FsdkcBYrCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMZKE0LPSQ7Przy%2FTgKtwD00QxUvq5wY5ceGhEOr%2FppMdZJWYkqQS%2F0LjTBAs0X8sk0CBIOLoE9BNPxlMmd%2FuALuUbT7JJZynP7eA7VJqrkPHU2CKNC1NTxZh6BMMS6XmhQF%2FarTOdQ9OGONRiPzFEJw3jW4yQFyGahphMI%2F2Vn2m5qUMchH4yaVSb1q7iZc5yeF%2BLldwmE68Mf6XJ4BlzXn6gb7Mdos5balhYzlE1787cBU5sIgv7P5nq%2BQF3R1Qydrgc7%2FtVTk%2F5kvb37wZl5aoJeuR%2FWc5OLTMDykQGYS7CjE3RIFCUkTxf6j918kE0ROV09EHjWzF0j9vsU8aoS0RCicfS3bWFuOUDGaq7Owpoa1vwjsozttmyXfaMBMCkgG2nDGlMT%2Fjw1E8Yl1EUNnfpbE%2B52r0DLIOfB3C4c1RrpRvNyrHowXrHG2bIyHXNPlFB4jP21sCtNnW44aZlrZ8tPlMpkk0sB37Reb2Z5btiJvKHMP8U%2BVkZ0XXHV2ppb0SBIJA2AG3K6WPSvz4QIJr8Gc3kSEZdv0fBnuKUKljaeEQbqA4GzmWCTHRNxBzikN63z8cFScypmY%2B8D62mCp4O5CAoEJ%2FBGn7UxudqVoLqjSKAfj87QlbO1ozoWTfILrbwq7atf8ax8wIwwKnJyQY6pgHu0kY3o%2BLSzLHubhnH6BkklNozCw2QC881YnLknHVsHgqxYrDxWJkFPpEXKSCWSiqcpWs2TKHvy7V26cV7ydeHPs9j5ayTd9AceBYCdFcAow3ygLSrfPFqtdkQIijGGIXn8BKw5ZYbrrQue6XD1j8MPklU%2FKlf6ZOhL4%2F7vs3VhaTDgqERhj%2BKtvFxiqyZx2ORaMSatn0EZJb8HSRqmVOYcdgyucu2&X-Amz-Signature=b080c9fec79aeb45c5fb0ffb244e115374cb5678b1eea0d57e2d5f8de50b4195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQJ72PN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDowj4aFCjIzhQ4vMJp0TGxFRVljs4DtB4TFTGWKR8irAiA8Rq4Nmp3XbR5iG7E2mgVpH2%2B4PD%2BALIH39FsdkcBYrCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMZKE0LPSQ7Przy%2FTgKtwD00QxUvq5wY5ceGhEOr%2FppMdZJWYkqQS%2F0LjTBAs0X8sk0CBIOLoE9BNPxlMmd%2FuALuUbT7JJZynP7eA7VJqrkPHU2CKNC1NTxZh6BMMS6XmhQF%2FarTOdQ9OGONRiPzFEJw3jW4yQFyGahphMI%2F2Vn2m5qUMchH4yaVSb1q7iZc5yeF%2BLldwmE68Mf6XJ4BlzXn6gb7Mdos5balhYzlE1787cBU5sIgv7P5nq%2BQF3R1Qydrgc7%2FtVTk%2F5kvb37wZl5aoJeuR%2FWc5OLTMDykQGYS7CjE3RIFCUkTxf6j918kE0ROV09EHjWzF0j9vsU8aoS0RCicfS3bWFuOUDGaq7Owpoa1vwjsozttmyXfaMBMCkgG2nDGlMT%2Fjw1E8Yl1EUNnfpbE%2B52r0DLIOfB3C4c1RrpRvNyrHowXrHG2bIyHXNPlFB4jP21sCtNnW44aZlrZ8tPlMpkk0sB37Reb2Z5btiJvKHMP8U%2BVkZ0XXHV2ppb0SBIJA2AG3K6WPSvz4QIJr8Gc3kSEZdv0fBnuKUKljaeEQbqA4GzmWCTHRNxBzikN63z8cFScypmY%2B8D62mCp4O5CAoEJ%2FBGn7UxudqVoLqjSKAfj87QlbO1ozoWTfILrbwq7atf8ax8wIwwKnJyQY6pgHu0kY3o%2BLSzLHubhnH6BkklNozCw2QC881YnLknHVsHgqxYrDxWJkFPpEXKSCWSiqcpWs2TKHvy7V26cV7ydeHPs9j5ayTd9AceBYCdFcAow3ygLSrfPFqtdkQIijGGIXn8BKw5ZYbrrQue6XD1j8MPklU%2FKlf6ZOhL4%2F7vs3VhaTDgqERhj%2BKtvFxiqyZx2ORaMSatn0EZJb8HSRqmVOYcdgyucu2&X-Amz-Signature=0ac5f0b19c70db4bcba79319cda1e062f175e00bf557db80e524f3f943b93d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
