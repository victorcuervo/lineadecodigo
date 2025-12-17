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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVYR7TNN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECbXGgufhDa%2B2AqALS69n8dd5peWQE7NQ%2B9hlVMDfDUAiEAj%2Fs43LXv2pWkxyCLAQiQXsFmZAxWIxKdTrl5ysQaSqMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHol0iW3qLrCLmA2circA%2ByoqNHDHKnpPOs6s5IUwbNjrek0BTS4N%2Fixoz8g12b5wDdQpTL7P3%2FjaOgkhh75jb1SGnbhU0vJNif947y1WJbHNaS6xZihINgMapTmrzKapi%2Fhwd2EZudRnyMy%2B2%2BxDhhNFwBTJFR3L%2FB3rJ4Ece7v3m6fiOvN33IFyQO1uT5h7mawggDc21IecEurzuYZe8kfKQsTLOAMgpShD9O6gZTLe%2BO8HFeXpejK%2FlH6v4W6x4IZnX9JO86iqW7vJBkoRD3h2iwU68wgcwFGsoWfODtD4fF43nZ3X4BnTRB2CJaCHNIHy%2BaH3KJMlNp6w%2FrbXKhqSRf5mO8GTeSp6cRxLTVR7MUDT3nm%2FgxgTFpQmTV3vPw9jAmktfbJAdHn5PlveB6QcyXcWuLw8wMW37r0IspjTNGC98FQjXgjT4AQVL5J8RDaH9QBH%2B6xRKowWApL%2BLKpBttY8nBO3zKuleMmA4chAYrrmazdAMUOyZs6ImxrI30ZGBgT0TqdA0oGTSj96AlQO8WwZr8hs8Kr%2B8o8JuRuB2EV7FGM2f%2BmqVy1xx1WpNZkX8ijgDtDVcEX2iTEp9D%2BRfTmFwDbWK%2BWJDeq0I7H%2B8OZKhT9BCaVZoPKAfhWhn9eHY%2BUBvFZwb%2BoMLC4icoGOqUBh%2BmGS5w7SqywYtA4%2BpycPf%2BpbckPpfXvQR8Erj%2BPwSFQD4Tq2xiWS90Eocbz6RD0MUGxy7B%2BoUb0x348oM3Q0FoS95HiNX3J2U0N1eZko4uver4J48N0IxHDddHUAp9jFLY1a5sqwveQMPkg%2BFusLL9tWCZf2zKCK2gG4aA7RAxhm21mi%2FcRB5i50JFReAL74QjEPGe9ayx3hfKc6DbJppfPuJb9&X-Amz-Signature=3501b6c6d17702ad2f98432ce564e0faee108098b1505e19c2b54fd6431762b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVYR7TNN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECbXGgufhDa%2B2AqALS69n8dd5peWQE7NQ%2B9hlVMDfDUAiEAj%2Fs43LXv2pWkxyCLAQiQXsFmZAxWIxKdTrl5ysQaSqMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHol0iW3qLrCLmA2circA%2ByoqNHDHKnpPOs6s5IUwbNjrek0BTS4N%2Fixoz8g12b5wDdQpTL7P3%2FjaOgkhh75jb1SGnbhU0vJNif947y1WJbHNaS6xZihINgMapTmrzKapi%2Fhwd2EZudRnyMy%2B2%2BxDhhNFwBTJFR3L%2FB3rJ4Ece7v3m6fiOvN33IFyQO1uT5h7mawggDc21IecEurzuYZe8kfKQsTLOAMgpShD9O6gZTLe%2BO8HFeXpejK%2FlH6v4W6x4IZnX9JO86iqW7vJBkoRD3h2iwU68wgcwFGsoWfODtD4fF43nZ3X4BnTRB2CJaCHNIHy%2BaH3KJMlNp6w%2FrbXKhqSRf5mO8GTeSp6cRxLTVR7MUDT3nm%2FgxgTFpQmTV3vPw9jAmktfbJAdHn5PlveB6QcyXcWuLw8wMW37r0IspjTNGC98FQjXgjT4AQVL5J8RDaH9QBH%2B6xRKowWApL%2BLKpBttY8nBO3zKuleMmA4chAYrrmazdAMUOyZs6ImxrI30ZGBgT0TqdA0oGTSj96AlQO8WwZr8hs8Kr%2B8o8JuRuB2EV7FGM2f%2BmqVy1xx1WpNZkX8ijgDtDVcEX2iTEp9D%2BRfTmFwDbWK%2BWJDeq0I7H%2B8OZKhT9BCaVZoPKAfhWhn9eHY%2BUBvFZwb%2BoMLC4icoGOqUBh%2BmGS5w7SqywYtA4%2BpycPf%2BpbckPpfXvQR8Erj%2BPwSFQD4Tq2xiWS90Eocbz6RD0MUGxy7B%2BoUb0x348oM3Q0FoS95HiNX3J2U0N1eZko4uver4J48N0IxHDddHUAp9jFLY1a5sqwveQMPkg%2BFusLL9tWCZf2zKCK2gG4aA7RAxhm21mi%2FcRB5i50JFReAL74QjEPGe9ayx3hfKc6DbJppfPuJb9&X-Amz-Signature=ec1d30b7c20f0bc2aa7fcdabb2e264b8acbd8ac5e56c878f2e57aa1627c1cafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
