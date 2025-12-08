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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5M7QRT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdGuU4E2RU3TSBVfVw31AHXy%2F6HW8%2BIUXVn1O3%2FU67gAiA2GbojeZDEEeUV1K%2FQwidZLFNqjJ0NklRsTVmAdpHEiCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm7v47JIZvS7J2OEdKtwDbwslbYf2KiNMatsoZhnvRAT4Ld16VvC05A9RVIMeDTMcrz3sJOkjq4RgPKWRxALVpfjp%2F5krWsgxjuYmZlPWr%2BbZ%2B88xbVk3TZU%2BwCzHlulpUfGUfKpZ6C86WSU6qW1MxjfAZ79uK66%2FFYycEGCRtOb9qIP32HEuBDyM4nV7tPChNPIQZsEvduEH%2FiL5%2BdB%2FyhDlcGFJyJqYe1O0gJ3WkZ31odcFvhuKubaF33I2nL9zr%2BoZZzvy0pVV9LPbmmz7Ln7RTyT6MUtFf1LaVQkVb2B9%2FH9oLijg%2FXE4wBCpDO9gz3w%2BYORLHfwmCGh9P%2BMM0h%2BWRmSfcBU5tcAnJiAwG07hcoTa6pziUhvk40U3tp0ZFAiaLRISUEp5euIWkpwpVCaMxrYyuSiDujfdfl%2FFParLWoGHTzeSO3evcR8QBRPnbR%2FPb%2B6S0f8KS7mVJVej5QCBU%2ByXbsZlYY2VMYvK%2Bw%2BVcdjx8N62xX10kL0yRpeMFJUYgUy%2F1kR4MFtMOKqrB%2FJrGZAy2FLxYMnl1Asr%2BjA%2Fexf%2FIk6Ni8B%2FjAhofkBhnUZXFyVeuW%2FnwS6kU6x4YNqI%2BHsBMeEs5aqwak7yCvHHSqdNJvNYWjgxHbHyUnY2VIxsR%2BqzQdXoUuMwy8HbyQY6pgFELNWnxY5OR85WoC031NbI20jJ2PGAO18XmEcHw5zaPB%2FtlQCjJuCBd0GMsLlGj5rYnZnq3BF3OswpHHBQ3mg3IG0Osx%2F7hERN2Q0YwItsvVra3ACl%2BibSLBQLr2YeUxcxfUOmsh34iyflZPmiR0ZregfBAYJjK1twwWsz1CBzajJ5WMXhG5NFVhLBq9jMYWDsUyhxHMSSTE4FRK9mBD2jePNWUQBF&X-Amz-Signature=ba2a0960017506db53d3eb30ea19461fb68f774d15e07669a70d37b8a70c6430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5M7QRT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdGuU4E2RU3TSBVfVw31AHXy%2F6HW8%2BIUXVn1O3%2FU67gAiA2GbojeZDEEeUV1K%2FQwidZLFNqjJ0NklRsTVmAdpHEiCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm7v47JIZvS7J2OEdKtwDbwslbYf2KiNMatsoZhnvRAT4Ld16VvC05A9RVIMeDTMcrz3sJOkjq4RgPKWRxALVpfjp%2F5krWsgxjuYmZlPWr%2BbZ%2B88xbVk3TZU%2BwCzHlulpUfGUfKpZ6C86WSU6qW1MxjfAZ79uK66%2FFYycEGCRtOb9qIP32HEuBDyM4nV7tPChNPIQZsEvduEH%2FiL5%2BdB%2FyhDlcGFJyJqYe1O0gJ3WkZ31odcFvhuKubaF33I2nL9zr%2BoZZzvy0pVV9LPbmmz7Ln7RTyT6MUtFf1LaVQkVb2B9%2FH9oLijg%2FXE4wBCpDO9gz3w%2BYORLHfwmCGh9P%2BMM0h%2BWRmSfcBU5tcAnJiAwG07hcoTa6pziUhvk40U3tp0ZFAiaLRISUEp5euIWkpwpVCaMxrYyuSiDujfdfl%2FFParLWoGHTzeSO3evcR8QBRPnbR%2FPb%2B6S0f8KS7mVJVej5QCBU%2ByXbsZlYY2VMYvK%2Bw%2BVcdjx8N62xX10kL0yRpeMFJUYgUy%2F1kR4MFtMOKqrB%2FJrGZAy2FLxYMnl1Asr%2BjA%2Fexf%2FIk6Ni8B%2FjAhofkBhnUZXFyVeuW%2FnwS6kU6x4YNqI%2BHsBMeEs5aqwak7yCvHHSqdNJvNYWjgxHbHyUnY2VIxsR%2BqzQdXoUuMwy8HbyQY6pgFELNWnxY5OR85WoC031NbI20jJ2PGAO18XmEcHw5zaPB%2FtlQCjJuCBd0GMsLlGj5rYnZnq3BF3OswpHHBQ3mg3IG0Osx%2F7hERN2Q0YwItsvVra3ACl%2BibSLBQLr2YeUxcxfUOmsh34iyflZPmiR0ZregfBAYJjK1twwWsz1CBzajJ5WMXhG5NFVhLBq9jMYWDsUyhxHMSSTE4FRK9mBD2jePNWUQBF&X-Amz-Signature=e0b502fcfda1cb340f9ef15ebd20febba435350446f523caf624e33a60c3c0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
