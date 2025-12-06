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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSBHDWAY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3XYJvlLCUDh5DBMTKHKIvLPukiIhSqMuTTvcUoYFfpwIgDXBKgXv%2B8tunhsEcR8jvs93cwDefv%2FK3hjWOtUfpnBsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCeIsXZcgiTAU0T8QCrcA3I7EA8aDTbM7b0za4CbsqUd02wmcc7sLp26Wf%2FOmBZNtJ2jSwVkuBU6nNEyLmgOFirokIax%2BReLLy%2BmQn3dbyLlqP5o0a7Mh%2FYv00Pr34PWbJqwBAIPBezR3wtsa%2BNIJGrwFe3VcdaoH1eFrQib4XGIqplWR5p6ZqHADhV7IKg6xxRs68Lbiyazr4Dk1pnDykonFRrgetjqxXiBbHfi2t3%2BxZMKWpRWY%2F78W7isRb1X%2BisKlXmibgJnHnKyDecOLzduOiWXUAeKdVCD1FBXulaXXdiAGGZMkxDxoOj9u8xTjHpUiQ6ZjZ5mUh5v7ENV2S2Okgfux2cI2QpME27BMDATLrWPhbhQM2W8FOBdkn5wKJejVaoYEgR91DvpI4CkgcO44%2FCeT8%2B4aN6CCC5iwgouZzhrNvvWoApqnt83oBJjzqAIuxILZ1T2%2FII2GZ8AKXSvjHu%2BPa48et59oK4pEbAI%2BvswmfmrusG6ZIkxtlSB89HjeAIz3IbpaeZj2y7SF1%2F9TjCUf8q6w5cqs6WyEpgw%2FHY44QZFPVDvmrVWWEOiB6Yqzz6tJeiF%2F2LMWfzecKb%2F4nnAMOOURw%2F5nh3viQCIEYZU1FIn3i4OihwK0i6yDr1M9yDThS6IDJycMLfF0ckGOqUBT79XdKUWwmdKm1sHFc69a3BRtTpLjyIH%2BmPgJoxqMrYlB%2FXCF6e8BUkDurTgcmka%2Fr1rFKNxXwNgcwewmVDY4FVur04j3s10%2FPIjz50f5gbYl5bINhrvuGbyKf7QZC1xfYKxzA%2BSRAWKKnNrsFjaRj1qjw4iHSivWJgPyYyu3OHHo%2Bb4ruWiYhzr2MvCWl02LGohi%2FJD1KDV8Qx2QZsT2yxpHqus&X-Amz-Signature=54194ee2f18e0666a8aa18224183c708c99b921082fd1f2cdbf12b35ba3267e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSBHDWAY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3XYJvlLCUDh5DBMTKHKIvLPukiIhSqMuTTvcUoYFfpwIgDXBKgXv%2B8tunhsEcR8jvs93cwDefv%2FK3hjWOtUfpnBsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCeIsXZcgiTAU0T8QCrcA3I7EA8aDTbM7b0za4CbsqUd02wmcc7sLp26Wf%2FOmBZNtJ2jSwVkuBU6nNEyLmgOFirokIax%2BReLLy%2BmQn3dbyLlqP5o0a7Mh%2FYv00Pr34PWbJqwBAIPBezR3wtsa%2BNIJGrwFe3VcdaoH1eFrQib4XGIqplWR5p6ZqHADhV7IKg6xxRs68Lbiyazr4Dk1pnDykonFRrgetjqxXiBbHfi2t3%2BxZMKWpRWY%2F78W7isRb1X%2BisKlXmibgJnHnKyDecOLzduOiWXUAeKdVCD1FBXulaXXdiAGGZMkxDxoOj9u8xTjHpUiQ6ZjZ5mUh5v7ENV2S2Okgfux2cI2QpME27BMDATLrWPhbhQM2W8FOBdkn5wKJejVaoYEgR91DvpI4CkgcO44%2FCeT8%2B4aN6CCC5iwgouZzhrNvvWoApqnt83oBJjzqAIuxILZ1T2%2FII2GZ8AKXSvjHu%2BPa48et59oK4pEbAI%2BvswmfmrusG6ZIkxtlSB89HjeAIz3IbpaeZj2y7SF1%2F9TjCUf8q6w5cqs6WyEpgw%2FHY44QZFPVDvmrVWWEOiB6Yqzz6tJeiF%2F2LMWfzecKb%2F4nnAMOOURw%2F5nh3viQCIEYZU1FIn3i4OihwK0i6yDr1M9yDThS6IDJycMLfF0ckGOqUBT79XdKUWwmdKm1sHFc69a3BRtTpLjyIH%2BmPgJoxqMrYlB%2FXCF6e8BUkDurTgcmka%2Fr1rFKNxXwNgcwewmVDY4FVur04j3s10%2FPIjz50f5gbYl5bINhrvuGbyKf7QZC1xfYKxzA%2BSRAWKKnNrsFjaRj1qjw4iHSivWJgPyYyu3OHHo%2Bb4ruWiYhzr2MvCWl02LGohi%2FJD1KDV8Qx2QZsT2yxpHqus&X-Amz-Signature=7a712b41775a0e3cec3e1dce5ef9c99ec898b6bd5da4bf3cd62c8995463d1bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
