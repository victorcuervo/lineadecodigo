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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT3CY6BZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7DpIg0Cy62q21CjBrFDQ67ed%2BcNvYFXSS5MV926Lo2AiEAuJEMqVgCBlCQYyKZwUn%2FLJpLDtQwgt%2B5An5mpWbMIfoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYELuNH1moeJkuaVCrcA45x9gYa8z4QE7F48F76iL5Y%2FSAQNS%2FPiH4oXjj2UrQYipoqlF95tb9gGt%2B1NzFtLFEdvYN2NJquBqhZx2PXsnxvlJmJjuQa42VFYz4PfbGLkmZyk4EJ%2FjlpgSLhQm2FLlmdp7eWIfNLnlKUCdlVbO3e645dMwIHsFicBg2cd3gGtGajOD3OlpMtNnmbC%2BSWMXEAbh5gjKYW9GPwMgYC4hBVWKjgmRFdSEJZCbldU2PQWsB2bxUJI5lP%2BO6FkyERmI8xcBCfi0EUF0mYaplY5dBVFDEwqKbZN2IMJJ97%2FP13Oo%2FrXmG8pmFN19iGz8uOdwXCr1F1zx5Yoe7xqebK6bSOtUfaCQv5fHAUK5I0POysFg5OytEJHfGEJ0U4JNtstWcLp1VOo6aul4PM%2Fu5Hkh9SU7bnzhH5IfvDkHmCornKr47eqWxDwHfZHndN1WpTjGE29cdMk3f7Upavw0HTz1%2FpZQv0IAXZQCiT2HOjcTxwyYjqUiAH01hEB0aMEF6qCFeJyEeceDJlt3mwFfd6Urt6eAb19nWhN%2FQWKOc0wr6IXm5QyNktN3WHXA4W6%2B3vA5U5b7%2BOUNUliiqRLT8lpIN0J3MISxovwQ%2F1Xdfja%2BV0h3GWy1qPBfThx2x0MLLC3ckGOqUBSUWyMwBnW3FH6jIR8VUhXP8lkoiMm2aFgLyTIqJDOlrIfAa8fpekNbH9THZaa4xZkGy3g2vS63eG0WE0TKwXZiDthFz4wSVh4pg3DvW0MXKs3S3PpImNdLc5UFBB%2FRbADg9tD9gFb2AbdyFd%2Bw3nujfJPyHsG1EetjMajSjMyzPoghGdjwo9EWzdavUKZemGGq%2B%2B9sBGLBuuV5jeBHid0oTVZGnP&X-Amz-Signature=76284f1aa93b4e43f6ae2143c4491e1737edf6fb4cf61a7305ff2702cd90c042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT3CY6BZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7DpIg0Cy62q21CjBrFDQ67ed%2BcNvYFXSS5MV926Lo2AiEAuJEMqVgCBlCQYyKZwUn%2FLJpLDtQwgt%2B5An5mpWbMIfoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYELuNH1moeJkuaVCrcA45x9gYa8z4QE7F48F76iL5Y%2FSAQNS%2FPiH4oXjj2UrQYipoqlF95tb9gGt%2B1NzFtLFEdvYN2NJquBqhZx2PXsnxvlJmJjuQa42VFYz4PfbGLkmZyk4EJ%2FjlpgSLhQm2FLlmdp7eWIfNLnlKUCdlVbO3e645dMwIHsFicBg2cd3gGtGajOD3OlpMtNnmbC%2BSWMXEAbh5gjKYW9GPwMgYC4hBVWKjgmRFdSEJZCbldU2PQWsB2bxUJI5lP%2BO6FkyERmI8xcBCfi0EUF0mYaplY5dBVFDEwqKbZN2IMJJ97%2FP13Oo%2FrXmG8pmFN19iGz8uOdwXCr1F1zx5Yoe7xqebK6bSOtUfaCQv5fHAUK5I0POysFg5OytEJHfGEJ0U4JNtstWcLp1VOo6aul4PM%2Fu5Hkh9SU7bnzhH5IfvDkHmCornKr47eqWxDwHfZHndN1WpTjGE29cdMk3f7Upavw0HTz1%2FpZQv0IAXZQCiT2HOjcTxwyYjqUiAH01hEB0aMEF6qCFeJyEeceDJlt3mwFfd6Urt6eAb19nWhN%2FQWKOc0wr6IXm5QyNktN3WHXA4W6%2B3vA5U5b7%2BOUNUliiqRLT8lpIN0J3MISxovwQ%2F1Xdfja%2BV0h3GWy1qPBfThx2x0MLLC3ckGOqUBSUWyMwBnW3FH6jIR8VUhXP8lkoiMm2aFgLyTIqJDOlrIfAa8fpekNbH9THZaa4xZkGy3g2vS63eG0WE0TKwXZiDthFz4wSVh4pg3DvW0MXKs3S3PpImNdLc5UFBB%2FRbADg9tD9gFb2AbdyFd%2Bw3nujfJPyHsG1EetjMajSjMyzPoghGdjwo9EWzdavUKZemGGq%2B%2B9sBGLBuuV5jeBHid0oTVZGnP&X-Amz-Signature=76c2125c006a294ebbc3ce26444b070969e3da0f30e9a661dd8d1844adc284a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
