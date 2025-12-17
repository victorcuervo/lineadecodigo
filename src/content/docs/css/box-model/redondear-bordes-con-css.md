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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNLUYEV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvYxFPJnXWSHZynFkZwMonxCp%2BA2VMDMZElOiZ5o2GpAIgI9aGGzNxws2xTRZGMfPi1g93rEr3776JGGw9ezQPeBcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJfq0KS2NrNflPuJbyrcAzVCyw1Prg%2BW9ORP8ktbd822JCewQt8fio4tF1vrz7JXcJKNAT0xqD7GObM5ekSWRUNJuzHTPQBAdiYMBQmghz7VDWYu42fQEtPRbmo8jsmQJpTwTPm%2Flfaoybe1PTziLnJ72RXKmtkdNcbMYOkqd9DqR9gJIEPKDAMrJXoD9gVsW6WrlsM3XRcnMLvdErfeFnc0sBfPewUz20sznn0I0fsWdVGBzf446JkrPh6aDlmZ4jf0REy58tpDZTSwkOqq2jTWq4k1MS458sm%2F7GvSe7Nx0NwFxOQOB%2B9PfyHveoY9Ox00PwMabOWSE%2BjLgzT0ZXIEMelLWQHcXhG%2BXcT8g%2Fi1I7Lwph%2BHQ9445x1iF0tAoEDhfFE2JcrkRpDLzqqrqYj2Nd0TfHzf7jriKtHi8reQ9rmCN3mZ50%2BfzPJhfn0swQs1oP%2FNU6%2FLNVk5aN9CuEGH%2FSEcIYDoiLnNP55QNjNAGPpieySiFbXJc10fh4eeKSJp%2BrE9IM2f5%2BBzCuY1uPTYpHsaGQmd7MXhFsgkTEV2QnoplfX%2Fs8QOo6ELpN49rxPdOF3IrzdCCfUsLlMWj6C3%2BWHjngAjoaT07kcYVAWQr8RHIHUcZzFoKXIXbECh%2Be%2F0WZ0%2FHbso3tOnMJyDicoGOqUBCBieuDPYwthBkpuKnKHUW%2BFS%2FQGtWpCx0ZWH1O2Q1Be4LmET8z2wtKaTHJMcTGZmn0rV59R12TLtWXIGeYi8VjXo6lhtChY%2F5HcZFcOCZ%2BXUbGNIex0BxSVNA4qsIlFK8M%2F8FUDr476nBWGQJtVl7ScjDLl0dsUGPsEw5caWhv4hALWoq5rEpqigZoNdqeU9ZOuLkvbH1luoUrQwEsdsPcVWfHM5&X-Amz-Signature=a2f824c91387e1041c1b09232ab6d5cfd8e8536c81e24a0e950118365c6752f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDNLUYEV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvYxFPJnXWSHZynFkZwMonxCp%2BA2VMDMZElOiZ5o2GpAIgI9aGGzNxws2xTRZGMfPi1g93rEr3776JGGw9ezQPeBcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJfq0KS2NrNflPuJbyrcAzVCyw1Prg%2BW9ORP8ktbd822JCewQt8fio4tF1vrz7JXcJKNAT0xqD7GObM5ekSWRUNJuzHTPQBAdiYMBQmghz7VDWYu42fQEtPRbmo8jsmQJpTwTPm%2Flfaoybe1PTziLnJ72RXKmtkdNcbMYOkqd9DqR9gJIEPKDAMrJXoD9gVsW6WrlsM3XRcnMLvdErfeFnc0sBfPewUz20sznn0I0fsWdVGBzf446JkrPh6aDlmZ4jf0REy58tpDZTSwkOqq2jTWq4k1MS458sm%2F7GvSe7Nx0NwFxOQOB%2B9PfyHveoY9Ox00PwMabOWSE%2BjLgzT0ZXIEMelLWQHcXhG%2BXcT8g%2Fi1I7Lwph%2BHQ9445x1iF0tAoEDhfFE2JcrkRpDLzqqrqYj2Nd0TfHzf7jriKtHi8reQ9rmCN3mZ50%2BfzPJhfn0swQs1oP%2FNU6%2FLNVk5aN9CuEGH%2FSEcIYDoiLnNP55QNjNAGPpieySiFbXJc10fh4eeKSJp%2BrE9IM2f5%2BBzCuY1uPTYpHsaGQmd7MXhFsgkTEV2QnoplfX%2Fs8QOo6ELpN49rxPdOF3IrzdCCfUsLlMWj6C3%2BWHjngAjoaT07kcYVAWQr8RHIHUcZzFoKXIXbECh%2Be%2F0WZ0%2FHbso3tOnMJyDicoGOqUBCBieuDPYwthBkpuKnKHUW%2BFS%2FQGtWpCx0ZWH1O2Q1Be4LmET8z2wtKaTHJMcTGZmn0rV59R12TLtWXIGeYi8VjXo6lhtChY%2F5HcZFcOCZ%2BXUbGNIex0BxSVNA4qsIlFK8M%2F8FUDr476nBWGQJtVl7ScjDLl0dsUGPsEw5caWhv4hALWoq5rEpqigZoNdqeU9ZOuLkvbH1luoUrQwEsdsPcVWfHM5&X-Amz-Signature=2b7c9974d79551fed645f6d92c1d64dcd2ee35e1abcbb74bc67a69a3daa6668f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
