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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGRWJYY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqvuH%2F88ogctaOu7OBALrqS4XaZNYls3rCaqwVijy9XAiEAsVVbz5PwnYaAAvpVe2yVzY8mXoChFdfbi%2FmZD%2Fwlg2Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPY65NS5IPNbmtAnFircA6txOZGu1o1xreRtJDPPxM5xKzELyz0Lbl%2BWIYQBYCG9rCBEFf6NZ94uNIluiS4r4V1%2FWjD5jKAJex32u4bnEWJjXSTuM0%2FRC%2BTNvjxQivwxtVud%2Fhbi0QuxmGc%2F9MYy7R48xB2UqAOIngxN8zOwekaaTnl%2F%2Fj4hLhzBOerAowH5nfOWJtugCDNOcrtmXHZUChO7BlQnU1MdGCcJSmebHLw0n6L9%2FaQeTp6hUonlvmNSevdSQdMe2%2B2xnXpgv%2FRuUjPuiLHIWPovU7%2BL6O5IQiz2P92V%2FFc79PEKxSdDTWwHeryC6fhXXD9vPDMcupnxWd40b7yaxwGhGrKPrI0T0cJymGt3DtH%2BtxgUXuZrRNIXsIV8ABm0eXRRF0fG%2FglEP5jxHKIfPQZWWi0nJFqqZJgrUcUlrsQS3SmYNaSKFoeEbsulU3t9W0Zuxmznp7N3z13Xr9ASqop6hAgOv8FJLQHImGPY2GF%2BsDkZdP9%2FvjrniOQSldJPALF38mFM%2F0Rkmd%2B3KmrBFxGnJc5cWpUamwWP%2FvsQuLarfJ93O3ZkO2VUvb3Ka31s2Y%2BxjIWyHMR4%2F6Hmv5fPeAQYVHJZ%2FAsLCK2QHjYtJybZFcNoocNedsu6S5kiiR%2FIvvjsw3ZyMIXOiMoGOqUBkpwuaP0SWWNQOIkkQGYPxP%2BEC3AEJAlIP9b2wAUm%2BLaYvs2%2Fz4zahyZAJOQy11QzrfbN64EU2p0XYSBgojDp0EyfYuq%2BOhag8ZPIS3Ab3j0VxKoEePfeZmFL38NQRUQLZG1VJR%2FelsYaOHipV6iYgtB%2BKD9o7HHmSBAHJcYkVNj9PdjjWSXr%2F9d%2BsDtBpmcR17PomIbY%2BcwdWhlow4O7B8ygA7O%2F&X-Amz-Signature=2ddaebd074245614a6d98f62aa455e053aa5e08ba78a347713a1fe33a1bf7ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGRWJYY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqvuH%2F88ogctaOu7OBALrqS4XaZNYls3rCaqwVijy9XAiEAsVVbz5PwnYaAAvpVe2yVzY8mXoChFdfbi%2FmZD%2Fwlg2Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPY65NS5IPNbmtAnFircA6txOZGu1o1xreRtJDPPxM5xKzELyz0Lbl%2BWIYQBYCG9rCBEFf6NZ94uNIluiS4r4V1%2FWjD5jKAJex32u4bnEWJjXSTuM0%2FRC%2BTNvjxQivwxtVud%2Fhbi0QuxmGc%2F9MYy7R48xB2UqAOIngxN8zOwekaaTnl%2F%2Fj4hLhzBOerAowH5nfOWJtugCDNOcrtmXHZUChO7BlQnU1MdGCcJSmebHLw0n6L9%2FaQeTp6hUonlvmNSevdSQdMe2%2B2xnXpgv%2FRuUjPuiLHIWPovU7%2BL6O5IQiz2P92V%2FFc79PEKxSdDTWwHeryC6fhXXD9vPDMcupnxWd40b7yaxwGhGrKPrI0T0cJymGt3DtH%2BtxgUXuZrRNIXsIV8ABm0eXRRF0fG%2FglEP5jxHKIfPQZWWi0nJFqqZJgrUcUlrsQS3SmYNaSKFoeEbsulU3t9W0Zuxmznp7N3z13Xr9ASqop6hAgOv8FJLQHImGPY2GF%2BsDkZdP9%2FvjrniOQSldJPALF38mFM%2F0Rkmd%2B3KmrBFxGnJc5cWpUamwWP%2FvsQuLarfJ93O3ZkO2VUvb3Ka31s2Y%2BxjIWyHMR4%2F6Hmv5fPeAQYVHJZ%2FAsLCK2QHjYtJybZFcNoocNedsu6S5kiiR%2FIvvjsw3ZyMIXOiMoGOqUBkpwuaP0SWWNQOIkkQGYPxP%2BEC3AEJAlIP9b2wAUm%2BLaYvs2%2Fz4zahyZAJOQy11QzrfbN64EU2p0XYSBgojDp0EyfYuq%2BOhag8ZPIS3Ab3j0VxKoEePfeZmFL38NQRUQLZG1VJR%2FelsYaOHipV6iYgtB%2BKD9o7HHmSBAHJcYkVNj9PdjjWSXr%2F9d%2BsDtBpmcR17PomIbY%2BcwdWhlow4O7B8ygA7O%2F&X-Amz-Signature=71c8b98950cd1c6f99a47d11a99dab6fe0e02b82e5b7454de2d57005225f0e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
