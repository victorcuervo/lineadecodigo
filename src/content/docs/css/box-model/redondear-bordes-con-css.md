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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A5S4A43%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6MGTy6V7xvqknSz5hsLqNuvItbUuanYs4aeaw5YrAogIhAJS42R2Fa%2BMkBwyDlQ7%2Bvlo42ygjNkQ%2BTgSHMOlW%2BFNrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNUXbgjpT9TsVroA0q3AOwffrmThNRbKwxFIocUtdntBdDEXiRTIsX0%2BVfs0rt2VUZuQqy5g3PX%2Fy8F0N4VfeHYw17nTy4SGgrm8HgoOPWf01pDxxOQa2CejlSfVip7jQNciOlJUuaraHWeeTJPpLKK%2F4HnAoj4M5GN5ji8IMX9O8NE5Kc7Lkhm2yibEtFtszw1sIjm5sl%2BLxfEwJuEjH9JJSGyUSohz%2F834Fe2NYygg782Xvlsm7w7XDMJvB89Wff8j%2FFtgpmwYjxUHStEBfUVpDvdkxxlneI4jCm0A4fs2ocgJqs%2FWMmPY3zY11reyPB5RknZ1HtQOSnNECbCQSp6KJDHDIxA3M1sId1k7WCcUK73opkGaxRRoNO7zZkR3qlpwP6Xj0byN%2BeX7%2FqCYEoC16lg7PFGwYHvke6UTULzZBmWq8QDQ54n%2B3iEJbXaSYaJ4G8z2UtHAktZqbzwwLylHLnCfFfbteQuomxX%2BQAFdDl8h1nCNBJAO78TZD7ww6acL8KMLQehGIKG7Wa0QocdAnOQvLqj7NjBJo%2FShrEiofGwy5NRHHBDMNZ1FMLzM%2BS1kgqSB7nILxb7WJtkklm3Z%2B7o%2FUbB98%2B2KZrD6i3GenKdJEI0nBQBAj15hE4DfTXs8ArpkgaA8PpVTCnoIvKBjqkAc8djErsfialXGFQlc%2FroRv363agGz%2Bubann2lifkYj7mEvsfN%2FuOwxtxg4P0NyZT%2Fn9DeqpvhF4tlohOlXhUqoK1riOjVEEQntmP8pTbIEIEZ2aNRw%2F9JSoj8h0PbdzBWMpbPCuWvrkRtsEIK6GFnfUycRTGc0%2Bh2moYRSwkVJt5GwPfK%2F3HPKtq9eMT31vbKjA5yusdu5uKuu310mU7xVDuYKX&X-Amz-Signature=6466c238bfceb1d0734beb24a32a55607c378b8594f23b95249bfb9448b0fc0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A5S4A43%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6MGTy6V7xvqknSz5hsLqNuvItbUuanYs4aeaw5YrAogIhAJS42R2Fa%2BMkBwyDlQ7%2Bvlo42ygjNkQ%2BTgSHMOlW%2BFNrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNUXbgjpT9TsVroA0q3AOwffrmThNRbKwxFIocUtdntBdDEXiRTIsX0%2BVfs0rt2VUZuQqy5g3PX%2Fy8F0N4VfeHYw17nTy4SGgrm8HgoOPWf01pDxxOQa2CejlSfVip7jQNciOlJUuaraHWeeTJPpLKK%2F4HnAoj4M5GN5ji8IMX9O8NE5Kc7Lkhm2yibEtFtszw1sIjm5sl%2BLxfEwJuEjH9JJSGyUSohz%2F834Fe2NYygg782Xvlsm7w7XDMJvB89Wff8j%2FFtgpmwYjxUHStEBfUVpDvdkxxlneI4jCm0A4fs2ocgJqs%2FWMmPY3zY11reyPB5RknZ1HtQOSnNECbCQSp6KJDHDIxA3M1sId1k7WCcUK73opkGaxRRoNO7zZkR3qlpwP6Xj0byN%2BeX7%2FqCYEoC16lg7PFGwYHvke6UTULzZBmWq8QDQ54n%2B3iEJbXaSYaJ4G8z2UtHAktZqbzwwLylHLnCfFfbteQuomxX%2BQAFdDl8h1nCNBJAO78TZD7ww6acL8KMLQehGIKG7Wa0QocdAnOQvLqj7NjBJo%2FShrEiofGwy5NRHHBDMNZ1FMLzM%2BS1kgqSB7nILxb7WJtkklm3Z%2B7o%2FUbB98%2B2KZrD6i3GenKdJEI0nBQBAj15hE4DfTXs8ArpkgaA8PpVTCnoIvKBjqkAc8djErsfialXGFQlc%2FroRv363agGz%2Bubann2lifkYj7mEvsfN%2FuOwxtxg4P0NyZT%2Fn9DeqpvhF4tlohOlXhUqoK1riOjVEEQntmP8pTbIEIEZ2aNRw%2F9JSoj8h0PbdzBWMpbPCuWvrkRtsEIK6GFnfUycRTGc0%2Bh2moYRSwkVJt5GwPfK%2F3HPKtq9eMT31vbKjA5yusdu5uKuu310mU7xVDuYKX&X-Amz-Signature=e88e0c3be4c1aea7a4177d8b5894b9e52d5bd1a605a04b7739b446ccb7eb55d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
