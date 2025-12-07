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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHKIMU4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcUY9tElhaZSfEM4tlvFS5dkRELd2RFUFD49flDDNNAIhAO08J85mc0vZGn2mbcZdpfBDU3DV1RrEKZlDfeLuDvM4KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxelli9txZvB79k7w4q3ANJsUXd6ddIoaXCDQ8gDa2hfMQ%2B8Ib774kLq4w4lSHbN2y460jkXDGo723n%2FWMfHdJs9KXICHtSgylrXj9StYbNiV5y%2FUbVPJoZHJFMrdT2xIscBRty4oHBk5ykefJKcG%2BpQmf4LA7xcj5kB0iZATBpFitFJ83HSGIKhHmykLU%2FnPxhFsd5ltqGRJzSHpdRMXmRUYDM9aVSAOzuWKmWtsccU1gd8Xynt6SAB%2BOp4xC9%2Fh7YxgWExfM86jaiCZO2745IjFtDnMyxQM7v1nDFBvZ3WPuMIhl78O%2FbgB35NVPqxiacevuF6TFgc0OablDeBzBuV%2B6QCHrUSBUNpuAffXv4NPIzaShi1w17yAVoHMX7yt%2Fh4vRKac%2FPL8lk3RzKvrwOnDUntp7anyx1IbIKXok9dolVpcAhHXNwSKlmfWNx5Ua2TAlUDNRacEpVRWiJstBorOpe89Ws5obY1brbCyMcOtPCNuD4egLj3bNRVzSKhcp7NAV5wBqD82eckzend0GBNCuORKdSUHT1iDCdme%2BH04KQ2SvqH%2BDx%2FCU2KGys1XIuyH2rIHzohtdahi7Wp81yg3Obk195TaKpAarR%2FM16ZIDe3P%2FLQ7VortihOJ19oCtP03Ul21HALZCrxDCTo9TJBjqkAZJyLUt59AykCSUT8o%2FzikQBHiT7VfP4HjX%2BCRJkWm507CeARf%2FuYOre5HXN8Zh24WV2MY4OOYxpHETT1Sw7T87I3%2FejSjjesYtiSvb1bWvNlNtanKdOFEbnqKbU58hQJ22e%2B%2BVyD6PvWfKgNNT6jjrb5wpETLwleiEUf%2FA7hZ8Un%2BsicnklGArR%2FeolwM4gyR1LZO%2BVFlGOd1EyuBGVexgDyBtI&X-Amz-Signature=ff97a02b519b9c23071d5ec6ffac372f8957b41d164317be9b999ee230ee93cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHKIMU4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGcUY9tElhaZSfEM4tlvFS5dkRELd2RFUFD49flDDNNAIhAO08J85mc0vZGn2mbcZdpfBDU3DV1RrEKZlDfeLuDvM4KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxelli9txZvB79k7w4q3ANJsUXd6ddIoaXCDQ8gDa2hfMQ%2B8Ib774kLq4w4lSHbN2y460jkXDGo723n%2FWMfHdJs9KXICHtSgylrXj9StYbNiV5y%2FUbVPJoZHJFMrdT2xIscBRty4oHBk5ykefJKcG%2BpQmf4LA7xcj5kB0iZATBpFitFJ83HSGIKhHmykLU%2FnPxhFsd5ltqGRJzSHpdRMXmRUYDM9aVSAOzuWKmWtsccU1gd8Xynt6SAB%2BOp4xC9%2Fh7YxgWExfM86jaiCZO2745IjFtDnMyxQM7v1nDFBvZ3WPuMIhl78O%2FbgB35NVPqxiacevuF6TFgc0OablDeBzBuV%2B6QCHrUSBUNpuAffXv4NPIzaShi1w17yAVoHMX7yt%2Fh4vRKac%2FPL8lk3RzKvrwOnDUntp7anyx1IbIKXok9dolVpcAhHXNwSKlmfWNx5Ua2TAlUDNRacEpVRWiJstBorOpe89Ws5obY1brbCyMcOtPCNuD4egLj3bNRVzSKhcp7NAV5wBqD82eckzend0GBNCuORKdSUHT1iDCdme%2BH04KQ2SvqH%2BDx%2FCU2KGys1XIuyH2rIHzohtdahi7Wp81yg3Obk195TaKpAarR%2FM16ZIDe3P%2FLQ7VortihOJ19oCtP03Ul21HALZCrxDCTo9TJBjqkAZJyLUt59AykCSUT8o%2FzikQBHiT7VfP4HjX%2BCRJkWm507CeARf%2FuYOre5HXN8Zh24WV2MY4OOYxpHETT1Sw7T87I3%2FejSjjesYtiSvb1bWvNlNtanKdOFEbnqKbU58hQJ22e%2B%2BVyD6PvWfKgNNT6jjrb5wpETLwleiEUf%2FA7hZ8Un%2BsicnklGArR%2FeolwM4gyR1LZO%2BVFlGOd1EyuBGVexgDyBtI&X-Amz-Signature=7af2665a61547a77dec199e2db54a23ebcd0ac9124496f23afe5a04e4b4198d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
