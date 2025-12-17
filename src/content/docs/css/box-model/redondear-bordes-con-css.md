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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEYIOUV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ47VcAQV4SoYfmrLAzeZjz8D8Cacbg170RfW9wZASHAIhAIEdzgqM%2FgUTWPR2iRwJJEZlTPOZHOprT4lyK8%2B2tzeIKv8DCHUQABoMNjM3NDIzMTgzODA1Igw9%2FvooUtTfB38mK3cq3AMW1mZn0G2b6mJ3mgjcY8JBuXKzuBGu9uc2tFyYN7W59%2BctlXxaq5ptZJK1FmSjepzR90B%2Be5ErGxelcc4znLyUQMEbMJhrWtTSFDWJfWxRJEvCGYYgff24xfQhYY%2F%2FITn5usAUrroCq53aXCckWeEKFjs5zFLRlaoTs9z%2Bq7FvmGi4yymzB99f3l0cbhDHoFbyFUsOnypAPkcwoSw3ZkIWsSee%2BoKex1mMc%2B1aWHez7lxDT8rFUxINHckiLxpdjCI%2FBNGw7xKT1sb%2F2WQmwbP%2FvswXHxseW36LP28AxUUeZm%2BEfNtwfPaQ5q%2BfF0rvWnVbHzZndhf6cYdDfHrYsECgCg0Y02Dm8VnkH1UsvilqBJwI9%2F5BSggTWp3TSzLDIDF%2F4IFO3fnp%2FJW4ggFPh%2FKJXM12AaNurtN5YbIdQQRF9p0Sesa9w6rEIfA1LkdMeY9JPtxrYWLgRA8LTEcMGCH%2B2pLUatp%2BPa4s6LiLWRl3Iw1gYPdOAEBwQvTBzz1GcAWCZtAIYvuh%2BmvX%2FBm2Y1mfWX2g2JYnK26wqM1Zm9AMyafPIq3JHOTBtOgOrHBcCni62OFfeBWNKKtcyoAangsoThvF0Mql4uCUGlrDLG6p99iSgcV3NfLXNlUIljCNzojKBjqkATseI6xwmQdZr2IpoVIWO%2BGsa5yl26UIFpaRq0OECcbIsZKt%2Fkv2XtHlVOIA91ux146puX0DDOIdjh2vSTyJhs%2F%2BuCwO3CQ6ApEJnpdcZpUZ70CD76Km6RY9VuO1zArwa6SpEus3jGyAJugy%2FGECbXwvIiVTkCL8%2B3%2B%2BBitrhBAaiOEiOm1kBOyPdTlPu%2FKCVDyZZDvEVGO3VgJZXBPvEwRMMpU2&X-Amz-Signature=2161bf6e2f2347f5b1f62cba9e4eb8fa9e4bb8cd66125c63168b651867b95c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEYIOUV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ47VcAQV4SoYfmrLAzeZjz8D8Cacbg170RfW9wZASHAIhAIEdzgqM%2FgUTWPR2iRwJJEZlTPOZHOprT4lyK8%2B2tzeIKv8DCHUQABoMNjM3NDIzMTgzODA1Igw9%2FvooUtTfB38mK3cq3AMW1mZn0G2b6mJ3mgjcY8JBuXKzuBGu9uc2tFyYN7W59%2BctlXxaq5ptZJK1FmSjepzR90B%2Be5ErGxelcc4znLyUQMEbMJhrWtTSFDWJfWxRJEvCGYYgff24xfQhYY%2F%2FITn5usAUrroCq53aXCckWeEKFjs5zFLRlaoTs9z%2Bq7FvmGi4yymzB99f3l0cbhDHoFbyFUsOnypAPkcwoSw3ZkIWsSee%2BoKex1mMc%2B1aWHez7lxDT8rFUxINHckiLxpdjCI%2FBNGw7xKT1sb%2F2WQmwbP%2FvswXHxseW36LP28AxUUeZm%2BEfNtwfPaQ5q%2BfF0rvWnVbHzZndhf6cYdDfHrYsECgCg0Y02Dm8VnkH1UsvilqBJwI9%2F5BSggTWp3TSzLDIDF%2F4IFO3fnp%2FJW4ggFPh%2FKJXM12AaNurtN5YbIdQQRF9p0Sesa9w6rEIfA1LkdMeY9JPtxrYWLgRA8LTEcMGCH%2B2pLUatp%2BPa4s6LiLWRl3Iw1gYPdOAEBwQvTBzz1GcAWCZtAIYvuh%2BmvX%2FBm2Y1mfWX2g2JYnK26wqM1Zm9AMyafPIq3JHOTBtOgOrHBcCni62OFfeBWNKKtcyoAangsoThvF0Mql4uCUGlrDLG6p99iSgcV3NfLXNlUIljCNzojKBjqkATseI6xwmQdZr2IpoVIWO%2BGsa5yl26UIFpaRq0OECcbIsZKt%2Fkv2XtHlVOIA91ux146puX0DDOIdjh2vSTyJhs%2F%2BuCwO3CQ6ApEJnpdcZpUZ70CD76Km6RY9VuO1zArwa6SpEus3jGyAJugy%2FGECbXwvIiVTkCL8%2B3%2B%2BBitrhBAaiOEiOm1kBOyPdTlPu%2FKCVDyZZDvEVGO3VgJZXBPvEwRMMpU2&X-Amz-Signature=31e0bf12bfc666412a307fc803da64a802e207f85c5b466be34c2527587783ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
