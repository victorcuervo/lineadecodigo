---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUID2DK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCb2ZOoIEV6Dpt5EyKCexKEcBQsT4dAEKc0sea8oRYzZQIhAKSjv16KaaIH1A30KRI0eKH%2F2AFASGpMD5k7%2Btats72mKv8DCDYQABoMNjM3NDIzMTgzODA1IgxPDsOi5AMl8ECERTsq3APd6iT7o%2FRb%2FvEfiJx%2Bycw2PKzBH%2FrdfGcRgmDzgdXXSFi9APxzODWFkEiRcdvC%2F2fNCYOrZ5uHkCgBrjXdqtr9UTNQ%2Bs33Jmz0FhOWtBvji8GD0usujkbvGMke3HztJxIVpqm7pAbCk%2B%2FH%2BfydnkDRxxqIzrQtKNS9BaMPLY%2BD9fZM27%2FjFEmXXLJ7X1azr%2BYZEwh6mXNKtYO3mg314lbhogWC0Cz5MB%2B6nX1gnjibGjnhZEwzQNyBhLesVlvBScCkRAntaQDTlREUhsWEjiYy39hAz2AZC8kapjPuCe3ikdFwwhNTLeeQQ4l8%2FtfQcS7sEq%2Bwm8rfd%2BuZVpktj2mo96Jj5TSRPE4E8pB4ig98vD3qpSZ1EPFnz0DeeH7BtXmwp9CjJec29u7ImQBhDKlIXUl%2FGYExXNFSr3Fs%2BEaUszjb%2FhZJhbgziRjKMW66j9SCofcryYIMvOV%2FPFQ9fOaSDe5nTOpz6u0xWR9lnc4FXe%2BvO8xz3SsIv2oJkPacGQA7bgdFWPLCtH5ZJEXss8KG67K5In174j9OJqkBS4KxXEfrfpYiTzPSthW1%2B4Z69jjqmUFzsACt8kPTenQp6XrEwQVeHKX1GdFnVIGOUUTA6ZGhCaG8jzwX4AKOGTCUvcLJBjqkAbikwn%2BSaotzlMdax%2FrCc7TkzO%2FA5LUeZHWU%2FMacYBjSyXWJbFJMdXyJ761SWM6Cw8WvZnqzatlTV5ah6HTC3IJ7GqGsCjj83i6lz6PeLgCRshLIPBELWfYP7mlqHhVssZKxRbgAovdyCts773qBriO2Gdq%2B8Sb9s4y3qW3veZ3lZ3FLxURr6pbLwJg5hAGDErayPhdeiF4by4wXwKUGmNakFU5W&X-Amz-Signature=f164e35f53394c550d3216fcd0024e285952553dabccafc4ca9cfa1edba42635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUID2DK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCb2ZOoIEV6Dpt5EyKCexKEcBQsT4dAEKc0sea8oRYzZQIhAKSjv16KaaIH1A30KRI0eKH%2F2AFASGpMD5k7%2Btats72mKv8DCDYQABoMNjM3NDIzMTgzODA1IgxPDsOi5AMl8ECERTsq3APd6iT7o%2FRb%2FvEfiJx%2Bycw2PKzBH%2FrdfGcRgmDzgdXXSFi9APxzODWFkEiRcdvC%2F2fNCYOrZ5uHkCgBrjXdqtr9UTNQ%2Bs33Jmz0FhOWtBvji8GD0usujkbvGMke3HztJxIVpqm7pAbCk%2B%2FH%2BfydnkDRxxqIzrQtKNS9BaMPLY%2BD9fZM27%2FjFEmXXLJ7X1azr%2BYZEwh6mXNKtYO3mg314lbhogWC0Cz5MB%2B6nX1gnjibGjnhZEwzQNyBhLesVlvBScCkRAntaQDTlREUhsWEjiYy39hAz2AZC8kapjPuCe3ikdFwwhNTLeeQQ4l8%2FtfQcS7sEq%2Bwm8rfd%2BuZVpktj2mo96Jj5TSRPE4E8pB4ig98vD3qpSZ1EPFnz0DeeH7BtXmwp9CjJec29u7ImQBhDKlIXUl%2FGYExXNFSr3Fs%2BEaUszjb%2FhZJhbgziRjKMW66j9SCofcryYIMvOV%2FPFQ9fOaSDe5nTOpz6u0xWR9lnc4FXe%2BvO8xz3SsIv2oJkPacGQA7bgdFWPLCtH5ZJEXss8KG67K5In174j9OJqkBS4KxXEfrfpYiTzPSthW1%2B4Z69jjqmUFzsACt8kPTenQp6XrEwQVeHKX1GdFnVIGOUUTA6ZGhCaG8jzwX4AKOGTCUvcLJBjqkAbikwn%2BSaotzlMdax%2FrCc7TkzO%2FA5LUeZHWU%2FMacYBjSyXWJbFJMdXyJ761SWM6Cw8WvZnqzatlTV5ah6HTC3IJ7GqGsCjj83i6lz6PeLgCRshLIPBELWfYP7mlqHhVssZKxRbgAovdyCts773qBriO2Gdq%2B8Sb9s4y3qW3veZ3lZ3FLxURr6pbLwJg5hAGDErayPhdeiF4by4wXwKUGmNakFU5W&X-Amz-Signature=a0e9b26536cd8134de6423a6165b1a1ef3f8e88fead92f8d8f5cdde6ff3f783e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
