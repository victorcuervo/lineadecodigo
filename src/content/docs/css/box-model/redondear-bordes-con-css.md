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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMH7WMS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxr%2BiNfrPT3C4r4D9EjOWh%2FvT3JV2gXdriJnjwWaQ%2BBwIhAKCy%2FYQdpU6%2BnDw%2B8%2FISMmTY2PGry4ojDFB9jXGrz2MFKv8DCH4QABoMNjM3NDIzMTgzODA1IgzQNRWT7UsgyRYGzZ8q3APx2McwQ4PaDqHAkZuw8ktB3ysINHpriPxJFvk%2BnaGViKosus6Dxugywm2h14irc%2Fa%2BXyOENcLqNm3tZ4JmgORHdyiukKc7x%2BSGDJDahu4Z4a1GpJEcp%2F%2B%2B4i9l1vT%2FPwTZksr%2FBXUMPaJ8E%2FV2bZFNVuk87OQEtYBwJjRwTV2zMl2hRp3e4XmVTgrPh72OMUGRCYmWDf8hIVQCZXEdiE9MDMqycc0%2F9SHB73t2fvuumAi%2BfUeNuAIH0a6yeeStBNGHV5XcXxo8zeVI%2F13AfBUDTqUYVIa9zl4Ny1pAGiVsJuRIeqd6oxyJzfGtigf3fZQZZhDfi8tdcmJDWb9AzjiUmShMvN3UbuS4VIusAQr42JvfQo6CQA8r8nVbbgUK5JLXoXASlsaswXZbPNDgD%2FFl8LJ1oVAKT4IxNKUctGvhYq0Cd0FjofI%2FUE8VmeCcYRey72H1sZoBZJODmPGhduG%2FLNs3MC6mRTG4Xz33hp3babgiei4%2BMf2LLlY2Tz4YMfFy1If2xSQOHEXekO8%2FA%2Bqsvbmwoe%2BRv03pTzqhnm0nWpt8chQCX69jOgAkGgVJ%2BTFTpSCvBZwg%2FN%2Furmd28oxbS269z8Hx%2BTbMCDhTNAY9yV%2FQ0JKDrlY33Vb0DjCfxorKBjqkATpGi5aeuqxe50mhDdIZ7RFkQo%2BXsyE%2B008cV%2BGUFyjvh6z6ix%2BFg%2Bjiw2rFamVuVEOn1gyKMurNWuhe2Q8HtxManApUfejs7lpJDspH6yyb%2B6jfVTBNORW9TOaX6VcXG5cU%2F5UYcGSWN9CKZTBTYXYISkU2m1JwYcRkdi6SjHodgkSzgV3b8Rib8kg0bzOzX67nUq2acdYURR62DkqxDklizxoN&X-Amz-Signature=b8adff0bcbdc4f1639bfd2a30edfcf96ecf1b9667e1941ee9aad958163cbfe6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMH7WMS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxr%2BiNfrPT3C4r4D9EjOWh%2FvT3JV2gXdriJnjwWaQ%2BBwIhAKCy%2FYQdpU6%2BnDw%2B8%2FISMmTY2PGry4ojDFB9jXGrz2MFKv8DCH4QABoMNjM3NDIzMTgzODA1IgzQNRWT7UsgyRYGzZ8q3APx2McwQ4PaDqHAkZuw8ktB3ysINHpriPxJFvk%2BnaGViKosus6Dxugywm2h14irc%2Fa%2BXyOENcLqNm3tZ4JmgORHdyiukKc7x%2BSGDJDahu4Z4a1GpJEcp%2F%2B%2B4i9l1vT%2FPwTZksr%2FBXUMPaJ8E%2FV2bZFNVuk87OQEtYBwJjRwTV2zMl2hRp3e4XmVTgrPh72OMUGRCYmWDf8hIVQCZXEdiE9MDMqycc0%2F9SHB73t2fvuumAi%2BfUeNuAIH0a6yeeStBNGHV5XcXxo8zeVI%2F13AfBUDTqUYVIa9zl4Ny1pAGiVsJuRIeqd6oxyJzfGtigf3fZQZZhDfi8tdcmJDWb9AzjiUmShMvN3UbuS4VIusAQr42JvfQo6CQA8r8nVbbgUK5JLXoXASlsaswXZbPNDgD%2FFl8LJ1oVAKT4IxNKUctGvhYq0Cd0FjofI%2FUE8VmeCcYRey72H1sZoBZJODmPGhduG%2FLNs3MC6mRTG4Xz33hp3babgiei4%2BMf2LLlY2Tz4YMfFy1If2xSQOHEXekO8%2FA%2Bqsvbmwoe%2BRv03pTzqhnm0nWpt8chQCX69jOgAkGgVJ%2BTFTpSCvBZwg%2FN%2Furmd28oxbS269z8Hx%2BTbMCDhTNAY9yV%2FQ0JKDrlY33Vb0DjCfxorKBjqkATpGi5aeuqxe50mhDdIZ7RFkQo%2BXsyE%2B008cV%2BGUFyjvh6z6ix%2BFg%2Bjiw2rFamVuVEOn1gyKMurNWuhe2Q8HtxManApUfejs7lpJDspH6yyb%2B6jfVTBNORW9TOaX6VcXG5cU%2F5UYcGSWN9CKZTBTYXYISkU2m1JwYcRkdi6SjHodgkSzgV3b8Rib8kg0bzOzX67nUq2acdYURR62DkqxDklizxoN&X-Amz-Signature=934db57f0d3589244fe3f9fe0fb400bc15657d734a148259e89cc6b6c5e838e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
