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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQYNRH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtLMFofFMcbzqTL%2Bi%2Ffzyc6o%2Fx9xQQztOHZLQahUejrAiEA%2FpHVyWZgisbVrb2U26c5cmdtYOms3cF5obP5uXMrIRUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDORfdgERMQkQV2KCUSrcA43nLbHJ7Cj6sZDgNN0yg%2BJymgKtGr%2Fd%2BUtv1VOGUF1czvbnd0ETLR68f3towkedRBBgxrm%2Fg%2B6nnFpi3vddPd57VhKIIUbLH%2BNH09PSdhWf1h0T%2BYyk3MGMoNkJ%2ByiCwuF76l5GX9%2B344Rt2zC%2FgJt8xTfqrLU0QllvFyyGnYXIUnDH9fEY4bjTKmDXwE7XFXgycX2J62EN60WS6EQtV6TBkeY6mQU2K%2BU2KdU23crvAwI5Yf4bnrDpx6ECKsX6k4i2rwuZp2VtM48mUC9kYt5BDzRy4FI4TNN2Z%2FrtyteEfVJw84kCwDXIzShuR7evfnR8nrWA%2FI9ra%2B6zfXs3yzSYNFlVxITlsrzY%2BxCdlI%2BQBUl1L7mKtHMoF2FP0E%2FnGGknasgDcUSTOYXxGG%2B9nvPoCMysS%2FO0nLhda4ttoGt0hUsAOPjptZDfH9eWOy%2FfQCwvGNgQtA5M23KOruzOt%2BPLoeeIQRVZfb74JSOSHuUp%2FeKjIBfy5MtLYHFs1MhcbnGbSLWSbge%2FR6OgOBOKCkaSrUmWdgSROwii2bRc4j6ug2inmdlbgFQCf4%2Bnh7wG8erjQEa%2FUw9RANGd0pim%2Bxg%2FFRUjdYQ7xb0Gh0Zj%2BOTFCRGz9mw4IKjKBB3xMIXOiMoGOqUBGY2VnDiSWOf%2BaKNLb6sgOSNuYhkYrctppcHUjH%2F%2FXmsHQAC0RydZvGMzxu1Msnrt7cYvm%2BelmN%2FEvAX7QqGMOpTbhDUvOqq11y7Kl2XR2R5L2N2wwBXRtWTafSVQ5Ur0GT0%2BbXCvBOQybML8bCRGoQquubUD5pfMmDC2mqmnIehay5LuK6BjhBp5HpQZECGLqit7xiFW777aHMDSCM2zjXCqkvOU&X-Amz-Signature=8414131f38923a8b1ad4d6dc65b2bcbf07f050613ffe616b947d40f46e00192d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQYNRH3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAtLMFofFMcbzqTL%2Bi%2Ffzyc6o%2Fx9xQQztOHZLQahUejrAiEA%2FpHVyWZgisbVrb2U26c5cmdtYOms3cF5obP5uXMrIRUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDORfdgERMQkQV2KCUSrcA43nLbHJ7Cj6sZDgNN0yg%2BJymgKtGr%2Fd%2BUtv1VOGUF1czvbnd0ETLR68f3towkedRBBgxrm%2Fg%2B6nnFpi3vddPd57VhKIIUbLH%2BNH09PSdhWf1h0T%2BYyk3MGMoNkJ%2ByiCwuF76l5GX9%2B344Rt2zC%2FgJt8xTfqrLU0QllvFyyGnYXIUnDH9fEY4bjTKmDXwE7XFXgycX2J62EN60WS6EQtV6TBkeY6mQU2K%2BU2KdU23crvAwI5Yf4bnrDpx6ECKsX6k4i2rwuZp2VtM48mUC9kYt5BDzRy4FI4TNN2Z%2FrtyteEfVJw84kCwDXIzShuR7evfnR8nrWA%2FI9ra%2B6zfXs3yzSYNFlVxITlsrzY%2BxCdlI%2BQBUl1L7mKtHMoF2FP0E%2FnGGknasgDcUSTOYXxGG%2B9nvPoCMysS%2FO0nLhda4ttoGt0hUsAOPjptZDfH9eWOy%2FfQCwvGNgQtA5M23KOruzOt%2BPLoeeIQRVZfb74JSOSHuUp%2FeKjIBfy5MtLYHFs1MhcbnGbSLWSbge%2FR6OgOBOKCkaSrUmWdgSROwii2bRc4j6ug2inmdlbgFQCf4%2Bnh7wG8erjQEa%2FUw9RANGd0pim%2Bxg%2FFRUjdYQ7xb0Gh0Zj%2BOTFCRGz9mw4IKjKBB3xMIXOiMoGOqUBGY2VnDiSWOf%2BaKNLb6sgOSNuYhkYrctppcHUjH%2F%2FXmsHQAC0RydZvGMzxu1Msnrt7cYvm%2BelmN%2FEvAX7QqGMOpTbhDUvOqq11y7Kl2XR2R5L2N2wwBXRtWTafSVQ5Ur0GT0%2BbXCvBOQybML8bCRGoQquubUD5pfMmDC2mqmnIehay5LuK6BjhBp5HpQZECGLqit7xiFW777aHMDSCM2zjXCqkvOU&X-Amz-Signature=f4a2b6d23a590b429ee594df633f2ac522a3f83377c78d44ad8f23ccfebc3485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
