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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQR5AH5J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4WbbOKy5Deedr6IzspqTDLy3vBFRkKluRPQTUfsanLAiA9qFqHcFfqHY8fmNJXPr5hh2zAvQWTrW1mSu4RjF7vMSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM8Vt%2FY66V9%2F%2FXkXQ3KtwDXsliobFgDaBkcmXwI%2Fm4Zdgs%2FyhBeLEUsgQwodVF%2BNE9DoXR%2Bx3mYqywp8xe7%2F5xFHbIb7dcrJ%2BJ5Q6CXMEit5fDhBZxBhmQxuhy2fqYKH0g9t6ELnQpUU2JKk5qWd3e5Jy6y%2BAr7IYQRKIJRAd2e6Ld8OzhStUJw%2BYiGi3eBxklsq8pRV%2FLtdArSYHVZACeUTmz5qmTaS4HiTAtEUCfoxdes1Yb4OuM9zmAEW3URW4PDAUlyOu31NzM9X0Y71BCLp%2B8AKKQ75jX%2BAAsQyJC4ekb4louR7R8yncuUpnTKj05H7J6%2F6pojLaaNxIVtK2qTv5xa5vVXaKqgBZ6GUzijaaBhl9ZMKy19lbxaMNrVhHqI4mlPvJtjrZCeiknhjM2x3Ypv2qMRWgseIoSKp2%2B4BpoxN4WFq86ndKFB3XXztd%2FA3sihXwGm1jlaiWMHCLYx44Wx0dSOV7YkrcbXdTv5qI%2FpARXSpzjsTrcL6hh59MUGLgSm9pRavJaZySKQfQkLQfEnwCky2JjReuZRpkDt7AUIPUDUmIBAlrAB8G3MBHElD3iBXEo3W7vMyCe6UgBiylFxI55q2e5uzeHx7dUfSDieEu2l%2Bl22Jh32d2xeFFLtl44oT5kiRIPwYUw4J7PyQY6pgEhI8a2k%2F5VoDnbLuObUsYNPZt6nR%2B2ycS7zJwjjU4gOgb6Ef5nMbdaSmygtM0Gqi%2FY2BIFJUNquk0KCeeuX23U%2BGWYoeCY68i7FkqZOVAieir%2Fcz7%2BRlDFH80uakyjGv0SgW9Ilj3wLC5dixXdXqoQI%2FBUei4mdLsi7ZhKQzhgSlS%2BSKWF62C%2B%2BYzfD3UtM%2FGn%2Bri8wI%2Ba0CVHqYu%2BMXCbdxzbH7lG&X-Amz-Signature=2d40d5a2793dc807b857fd8d1d6e4c96dabf0ba4f988566c5cc1b3e927429fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQR5AH5J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4WbbOKy5Deedr6IzspqTDLy3vBFRkKluRPQTUfsanLAiA9qFqHcFfqHY8fmNJXPr5hh2zAvQWTrW1mSu4RjF7vMSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM8Vt%2FY66V9%2F%2FXkXQ3KtwDXsliobFgDaBkcmXwI%2Fm4Zdgs%2FyhBeLEUsgQwodVF%2BNE9DoXR%2Bx3mYqywp8xe7%2F5xFHbIb7dcrJ%2BJ5Q6CXMEit5fDhBZxBhmQxuhy2fqYKH0g9t6ELnQpUU2JKk5qWd3e5Jy6y%2BAr7IYQRKIJRAd2e6Ld8OzhStUJw%2BYiGi3eBxklsq8pRV%2FLtdArSYHVZACeUTmz5qmTaS4HiTAtEUCfoxdes1Yb4OuM9zmAEW3URW4PDAUlyOu31NzM9X0Y71BCLp%2B8AKKQ75jX%2BAAsQyJC4ekb4louR7R8yncuUpnTKj05H7J6%2F6pojLaaNxIVtK2qTv5xa5vVXaKqgBZ6GUzijaaBhl9ZMKy19lbxaMNrVhHqI4mlPvJtjrZCeiknhjM2x3Ypv2qMRWgseIoSKp2%2B4BpoxN4WFq86ndKFB3XXztd%2FA3sihXwGm1jlaiWMHCLYx44Wx0dSOV7YkrcbXdTv5qI%2FpARXSpzjsTrcL6hh59MUGLgSm9pRavJaZySKQfQkLQfEnwCky2JjReuZRpkDt7AUIPUDUmIBAlrAB8G3MBHElD3iBXEo3W7vMyCe6UgBiylFxI55q2e5uzeHx7dUfSDieEu2l%2Bl22Jh32d2xeFFLtl44oT5kiRIPwYUw4J7PyQY6pgEhI8a2k%2F5VoDnbLuObUsYNPZt6nR%2B2ycS7zJwjjU4gOgb6Ef5nMbdaSmygtM0Gqi%2FY2BIFJUNquk0KCeeuX23U%2BGWYoeCY68i7FkqZOVAieir%2Fcz7%2BRlDFH80uakyjGv0SgW9Ilj3wLC5dixXdXqoQI%2FBUei4mdLsi7ZhKQzhgSlS%2BSKWF62C%2B%2BYzfD3UtM%2FGn%2Bri8wI%2Ba0CVHqYu%2BMXCbdxzbH7lG&X-Amz-Signature=4ee6894b04eb7787ffd9362ddcc07d6673e118ae32450b76b6220f7e47fb6601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
