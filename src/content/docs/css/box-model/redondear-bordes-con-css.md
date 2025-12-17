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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBINXZZL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClmsx%2FDpswi%2FlfHz2OUSlLvQ1KgRKubBXqtKAYdW%2FcHAIhALi%2FbAi%2Flo5ZE7Q4tqY8bnZW%2BthIiLcMNe3UtLDrH%2FfcKv8DCH8QABoMNjM3NDIzMTgzODA1Igwg10nClLuf74bBkkIq3AMVfzgzW5uz1zPZ6IMfyAy9ujUASO9F2CA7%2BfNZYdXFxJ4jcwquF9lHH7dhM8naJwexc3sW%2F1NVDkz10HQJQaWEFtbWv8VGEPwQOEcvAmw9QMl5wNbaa96h0Hvtenz1%2BnbpGkupx3qE%2F2ulTpSwO0T3M9osG4DUPJKLBhHQHVW21MaxPLN1a7lGZhi5G5gv2ZVh1IdKefNlHj2fzogPpZ7FNFkNaV6Aj6ewDq8ZfVeeGPGy%2FfVjMj88r5g1f%2BOe9x1nsiZ%2BWk%2FmIFfMXVfm%2BO2ioXwniXV9uvuUOvmsTROKsxHFWEoWkwn8RZkoR3obIjJgh5KOYAlje0cx32yjDwXwLwbmW3xojWqUxnvmcRSJ5pjCfvLVmKBTr7RLVc1T9BALmYdU2OGQDggdVwtJxd1RpGuK1ax%2FDjEkzb%2FUCWodP0XRTossDMafkXF3%2B3LHsIvGa9zJ9ahAU9ew6kwNBYR0t%2BDash3%2FAzUFH0hiWH8VlA0cwMb4F%2BufYdZyVqR2tybfDr2HnpibWPx%2F7BedZmxCb8Y7seA8NudnersvKhYiCUZoll8O%2Fs0y%2F%2F2gOf58ob%2Fee3vEvcauUhB5W68KC9%2FvOaeEr4eNUlIxgktraua7SOfPt6eH9mEs%2ByWKyDD%2F4YrKBjqkAadIy0igisXc6jUaqhe8zDWAUbV7%2F7eNyr8Furla44YPi7jJyqRO5hemOKR7hyiaKU6qI6Q0Pt7LPzjvVBkXCjnTP7B6%2F58F3zy%2BkZeChToblaB6J2rDYS7FEXFw5lsDVsA8sRySIbNdnDCIQdfZhj2aaDq37ud%2Fe9BBbocdWIIDakmi1d0CZnykpQNhS76a3fzVwU6hlikEoBlGd93DTDxqG3Fi&X-Amz-Signature=8ad6daa78b0862b372d43ff9aa6bab8e4f217836f598841db6a4da3b72b0cbce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBINXZZL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClmsx%2FDpswi%2FlfHz2OUSlLvQ1KgRKubBXqtKAYdW%2FcHAIhALi%2FbAi%2Flo5ZE7Q4tqY8bnZW%2BthIiLcMNe3UtLDrH%2FfcKv8DCH8QABoMNjM3NDIzMTgzODA1Igwg10nClLuf74bBkkIq3AMVfzgzW5uz1zPZ6IMfyAy9ujUASO9F2CA7%2BfNZYdXFxJ4jcwquF9lHH7dhM8naJwexc3sW%2F1NVDkz10HQJQaWEFtbWv8VGEPwQOEcvAmw9QMl5wNbaa96h0Hvtenz1%2BnbpGkupx3qE%2F2ulTpSwO0T3M9osG4DUPJKLBhHQHVW21MaxPLN1a7lGZhi5G5gv2ZVh1IdKefNlHj2fzogPpZ7FNFkNaV6Aj6ewDq8ZfVeeGPGy%2FfVjMj88r5g1f%2BOe9x1nsiZ%2BWk%2FmIFfMXVfm%2BO2ioXwniXV9uvuUOvmsTROKsxHFWEoWkwn8RZkoR3obIjJgh5KOYAlje0cx32yjDwXwLwbmW3xojWqUxnvmcRSJ5pjCfvLVmKBTr7RLVc1T9BALmYdU2OGQDggdVwtJxd1RpGuK1ax%2FDjEkzb%2FUCWodP0XRTossDMafkXF3%2B3LHsIvGa9zJ9ahAU9ew6kwNBYR0t%2BDash3%2FAzUFH0hiWH8VlA0cwMb4F%2BufYdZyVqR2tybfDr2HnpibWPx%2F7BedZmxCb8Y7seA8NudnersvKhYiCUZoll8O%2Fs0y%2F%2F2gOf58ob%2Fee3vEvcauUhB5W68KC9%2FvOaeEr4eNUlIxgktraua7SOfPt6eH9mEs%2ByWKyDD%2F4YrKBjqkAadIy0igisXc6jUaqhe8zDWAUbV7%2F7eNyr8Furla44YPi7jJyqRO5hemOKR7hyiaKU6qI6Q0Pt7LPzjvVBkXCjnTP7B6%2F58F3zy%2BkZeChToblaB6J2rDYS7FEXFw5lsDVsA8sRySIbNdnDCIQdfZhj2aaDq37ud%2Fe9BBbocdWIIDakmi1d0CZnykpQNhS76a3fzVwU6hlikEoBlGd93DTDxqG3Fi&X-Amz-Signature=f50b54e3cc06bb1bc5332d37a633fc3626042f0ff59cdb1d9405d5a55fd08172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
