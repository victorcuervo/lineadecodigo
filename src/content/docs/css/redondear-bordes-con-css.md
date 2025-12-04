---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MO2MLOK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAvQ02OOScYTZpWdtjNcNX14cYMYg33peIIdPaAWex3PAiA%2F9CQ4WCKideccy1Tr%2FShn21%2BVFD8%2BEF4J5tFKsj9aFCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMMKsioLP0dcgNVFYzKtwD6uTWDTl1idEswfWQfW9%2BL8etu%2BYqdwCBotK7q4qeWmlHkuf0yjv0q7j1tnRD9kymCt27%2F90BUSRaNy3SIFjA%2FHpN21NRBep8LOOX9IgAKZUTCqMa5G%2FwWBy6jp7XBT1HczTiL0XP0iWv7iKB2B51W8TxdkeUxMjgRq5wQ5J%2Fg7UQyal85X5mXLPm2D1A3BpgRt%2BiRT25hfCjU%2FXLn7cAOx0XEKkuqD6NhMAIbuDMMpkjyrutz17aA8fyn%2FIgUUufnS5wZNfN6iFkDcwb%2FYqi%2FRrNWEM4%2BRGHfi66Jv0Eo%2B392eYKPLYLheU3b5yFOF7q2298NSSTe2LZJ9y9yivSnRRDbc6DdJUigXHV3no5FDtRKlZ5mvp1SBClT4%2Fnbpq544Y4z5yL8txRjXXsKuWmLKPAk52d42NRjPii6nIhacNlr7pxBo%2BS2K3Of%2BfwL55cvXoI%2FFDliHV9PV%2BQfz8PSCzc07lwIsRhw%2BMyNPbXlYK%2FHIPeuncSRDAKDP0Z3IHcAewlDcBpV6v2dzR%2FoqP7MHiDDUAzmZrz%2F3UbxQ0pQx2bf9N5ANRtN5hAD%2FVeXAJN3z7WHS0fb2xrMWNXTylDsWfBlAzrFIfu4ZmbtybyyM1tfiwSuBJCnFfTYUcwy%2FLDyQY6pgFwmnNMD%2Fzactun9agXMJXYPqSEg2Qt5bUENFsMj48y6F15WmgBjT9T3y3Co%2FMkyTv6if8%2Brjo%2BnJxo8pRi4q1nJWBUi5NavDt8m5triZvbfWgoNFm57dOzv9eBbymSLXdxTw0yuiUQm9rjGbSAKHXJ99JxZlWvRTHzzQdRVxu84XZ294UmxLhyiqOa1m0KYFfsfXoDXf%2Fbnwj8LVxSpTUlI3g9deq6&X-Amz-Signature=2d0905e289142ba77ee184e79c2c1333ebe241f029c379da3b5290a5cdb6bbc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MO2MLOK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAvQ02OOScYTZpWdtjNcNX14cYMYg33peIIdPaAWex3PAiA%2F9CQ4WCKideccy1Tr%2FShn21%2BVFD8%2BEF4J5tFKsj9aFCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMMKsioLP0dcgNVFYzKtwD6uTWDTl1idEswfWQfW9%2BL8etu%2BYqdwCBotK7q4qeWmlHkuf0yjv0q7j1tnRD9kymCt27%2F90BUSRaNy3SIFjA%2FHpN21NRBep8LOOX9IgAKZUTCqMa5G%2FwWBy6jp7XBT1HczTiL0XP0iWv7iKB2B51W8TxdkeUxMjgRq5wQ5J%2Fg7UQyal85X5mXLPm2D1A3BpgRt%2BiRT25hfCjU%2FXLn7cAOx0XEKkuqD6NhMAIbuDMMpkjyrutz17aA8fyn%2FIgUUufnS5wZNfN6iFkDcwb%2FYqi%2FRrNWEM4%2BRGHfi66Jv0Eo%2B392eYKPLYLheU3b5yFOF7q2298NSSTe2LZJ9y9yivSnRRDbc6DdJUigXHV3no5FDtRKlZ5mvp1SBClT4%2Fnbpq544Y4z5yL8txRjXXsKuWmLKPAk52d42NRjPii6nIhacNlr7pxBo%2BS2K3Of%2BfwL55cvXoI%2FFDliHV9PV%2BQfz8PSCzc07lwIsRhw%2BMyNPbXlYK%2FHIPeuncSRDAKDP0Z3IHcAewlDcBpV6v2dzR%2FoqP7MHiDDUAzmZrz%2F3UbxQ0pQx2bf9N5ANRtN5hAD%2FVeXAJN3z7WHS0fb2xrMWNXTylDsWfBlAzrFIfu4ZmbtybyyM1tfiwSuBJCnFfTYUcwy%2FLDyQY6pgFwmnNMD%2Fzactun9agXMJXYPqSEg2Qt5bUENFsMj48y6F15WmgBjT9T3y3Co%2FMkyTv6if8%2Brjo%2BnJxo8pRi4q1nJWBUi5NavDt8m5triZvbfWgoNFm57dOzv9eBbymSLXdxTw0yuiUQm9rjGbSAKHXJ99JxZlWvRTHzzQdRVxu84XZ294UmxLhyiqOa1m0KYFfsfXoDXf%2Fbnwj8LVxSpTUlI3g9deq6&X-Amz-Signature=f42e61d7c04ff64877e2b36fd5742df5d7ac1fba0b69a54459d1a8745542f032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
