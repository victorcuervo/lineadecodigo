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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVEJ264%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPl6whnECxUSw3%2BpVQnkHYSvCca9YXm67uYvcaAxc7UAiAmkmtztosrPyzCmQafy%2FXZTvrphA2CjGnxO9FtHTO%2Bmir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMNf%2F%2FrVyJngx1PTbHKtwDfvnPQBOBd06CZSS7no%2BJ7d7e7tlVPjxpI693qDC6JWT7%2FWtJU1YrNeYiw7d1xHUthMDYZiC%2FaibxPqSLQDT3kqAEyJPwThhBK8OJaUiBnneFEOcBk6nS4dE5ILcS9iqKW%2B7zI7VI5bl8DS7NjAC3brjvJAaJWendcpVKfLcc6jIQgosTwhbdU%2FqMKjT3c5ezbAO9yOTP7q9q6e8pBnVrY5B6NHdJsfrizujJAoQUA%2BUmabbv4LULHN14XmcSmoLTKmwf3mrAFT4QzGLtCsbQvnqAynrkwGR25Riq0hk87JaVy31it62y8vPJ2e7bWkjrM7SwvuZWsNwV%2Bno0meeGrss2qweBWVGRCeaP6FycIWRKrpis%2B5qqfmLzldxT9hycE%2F7tHnZXtZPYbo5p1GFjSs%2BTRsyDjSZ5NGYDp0v7BlqEeZe32auT9QZHLTGDL7geJzWaI9nmb1YEaxwoDKO3aW4CA1mfcLykDSfcZ%2FLcEnKZr3gtfd7u0wHwjFElQ0t04M96ju1EDH29m7K5PMkQiLmRm8epYY3lpci%2B97v85Yt6VQvlgVPIRUXfMQ0ZfLHpgSu6wrEktuhfi9%2BSXdOOzA09nJPlL%2FidJax6eSyz8CkkN9w3ZhU8NhnOevkwwYzIyQY6pgE9lAtrFo1fAYzROnOdiLFSntbxHQRsTUxSYUS4J2c3UB1wTIvpIPem9sP6WPTiVRoJUyVToPFz7KP65s%2Fol1ET%2F00aq7sAAdMzhE9ESF%2B6pk9STjOO5x96YJ9kS5dTjU7TZi0igQ%2FjzFft%2BsG%2BP8czmPF%2F8UQMBG9qZ8bRXX7VjEvEQpoRRSh5sOM72ChECHewMB4Hv6K4EJjv6lQNNS1f6kgbZO5g&X-Amz-Signature=bfde7787b8c7aea4a7ca7879f824149ce1c6feb081aa901ff1c7858d7611cfb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVEJ264%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPl6whnECxUSw3%2BpVQnkHYSvCca9YXm67uYvcaAxc7UAiAmkmtztosrPyzCmQafy%2FXZTvrphA2CjGnxO9FtHTO%2Bmir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMNf%2F%2FrVyJngx1PTbHKtwDfvnPQBOBd06CZSS7no%2BJ7d7e7tlVPjxpI693qDC6JWT7%2FWtJU1YrNeYiw7d1xHUthMDYZiC%2FaibxPqSLQDT3kqAEyJPwThhBK8OJaUiBnneFEOcBk6nS4dE5ILcS9iqKW%2B7zI7VI5bl8DS7NjAC3brjvJAaJWendcpVKfLcc6jIQgosTwhbdU%2FqMKjT3c5ezbAO9yOTP7q9q6e8pBnVrY5B6NHdJsfrizujJAoQUA%2BUmabbv4LULHN14XmcSmoLTKmwf3mrAFT4QzGLtCsbQvnqAynrkwGR25Riq0hk87JaVy31it62y8vPJ2e7bWkjrM7SwvuZWsNwV%2Bno0meeGrss2qweBWVGRCeaP6FycIWRKrpis%2B5qqfmLzldxT9hycE%2F7tHnZXtZPYbo5p1GFjSs%2BTRsyDjSZ5NGYDp0v7BlqEeZe32auT9QZHLTGDL7geJzWaI9nmb1YEaxwoDKO3aW4CA1mfcLykDSfcZ%2FLcEnKZr3gtfd7u0wHwjFElQ0t04M96ju1EDH29m7K5PMkQiLmRm8epYY3lpci%2B97v85Yt6VQvlgVPIRUXfMQ0ZfLHpgSu6wrEktuhfi9%2BSXdOOzA09nJPlL%2FidJax6eSyz8CkkN9w3ZhU8NhnOevkwwYzIyQY6pgE9lAtrFo1fAYzROnOdiLFSntbxHQRsTUxSYUS4J2c3UB1wTIvpIPem9sP6WPTiVRoJUyVToPFz7KP65s%2Fol1ET%2F00aq7sAAdMzhE9ESF%2B6pk9STjOO5x96YJ9kS5dTjU7TZi0igQ%2FjzFft%2BsG%2BP8czmPF%2F8UQMBG9qZ8bRXX7VjEvEQpoRRSh5sOM72ChECHewMB4Hv6K4EJjv6lQNNS1f6kgbZO5g&X-Amz-Signature=5e5f935a3d27bd607984e8796dba7999b1645cc5cf2c7d0fe936beb26060e945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
