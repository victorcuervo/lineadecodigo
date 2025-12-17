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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZYE5J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNF0HaHuDzA0%2FVLDRq69A%2FHfGENKvmt815f17AdLYxnQIgNOVeUO2DWxVhxFb9PEThTJSJC7KhcDF4DI1ID31Qvi4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPwQ1Hb4bm%2FlOdPuiSrcA5vigULvTindgVwD8cQHV%2B3OQYpcf20P6eZ%2B2thLyfjP1K4msmvqLBu%2BFFUQGIW%2BH4q7KX4kVcUYEHaKTw2y243dQ%2BeSRI%2BYcpWZcq%2F2UtxznhwemDxcfnYHb59BC7O%2FwsXOxnUpGYkrQl9JKzhGHy5vs74PMtSB2Rvdb9sE%2FKP0502JWjx65s8u789KlBEOvyJAxvwnOQXHBlFxq9XD3ctYiANjMiAd9jGNG1fUvhd%2F2LoNDwXe0TG9W44jqNOP2yPKKWV6mgrzVrNiToDz3VfH1BcFCmLCnjHB%2FsIsNk6jmPa1B2zV0GivAeG1DZMao%2BZNnKcOv3u5B6ZXtrbfz0xs5bRhLjIasdZtsozhTrX8M0gYjspH9xySFSfyjISnokO3PqUrZhL2v9Hc0PBptOCR5WsvcSdsaDdCBMlrdJ2Qx2i%2FE9UJj8SMLTM3kuvUtqIfo9EFogGz7JDxgk4hYoxgx8kvFuptasfijwLs%2BZ0FpZrB6mYrZHlLxIVPpeRDC3vkQytNLc8xn3ZCZeTWCc6umHnC8%2Bn%2BRyZoznVqJ55ZsAs7svPi1KVgxyvYXksekvjoLbXAacXXpR%2BLxLhMpVrlubVbhxnBC86t3GLWBPFWSO5BjrElxwtlSSKoMPiWiMoGOqUBKywiyp8dsoF8yDvK8X7ApWAjuKakJQDYkfAjj6qP0Z1KRDlEu%2F5PsI0hMhKk%2FD055QRc8MOSQRo1q%2FsT8GrncgCdaEAEYTsAcAHapXMf9SgOfBGb3eXZZwMzrz24fFCsT80gd%2FcWTrRwPhmuLmgm8y3QPFPGHCA3C5IEvKWDbZ0%2Fg0E8mG23Ilh52Z3p%2Fko%2BGpQH9qaU7fMnzvs4tsUbG6q6wL8k&X-Amz-Signature=d0d4972334cbd95ab219ee7121609723e39337206f6be70498f913d6c3276e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WZYE5J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNF0HaHuDzA0%2FVLDRq69A%2FHfGENKvmt815f17AdLYxnQIgNOVeUO2DWxVhxFb9PEThTJSJC7KhcDF4DI1ID31Qvi4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPwQ1Hb4bm%2FlOdPuiSrcA5vigULvTindgVwD8cQHV%2B3OQYpcf20P6eZ%2B2thLyfjP1K4msmvqLBu%2BFFUQGIW%2BH4q7KX4kVcUYEHaKTw2y243dQ%2BeSRI%2BYcpWZcq%2F2UtxznhwemDxcfnYHb59BC7O%2FwsXOxnUpGYkrQl9JKzhGHy5vs74PMtSB2Rvdb9sE%2FKP0502JWjx65s8u789KlBEOvyJAxvwnOQXHBlFxq9XD3ctYiANjMiAd9jGNG1fUvhd%2F2LoNDwXe0TG9W44jqNOP2yPKKWV6mgrzVrNiToDz3VfH1BcFCmLCnjHB%2FsIsNk6jmPa1B2zV0GivAeG1DZMao%2BZNnKcOv3u5B6ZXtrbfz0xs5bRhLjIasdZtsozhTrX8M0gYjspH9xySFSfyjISnokO3PqUrZhL2v9Hc0PBptOCR5WsvcSdsaDdCBMlrdJ2Qx2i%2FE9UJj8SMLTM3kuvUtqIfo9EFogGz7JDxgk4hYoxgx8kvFuptasfijwLs%2BZ0FpZrB6mYrZHlLxIVPpeRDC3vkQytNLc8xn3ZCZeTWCc6umHnC8%2Bn%2BRyZoznVqJ55ZsAs7svPi1KVgxyvYXksekvjoLbXAacXXpR%2BLxLhMpVrlubVbhxnBC86t3GLWBPFWSO5BjrElxwtlSSKoMPiWiMoGOqUBKywiyp8dsoF8yDvK8X7ApWAjuKakJQDYkfAjj6qP0Z1KRDlEu%2F5PsI0hMhKk%2FD055QRc8MOSQRo1q%2FsT8GrncgCdaEAEYTsAcAHapXMf9SgOfBGb3eXZZwMzrz24fFCsT80gd%2FcWTrRwPhmuLmgm8y3QPFPGHCA3C5IEvKWDbZ0%2Fg0E8mG23Ilh52Z3p%2Fko%2BGpQH9qaU7fMnzvs4tsUbG6q6wL8k&X-Amz-Signature=4f317a9d93da4c0928f61043a4ae92f7284a1e1f0c0a492be4dc370cd9feee5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
