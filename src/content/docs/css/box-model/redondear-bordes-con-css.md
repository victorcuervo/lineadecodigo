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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQSFBQW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPUydnVvz1V37J0CY26lLhtZZpwIYo80pjx378oSy%2FpwIgN95WKen77m%2Bo3FCySi8qvFrE4JkwheRUKtcQkHJcIzUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvMNkN7M3ENQH37KSrcA6RRoeMajuXsCPM2RaGXK%2B2UTFhoPG%2Bbi9LImC%2BqnvgupBlzWxtjvwiJxEGPVlq6ECbi5WV418Q6OHlJyKud0P4rXbtQY7vo%2BTMlnnHkD%2BgTP37dNN0NSf4gMvJ6BwuX1D3oGV3S36%2FewestzlQblPW%2B18urcHOfXWcOHGjOFtFYpkGcz9ushQxCJcVKHcNblfo5YcJpx4%2BdhwqfpLtjeCYmnauBaODBXe14OFdC4R587Xn6Yy%2BZXW%2B1bfkknOGCGGsdKVgEJ3GVpUBMVyw5BdymwsrT4ZZJPkgoevxYIKz%2FzUVDKJEvHnwYahHhnU1I0P0JSOPevQxxzhS8sZlK85gKgH%2BwAaCShwOQ5YLYzdGRTFQLEd4VjfDsIGy87yAPziijul%2FL6KZwci4y5SWHAY1LfsmPY3DZ6eyRyOXq0W2Yq0X%2BWmgevCzEDhgWUiyjKVSB5MCKZU1GTbfmm3FKbtP6V3PjZLyapi1qUyHTvI8QaTvdkwXXIGT%2Bxko6Zi29G%2FcclJXiPtoJZKLMta33PqcywO%2F4n%2FCQJI8ZaqWFq6guzgfduACkZzJ0CqjuphOFkGE81UrH9sBeoDD8laDvG%2FlKiam8StCqlB4hXtQqeFMZG2r6xH2L1EHcYpuJMMifi8oGOqUBSOLgWQePEvRq9u4Ew2S11vMGMUkLceK%2FLUtGUFc1SGZe8%2BIEZvZlJJiMAgzQ4WnDS2ntRrLROZohCjNiCTgIlCzxaPBeArJDjUUQrXqdsnlrRBSXeVMmza98GmGpUWvNIHD5oyp%2B1ej7mxwGe%2BXTsMvoSky9l7OxK3EkWBDEcB%2Fg0PoQJYdjz952xWD1zFmsmq%2FHnSWwgV2gwhLgB76KRuHOlrFc&X-Amz-Signature=1ce99cf59eb7ce3a95cf3b20ea0c8f3fd7decfb6c848a1339bda86e02fd00e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQSFBQW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPUydnVvz1V37J0CY26lLhtZZpwIYo80pjx378oSy%2FpwIgN95WKen77m%2Bo3FCySi8qvFrE4JkwheRUKtcQkHJcIzUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvMNkN7M3ENQH37KSrcA6RRoeMajuXsCPM2RaGXK%2B2UTFhoPG%2Bbi9LImC%2BqnvgupBlzWxtjvwiJxEGPVlq6ECbi5WV418Q6OHlJyKud0P4rXbtQY7vo%2BTMlnnHkD%2BgTP37dNN0NSf4gMvJ6BwuX1D3oGV3S36%2FewestzlQblPW%2B18urcHOfXWcOHGjOFtFYpkGcz9ushQxCJcVKHcNblfo5YcJpx4%2BdhwqfpLtjeCYmnauBaODBXe14OFdC4R587Xn6Yy%2BZXW%2B1bfkknOGCGGsdKVgEJ3GVpUBMVyw5BdymwsrT4ZZJPkgoevxYIKz%2FzUVDKJEvHnwYahHhnU1I0P0JSOPevQxxzhS8sZlK85gKgH%2BwAaCShwOQ5YLYzdGRTFQLEd4VjfDsIGy87yAPziijul%2FL6KZwci4y5SWHAY1LfsmPY3DZ6eyRyOXq0W2Yq0X%2BWmgevCzEDhgWUiyjKVSB5MCKZU1GTbfmm3FKbtP6V3PjZLyapi1qUyHTvI8QaTvdkwXXIGT%2Bxko6Zi29G%2FcclJXiPtoJZKLMta33PqcywO%2F4n%2FCQJI8ZaqWFq6guzgfduACkZzJ0CqjuphOFkGE81UrH9sBeoDD8laDvG%2FlKiam8StCqlB4hXtQqeFMZG2r6xH2L1EHcYpuJMMifi8oGOqUBSOLgWQePEvRq9u4Ew2S11vMGMUkLceK%2FLUtGUFc1SGZe8%2BIEZvZlJJiMAgzQ4WnDS2ntRrLROZohCjNiCTgIlCzxaPBeArJDjUUQrXqdsnlrRBSXeVMmza98GmGpUWvNIHD5oyp%2B1ej7mxwGe%2BXTsMvoSky9l7OxK3EkWBDEcB%2Fg0PoQJYdjz952xWD1zFmsmq%2FHnSWwgV2gwhLgB76KRuHOlrFc&X-Amz-Signature=e34f79a2e9ff2c99ed5ece8a85705deb60cfed58908aa8651d3631c880bbcbbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
