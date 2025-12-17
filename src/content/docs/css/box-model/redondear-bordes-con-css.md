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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKK6MOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjuw%2FAWCCOTVl%2BXGQlo7%2FZUDUsBJlCEHJfUgs0ijmwjQIhAJv5fLdcDS7rmxiwEL%2BUj6wgnNGJdhtUPWnaaArdKA0QKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJJTN4PU%2BSZuMFGN0q3AOx6PiV%2F5cN5Xy%2B3V4X6rzqtCTAXy2IRENiz7ODgAbTCVQFwYeKCGmNRzC0Nj03%2BepT9scewkpSi6%2FXs76cGnpXj%2FYd5WsHHigmJaZbREvQ47jRc993ld%2BkhXEwxjLVBILW6omMTgf9RGz6cWN6otib4PEWdF7vWpoYIHTCnIyXaTMHQRLNod1DLsZ0YXVxBcz4OF1Xph5ObWUnXshZFI6RRpNuvoGljklICXz7AO1Sy94temMq61qONZrfMRn1rB67Oso3iQSo7mU9BOAdcbdhjIV28m3wolGMUKEZiYplalSjQnM1FYyj3JY77P7oNhpO6kqGu6josG2A5oadsupmj48NieBAmB27%2FoA0ujkMhzDemqcE7H1UKhdRa7fjqehIVa%2B4ZW6yf9Jb5E6XdlMTx6fVVUNgllCCIcGNwHxwXGUZajLZdR8yJm307RmMNnrAnSWpyeQ0JklZlRp0QqNXLQDRBixsBNx59fn0RudQWGoStR2K6HgISkKi4vhZjqu79AeTNoTiTV7tx7oyvo%2BTBuH9fOE%2BC3WLNiwnZ2Di7I0m2qoy%2FYWpy6ej6SytUJcPe1EPelJywap5Gb6SLksW9JopzMFP3kOsxORZzqJMdJMxvcHUmdedH%2F1Y7jDUn4vKBjqkAcAzYiQOuM9jafFncEtKVxLkn4HH6qmA85jACIiOlwaynLIS8Gyygzcioi57163g8vg711PHI9F4U1PSB2Vx%2BZPhQqBz%2F6IgTkzXcdZ0OotOKenOKRF0LdqXJQw8J6O3jUVmwDQQwPvayuZx%2FqWotYzYRlH9G%2BGHtTGNmtvsK%2Bigogs6i2Y2RlYgSe0hIB5UWxHiFFoITy8v8ghOSdGRS3yWuliE&X-Amz-Signature=a5ac035c2d4b4500ac6244ed42e381fd8c425525461238f114980cc9170f913a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKK6MOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjuw%2FAWCCOTVl%2BXGQlo7%2FZUDUsBJlCEHJfUgs0ijmwjQIhAJv5fLdcDS7rmxiwEL%2BUj6wgnNGJdhtUPWnaaArdKA0QKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJJTN4PU%2BSZuMFGN0q3AOx6PiV%2F5cN5Xy%2B3V4X6rzqtCTAXy2IRENiz7ODgAbTCVQFwYeKCGmNRzC0Nj03%2BepT9scewkpSi6%2FXs76cGnpXj%2FYd5WsHHigmJaZbREvQ47jRc993ld%2BkhXEwxjLVBILW6omMTgf9RGz6cWN6otib4PEWdF7vWpoYIHTCnIyXaTMHQRLNod1DLsZ0YXVxBcz4OF1Xph5ObWUnXshZFI6RRpNuvoGljklICXz7AO1Sy94temMq61qONZrfMRn1rB67Oso3iQSo7mU9BOAdcbdhjIV28m3wolGMUKEZiYplalSjQnM1FYyj3JY77P7oNhpO6kqGu6josG2A5oadsupmj48NieBAmB27%2FoA0ujkMhzDemqcE7H1UKhdRa7fjqehIVa%2B4ZW6yf9Jb5E6XdlMTx6fVVUNgllCCIcGNwHxwXGUZajLZdR8yJm307RmMNnrAnSWpyeQ0JklZlRp0QqNXLQDRBixsBNx59fn0RudQWGoStR2K6HgISkKi4vhZjqu79AeTNoTiTV7tx7oyvo%2BTBuH9fOE%2BC3WLNiwnZ2Di7I0m2qoy%2FYWpy6ej6SytUJcPe1EPelJywap5Gb6SLksW9JopzMFP3kOsxORZzqJMdJMxvcHUmdedH%2F1Y7jDUn4vKBjqkAcAzYiQOuM9jafFncEtKVxLkn4HH6qmA85jACIiOlwaynLIS8Gyygzcioi57163g8vg711PHI9F4U1PSB2Vx%2BZPhQqBz%2F6IgTkzXcdZ0OotOKenOKRF0LdqXJQw8J6O3jUVmwDQQwPvayuZx%2FqWotYzYRlH9G%2BGHtTGNmtvsK%2Bigogs6i2Y2RlYgSe0hIB5UWxHiFFoITy8v8ghOSdGRS3yWuliE&X-Amz-Signature=6c194232c6ddbb7a166d374db788d62a6d1f7f28750df53ead08e0e7b56493ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
