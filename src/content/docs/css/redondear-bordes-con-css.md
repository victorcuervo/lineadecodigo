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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VZNZEX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdBG4gXAWCMegW8mMOkrx%2BKfuNvNLk4a1DYsgpzvvh0QIgcpY%2B9Sk0BzxJNcWxHTCzb8eXTC1qEP6pCkCGw%2BKTROEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6V6DaxRv7BrTXmFSrcA%2Fi98YoZP819yk8mAOcstuveyI4wRj6WqtEUx77I1XR9bO3bdy8jkU8xnM0TG2mXE5ZlVHPHiwzW41zvwfmaYnOcY4x%2BlL7J3S%2BtBWS%2Fo8iv2xcE%2B24jV81recRgohlujwkOtwddsH7mzGlSoD7YKja2gHELW%2FKHvwO8MicYtgyYb%2FXBysGYykH8wOEcIXbl3BG5M3f%2FhIhh%2Bk0RwZNd3Pt9J6gzWZrSWbFWDCkoS%2Bn%2FqCt9QCspATa2fp3omHUKC7HGKFSEPHwwesKfhQMqUipa1vizJpdezlawXYaepLEKSkmd9XdCXzoXL2C5wfxRPs2Ly3uGXAOwEeIFp3XDDHUKv2BHRRiE0P1iHkeTHtkuj%2BbycMrcrnihKb4u9LOOEPo4GOGY%2BT3wX7MLwjSUIHYGqQmXwOztpXlPr1uzHR8iZkcBIXgbJD8bacwSnbJaRvW8lSpqiIOvc%2BsuXZRz2wY30PyBV5bU6luBUK0KN4nUOSBZq1QRhFwvr%2FS1ZYtXFi9Gw7VpUDwl2IOg3Qy02yhldg8Fzb5DmyDYlqHsEBnmYPN1YDfDBNwA39HbgNAHJzjZv1fMbaxvVv3OM%2Bp0iQkNP7FtZxTCtvjvYapSHOforNv51STeUFhlv9TNMKD90skGOqUBgJdWwEwoWKEq3MOC%2BAtwnfu0mY%2FxI7hrpEG06%2BobcMt762IH6UHX5VYzi8%2FppblejtGlO93MHGSmftZ03mayo1wfbcuozj8j54CaafUoJWDyPQJW5S4i%2FIgr8Tp4vPWYlWqKVbT2CyjMKXWkSr4owkcw9J55hcJVnMtByzZ1O%2BLD5s0muTm2G6sf6zieLAowSMu8UZiqEcGpPH56JxcUE7RBJ4pP&X-Amz-Signature=7cf8380874619c3218d3d6f16f9660d8bacee933a3c229665853b04104508d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VZNZEX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdBG4gXAWCMegW8mMOkrx%2BKfuNvNLk4a1DYsgpzvvh0QIgcpY%2B9Sk0BzxJNcWxHTCzb8eXTC1qEP6pCkCGw%2BKTROEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6V6DaxRv7BrTXmFSrcA%2Fi98YoZP819yk8mAOcstuveyI4wRj6WqtEUx77I1XR9bO3bdy8jkU8xnM0TG2mXE5ZlVHPHiwzW41zvwfmaYnOcY4x%2BlL7J3S%2BtBWS%2Fo8iv2xcE%2B24jV81recRgohlujwkOtwddsH7mzGlSoD7YKja2gHELW%2FKHvwO8MicYtgyYb%2FXBysGYykH8wOEcIXbl3BG5M3f%2FhIhh%2Bk0RwZNd3Pt9J6gzWZrSWbFWDCkoS%2Bn%2FqCt9QCspATa2fp3omHUKC7HGKFSEPHwwesKfhQMqUipa1vizJpdezlawXYaepLEKSkmd9XdCXzoXL2C5wfxRPs2Ly3uGXAOwEeIFp3XDDHUKv2BHRRiE0P1iHkeTHtkuj%2BbycMrcrnihKb4u9LOOEPo4GOGY%2BT3wX7MLwjSUIHYGqQmXwOztpXlPr1uzHR8iZkcBIXgbJD8bacwSnbJaRvW8lSpqiIOvc%2BsuXZRz2wY30PyBV5bU6luBUK0KN4nUOSBZq1QRhFwvr%2FS1ZYtXFi9Gw7VpUDwl2IOg3Qy02yhldg8Fzb5DmyDYlqHsEBnmYPN1YDfDBNwA39HbgNAHJzjZv1fMbaxvVv3OM%2Bp0iQkNP7FtZxTCtvjvYapSHOforNv51STeUFhlv9TNMKD90skGOqUBgJdWwEwoWKEq3MOC%2BAtwnfu0mY%2FxI7hrpEG06%2BobcMt762IH6UHX5VYzi8%2FppblejtGlO93MHGSmftZ03mayo1wfbcuozj8j54CaafUoJWDyPQJW5S4i%2FIgr8Tp4vPWYlWqKVbT2CyjMKXWkSr4owkcw9J55hcJVnMtByzZ1O%2BLD5s0muTm2G6sf6zieLAowSMu8UZiqEcGpPH56JxcUE7RBJ4pP&X-Amz-Signature=a06e79ebc289a79b21257e16e1dfb4bad731371a2be6b9a1b76bb1ad608dd4d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
