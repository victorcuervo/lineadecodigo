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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ON6SN42%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTwya8C900ig7fq62k8YHcx5uM6c3S8K52xCPxYSD16AIgRAlg2Ue50pREB27pJbM5lsyUXgrCGAVS7v3tT9UZr%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPfCQIkzUupOyiugAircA7segMsTQ6P6CrXzECb%2FC4qCwNY7G%2BGUCplx5hkEzQP2ci3fC1sDTEQ%2BmrKMf3LSg3qQWU%2BDUebgMSonP5Oj5h7VmlFBcfb%2BlJCO7K1oyOhMSM%2FocsFrsVnRSQM90L7OsnlHxwwN5T8UPDic6vXwEOgZWo5mzzBadQdAbQ%2FhItERGo8a8y%2Fb01HTGTPUt3NGFz3j9w67l0bDfhiYjxIluEisaVkUZSzGdQPba7yCAHSn%2FFStWMatipT%2FR3A%2BFLOtA6PB%2BDVdgi494w7La1HhYqmmq8GGnJBcMzd2HgiQb4VCsM1k7g1AaCdeP5LDjWriLLYdMa9lCcYQ1j0Ow2B3appoa7cE3gwuZ%2FAr2A9oFI6Sw5nhfXmhMWIqPk%2BEDbY1KSrNxxQ6LWCKhc%2F5jUbvgiroXOm8VFZnebdJ4BK1v%2FmP1mp%2BviZztJ0YCIq2KrxQ%2Fzop8ES6YbzwOqY%2Fm3VLlx207eN4HYy7cQ3p5QHAcWFPIhJUUw9lz7NKobK7uAS9qIy1QuriA5QLLN27FyucDlReTLzEptWojTXrkvSRSFPTDmwHhI2qp5MK1u%2B16HaIlEyBngw3aPrTNGAWBDW4%2BBgdA0trY0PYpApWBxPovJ5e1hKmhSOmIdPNSAGoMI%2FpiMoGOqUBuz8Yzgff8G5vr%2F9o355%2BQi8tx4YLSo6ATDGzAjbdxo%2Bl5J3tMBH4PnOT0Iaa7gqOW58thtsi9mFJa21k%2FkeU3cIwmgVrk4XGc8NMwrIEbap2w75UV%2Bn%2F5tlfc%2BbxhtCpu0FtGA3%2B7lhI89RLcExQ9VExH13b7NJLPU1a4KFJm6%2Fo6P05JTk4HzJJRYJi2yWV2OkINvDl3yzW%2FmDN85uvVF%2FiSHkF&X-Amz-Signature=6b190035eb33408f18b3131d8d4ca98df3ceb37457c9672e49c009f9808b7e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ON6SN42%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTwya8C900ig7fq62k8YHcx5uM6c3S8K52xCPxYSD16AIgRAlg2Ue50pREB27pJbM5lsyUXgrCGAVS7v3tT9UZr%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPfCQIkzUupOyiugAircA7segMsTQ6P6CrXzECb%2FC4qCwNY7G%2BGUCplx5hkEzQP2ci3fC1sDTEQ%2BmrKMf3LSg3qQWU%2BDUebgMSonP5Oj5h7VmlFBcfb%2BlJCO7K1oyOhMSM%2FocsFrsVnRSQM90L7OsnlHxwwN5T8UPDic6vXwEOgZWo5mzzBadQdAbQ%2FhItERGo8a8y%2Fb01HTGTPUt3NGFz3j9w67l0bDfhiYjxIluEisaVkUZSzGdQPba7yCAHSn%2FFStWMatipT%2FR3A%2BFLOtA6PB%2BDVdgi494w7La1HhYqmmq8GGnJBcMzd2HgiQb4VCsM1k7g1AaCdeP5LDjWriLLYdMa9lCcYQ1j0Ow2B3appoa7cE3gwuZ%2FAr2A9oFI6Sw5nhfXmhMWIqPk%2BEDbY1KSrNxxQ6LWCKhc%2F5jUbvgiroXOm8VFZnebdJ4BK1v%2FmP1mp%2BviZztJ0YCIq2KrxQ%2Fzop8ES6YbzwOqY%2Fm3VLlx207eN4HYy7cQ3p5QHAcWFPIhJUUw9lz7NKobK7uAS9qIy1QuriA5QLLN27FyucDlReTLzEptWojTXrkvSRSFPTDmwHhI2qp5MK1u%2B16HaIlEyBngw3aPrTNGAWBDW4%2BBgdA0trY0PYpApWBxPovJ5e1hKmhSOmIdPNSAGoMI%2FpiMoGOqUBuz8Yzgff8G5vr%2F9o355%2BQi8tx4YLSo6ATDGzAjbdxo%2Bl5J3tMBH4PnOT0Iaa7gqOW58thtsi9mFJa21k%2FkeU3cIwmgVrk4XGc8NMwrIEbap2w75UV%2Bn%2F5tlfc%2BbxhtCpu0FtGA3%2B7lhI89RLcExQ9VExH13b7NJLPU1a4KFJm6%2Fo6P05JTk4HzJJRYJi2yWV2OkINvDl3yzW%2FmDN85uvVF%2FiSHkF&X-Amz-Signature=6a6843b1a83a579f5e4a1c3af3143b8c7d4365463c89642be1c12816ab5c5c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
