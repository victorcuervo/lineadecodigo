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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSL3R7XA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWm7je0Ssf3Lhs1Iw8b9mtcG9GjB5idGUz4kkPezN5gAiAYOnhLJbAuztPNNuE%2B%2FPdA2i%2FHJjWWRveBiGi2TBnovCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw8iJBMnxyfkF%2BB80KtwD8uuYDCkqZKTaNyjiZd36sCx4kaQSRrrwIrMzyZUMYbonQaLWsAXMPjQaKroSzVk1TNYUb4iWR5fJKnBWNKOhX1QcTCrYs48jtSMbxlE%2BcJRSvwVBn6%2F2CEmaoSM1rK5Nr9fIucATND0w%2BgtG6j4vvYhvst9Ye1t1vBiXCyHbxPEQGFP%2F5MNQMIvZeYyK5qOzqfg1RWWBW88X6ZTBiDPcY%2FVR9TzolW0AIyml6N5N5yfxjx38N3mgzEPcFm5wI2Vnp9cTd2J6g64mQHOcP3PGAlRj8vX%2FYHjdNIMUGggWWNhfKDbG%2BS3J6Lvh5iICQc2W%2BOmoaaeE2MTuQlumKp92E4TrLZWzPiuQAk6WAn5%2FueT2Nw2sM%2BW4E8aW5OJn2cAVJjqnBqjxAVmAa5AcWh1dDvBnNdtTP09vnyfySsaDd238haYbbj80ndRHhSn%2B%2BsqfYUfLVPfN3WJlvVnij9nQ%2BSX3BTVjvwfjkiMiVASz0thmG%2FYzZrukS3K3bDO%2F8njXcqfhBoPIZuw3A7LXea6niClnCKh8fn%2FcP9c%2FJiWnbR0WJpYL0R%2BLGaeNJ9qP79HXL8BhpKspSngJfHqV0BsH2cllX%2F62TqWTEe5vPJmhI5rAcdULY0Xj%2Bfw%2F5aMwyqCLygY6pgHDpFcaVtLCl%2FQaO4Sn4arimxrV%2BjdFB96nGwAF7X%2FBHH7CF8aJ%2FG1kF7pIjdRhBNV6sgfLwNNtDjOqXWMYpzxiZRCABQ5yXa%2FjCxM5dswKGp09cVHufzCzvEhdzNCBFho488EmA4rTGeRTNcA%2BVDglOIzqLpGC5FxR8IpsDU%2F0aTCIaiTALW8ImmHnicDKhJ%2BeAqCREShQYOzLgq5vZf9c0XiXamuU&X-Amz-Signature=76391573055d3ab888186c2166c720a35706ae7f53b8b825a85e160a8d8e1a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSL3R7XA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWm7je0Ssf3Lhs1Iw8b9mtcG9GjB5idGUz4kkPezN5gAiAYOnhLJbAuztPNNuE%2B%2FPdA2i%2FHJjWWRveBiGi2TBnovCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw8iJBMnxyfkF%2BB80KtwD8uuYDCkqZKTaNyjiZd36sCx4kaQSRrrwIrMzyZUMYbonQaLWsAXMPjQaKroSzVk1TNYUb4iWR5fJKnBWNKOhX1QcTCrYs48jtSMbxlE%2BcJRSvwVBn6%2F2CEmaoSM1rK5Nr9fIucATND0w%2BgtG6j4vvYhvst9Ye1t1vBiXCyHbxPEQGFP%2F5MNQMIvZeYyK5qOzqfg1RWWBW88X6ZTBiDPcY%2FVR9TzolW0AIyml6N5N5yfxjx38N3mgzEPcFm5wI2Vnp9cTd2J6g64mQHOcP3PGAlRj8vX%2FYHjdNIMUGggWWNhfKDbG%2BS3J6Lvh5iICQc2W%2BOmoaaeE2MTuQlumKp92E4TrLZWzPiuQAk6WAn5%2FueT2Nw2sM%2BW4E8aW5OJn2cAVJjqnBqjxAVmAa5AcWh1dDvBnNdtTP09vnyfySsaDd238haYbbj80ndRHhSn%2B%2BsqfYUfLVPfN3WJlvVnij9nQ%2BSX3BTVjvwfjkiMiVASz0thmG%2FYzZrukS3K3bDO%2F8njXcqfhBoPIZuw3A7LXea6niClnCKh8fn%2FcP9c%2FJiWnbR0WJpYL0R%2BLGaeNJ9qP79HXL8BhpKspSngJfHqV0BsH2cllX%2F62TqWTEe5vPJmhI5rAcdULY0Xj%2Bfw%2F5aMwyqCLygY6pgHDpFcaVtLCl%2FQaO4Sn4arimxrV%2BjdFB96nGwAF7X%2FBHH7CF8aJ%2FG1kF7pIjdRhBNV6sgfLwNNtDjOqXWMYpzxiZRCABQ5yXa%2FjCxM5dswKGp09cVHufzCzvEhdzNCBFho488EmA4rTGeRTNcA%2BVDglOIzqLpGC5FxR8IpsDU%2F0aTCIaiTALW8ImmHnicDKhJ%2BeAqCREShQYOzLgq5vZf9c0XiXamuU&X-Amz-Signature=66e5cc3c89dbffb3ff79cd77753050bca35c9118c2be018fe4a2c83aaf723f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
