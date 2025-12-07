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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K63PXZV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpoCoxG1nGqY%2B51V4kI6fcdxftuBh2bTCtoQ9gwcL80QIhAKKvFgVlaD4mr7tK7SkhFesm%2FGOIAVqhQ5RATiolDlwHKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN%2BwchVj0E5s9I1UQq3ANN%2FY1PKpWNp%2F%2FVup%2BAJNKylibqde25f86Keg9hAQtzcCKzXxg%2FPJKw8zAFDQ0vvY3mqQBY1pcX21FEgcKd8Cc9rQi8gsXICRjCJn4scU1aM39M3gFAGDeUA%2F5q5LYmymOHXc%2BPMBAx4ety7B%2FmFrXHPXU2DeTQQ1Yoa8QM%2FXlBkOEBK1ANQACH9d9mxNNM2UEw3N5zQ9jvYkW0qsx%2Fs170tK7xM6Uxg1dDi912ka48eya2yKlB7ArK%2FNsORg%2BPqgAtsSBr5Os72zxcZRTBw0pA7rsnXtjI5SZ02rgFTt6NxzoJU1PVc0DDkJfB4QI7McwG2rV3O6%2FgquuMuMA26MXIWQ458IfUW5pV2OAuoduyoTFzAVcaWepTBgL4qj2%2B24tFPnmxC3oNBDFXrxEppSenjue0ZQopSJOLx8NM3bq8D9iX7dCQgpEzJABgssI3LwsFvvA9%2FPetU%2BEwNdGxwz355pkRtM%2BgTJvnHxEEikGcmtHdPijKWoCozXPlqB2uCws0zQWWvISiouUxq5B4Bjl7nhavloU6hmrDv64m%2B7teOCEYVgJwF70k2PPNXLphNvs4hWdBlFGp8OoFxyySvrjxHtlna1lNwj7GDU9T8%2FMBZabcjB8xpZQ9xCC1%2BzCxwNbJBjqkAbjp3kBWtWyL4QGjm%2BxYXt92q7WSc3jPDmO2hyAs7F0yxAqvbBqNIQTrD3LQDvaxBAoA1MLKSzGyseJHqP7d6JN9%2FuQpgme9Qa4B1n2cCxnJ8JFWUkfAHSRJjgdS0ggTjkKP7OvcACzKPjEo1SM9CIIxky9nKAcPa9ePu49zrXF1OERd6nQUBM76%2FhVn1UaoG6UiONJxiTVIMC8k%2Bg47Z8PZhXe0&X-Amz-Signature=be28f331edcf0c73fb3ce5755332ba6a569bca9d8bf99b0444cbd0e719993679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K63PXZV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpoCoxG1nGqY%2B51V4kI6fcdxftuBh2bTCtoQ9gwcL80QIhAKKvFgVlaD4mr7tK7SkhFesm%2FGOIAVqhQ5RATiolDlwHKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN%2BwchVj0E5s9I1UQq3ANN%2FY1PKpWNp%2F%2FVup%2BAJNKylibqde25f86Keg9hAQtzcCKzXxg%2FPJKw8zAFDQ0vvY3mqQBY1pcX21FEgcKd8Cc9rQi8gsXICRjCJn4scU1aM39M3gFAGDeUA%2F5q5LYmymOHXc%2BPMBAx4ety7B%2FmFrXHPXU2DeTQQ1Yoa8QM%2FXlBkOEBK1ANQACH9d9mxNNM2UEw3N5zQ9jvYkW0qsx%2Fs170tK7xM6Uxg1dDi912ka48eya2yKlB7ArK%2FNsORg%2BPqgAtsSBr5Os72zxcZRTBw0pA7rsnXtjI5SZ02rgFTt6NxzoJU1PVc0DDkJfB4QI7McwG2rV3O6%2FgquuMuMA26MXIWQ458IfUW5pV2OAuoduyoTFzAVcaWepTBgL4qj2%2B24tFPnmxC3oNBDFXrxEppSenjue0ZQopSJOLx8NM3bq8D9iX7dCQgpEzJABgssI3LwsFvvA9%2FPetU%2BEwNdGxwz355pkRtM%2BgTJvnHxEEikGcmtHdPijKWoCozXPlqB2uCws0zQWWvISiouUxq5B4Bjl7nhavloU6hmrDv64m%2B7teOCEYVgJwF70k2PPNXLphNvs4hWdBlFGp8OoFxyySvrjxHtlna1lNwj7GDU9T8%2FMBZabcjB8xpZQ9xCC1%2BzCxwNbJBjqkAbjp3kBWtWyL4QGjm%2BxYXt92q7WSc3jPDmO2hyAs7F0yxAqvbBqNIQTrD3LQDvaxBAoA1MLKSzGyseJHqP7d6JN9%2FuQpgme9Qa4B1n2cCxnJ8JFWUkfAHSRJjgdS0ggTjkKP7OvcACzKPjEo1SM9CIIxky9nKAcPa9ePu49zrXF1OERd6nQUBM76%2FhVn1UaoG6UiONJxiTVIMC8k%2Bg47Z8PZhXe0&X-Amz-Signature=b245ddaf7131b041f39e2893cfe738bbf12c66a2475eb2b4ee8b9e558d78a9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
