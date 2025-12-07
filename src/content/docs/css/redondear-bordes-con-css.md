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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2QX3HRT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmiJhBb9xBUdQA%2BlsrjzRDeEq0AgNyCOiAhp1Y2fiqhwIgYvnAbbjwThPzWvyOVSregB7kkRKX85gLKqOXOct3Av8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSalWt45beBvM7aFCrcA%2B71de5Bx9A07rmztHmaH8rIPt%2Fkhcv0TvPfSg%2BFE%2BUdaDtrBqOlWjOE5PYz3Jcq7rfvjuf1IZnO%2Fs43jsgTJ%2BRBMYvR%2FEfLDdp%2Fe1z66RBKFKloX%2FkRE4c5t%2F5vXs1lxa9F9ztFfaad3NEE1sliA3TFJLtXHaZOmEhz8ARMVHzXPPL5NQtfRZd%2FdmSc4JFliRQM3v269u%2FxPPWlkFWHuW%2BQ8GM8kJ6JnybZr7z%2B2p7JbAJbZwoKBsrmynvjvkN5hm9UAkTRcYH2mweBLWDYyiW1Ov9E9oGYlrsEN%2F4DLw%2FWSO1FvKv09TUXnYZZ5%2FBLBM2k%2FV7gHmTCLDvhXLt1fGkdGLRXHLITuqOhRrO04XyT78n8l8Nx20PRlRtGXSLmV3bKbsyojDw9KctPA6HyLuaXx46TxGS2XyejTRZQQXBnnyW548Lbyt0ub%2B%2B7PPztLXZa%2FN%2FFpYOewu5Cm0uX8AlgPa%2Fsrm1Ttz%2FiS1R7JpdjLOVmR6GxvWPUo8D2nDnIwLB1gCp9IflF1B%2FIcBTVb8DP2NqK0xyytTKp3KPqFPiiq7gPQeZyM7XQGa5%2FqLgKIOqjKSuOYVv4I8%2FziQIx95h516BQAQCvmWKkd%2FkCOdTY%2Bu2yq3roWgYBBNQEMKD90skGOqUB%2F0gJmYJ2hFBG08YkKEerULSNcobeiqLZAuqUghqiP2FYY0iBwe%2BTeYZkVFtSw6nfXX3dqj%2FismmbK7C528%2FOgABE0D2bR679K3phrYZnHlm3XyoCRZ3UHN6ezkTIv%2FcekJ5%2B6h3Yw7ysd5W4mHCorgqunHOsFA1IQ%2FF8ek2No7Y3V4sKQd6tQLPw6zTvDENz3AOB%2F%2FRc2nXVRxA4S8j6TfC13go0&X-Amz-Signature=9a88f02a2a718787b885f71aab10229344956370d6173c86e1d45a8f574f0ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2QX3HRT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmiJhBb9xBUdQA%2BlsrjzRDeEq0AgNyCOiAhp1Y2fiqhwIgYvnAbbjwThPzWvyOVSregB7kkRKX85gLKqOXOct3Av8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSalWt45beBvM7aFCrcA%2B71de5Bx9A07rmztHmaH8rIPt%2Fkhcv0TvPfSg%2BFE%2BUdaDtrBqOlWjOE5PYz3Jcq7rfvjuf1IZnO%2Fs43jsgTJ%2BRBMYvR%2FEfLDdp%2Fe1z66RBKFKloX%2FkRE4c5t%2F5vXs1lxa9F9ztFfaad3NEE1sliA3TFJLtXHaZOmEhz8ARMVHzXPPL5NQtfRZd%2FdmSc4JFliRQM3v269u%2FxPPWlkFWHuW%2BQ8GM8kJ6JnybZr7z%2B2p7JbAJbZwoKBsrmynvjvkN5hm9UAkTRcYH2mweBLWDYyiW1Ov9E9oGYlrsEN%2F4DLw%2FWSO1FvKv09TUXnYZZ5%2FBLBM2k%2FV7gHmTCLDvhXLt1fGkdGLRXHLITuqOhRrO04XyT78n8l8Nx20PRlRtGXSLmV3bKbsyojDw9KctPA6HyLuaXx46TxGS2XyejTRZQQXBnnyW548Lbyt0ub%2B%2B7PPztLXZa%2FN%2FFpYOewu5Cm0uX8AlgPa%2Fsrm1Ttz%2FiS1R7JpdjLOVmR6GxvWPUo8D2nDnIwLB1gCp9IflF1B%2FIcBTVb8DP2NqK0xyytTKp3KPqFPiiq7gPQeZyM7XQGa5%2FqLgKIOqjKSuOYVv4I8%2FziQIx95h516BQAQCvmWKkd%2FkCOdTY%2Bu2yq3roWgYBBNQEMKD90skGOqUB%2F0gJmYJ2hFBG08YkKEerULSNcobeiqLZAuqUghqiP2FYY0iBwe%2BTeYZkVFtSw6nfXX3dqj%2FismmbK7C528%2FOgABE0D2bR679K3phrYZnHlm3XyoCRZ3UHN6ezkTIv%2FcekJ5%2B6h3Yw7ysd5W4mHCorgqunHOsFA1IQ%2FF8ek2No7Y3V4sKQd6tQLPw6zTvDENz3AOB%2F%2FRc2nXVRxA4S8j6TfC13go0&X-Amz-Signature=0d289c25f7796cd9a56ab4eb220317d50a569ee937d58e941795373caf746ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
