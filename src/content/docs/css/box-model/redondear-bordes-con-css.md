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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626N57ED6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYWN3zHYvTmVPx7k8UNHT6A0BW6TDwPLLKJjweljRPNgIgJBGY2lHAKYvILOda7SHQj8YGADC0FCwlVcSKHmmgtokq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFy3Hl5Nsd2xLAUnwSrcA1NuHeBId%2F49ACkl9nY5dZK6jBV5GwTsmd7XpCsZlC8F3HzZKw7sWT6tf5UUQedY%2FBg5JxNaLmRHw48ud8M9KW31CFJArdjkp8JvH5ig%2FYTjxDIIQl5zpqCJsBaYwDS1D0c2nbR6G0siSSiwCh8QXwy1n9qadrGo96ltMQjYk26rUVo41NmmLEegLRJoDpO6lwLVhZuHZokhCgRyEuMT5ddD1KGG3Y%2BGEnlDMgV0ml9DS%2BW1J%2FE0mIRE%2F9pVV3mm6jAL9cn4oTonq%2F3FCNvbGyOBk4vys83zcJMjR4jmafZkSUvHBlMITZmY1GRXF0Ae4fIpr%2FHBQPxYXgR4ysQShqoorlk3%2FwU0McbZPK01pguIL5jtzfaqe1TA8YeLFogH6V6h7HJxV5nEGDVBbGR4qP0fTk3CfYBxEqYL8jBihjKxjx%2FW6oqAmxgU5iJaGemP3vyRmzTAFTnZE8Ytczc3RWm6jnmsqCZIiPvOYR337iUvF%2FV%2B1OdD9kVVASEIXa9GtkKDPQZe0RCFOLlIQ9u8sJFsn1POSKgu4dhLaN4lLPNQyf7nWB%2BLfi4VBzDo1ljYEXgQqurbENkfGsHos02OgKiIV8o0QSR%2F%2Fd%2BCMCQnPbILv7MRcP7k1I8Id9goMPnwicoGOqUBQZRo0SeUUSpZDgscK0vLS2GJ%2BNbGLpHDNmwM0JwVzVzV1lMoafH0zBV0kjmEKUUBslfxJcGav%2BCsDNSZXy6%2FTJCF2ppqh%2FeQOr%2F1qPENXhFKGQPLN%2BZfi7NEn7XwwZTlXZuM1WzqIzr5szVwtIs2fURhWreYRoowCbXqqI0pMpFM27qQI4HDzFgfr5diJgsFcxlHqSnxKrCzCFkq1CUnBnGz99OY&X-Amz-Signature=808f0e5ea1d1d5e2ed41ab8717083929589999be279458aaaaae65fe1135ea61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626N57ED6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYWN3zHYvTmVPx7k8UNHT6A0BW6TDwPLLKJjweljRPNgIgJBGY2lHAKYvILOda7SHQj8YGADC0FCwlVcSKHmmgtokq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFy3Hl5Nsd2xLAUnwSrcA1NuHeBId%2F49ACkl9nY5dZK6jBV5GwTsmd7XpCsZlC8F3HzZKw7sWT6tf5UUQedY%2FBg5JxNaLmRHw48ud8M9KW31CFJArdjkp8JvH5ig%2FYTjxDIIQl5zpqCJsBaYwDS1D0c2nbR6G0siSSiwCh8QXwy1n9qadrGo96ltMQjYk26rUVo41NmmLEegLRJoDpO6lwLVhZuHZokhCgRyEuMT5ddD1KGG3Y%2BGEnlDMgV0ml9DS%2BW1J%2FE0mIRE%2F9pVV3mm6jAL9cn4oTonq%2F3FCNvbGyOBk4vys83zcJMjR4jmafZkSUvHBlMITZmY1GRXF0Ae4fIpr%2FHBQPxYXgR4ysQShqoorlk3%2FwU0McbZPK01pguIL5jtzfaqe1TA8YeLFogH6V6h7HJxV5nEGDVBbGR4qP0fTk3CfYBxEqYL8jBihjKxjx%2FW6oqAmxgU5iJaGemP3vyRmzTAFTnZE8Ytczc3RWm6jnmsqCZIiPvOYR337iUvF%2FV%2B1OdD9kVVASEIXa9GtkKDPQZe0RCFOLlIQ9u8sJFsn1POSKgu4dhLaN4lLPNQyf7nWB%2BLfi4VBzDo1ljYEXgQqurbENkfGsHos02OgKiIV8o0QSR%2F%2Fd%2BCMCQnPbILv7MRcP7k1I8Id9goMPnwicoGOqUBQZRo0SeUUSpZDgscK0vLS2GJ%2BNbGLpHDNmwM0JwVzVzV1lMoafH0zBV0kjmEKUUBslfxJcGav%2BCsDNSZXy6%2FTJCF2ppqh%2FeQOr%2F1qPENXhFKGQPLN%2BZfi7NEn7XwwZTlXZuM1WzqIzr5szVwtIs2fURhWreYRoowCbXqqI0pMpFM27qQI4HDzFgfr5diJgsFcxlHqSnxKrCzCFkq1CUnBnGz99OY&X-Amz-Signature=b3798982a7ea3c77865e785cc98975dd68470c74b911fa7785bc93c0f5a7d87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
