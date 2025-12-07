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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM5WPMXY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMv7%2FAduEn5yX4MjuGvkdHH7vUVkPZ%2FZnF99BBDrdXDAiEAzXEI0%2Binrt5aT3%2BjgPoWk%2FixNrvBHzaJbAo9O6mIhq8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2V06ZF8se9%2FGUsaCrcA%2BY6LcaY%2FqDiBnBLajegwTzfMAgPkk5VZvYnBj8Txmvfq0FKCsCJHZ2i57SMmOneW2SwzTmOTzrF1ybcEkaj%2Bcm3CmBx3FtT3ROGRlyykoAF2UsKDaDrRoYTGlWZ4jXvZKEfRJDasRsRZwfftLzfwvRtadVOQTQmHjp0jn9zocAH9oXn%2B5CSeymX%2F%2BmZKywIPD9ZDwbVI7FUi6J81R6OTzr1HL3HrckKtxoeIH%2FtsvjdH0CNof7SzepmnblRpaxx4ZemCvHMplENYXehh%2F07XP%2BzhhiBUJnjKTK0c5ClaLLPa8UVdHX2MvodP0BSXhaYJDHJKDz68tZkFl0an4MXyCIQ4OPLmQLd%2FdjQ0wXp1hnXkyzbBxGcH1%2Fnc6a2Kr19jDrXmyZh9Q8OfqUudOmUXzoLIjJ%2F7lVPpqx8v0ZyiNK2ViKoQic4F%2FfQ1SN%2B12W2SrJx0JEK%2Fb5EErz4FYaPQt9TuH61I64X1CQ2NrsY20SeWZncBqjfhDtF7o0ZfoRTDgIQDiBhbjkGO%2FJLSwVmv4xpg%2B%2FmfQQGzCi64CwUB7Dls2DOSM2omift%2BlAdPMWgCUXkzLKp58TgCSCx8KC9iiuZe7C%2BUe04RnoqtTEk%2BABsm8fxR6gsrvnEbw7qMKKa1ckGOqUBscprKq7xAcrTAbWwmlZERv2TLmxoCfkPtCKOwv6kFRJNLMPOz17cl%2FF9SlTLr02F7Ro22F4NZTWKsdZGOgrIla0AEJkRdjbFYaXeA5ZwtxrO0o40E7VfSGyM5A3Y%2BkP5TtSvM39PZTy06PKjeQhmOFCjlnVRS51PFdsWHr46MN7OqRbY%2F0jEypZASlaEescxWp1o0DkvgelcS1GKN8UKIO9tijzC&X-Amz-Signature=31de908c8726c085d87064c4398d30b3ebc4570ac6c83dd2afca64b4cdddbce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM5WPMXY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMv7%2FAduEn5yX4MjuGvkdHH7vUVkPZ%2FZnF99BBDrdXDAiEAzXEI0%2Binrt5aT3%2BjgPoWk%2FixNrvBHzaJbAo9O6mIhq8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2V06ZF8se9%2FGUsaCrcA%2BY6LcaY%2FqDiBnBLajegwTzfMAgPkk5VZvYnBj8Txmvfq0FKCsCJHZ2i57SMmOneW2SwzTmOTzrF1ybcEkaj%2Bcm3CmBx3FtT3ROGRlyykoAF2UsKDaDrRoYTGlWZ4jXvZKEfRJDasRsRZwfftLzfwvRtadVOQTQmHjp0jn9zocAH9oXn%2B5CSeymX%2F%2BmZKywIPD9ZDwbVI7FUi6J81R6OTzr1HL3HrckKtxoeIH%2FtsvjdH0CNof7SzepmnblRpaxx4ZemCvHMplENYXehh%2F07XP%2BzhhiBUJnjKTK0c5ClaLLPa8UVdHX2MvodP0BSXhaYJDHJKDz68tZkFl0an4MXyCIQ4OPLmQLd%2FdjQ0wXp1hnXkyzbBxGcH1%2Fnc6a2Kr19jDrXmyZh9Q8OfqUudOmUXzoLIjJ%2F7lVPpqx8v0ZyiNK2ViKoQic4F%2FfQ1SN%2B12W2SrJx0JEK%2Fb5EErz4FYaPQt9TuH61I64X1CQ2NrsY20SeWZncBqjfhDtF7o0ZfoRTDgIQDiBhbjkGO%2FJLSwVmv4xpg%2B%2FmfQQGzCi64CwUB7Dls2DOSM2omift%2BlAdPMWgCUXkzLKp58TgCSCx8KC9iiuZe7C%2BUe04RnoqtTEk%2BABsm8fxR6gsrvnEbw7qMKKa1ckGOqUBscprKq7xAcrTAbWwmlZERv2TLmxoCfkPtCKOwv6kFRJNLMPOz17cl%2FF9SlTLr02F7Ro22F4NZTWKsdZGOgrIla0AEJkRdjbFYaXeA5ZwtxrO0o40E7VfSGyM5A3Y%2BkP5TtSvM39PZTy06PKjeQhmOFCjlnVRS51PFdsWHr46MN7OqRbY%2F0jEypZASlaEescxWp1o0DkvgelcS1GKN8UKIO9tijzC&X-Amz-Signature=148da0212953a50dcb9a6304d7de45a7f697581b3ae2599753545c167cd5c9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
