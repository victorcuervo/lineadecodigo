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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7FQUME%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRm9XBXbfuVZbL1tLK3lMxe7NAHSwPEFjHUviCP44%2BBQIhANT%2Bd%2FFsUDHfcYYSiuN9HZ5BCl%2BmrQBxBFgdJPdJJHlGKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQw8HJE5XfpX8L28Qq3AP0YOs%2F2iojnM5VMvM1Ar97rDefQ9sWvOtal%2Br%2BhH6j0jhB2mZWlkftJ4GH7sNqJr0tMUw%2BFdiY0D0RmsKrchSGRjD7MXjns1kTWZkjAPD9ClhqCypLI%2FtU0xtXQizrzN5MWJetnapvaC3HnbAYPFKWgD7afWo%2FOwtDH%2BZqiEAai7wmxd2uiYSWowoUW2lgx0d74S1l0xRxiHFTSBUNYyc%2BnPMSiFRYaxm%2FblVjL12sAbXlsdYUEcDgdOob0oZlPzeCVjcKQwN6Vhf5tlu%2FG3bLQq0wSlGD4SljgXS45Nr53haxgkQJulAKIOGdSKK6Irs4xxPLVIkKgDmDlzE5epl%2FgKqzM23RaHzaqf81qvifPX0upPZ5Wi4QsKmty2385%2BGdHqNQpk2o6kq1bkokiVrIhICNiETv7JV3jcfL4%2BRx75eg3RK2O16aeETX5l9gnk8IG8ntlUoal4lj%2Fgwgbmq%2Bcx48m9MESZLPOWTTN1EMi7at2s7w9dlaE2Ov1dINhyVGMI00yGK0LGBYEha72nrGSOUp5M75Yhp4tFkska1W%2BwMJLbsxoSe9hMhCyM8JAXAUr%2B81SyWjGtZ1j0IEnRlFqHPFPgdVO4ZDteOSeFDP86LlEOYRORvxKrowEDCe7tnJBjqkAVIQq9KkznIT6W0AdOrKJlOaAlN7jd4ZhJIjI5QFO4FYhE33affzrzbeAGPmxcOzq9P43iXoc%2BDoQvt1MQEvOe1jRb0n%2FLilu6eLTPqNgxqKx5KikU29%2FGYT2sKceUOoij%2Fc2dw775UPa6EKneV2wvr4p1cZFBfb7%2By6vWrz1p34tm5eOYInXyD9H26D5qsLuRSyD9xbFCWYlediCpqKYdbpHNOg&X-Amz-Signature=60c4ac310f9d38caea7f8e41ffeeb2e4efa6df543ca103c892f2f7e5fd81e6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7FQUME%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRm9XBXbfuVZbL1tLK3lMxe7NAHSwPEFjHUviCP44%2BBQIhANT%2Bd%2FFsUDHfcYYSiuN9HZ5BCl%2BmrQBxBFgdJPdJJHlGKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQw8HJE5XfpX8L28Qq3AP0YOs%2F2iojnM5VMvM1Ar97rDefQ9sWvOtal%2Br%2BhH6j0jhB2mZWlkftJ4GH7sNqJr0tMUw%2BFdiY0D0RmsKrchSGRjD7MXjns1kTWZkjAPD9ClhqCypLI%2FtU0xtXQizrzN5MWJetnapvaC3HnbAYPFKWgD7afWo%2FOwtDH%2BZqiEAai7wmxd2uiYSWowoUW2lgx0d74S1l0xRxiHFTSBUNYyc%2BnPMSiFRYaxm%2FblVjL12sAbXlsdYUEcDgdOob0oZlPzeCVjcKQwN6Vhf5tlu%2FG3bLQq0wSlGD4SljgXS45Nr53haxgkQJulAKIOGdSKK6Irs4xxPLVIkKgDmDlzE5epl%2FgKqzM23RaHzaqf81qvifPX0upPZ5Wi4QsKmty2385%2BGdHqNQpk2o6kq1bkokiVrIhICNiETv7JV3jcfL4%2BRx75eg3RK2O16aeETX5l9gnk8IG8ntlUoal4lj%2Fgwgbmq%2Bcx48m9MESZLPOWTTN1EMi7at2s7w9dlaE2Ov1dINhyVGMI00yGK0LGBYEha72nrGSOUp5M75Yhp4tFkska1W%2BwMJLbsxoSe9hMhCyM8JAXAUr%2B81SyWjGtZ1j0IEnRlFqHPFPgdVO4ZDteOSeFDP86LlEOYRORvxKrowEDCe7tnJBjqkAVIQq9KkznIT6W0AdOrKJlOaAlN7jd4ZhJIjI5QFO4FYhE33affzrzbeAGPmxcOzq9P43iXoc%2BDoQvt1MQEvOe1jRb0n%2FLilu6eLTPqNgxqKx5KikU29%2FGYT2sKceUOoij%2Fc2dw775UPa6EKneV2wvr4p1cZFBfb7%2By6vWrz1p34tm5eOYInXyD9H26D5qsLuRSyD9xbFCWYlediCpqKYdbpHNOg&X-Amz-Signature=0cd2782cd28a2ffe08ed11bfd8fcbd3640e5c61834b7d27f8528068d7980aa6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
