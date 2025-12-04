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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTCJSROG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH4ZerM3ydQEb5QvVBjhJA%2BQzQfelRPf2ca2vFFWY3oAiEAp4Z%2BKaAXdEAxS2Q%2Bjxlz7hC2CjemRW719A%2FbOzQVb6Aq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJVEIhDSEUsxA3aImircAyJZ16hn6%2FO%2FvBb5uhZ6kSM4DTuQxtbUaGUYhNasObd9DaINefGAtmeiYsIsqER4Xlt1ca5ixwpxwAXOtTU4GKahWBFRSk1iztEB4ezYUK3ynOGiqU5eG0ReE4791M%2BNv9t0hdCIzNT2phwAX7ueYX4MH%2Fhe2XlwqTsWSI%2BYvO%2BmtOIt4TiWaAn8Lkt8izYecUQbQjNCmTEltSoon21zTDRdh3zLzvhCGPi0tA8rvTp5DgaqAhHyOi8bcAWNNaNwo6DwpIQCSZmOddqs9H2Fce9TtvddnVIp%2FWHHbcIRuLIF7NSCwauIRfk2TEWHft%2FAQ2tqRcMNz8iMpz03idd62MQZVnEeSDRY0g9smVzqFSmbFpThoNxZHdIZ%2FWZfY32bHlxg33SF0jtCXI5ofb8he9A%2FlgxnCdltLDwJd1wrhywGyFOPXz1CFSdS8vscTCFkzutNIabPheH0b7BCc2WjM4UCiivC7p6Fiz%2BkLZ8F%2F7EZfW1Uh53GO77SmszOkWTw6ZggFmxbtu%2BBzs6jUKA9z4A7X1qitJai0peqwW45S1snliRt%2FMH0gvXVd6YBoyWFtVt%2FcGHri78143JBJMiJtch%2F%2FCIw1tcVbvHxpVJaIyGqJGF2RFln2gPHkx%2FPMPWLyMkGOqUBA22vDl72BbKikhQbt8vOIY3xxEUkdBAnJFoXx4Kpykcn6LSAtfx7Iu4Pt3%2FMckb5LDq4SJgLFPeIl9AG%2FFacd51hkbtHzre5yX6lQRU5EWNW6Wbk1oeIZoRFtvAgUaPOz6sOI5CeuFHvGPu0R%2Fsah8HxrBNQpe4RtYhgstY7nclR6JLFNJI7xMNoJR2umjx8Duo8GI5mchiKubO2Wffe7%2BQYbixe&X-Amz-Signature=d8fa5b0e15e755b9212f3f1ce3e5c9d9c8cd394fcb56601465091089c7df9cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTCJSROG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH4ZerM3ydQEb5QvVBjhJA%2BQzQfelRPf2ca2vFFWY3oAiEAp4Z%2BKaAXdEAxS2Q%2Bjxlz7hC2CjemRW719A%2FbOzQVb6Aq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJVEIhDSEUsxA3aImircAyJZ16hn6%2FO%2FvBb5uhZ6kSM4DTuQxtbUaGUYhNasObd9DaINefGAtmeiYsIsqER4Xlt1ca5ixwpxwAXOtTU4GKahWBFRSk1iztEB4ezYUK3ynOGiqU5eG0ReE4791M%2BNv9t0hdCIzNT2phwAX7ueYX4MH%2Fhe2XlwqTsWSI%2BYvO%2BmtOIt4TiWaAn8Lkt8izYecUQbQjNCmTEltSoon21zTDRdh3zLzvhCGPi0tA8rvTp5DgaqAhHyOi8bcAWNNaNwo6DwpIQCSZmOddqs9H2Fce9TtvddnVIp%2FWHHbcIRuLIF7NSCwauIRfk2TEWHft%2FAQ2tqRcMNz8iMpz03idd62MQZVnEeSDRY0g9smVzqFSmbFpThoNxZHdIZ%2FWZfY32bHlxg33SF0jtCXI5ofb8he9A%2FlgxnCdltLDwJd1wrhywGyFOPXz1CFSdS8vscTCFkzutNIabPheH0b7BCc2WjM4UCiivC7p6Fiz%2BkLZ8F%2F7EZfW1Uh53GO77SmszOkWTw6ZggFmxbtu%2BBzs6jUKA9z4A7X1qitJai0peqwW45S1snliRt%2FMH0gvXVd6YBoyWFtVt%2FcGHri78143JBJMiJtch%2F%2FCIw1tcVbvHxpVJaIyGqJGF2RFln2gPHkx%2FPMPWLyMkGOqUBA22vDl72BbKikhQbt8vOIY3xxEUkdBAnJFoXx4Kpykcn6LSAtfx7Iu4Pt3%2FMckb5LDq4SJgLFPeIl9AG%2FFacd51hkbtHzre5yX6lQRU5EWNW6Wbk1oeIZoRFtvAgUaPOz6sOI5CeuFHvGPu0R%2Fsah8HxrBNQpe4RtYhgstY7nclR6JLFNJI7xMNoJR2umjx8Duo8GI5mchiKubO2Wffe7%2BQYbixe&X-Amz-Signature=9143a9391251ab38a95edc7c273a5820b7e8605de7bfa1639ca48133370d8b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
