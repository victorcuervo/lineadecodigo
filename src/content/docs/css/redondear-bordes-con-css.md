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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653QH34LL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcj4osXhGp92INwthHSVoHKJPfSEEBE%2ButVIS0q8lDpAiEAyw8T6urKlyVm4oNyzojglkb3JDHXme36pTJEyk93e%2BMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiPQYi%2FPQymrxPl%2ByrcA5OrU5aHDL7nzw5no%2BPY1r8lDaFWCtXgUv1V2u4JvfybExlI2FKSkC48P7sXmj4Zmb%2F1cX1oSSSzAxP3H%2FPM7DEneymOj41IkXxrdCE%2FIMIBRstN3MInWbqowZ1dfVAG5Z0M7n%2F8Esm8jnY7Ph1g79igauU2ynQb3%2FBapi6mSahuWBWlpMYutRmXYmvAmgt7eQsB4WR5DFqbukWtLiGcrMB2lFEfbCgveCi1Ow28HSyy2%2FNYnLwxTrSo1EYgmDAG0XRa5VdQzRYQOexRTnqOl52vdRRIQ6x7L0vBKTm0iDsqu4kv9VjuI9uD9Ab2KupfE0hu4f3bWdXxSBRgFkAYbZ%2BinjtYs1SgWMLbZusMsVZEHePF1s1TSAZ94LPjwTV83Jhaidf4TcpVhsI%2BjFbpZJ26XIBf7IX39VZRnUMwDvzXxiowmM8kNldHd4zxgxlC7uHxocX96%2BDhBM7A00YHs%2F1ugrfDTH5i0zO1vxMZDq5j9DEtmO4wPZNiKJdmKtF2e6w%2FdlLFbertAPD3BvfaPAeMt1D5%2BFn6des4mSSAqqVi0hOrs1iG8DSYO94%2BUr8eFn6RW4P27oqw4WLEXLs3NuY7CKwk%2B8ZWz8VC%2B0DHGp%2Fk1KFtk4dO43bD7LiqMMOO3skGOqUB%2FsJM3ZdN6p13EZOgX3gwU%2Bp6zA1EwsG2ew51vcdwkoo9AbTNctJPFqbwnP85zXJtmKXFpeEoXzJKpzG3vfslVw9ZiRCpPdtdaHV%2BN%2BkChNcASzgLUgs8qqSPh6SBIwkkFROsByziFiGeSRrfPpQ%2BuQyQpbxHHKD82xy%2FuZMRF3IicAid8dYTLj2VftMRRNiOHCRb03Wt7i8vmR0wkC5lKHJA0C%2FX&X-Amz-Signature=e7e9fc71765939d8b83b4ef5ddac983cf86167f31c9cc0ad3b4de4cbcdeb6a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653QH34LL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcj4osXhGp92INwthHSVoHKJPfSEEBE%2ButVIS0q8lDpAiEAyw8T6urKlyVm4oNyzojglkb3JDHXme36pTJEyk93e%2BMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiPQYi%2FPQymrxPl%2ByrcA5OrU5aHDL7nzw5no%2BPY1r8lDaFWCtXgUv1V2u4JvfybExlI2FKSkC48P7sXmj4Zmb%2F1cX1oSSSzAxP3H%2FPM7DEneymOj41IkXxrdCE%2FIMIBRstN3MInWbqowZ1dfVAG5Z0M7n%2F8Esm8jnY7Ph1g79igauU2ynQb3%2FBapi6mSahuWBWlpMYutRmXYmvAmgt7eQsB4WR5DFqbukWtLiGcrMB2lFEfbCgveCi1Ow28HSyy2%2FNYnLwxTrSo1EYgmDAG0XRa5VdQzRYQOexRTnqOl52vdRRIQ6x7L0vBKTm0iDsqu4kv9VjuI9uD9Ab2KupfE0hu4f3bWdXxSBRgFkAYbZ%2BinjtYs1SgWMLbZusMsVZEHePF1s1TSAZ94LPjwTV83Jhaidf4TcpVhsI%2BjFbpZJ26XIBf7IX39VZRnUMwDvzXxiowmM8kNldHd4zxgxlC7uHxocX96%2BDhBM7A00YHs%2F1ugrfDTH5i0zO1vxMZDq5j9DEtmO4wPZNiKJdmKtF2e6w%2FdlLFbertAPD3BvfaPAeMt1D5%2BFn6des4mSSAqqVi0hOrs1iG8DSYO94%2BUr8eFn6RW4P27oqw4WLEXLs3NuY7CKwk%2B8ZWz8VC%2B0DHGp%2Fk1KFtk4dO43bD7LiqMMOO3skGOqUB%2FsJM3ZdN6p13EZOgX3gwU%2Bp6zA1EwsG2ew51vcdwkoo9AbTNctJPFqbwnP85zXJtmKXFpeEoXzJKpzG3vfslVw9ZiRCpPdtdaHV%2BN%2BkChNcASzgLUgs8qqSPh6SBIwkkFROsByziFiGeSRrfPpQ%2BuQyQpbxHHKD82xy%2FuZMRF3IicAid8dYTLj2VftMRRNiOHCRb03Wt7i8vmR0wkC5lKHJA0C%2FX&X-Amz-Signature=c57676639c8da83165a94fc7b6de3eeb1a3572e8b543d1db0f46be4727a5da2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
