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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FIKKUNP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQlv3KKRnYoyzIqmKYczKxq7EP2QADPdcwzMH4cHTI7AiEA6WYRAn%2BJcsIRaW2gq%2FHs3hycHu7kgfRPitP1NefLjKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1xfX9Uu2seYjFGnyrcA7qW4pX%2FEhnudpjsfrca6L1ShquuDK%2BF%2FwKALwhdNJiF4wKn30XJv0r63bniJ2%2FzDKwAAtC8RETsSWwSiAPImQZX47D6C7H44%2F5bmH9ZMCenL9DOEc8AkIZbivY8sQbG8WxgXREFwWjyL0py9hrG53Kt4feI512RSF18i4R838xXTCZHfLcLEDBphZzU%2FMPMk02lXX5%2FMPIaHlPuTkaAafZpRfPjzHyYI%2FyLEM3zN40NkKoRAdC6uxZIQT0LeBvtjtsxZj2VHwD5Oj8dtEF9B9E31xw3ALU3NZIQ%2FhSGuYv53S4yHfUREBgh47wH2hEXfpPCfShe3xdfco8z6OGKM49MdxudcZAkwAVaJWBcMhZh0yS4XKZB%2Bd%2BtPmSGDLn2kDh%2Bm99%2B6X3VxaII2DBb6r7nEO440giDx9IDsXpn2Ugq1lNuqAtJsLs0QcoKCTX3gZSjq3UKfmGEizR3b67EDnOAP2FkCDpTqx3pQBXJ03f%2FsRQ0YFIHasugeVZLsRYvVQmVzvgmXZtubILGflVSls1A1L5Wbnt11AlQZggJWAk5QAB6k7hx46A0LCSxv8PIP0NjPBvVdF1YmfRPySZZzyzC5WsH9n1P1roYREwVDGwJuTYGEaV3wTcB%2FzCpMIq02ckGOqUB9Vmuq52R4U7Y%2BkyBzLysVu8QTKpwfTuX4CRmI77JrfUVJD4CkjBbZ3DcWTP4D%2BYucU5ubqOJvCZHN6AcSHdEWukz2rBxL3XQ8zXTv71SK1rHc%2Bdr4%2FbXLByjqIcLM%2Bwo9aAVc1khscgIZ%2FtyEVpi6G4qpgA%2FamNUhEuQe8VeUweonT9bwUhsV4CPfo4%2BUuWKd8VxIw2rwVHg8%2BHbpdee%2Fk%2FjYFWA&X-Amz-Signature=4e8d488e952df7ca01a4da52c7147327c5d5475840bb94a37c4efb02541a5a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FIKKUNP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQlv3KKRnYoyzIqmKYczKxq7EP2QADPdcwzMH4cHTI7AiEA6WYRAn%2BJcsIRaW2gq%2FHs3hycHu7kgfRPitP1NefLjKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1xfX9Uu2seYjFGnyrcA7qW4pX%2FEhnudpjsfrca6L1ShquuDK%2BF%2FwKALwhdNJiF4wKn30XJv0r63bniJ2%2FzDKwAAtC8RETsSWwSiAPImQZX47D6C7H44%2F5bmH9ZMCenL9DOEc8AkIZbivY8sQbG8WxgXREFwWjyL0py9hrG53Kt4feI512RSF18i4R838xXTCZHfLcLEDBphZzU%2FMPMk02lXX5%2FMPIaHlPuTkaAafZpRfPjzHyYI%2FyLEM3zN40NkKoRAdC6uxZIQT0LeBvtjtsxZj2VHwD5Oj8dtEF9B9E31xw3ALU3NZIQ%2FhSGuYv53S4yHfUREBgh47wH2hEXfpPCfShe3xdfco8z6OGKM49MdxudcZAkwAVaJWBcMhZh0yS4XKZB%2Bd%2BtPmSGDLn2kDh%2Bm99%2B6X3VxaII2DBb6r7nEO440giDx9IDsXpn2Ugq1lNuqAtJsLs0QcoKCTX3gZSjq3UKfmGEizR3b67EDnOAP2FkCDpTqx3pQBXJ03f%2FsRQ0YFIHasugeVZLsRYvVQmVzvgmXZtubILGflVSls1A1L5Wbnt11AlQZggJWAk5QAB6k7hx46A0LCSxv8PIP0NjPBvVdF1YmfRPySZZzyzC5WsH9n1P1roYREwVDGwJuTYGEaV3wTcB%2FzCpMIq02ckGOqUB9Vmuq52R4U7Y%2BkyBzLysVu8QTKpwfTuX4CRmI77JrfUVJD4CkjBbZ3DcWTP4D%2BYucU5ubqOJvCZHN6AcSHdEWukz2rBxL3XQ8zXTv71SK1rHc%2Bdr4%2FbXLByjqIcLM%2Bwo9aAVc1khscgIZ%2FtyEVpi6G4qpgA%2FamNUhEuQe8VeUweonT9bwUhsV4CPfo4%2BUuWKd8VxIw2rwVHg8%2BHbpdee%2Fk%2FjYFWA&X-Amz-Signature=2239f55c80d78012ea947581aa486b2a49f8e7a2e1d950ae0653a49225c3945e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
