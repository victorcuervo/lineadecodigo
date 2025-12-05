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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHZ2ZKQD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXEApysVL3DilOfV0X9puF8drtZ3agA0KCVJb5CJBzTAiEA%2Bws1wWe3sRs5mDllTqZttA0utcFE2pX099R9iXUM0wsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHixhyZz5Xyf8rKvBCrcAwnFoHvdunCbrlXyFS6mOgruzlDT6pPa1I3dzQY0FCx%2FdF0DsOzl4RUaZR%2FkyAWiFJ9wxgW28Zgflm%2BspB%2F3oYumc2h2EvtROsrRQnU5VpICbqQpbwvZ%2FaQ2HhpwlbRGseTM4PvQ8kq0wrVJ2bhW5B%2Bf8OFBAMZMOhc%2FxWqC6GzLneWjnnjJuayFIsFewC78mmJQ1MwmGynrNBWPGaVKw0Ts%2FoHvnGjHBp2eaklfGcWzdD4iMIirZGit3k%2FKLzB%2BZHC1%2FgarQKRYbw9a8AfyLGS1hr5oaptBn6k1TTuZlTUi8DS%2FCNnR8kR2GgZbBG9zWL9TwtrT1SsToW4YyC00u9nLlAuIxY7mHiMe015hLLPiYuSUVpOZIY1E4ySH%2FGCiTbCorOXdRlKRpkW6DktRRAQaAtGQJwa6aFhBvdz9VZS2lA85pc62jakbNTuEcxXzmcAVeM%2B12BUOY1ocSi3M0F5rv%2Bd1yLPsq74XKvk8ZrWqnHoGeMKnhvyAY2Mq67RX6CVm4RrCuIwwVOBQoBi1jnagYdROecjvhmN4jvlfjki1EEyvKumX0XMztWq8dGWUmVOJpLQptRDCzD5RUJUuxlT%2B8Wq85nQPkO2jUl0SDFGfnkDXY55jOzgJdx0zMJjJyskGOqUBcEX7CQV2HPBoOCS%2FcSdg2WcBGBVCrDF2FYYKr47DN2Qji%2F1z5KNsE0%2BubOr7fs1%2B0UMcUUe7FwzkD5pBWayAYFUoVQnXkQ9PwMCmgDEcpWA7aIMLfm7T6MkeNk8lQ%2BFggo1bCMYrA%2FtKZdFvMyau0MRGnZ%2FPJkuO2wUVXAvdP2EUqqcmvGlo8XQGaL8H9WUK7lsfYqLrf%2BkwHltnL60eIug4aHMr&X-Amz-Signature=107088dabe1c418959251c560605fc105514c77a50b004acbb0df045e92ccb0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHZ2ZKQD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXEApysVL3DilOfV0X9puF8drtZ3agA0KCVJb5CJBzTAiEA%2Bws1wWe3sRs5mDllTqZttA0utcFE2pX099R9iXUM0wsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHixhyZz5Xyf8rKvBCrcAwnFoHvdunCbrlXyFS6mOgruzlDT6pPa1I3dzQY0FCx%2FdF0DsOzl4RUaZR%2FkyAWiFJ9wxgW28Zgflm%2BspB%2F3oYumc2h2EvtROsrRQnU5VpICbqQpbwvZ%2FaQ2HhpwlbRGseTM4PvQ8kq0wrVJ2bhW5B%2Bf8OFBAMZMOhc%2FxWqC6GzLneWjnnjJuayFIsFewC78mmJQ1MwmGynrNBWPGaVKw0Ts%2FoHvnGjHBp2eaklfGcWzdD4iMIirZGit3k%2FKLzB%2BZHC1%2FgarQKRYbw9a8AfyLGS1hr5oaptBn6k1TTuZlTUi8DS%2FCNnR8kR2GgZbBG9zWL9TwtrT1SsToW4YyC00u9nLlAuIxY7mHiMe015hLLPiYuSUVpOZIY1E4ySH%2FGCiTbCorOXdRlKRpkW6DktRRAQaAtGQJwa6aFhBvdz9VZS2lA85pc62jakbNTuEcxXzmcAVeM%2B12BUOY1ocSi3M0F5rv%2Bd1yLPsq74XKvk8ZrWqnHoGeMKnhvyAY2Mq67RX6CVm4RrCuIwwVOBQoBi1jnagYdROecjvhmN4jvlfjki1EEyvKumX0XMztWq8dGWUmVOJpLQptRDCzD5RUJUuxlT%2B8Wq85nQPkO2jUl0SDFGfnkDXY55jOzgJdx0zMJjJyskGOqUBcEX7CQV2HPBoOCS%2FcSdg2WcBGBVCrDF2FYYKr47DN2Qji%2F1z5KNsE0%2BubOr7fs1%2B0UMcUUe7FwzkD5pBWayAYFUoVQnXkQ9PwMCmgDEcpWA7aIMLfm7T6MkeNk8lQ%2BFggo1bCMYrA%2FtKZdFvMyau0MRGnZ%2FPJkuO2wUVXAvdP2EUqqcmvGlo8XQGaL8H9WUK7lsfYqLrf%2BkwHltnL60eIug4aHMr&X-Amz-Signature=051204c1d710dcd1f66a5a0bd2c922026b47fc03d59e4a5adc8b33ab36a6c285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
