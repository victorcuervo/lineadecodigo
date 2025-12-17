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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHSELBXQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvzqWrHcYLPCFOBOQ1SLADgoPXydNedWTw%2B53cDW1bYgIhALbGyT%2F7yuB6Z83lIlBRYk1PUTW94EopJZEYb7QaizXXKv8DCHgQABoMNjM3NDIzMTgzODA1IgydD3Hz8laDmtMQUpkq3APBpHCtRYNH001mvyRxMSHSu8EZEVua9odPXP4ks%2FhARwSEUnvbGUguWnrXWTXWWA5Rw3UMHoMra1OCK94ccRJWDFaMBArCm8tA7iAtp5W6VR%2BAR%2FU%2BLja4YyQ1f4Url4ZD57Cru3EQBqNwvpWm8I%2BMyZGzndjUUFF%2FjxgRcbxjV4ukNAbTpR3Y7JoDe9jWsN0xTup841%2FTrsi2AjoPCPyQrvI8czaRQIa4Wa2h8e%2FNySrDaY1Lww67FXVUIrLPOzXu9hZEhT%2BEw40CIdwoy6n44tt%2BFd4E1yN1eTKe1W%2BoaM9AVueS5lrJx5GnwluOlptCAMO5TKTjMgVwEPmxsHDp4iDi0zXg%2B082934Dhd%2FlGCeEpbJy2rI5WMhtA33WnREtNJmOUKmO0PBJ1lBbA%2BVxkWDtaRfHwxpOZBrVbPULr8VwzUPzJEn%2Bt7hDsBun3MBAeSKVVzAW%2BwHz8ipuqZkwPoPZdVPVjiNoFSChE4Ye%2BwIKPtdoN5fovePCNwayRo4xqmOKpmC%2BCYBYdugjcrFeZFFy9sswBmEXgf11MKjU%2FDBHM%2BrV9JmAlOA3U3mDo%2FHcHJpdi8iy0XZBWaY00UV44MXq1YmzMqrKM%2Bv%2Bco3nmPV4FpT%2F8V00RqHJIDC7nYnKBjqkAcDW3KDCf2oUJVM%2BjNaCQ4ByvGYakhO3pDh75EbXHfC0At1B1vsBoYS%2B9B17CimzBqT7NHjlK5DCR9sKYcbmn%2By%2BasH73RqwdpUacR8W9c45DC6ahmlt5olcCgtiz%2Bol6tbrgELVjMqSFLtO49QfRdAK24DC%2ByoEFnJBiPdBLydJKlXL691uxfWI7e0Tm8dmoJ4UR2fAUai8NKmnr2j0Nfn0U%2FCp&X-Amz-Signature=f6817a2a96ccc58cfad203f834bab3d2aab04cd7dc329d54e1d20fb57f116f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHSELBXQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvzqWrHcYLPCFOBOQ1SLADgoPXydNedWTw%2B53cDW1bYgIhALbGyT%2F7yuB6Z83lIlBRYk1PUTW94EopJZEYb7QaizXXKv8DCHgQABoMNjM3NDIzMTgzODA1IgydD3Hz8laDmtMQUpkq3APBpHCtRYNH001mvyRxMSHSu8EZEVua9odPXP4ks%2FhARwSEUnvbGUguWnrXWTXWWA5Rw3UMHoMra1OCK94ccRJWDFaMBArCm8tA7iAtp5W6VR%2BAR%2FU%2BLja4YyQ1f4Url4ZD57Cru3EQBqNwvpWm8I%2BMyZGzndjUUFF%2FjxgRcbxjV4ukNAbTpR3Y7JoDe9jWsN0xTup841%2FTrsi2AjoPCPyQrvI8czaRQIa4Wa2h8e%2FNySrDaY1Lww67FXVUIrLPOzXu9hZEhT%2BEw40CIdwoy6n44tt%2BFd4E1yN1eTKe1W%2BoaM9AVueS5lrJx5GnwluOlptCAMO5TKTjMgVwEPmxsHDp4iDi0zXg%2B082934Dhd%2FlGCeEpbJy2rI5WMhtA33WnREtNJmOUKmO0PBJ1lBbA%2BVxkWDtaRfHwxpOZBrVbPULr8VwzUPzJEn%2Bt7hDsBun3MBAeSKVVzAW%2BwHz8ipuqZkwPoPZdVPVjiNoFSChE4Ye%2BwIKPtdoN5fovePCNwayRo4xqmOKpmC%2BCYBYdugjcrFeZFFy9sswBmEXgf11MKjU%2FDBHM%2BrV9JmAlOA3U3mDo%2FHcHJpdi8iy0XZBWaY00UV44MXq1YmzMqrKM%2Bv%2Bco3nmPV4FpT%2F8V00RqHJIDC7nYnKBjqkAcDW3KDCf2oUJVM%2BjNaCQ4ByvGYakhO3pDh75EbXHfC0At1B1vsBoYS%2B9B17CimzBqT7NHjlK5DCR9sKYcbmn%2By%2BasH73RqwdpUacR8W9c45DC6ahmlt5olcCgtiz%2Bol6tbrgELVjMqSFLtO49QfRdAK24DC%2ByoEFnJBiPdBLydJKlXL691uxfWI7e0Tm8dmoJ4UR2fAUai8NKmnr2j0Nfn0U%2FCp&X-Amz-Signature=0736f007f2d4811fc553e77cb2bf4a56d46256c22ebafeaaacdfadf41f5856b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
