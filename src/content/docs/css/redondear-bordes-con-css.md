---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI63XTYO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDN1mtaZn%2BJi3uxYtYDAkuwTXY33sv%2BaXJnPDzIa3FtpgIhAL5AQnxf5muhNV%2Bqj09X3X8RtSLHncgChWHlIux2YcNuKv8DCD8QABoMNjM3NDIzMTgzODA1IgyacCnd8TV%2Bl%2FcE158q3ANB7buc%2Fv4vCWyHoTvz%2FLeaQoK0HC2ywijTjHKFHOc5m2aUCU6ndM0UT5f7Tx%2BjxkNRAJWTa2yCqNnu7IxgH6XBLPszU2NoPLby4TFAO6V94eYGXAHk8pbjzpCW6OSuOIaZjvxthfQ26Gj7zPQ5hB1GvxQ3Xm6jqlsS8F1LQkMW0fvhcobtAmzGcUIXbQsTu50N8GxLgWkA406mkSNtpLdQljczwobywYKyDWG8IAYhAzrXCqOBWr5n4zjJpcfHNo2Jrd1MfikFSK9B8FLEA6RT%2Bo9tSyGkG%2BzFITqY2F038%2BF7gcZbNzIgBryg2PQ3qoIDoja7oJ3tOldDh8KFNOcxIIPSUl4d3p%2F5FTMJ9lPpU%2B5tBQsl5%2BWkc28syAwuJ1sbeejpDSTdfzY7oExg7%2BlUcXPP2uqq87yElqbY0xDlqCB4LtvLEdAwp2VJAqkBE0ciWiUTlZ9tvJc%2BSWOCVIo2o7N2PJgujMs50MnP7SM8FkX6iqMAfnaejKi1y3S4PbIDELpOqHqyr%2FlwqI4%2BuNyhWk6cbWjixJUg2s1wO%2FXUVPHt%2FZgVJlS3%2Fc0RsngzEHkAXi8jRrwFTifmiGRO59UaEaxRlLfhWH6pRSbmIXwzXMajfhaxCBjSt0MZbDCby8TJBjqkATvcqrQV%2FTJ4AljWgCXt1WJt09fUFQR6VEFcBZaOkyWBBHzlCalwqLN4UbjAIwY%2Bp%2BQA3G%2FPiZaS9n01OjTiGNOUH1pkm%2FfW5%2FBVoRVoPq%2FjKzGiuoLK3DzQ5f7aO9TEt11%2FPqHr%2FSrjLX%2B3%2BJ0F%2F9L6FxgtUr%2F2ovKWz8JGZXw87cz8D9qrtRr5lEki6Cu5NlrBK69Lx1GpsDYtCcydmcflONUo&X-Amz-Signature=d91f26b091db13034787ac21681911ec00c903e5d958b45366d0c3cbfc845b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI63XTYO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDN1mtaZn%2BJi3uxYtYDAkuwTXY33sv%2BaXJnPDzIa3FtpgIhAL5AQnxf5muhNV%2Bqj09X3X8RtSLHncgChWHlIux2YcNuKv8DCD8QABoMNjM3NDIzMTgzODA1IgyacCnd8TV%2Bl%2FcE158q3ANB7buc%2Fv4vCWyHoTvz%2FLeaQoK0HC2ywijTjHKFHOc5m2aUCU6ndM0UT5f7Tx%2BjxkNRAJWTa2yCqNnu7IxgH6XBLPszU2NoPLby4TFAO6V94eYGXAHk8pbjzpCW6OSuOIaZjvxthfQ26Gj7zPQ5hB1GvxQ3Xm6jqlsS8F1LQkMW0fvhcobtAmzGcUIXbQsTu50N8GxLgWkA406mkSNtpLdQljczwobywYKyDWG8IAYhAzrXCqOBWr5n4zjJpcfHNo2Jrd1MfikFSK9B8FLEA6RT%2Bo9tSyGkG%2BzFITqY2F038%2BF7gcZbNzIgBryg2PQ3qoIDoja7oJ3tOldDh8KFNOcxIIPSUl4d3p%2F5FTMJ9lPpU%2B5tBQsl5%2BWkc28syAwuJ1sbeejpDSTdfzY7oExg7%2BlUcXPP2uqq87yElqbY0xDlqCB4LtvLEdAwp2VJAqkBE0ciWiUTlZ9tvJc%2BSWOCVIo2o7N2PJgujMs50MnP7SM8FkX6iqMAfnaejKi1y3S4PbIDELpOqHqyr%2FlwqI4%2BuNyhWk6cbWjixJUg2s1wO%2FXUVPHt%2FZgVJlS3%2Fc0RsngzEHkAXi8jRrwFTifmiGRO59UaEaxRlLfhWH6pRSbmIXwzXMajfhaxCBjSt0MZbDCby8TJBjqkATvcqrQV%2FTJ4AljWgCXt1WJt09fUFQR6VEFcBZaOkyWBBHzlCalwqLN4UbjAIwY%2Bp%2BQA3G%2FPiZaS9n01OjTiGNOUH1pkm%2FfW5%2FBVoRVoPq%2FjKzGiuoLK3DzQ5f7aO9TEt11%2FPqHr%2FSrjLX%2B3%2BJ0F%2F9L6FxgtUr%2F2ovKWz8JGZXw87cz8D9qrtRr5lEki6Cu5NlrBK69Lx1GpsDYtCcydmcflONUo&X-Amz-Signature=284908325079b0e077234df077242fe358bf4dafd79b57ac701b587da6ae6a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
