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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVDRITA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKwIRJ96S8oLI%2Bt1WxgBoF2UtR3NlZ2iyEvvPvCA7gLAiEAj6haG1bR%2BWqPaHoNfPLjp4FwW2T78oia%2BWCYChydMO0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHCajik586mWj%2BujyrcAyMULKI9XGxk8cYaflVHrZhDvEVG5L1x2bCk1LSC80q07wMFU51k9C0H4fFgrh5CqqFIA5HUdpjCI%2BIc1RQlltly8Qj%2F%2FBxXAIdfcXJr7hs4acxvpONn84F%2F6PX%2BnX9mm18pXSiEuSShOnzAlHKaay3pfPRc4RZVGEjIgTjsPRMgOWqSobB5eoTmcW5yijWwWaITUbaZqqTDx2us%2BjHXcDyQZNw9pz50pPH%2FQtK0gKswQM%2B0NXQzgC0es3q6zAIa%2F%2Fwa5Rad5d0ODL2Mt%2BwbUuJAtOGd77fwTwikDC71R4i83Km33LKWoPuw%2FWn9J3EvFIpVRC%2BqWdevo%2BKW8zQHd%2Burs%2F6TPTTeeWO2Ogr0EXr%2Bu2FwqRMBpC3STO5%2FrWTZz0bjbkYrCWo%2Fazdn59Q%2BtG5%2FplNiGC%2BkCvNR4oNd1Zsdke3rjgpn5L45yf1T91LYI6Wgdp9sSi1ltE3QnMXB3btdInVImAb77aYyYBKsCdWHNOvwFP%2BmX4oTMfsP4LwSIVi8ETzVka2imnEZrCja7xVNDUxc6FfFMjRJid7OSRuo9A%2FXqHJbKUewfi17Ar1xcUO8ZegvgiMFpObIpvCZv8zo%2BG86hzWdLbD5mz7GuZTmRsn1%2FM1mjsnxQc0fMML%2B0skGOqUB0Dcn7CES5TTdytLHLIfXf0U4BrOjzJP6GFlo4TD5KnbUdfSlk%2Bwvs73dyNoCZ2XvZSXtrp0UGTfC0rlTkZD5MCrZtDEuo3do6cjyTyGY0HXuo073ru44MHvOyInCP31G%2BFOqPqDq9rh29ylj8Mfkhx3kJQNsO95P5QecSqCqbraLko8%2BscepEd%2FYCY6pRga6wJvP9WrEeCcuAOhPOTUHP4axd9TA&X-Amz-Signature=596cac989bb598a9eb74811bc945263c3c1f1e362e664b2df1075fd712041d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVDRITA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKwIRJ96S8oLI%2Bt1WxgBoF2UtR3NlZ2iyEvvPvCA7gLAiEAj6haG1bR%2BWqPaHoNfPLjp4FwW2T78oia%2BWCYChydMO0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHCajik586mWj%2BujyrcAyMULKI9XGxk8cYaflVHrZhDvEVG5L1x2bCk1LSC80q07wMFU51k9C0H4fFgrh5CqqFIA5HUdpjCI%2BIc1RQlltly8Qj%2F%2FBxXAIdfcXJr7hs4acxvpONn84F%2F6PX%2BnX9mm18pXSiEuSShOnzAlHKaay3pfPRc4RZVGEjIgTjsPRMgOWqSobB5eoTmcW5yijWwWaITUbaZqqTDx2us%2BjHXcDyQZNw9pz50pPH%2FQtK0gKswQM%2B0NXQzgC0es3q6zAIa%2F%2Fwa5Rad5d0ODL2Mt%2BwbUuJAtOGd77fwTwikDC71R4i83Km33LKWoPuw%2FWn9J3EvFIpVRC%2BqWdevo%2BKW8zQHd%2Burs%2F6TPTTeeWO2Ogr0EXr%2Bu2FwqRMBpC3STO5%2FrWTZz0bjbkYrCWo%2Fazdn59Q%2BtG5%2FplNiGC%2BkCvNR4oNd1Zsdke3rjgpn5L45yf1T91LYI6Wgdp9sSi1ltE3QnMXB3btdInVImAb77aYyYBKsCdWHNOvwFP%2BmX4oTMfsP4LwSIVi8ETzVka2imnEZrCja7xVNDUxc6FfFMjRJid7OSRuo9A%2FXqHJbKUewfi17Ar1xcUO8ZegvgiMFpObIpvCZv8zo%2BG86hzWdLbD5mz7GuZTmRsn1%2FM1mjsnxQc0fMML%2B0skGOqUB0Dcn7CES5TTdytLHLIfXf0U4BrOjzJP6GFlo4TD5KnbUdfSlk%2Bwvs73dyNoCZ2XvZSXtrp0UGTfC0rlTkZD5MCrZtDEuo3do6cjyTyGY0HXuo073ru44MHvOyInCP31G%2BFOqPqDq9rh29ylj8Mfkhx3kJQNsO95P5QecSqCqbraLko8%2BscepEd%2FYCY6pRga6wJvP9WrEeCcuAOhPOTUHP4axd9TA&X-Amz-Signature=b9f82d21659fa7ecc4f2e9ff50fd0fb2e812d289fcc24c99920a0fc455b604da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
