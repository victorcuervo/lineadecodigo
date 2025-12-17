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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOZAFHK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChgiaTqEc4iJsk639pVLWEPWYhSQjk0dk%2B2JQJBO%2FwkAIgLnfKwJg1zrjk5O5Qb3md%2BTq6d5HBBI8t9ux3FYsc0Y8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNkknMHnrx5S5j17FSrcA4dReyFoyocD7dQ4F4OapnMlMTXGxOcCwvEUlvljm78%2Bj%2BvLui9A%2B9nRpL4g6Tci%2B5yuGMUuBmBiPoMpdNHjcNItZqisXiOQk85hmnz8L78nuAzR2AGGsLtuHVA7AyP6JPm5WVmVBxsEdKzdOB0asGJ7N25MqgYy2EThxo9vvDBphXG7dvjefdIGxVXLyFGEsPB%2BOvVkYRwLyhqfy5jPZ%2F1zdgRk74eHjSCJLjjhFngqFBpbQ9YvHn4bK24MkcOB0kXZnWwGHZ7igA0I6N2Cz2OlhrgwN75rlTH%2FIUHTMtzbJJPMsafQ4FLK0r0KtBb6Td2Ct99MqjdOqyO2z2qRoBT2TZriLVp1h6oXP5IKtspv9DWVDsIdLkBT8a4WD7Mz%2Ba7jYYa4KrjUyKG4ELJjyuIG1wlSeHeoNbrJsXmE%2BMjj%2FSfJsAvnrs0pYEjS%2Bp9Y0GPKspVNvoMwliWbUFRgLKVNX%2FGK0SdGWAzQaxb9lDbqink7fhNj2hJIcLYzXnt2He0wds5Xas77omOPzZEkGAdaaXgao41FEYkvQt5cHSQenESDeyzg%2BAaJtCqvgGk9DtFNc7EoqcXS%2BZ9TSBbLe1s0r88QTFy9qc04QViugkW48ae%2FprfHdx7iLmVWMJKXiMoGOqUBAEv%2Bc0%2FQ7ABr%2Fcdb6m9vD47BhLjp%2FF7Q5dT8WrJn6tTlxfoVotkI1KWfUSvm3SvtdiZZCDbMOw45jsPxAL1wCVud%2BVl9NmDqIriwyzGQMW65oA%2FUgwvioKjDtpQ9H4ZCiY57X%2Fe7jHhPBmV%2BBY91f3CMExPUt5USTxMGft66BfGdXWhBCxpA58jvQBPwGnGIvdk0v%2Fr4KGB8%2FmTmU7o1109oGZ6v&X-Amz-Signature=343dc40e67d0b196c3009cb03d4e4913673c90f8a7063923ffe8e70f18a6757c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOZAFHK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChgiaTqEc4iJsk639pVLWEPWYhSQjk0dk%2B2JQJBO%2FwkAIgLnfKwJg1zrjk5O5Qb3md%2BTq6d5HBBI8t9ux3FYsc0Y8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNkknMHnrx5S5j17FSrcA4dReyFoyocD7dQ4F4OapnMlMTXGxOcCwvEUlvljm78%2Bj%2BvLui9A%2B9nRpL4g6Tci%2B5yuGMUuBmBiPoMpdNHjcNItZqisXiOQk85hmnz8L78nuAzR2AGGsLtuHVA7AyP6JPm5WVmVBxsEdKzdOB0asGJ7N25MqgYy2EThxo9vvDBphXG7dvjefdIGxVXLyFGEsPB%2BOvVkYRwLyhqfy5jPZ%2F1zdgRk74eHjSCJLjjhFngqFBpbQ9YvHn4bK24MkcOB0kXZnWwGHZ7igA0I6N2Cz2OlhrgwN75rlTH%2FIUHTMtzbJJPMsafQ4FLK0r0KtBb6Td2Ct99MqjdOqyO2z2qRoBT2TZriLVp1h6oXP5IKtspv9DWVDsIdLkBT8a4WD7Mz%2Ba7jYYa4KrjUyKG4ELJjyuIG1wlSeHeoNbrJsXmE%2BMjj%2FSfJsAvnrs0pYEjS%2Bp9Y0GPKspVNvoMwliWbUFRgLKVNX%2FGK0SdGWAzQaxb9lDbqink7fhNj2hJIcLYzXnt2He0wds5Xas77omOPzZEkGAdaaXgao41FEYkvQt5cHSQenESDeyzg%2BAaJtCqvgGk9DtFNc7EoqcXS%2BZ9TSBbLe1s0r88QTFy9qc04QViugkW48ae%2FprfHdx7iLmVWMJKXiMoGOqUBAEv%2Bc0%2FQ7ABr%2Fcdb6m9vD47BhLjp%2FF7Q5dT8WrJn6tTlxfoVotkI1KWfUSvm3SvtdiZZCDbMOw45jsPxAL1wCVud%2BVl9NmDqIriwyzGQMW65oA%2FUgwvioKjDtpQ9H4ZCiY57X%2Fe7jHhPBmV%2BBY91f3CMExPUt5USTxMGft66BfGdXWhBCxpA58jvQBPwGnGIvdk0v%2Fr4KGB8%2FmTmU7o1109oGZ6v&X-Amz-Signature=9b7509ad59d809d3440b01ac4bd8eeaed894df78ac8db2f370b9c0d8f84508e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
