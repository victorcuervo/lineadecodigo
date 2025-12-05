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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466627MR6GL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbfD9aDJvam9AcJ0ZKBA8aJMGuPdH%2Fja5Mgf5Q2s%2BSUwIgerQjK4VnhEMOuVEuWjgzgLCEw7QrNq28v1NRv%2FIyBlcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIQ4LoxAE9twVzz3uircA4IOT8k7o%2B2B0IxQz9uGaE12%2FWCB0jPNU88nTArdrfToTH4jFvMQnEvlg4hj4ol6aKGUCgq1WbF18iK5kiYJzMuP9S%2Fs02MnD20M8j1k5tDWeDNRdRwpteWuReoyEVL%2FRk34rfVpXbsO81ZEN2g%2Bl3ZY6cuM64%2BQvqbs2drdjtlFjYm1xBshwn%2Fc9GnmaI7ituFPczGeVORJG4fQjp3oq1GauhI5ql8J0sFjy2TWz%2FdUqS%2FupjMAe8zNUqeo8Qv8yyFcXTalNr%2B1tk%2BN0%2B3Hrr2M5idOh1TFncX%2BYNvVfkn58leLZC%2FZVKv6DArqD5NEtEXHbOVL7q3l6o0K%2FToSgO8SOkx%2F%2FvWIVyOK%2FOgjmpw0VERSGcrYgVuxJucTMm0rYAzaDCkQnEHHSoRRw7UlDq5%2F6W%2B4bNW2y4Rt0NL4163r7SVqveCricwyDfQt6H2xsp%2BaYx%2F8uJ0m6HY07zxonT%2FBZPFDS9ortN0TgmkHiDfaTllMYvEM4MYzZsLhs1I4N5KTabAkDGW9XUcZP1OP%2FbQjdfetIQqfYSX3UWCBjWfAqQkCjUHVempDevinus%2FlEq5osHe2YWixNvnQ4mG0feY6P0SQuRiNikKOjIHfCv4an5yJoO8RR9r2FOL8MPjHyskGOqUB2kKCaMqhA3m13uK5S%2F61q8r9lENNe8XQYm8quObTDkjFLM2wMNNpoATyriAEj9%2FAiItx1i2aVT%2BkJNUDuYrel0S273VdnQHTV1qn9VZIfPZvH1kZoWfnAIGpyLL1oOllvyGa1YjnhoOF5Wy8OrFkabIVbbLI5J9EFMHwf%2BIWdgQx5tKV0fyFdZNu7Yf5gxKTrrK6Nqp42ZgOpvVrO1C5WFqG8hqe&X-Amz-Signature=11b9c2bd5621d0f35cd4860c837a5be612ddeb20d2bee4c0d6015e9314f7eef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466627MR6GL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbfD9aDJvam9AcJ0ZKBA8aJMGuPdH%2Fja5Mgf5Q2s%2BSUwIgerQjK4VnhEMOuVEuWjgzgLCEw7QrNq28v1NRv%2FIyBlcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIQ4LoxAE9twVzz3uircA4IOT8k7o%2B2B0IxQz9uGaE12%2FWCB0jPNU88nTArdrfToTH4jFvMQnEvlg4hj4ol6aKGUCgq1WbF18iK5kiYJzMuP9S%2Fs02MnD20M8j1k5tDWeDNRdRwpteWuReoyEVL%2FRk34rfVpXbsO81ZEN2g%2Bl3ZY6cuM64%2BQvqbs2drdjtlFjYm1xBshwn%2Fc9GnmaI7ituFPczGeVORJG4fQjp3oq1GauhI5ql8J0sFjy2TWz%2FdUqS%2FupjMAe8zNUqeo8Qv8yyFcXTalNr%2B1tk%2BN0%2B3Hrr2M5idOh1TFncX%2BYNvVfkn58leLZC%2FZVKv6DArqD5NEtEXHbOVL7q3l6o0K%2FToSgO8SOkx%2F%2FvWIVyOK%2FOgjmpw0VERSGcrYgVuxJucTMm0rYAzaDCkQnEHHSoRRw7UlDq5%2F6W%2B4bNW2y4Rt0NL4163r7SVqveCricwyDfQt6H2xsp%2BaYx%2F8uJ0m6HY07zxonT%2FBZPFDS9ortN0TgmkHiDfaTllMYvEM4MYzZsLhs1I4N5KTabAkDGW9XUcZP1OP%2FbQjdfetIQqfYSX3UWCBjWfAqQkCjUHVempDevinus%2FlEq5osHe2YWixNvnQ4mG0feY6P0SQuRiNikKOjIHfCv4an5yJoO8RR9r2FOL8MPjHyskGOqUB2kKCaMqhA3m13uK5S%2F61q8r9lENNe8XQYm8quObTDkjFLM2wMNNpoATyriAEj9%2FAiItx1i2aVT%2BkJNUDuYrel0S273VdnQHTV1qn9VZIfPZvH1kZoWfnAIGpyLL1oOllvyGa1YjnhoOF5Wy8OrFkabIVbbLI5J9EFMHwf%2BIWdgQx5tKV0fyFdZNu7Yf5gxKTrrK6Nqp42ZgOpvVrO1C5WFqG8hqe&X-Amz-Signature=7415d1e8f699f97473aa4fc63df50cd2d90629877501dc6bb8a08d5ee8143ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
