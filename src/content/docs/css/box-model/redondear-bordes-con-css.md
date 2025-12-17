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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPHCWSAY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ7gqAO5T%2FQeEQAPB8GABxKYK0dU8Y%2Fk6kkbjTVeITYAIgE5xqC3nDk%2FnXgOYnCDaRkyEnVw8NAe2MwLhVEeVs3ksq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL0SOjMh6nH3m669ryrcA8Cben8UKdk%2BiZTsgV1o1vP8Cm6S5zJkgY3OjG1l2emucOLf7TnCFleWUl%2BStxTKtQ6D%2FV7J7Kf3ZEU0CYG8aUBJVDVBqhh8QC88xjtmnigYUPC6vrk1JcEefbsjPoNmhFFK0nNhgKxLTOYRm9Tqo0Md8ghWg%2FGvFLU66HQTCQV%2BKkdkvRSKmbGRSUzt2TW7491p7ZHFFR2fTGZwDYGPmyc7vyJWKa4Kc4Sp5yQzpMt9kE%2FP6K5Hj8VtBQdPnR4rTTll%2FYfoEzv7EMTCsRvXT8yQLyOWZN%2FMSgTBI6Cz2vRA3qlamC3H4m9dlOW7GeNnelXoqv0KDxKcx97Dm1lxLWEBY%2BpWNJhnj9N1WB0sTb4f0chOrdfijoFDet4WPVIguq%2FsEQO3bbTrYcFDuMBqbzThske6i1cP3mO5yTXzhQUpaRmM2UICk0Khp%2F6nlJU1m7UqxzOzDyr02sSH2zD%2FwxzPRJ3C0BYmMcCxVt6gZkq%2BREHZA9dI%2FJddFEv6Ysl%2F0YYJ38tK026nHio%2BLSne%2FmPnF9z2YWB4QCYU%2FtC%2BP3fIFCeB8B3TzvFdKhTuweu5l5NePc7nZ56eK%2Fa%2FrKKxCp1W%2BiJv20q1e62udJmjBDjzGnsh%2FXEYGNpOQKCWMLDfh8oGOqUBFYXPKquZrg3C3azgLh6XPyzyKs8cfvLPIyvxU6zqjtMPYsrk2vszVfiUHLSFYQ7XmiwH12qZPhnEj8J8GWLwO0vh1msADkO5cfcnmEg%2BvIDfG84n%2FsiTmG%2B6%2B5jJGkT6St%2FHunkJgK97iIturUgCepXvqIBpOVn2ZNRcmAdHgbf8gkG50714PlaJvCciIRO3LciD2xCnoAUFI9%2FZqvdmUdT0flja&X-Amz-Signature=7e7f2189de68e075084538433c15a851a8ac7cb5886ee3d415a16ccdacd87f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPHCWSAY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ7gqAO5T%2FQeEQAPB8GABxKYK0dU8Y%2Fk6kkbjTVeITYAIgE5xqC3nDk%2FnXgOYnCDaRkyEnVw8NAe2MwLhVEeVs3ksq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL0SOjMh6nH3m669ryrcA8Cben8UKdk%2BiZTsgV1o1vP8Cm6S5zJkgY3OjG1l2emucOLf7TnCFleWUl%2BStxTKtQ6D%2FV7J7Kf3ZEU0CYG8aUBJVDVBqhh8QC88xjtmnigYUPC6vrk1JcEefbsjPoNmhFFK0nNhgKxLTOYRm9Tqo0Md8ghWg%2FGvFLU66HQTCQV%2BKkdkvRSKmbGRSUzt2TW7491p7ZHFFR2fTGZwDYGPmyc7vyJWKa4Kc4Sp5yQzpMt9kE%2FP6K5Hj8VtBQdPnR4rTTll%2FYfoEzv7EMTCsRvXT8yQLyOWZN%2FMSgTBI6Cz2vRA3qlamC3H4m9dlOW7GeNnelXoqv0KDxKcx97Dm1lxLWEBY%2BpWNJhnj9N1WB0sTb4f0chOrdfijoFDet4WPVIguq%2FsEQO3bbTrYcFDuMBqbzThske6i1cP3mO5yTXzhQUpaRmM2UICk0Khp%2F6nlJU1m7UqxzOzDyr02sSH2zD%2FwxzPRJ3C0BYmMcCxVt6gZkq%2BREHZA9dI%2FJddFEv6Ysl%2F0YYJ38tK026nHio%2BLSne%2FmPnF9z2YWB4QCYU%2FtC%2BP3fIFCeB8B3TzvFdKhTuweu5l5NePc7nZ56eK%2Fa%2FrKKxCp1W%2BiJv20q1e62udJmjBDjzGnsh%2FXEYGNpOQKCWMLDfh8oGOqUBFYXPKquZrg3C3azgLh6XPyzyKs8cfvLPIyvxU6zqjtMPYsrk2vszVfiUHLSFYQ7XmiwH12qZPhnEj8J8GWLwO0vh1msADkO5cfcnmEg%2BvIDfG84n%2FsiTmG%2B6%2B5jJGkT6St%2FHunkJgK97iIturUgCepXvqIBpOVn2ZNRcmAdHgbf8gkG50714PlaJvCciIRO3LciD2xCnoAUFI9%2FZqvdmUdT0flja&X-Amz-Signature=40bd5845e01c2dfa199cc337c1bc6aea9fcbc1ab8ec851ed62b4521a354b57dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
