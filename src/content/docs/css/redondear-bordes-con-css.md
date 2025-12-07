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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXXGW7WQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBab73XN8WDFVLXLs6skmyP7mAkN3efTAjuUeebSXc5PAiEA%2FJLmZgBu4tET9U8uckf3G8K7xfu%2BLFN9T1is8ALJrrMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoIh8IrSwmGF9%2BK0CrcA2zfCQHJi77Ii55rBN80ZheIaXQo0K3FJzStW5Gze%2B%2BCY5ldqMoGfEVvNkVIr%2FP%2BHgJWuNnXpIS6lFZuYB0YZxR6%2Baje%2FOSF7YjhY%2F8BVv7kTtyB4ednKgG7b7FVHVCVvHIqRtidmMbC3q4UMY8CB4nqemojJZ3JPHIXtZSaekr0OgvnuG%2FsCneiYH6DwQ%2FxNBvXZWWR%2BHJV9P%2FjeCtzarQH6Ids1v%2FzDiOLrAAs%2Flts2tS3iwhc%2FAyLO029fQyssOGJcCHN57vQg8ktuh58G9fZ2%2FAjn2XQzPRLinDKQ8ko5829%2B9fXQznsEVSABYR%2BCQfM8bh8lmtx9mbZMDXfpeUJm6PyD76tnpsn2TwBWzt1w9fjFQ0VWVL820NSjcR4Z8tUWsrm6I78E1e9IH1%2BIzNHw%2B9SUz42sKqrfUNTs%2B0xynfnoHtJpyOiq1i939cbFkMzY3jaUgEn3Iorsv%2ByjKlyd3MacgtKAV01xljGoRb%2F6Yvt2EaZGpm89ns8ZvRcBvO%2FbiQfpRx133M3vvO%2BBjeJyUMlVCdsQ5pDK2UfAGK9DoImx4TCmIRuBKLao%2BR%2F6tmlAk5omQ%2BRcecQnRpJIJBSQes9GnVdTCBQXOwd8DCbhQwhUiWHLfw3dSD1MLD%2B0skGOqUBtKWUO7W1k4BB8F%2B0UWohwT8ERUzgobT9%2FJBSGEqWDB9OJdS8YxugH2EGaXb4HoP8BkHBWg3k4I5XGlI%2BxWYL21%2BmTeRQU7dw9FeQnn%2B68ozmkuvLZ06lQZgtvZgNHaIB%2F3U5adwlx88pX9rhQXZcA1PdBGCWSzU5tama3AFjdL02tdMI9ObhpRQCBa35GSbWivPpxpe4HutaPT8p%2FK1EKzi%2Fz2Rj&X-Amz-Signature=86bfac298c5f5e01e699fe79a39b9abe6e7f7c1b656f67ff1949df1d0ccb1fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXXGW7WQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBab73XN8WDFVLXLs6skmyP7mAkN3efTAjuUeebSXc5PAiEA%2FJLmZgBu4tET9U8uckf3G8K7xfu%2BLFN9T1is8ALJrrMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoIh8IrSwmGF9%2BK0CrcA2zfCQHJi77Ii55rBN80ZheIaXQo0K3FJzStW5Gze%2B%2BCY5ldqMoGfEVvNkVIr%2FP%2BHgJWuNnXpIS6lFZuYB0YZxR6%2Baje%2FOSF7YjhY%2F8BVv7kTtyB4ednKgG7b7FVHVCVvHIqRtidmMbC3q4UMY8CB4nqemojJZ3JPHIXtZSaekr0OgvnuG%2FsCneiYH6DwQ%2FxNBvXZWWR%2BHJV9P%2FjeCtzarQH6Ids1v%2FzDiOLrAAs%2Flts2tS3iwhc%2FAyLO029fQyssOGJcCHN57vQg8ktuh58G9fZ2%2FAjn2XQzPRLinDKQ8ko5829%2B9fXQznsEVSABYR%2BCQfM8bh8lmtx9mbZMDXfpeUJm6PyD76tnpsn2TwBWzt1w9fjFQ0VWVL820NSjcR4Z8tUWsrm6I78E1e9IH1%2BIzNHw%2B9SUz42sKqrfUNTs%2B0xynfnoHtJpyOiq1i939cbFkMzY3jaUgEn3Iorsv%2ByjKlyd3MacgtKAV01xljGoRb%2F6Yvt2EaZGpm89ns8ZvRcBvO%2FbiQfpRx133M3vvO%2BBjeJyUMlVCdsQ5pDK2UfAGK9DoImx4TCmIRuBKLao%2BR%2F6tmlAk5omQ%2BRcecQnRpJIJBSQes9GnVdTCBQXOwd8DCbhQwhUiWHLfw3dSD1MLD%2B0skGOqUBtKWUO7W1k4BB8F%2B0UWohwT8ERUzgobT9%2FJBSGEqWDB9OJdS8YxugH2EGaXb4HoP8BkHBWg3k4I5XGlI%2BxWYL21%2BmTeRQU7dw9FeQnn%2B68ozmkuvLZ06lQZgtvZgNHaIB%2F3U5adwlx88pX9rhQXZcA1PdBGCWSzU5tama3AFjdL02tdMI9ObhpRQCBa35GSbWivPpxpe4HutaPT8p%2FK1EKzi%2Fz2Rj&X-Amz-Signature=a795f8d6a45435b772c06af024b064cf1f6b4c8a6da1fc116aea2de026c5d246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
