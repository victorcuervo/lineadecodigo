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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XA6SJEX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfH%2FOZzUtoe5A6aHF9XRvYEcqy6sCyU%2BgKrxIpViQhuQIgCvC8wJoAvY5uibxmJCWM1SkaM5TX021Gac2V%2FNbyrO8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEGm%2BJI%2FXPlUPdf%2BiyrcA6zJxleiRs1%2FltR2vaUsXz9p%2Fu6zlGHJmQvxpG%2F65qVE2zwC7n%2BfDWdLTs0okNzQAX3zPLcJu0E1hzj5Do4iqadswKAGwbo49LMs146sOr%2BQbY1F3Y9Mtwxq6trtdaGza6UHljNfjhnyer%2Bd%2FxfvEgmX3CBCQUCUBO7g8MdnGNByZYYHDUkdIWlD0mNpfVhIlgGB6hGy5h5Mi9Z3QQN9FANqFK5yGh2%2Bfj%2B2mtcLSyWXeZBvxTGKs6gd%2BqpTiiW9n4FiOilxuqQaxbg2khefjXVCGGC0Z%2BmaOdPKEOh6VWh%2BXxWX%2FTWn70QDLsVF%2F1jcI26VsUn2dJk3gKCJnEfj6e%2FED53Q4dF0KWb2%2FDjkZeN5XAnpfcjASJ%2B9y6O06FbCpuEEpTEl8tFCjVIwUKgW2SS7wCSs7oueofQByTrC99ULWq7l3ssQPLn%2BlnOyRJKm1Jc2BEQRtadNAL%2B0STrGp2upRjjICMRhzCkC3nLk%2Bbk3kUt7ORfzFyGMWu3MQ18JkwtZk9B0O0AZn9fg6nemTAf3KbVuemPXpd5nKcKFHkEhyZDWFbAiv2eG0JEgmaDaxJ3oZh0key17jpy5nE1Jg2cUIe6FMXTv8vKUklGNlkQdMkenMvMjAP3OHN3EMMXeh8oGOqUBNUa4w5AcD64BzszWsgc7juIBjAvyk9H3g03%2Fj%2BtcNymJbFzNj6%2F%2FFPZzaMRWMFR1rMwjRBZuir9X60wvd37lBSGbzNa6bGe9VZ%2FV5%2BtAbMSc1on3dvb3fvBH%2BjZrM4qbzemhPEMMOWKb97EXPUZWPvOh04mSpH1Fm997b2IvSq1m6d22GKytg75sijlJJr9%2B7Yq3gQi%2Bml1aXOGbM5LFcE%2BQiwGQ&X-Amz-Signature=9c0c3c3751cb1a64f8c230200da323712e4c540787b39148d17b5bbc5fccac6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XA6SJEX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfH%2FOZzUtoe5A6aHF9XRvYEcqy6sCyU%2BgKrxIpViQhuQIgCvC8wJoAvY5uibxmJCWM1SkaM5TX021Gac2V%2FNbyrO8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEGm%2BJI%2FXPlUPdf%2BiyrcA6zJxleiRs1%2FltR2vaUsXz9p%2Fu6zlGHJmQvxpG%2F65qVE2zwC7n%2BfDWdLTs0okNzQAX3zPLcJu0E1hzj5Do4iqadswKAGwbo49LMs146sOr%2BQbY1F3Y9Mtwxq6trtdaGza6UHljNfjhnyer%2Bd%2FxfvEgmX3CBCQUCUBO7g8MdnGNByZYYHDUkdIWlD0mNpfVhIlgGB6hGy5h5Mi9Z3QQN9FANqFK5yGh2%2Bfj%2B2mtcLSyWXeZBvxTGKs6gd%2BqpTiiW9n4FiOilxuqQaxbg2khefjXVCGGC0Z%2BmaOdPKEOh6VWh%2BXxWX%2FTWn70QDLsVF%2F1jcI26VsUn2dJk3gKCJnEfj6e%2FED53Q4dF0KWb2%2FDjkZeN5XAnpfcjASJ%2B9y6O06FbCpuEEpTEl8tFCjVIwUKgW2SS7wCSs7oueofQByTrC99ULWq7l3ssQPLn%2BlnOyRJKm1Jc2BEQRtadNAL%2B0STrGp2upRjjICMRhzCkC3nLk%2Bbk3kUt7ORfzFyGMWu3MQ18JkwtZk9B0O0AZn9fg6nemTAf3KbVuemPXpd5nKcKFHkEhyZDWFbAiv2eG0JEgmaDaxJ3oZh0key17jpy5nE1Jg2cUIe6FMXTv8vKUklGNlkQdMkenMvMjAP3OHN3EMMXeh8oGOqUBNUa4w5AcD64BzszWsgc7juIBjAvyk9H3g03%2Fj%2BtcNymJbFzNj6%2F%2FFPZzaMRWMFR1rMwjRBZuir9X60wvd37lBSGbzNa6bGe9VZ%2FV5%2BtAbMSc1on3dvb3fvBH%2BjZrM4qbzemhPEMMOWKb97EXPUZWPvOh04mSpH1Fm997b2IvSq1m6d22GKytg75sijlJJr9%2B7Yq3gQi%2Bml1aXOGbM5LFcE%2BQiwGQ&X-Amz-Signature=feec52fdc5be8555149d73bc29a3ce7f47a760739f8f57f40eda10aeac017c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
