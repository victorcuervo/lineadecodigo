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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQMEBWHZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNqhtr8rjBBMLE%2BIjyKtcgu0jZ6O5JCHZ19QGOXV7ntgIhAMpMlIgpZDM%2F%2BCtZQayqr%2B7ugFui6mLf4u1XLvLRCIv%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgxQk9D1%2FQPgJmfSacQq3APjDUS7vOtLox1s8fmRSbvOgwe2zlcFcHjEoxSZNw2j8Hx6JN8uaySHqhgCjag%2F7MZoQGmEL48159G6a58zWO0iG2tfDDnk03NFZguJIldXji9CCpocHmAq62LO5pKf5Sk5uDsxF1KzB0%2BuWSnoS16TVu%2B4TTwY9Wn8QrwXPPiElV7vJRmfK%2F526Kk90iJMmSRF0Mb4cjWk3c8ad7X6sABfzVVCxF0zE9WktoITXfmk5HnSei9nd2OGEYgFLwocZ3Fh3lZQT1El%2B1GSPXFKI28PQy4K2RtTBjJL0bfLqz3uCJmDaO8avUJhiht8waURWIM2IXNk5ffBr3CEDpfLpOZ6b%2FfhNCYcjlYExYJFJiWFoxO1whTNbxTSwAcrBa4R9uZxWi9XJQALhMOpxZPtPRrMYGyF1qGnC%2BgmBkEuI2bWHGsFOnfVIAqKG5UYmM26V5FnW1Ssnz6wz0gau7qiz836WH7C9fZ%2FAfv4R8bTKwH1N%2BU6dzuqhVpwRCrynGWNY%2FmlxeTZHX4KQhlmTbYrBqP7r7EH6Gipvt2XuhD%2F6GFqUryUMisWt%2FPaCWQG6ZnJiWXt2XBXssX5IIhLaiPtUh7TcAXUy6xCtxad%2FpAGvFhHi2FiXWbIzwmibnFq%2FjCTi83JBjqkAbZI1XIbk3G2a6znnExlo8%2FgnmnH8zWf4jd3mVym%2ByGLBwvTDro9qWq13sdR46lEUXw7Lv1fL9z0kMocRGlJUPP1RmW%2B4%2FQfvEaBc6GrqckXmV80HXL8aesqBmYgMVY7%2Fet4HOchRpl0AsmrWaxYX4Mdo6e6%2BhMvImvZTrhf%2Fl0CDx8VzlXIvFnrs%2Bx58U6m0JqXaJizWq3RGqSSyvvqNUj0X76A&X-Amz-Signature=cf33324d51c8e65490b880f82d75b62447275cccfb0b3e568629251ae4a1cba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQMEBWHZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNqhtr8rjBBMLE%2BIjyKtcgu0jZ6O5JCHZ19QGOXV7ntgIhAMpMlIgpZDM%2F%2BCtZQayqr%2B7ugFui6mLf4u1XLvLRCIv%2BKv8DCGYQABoMNjM3NDIzMTgzODA1IgxQk9D1%2FQPgJmfSacQq3APjDUS7vOtLox1s8fmRSbvOgwe2zlcFcHjEoxSZNw2j8Hx6JN8uaySHqhgCjag%2F7MZoQGmEL48159G6a58zWO0iG2tfDDnk03NFZguJIldXji9CCpocHmAq62LO5pKf5Sk5uDsxF1KzB0%2BuWSnoS16TVu%2B4TTwY9Wn8QrwXPPiElV7vJRmfK%2F526Kk90iJMmSRF0Mb4cjWk3c8ad7X6sABfzVVCxF0zE9WktoITXfmk5HnSei9nd2OGEYgFLwocZ3Fh3lZQT1El%2B1GSPXFKI28PQy4K2RtTBjJL0bfLqz3uCJmDaO8avUJhiht8waURWIM2IXNk5ffBr3CEDpfLpOZ6b%2FfhNCYcjlYExYJFJiWFoxO1whTNbxTSwAcrBa4R9uZxWi9XJQALhMOpxZPtPRrMYGyF1qGnC%2BgmBkEuI2bWHGsFOnfVIAqKG5UYmM26V5FnW1Ssnz6wz0gau7qiz836WH7C9fZ%2FAfv4R8bTKwH1N%2BU6dzuqhVpwRCrynGWNY%2FmlxeTZHX4KQhlmTbYrBqP7r7EH6Gipvt2XuhD%2F6GFqUryUMisWt%2FPaCWQG6ZnJiWXt2XBXssX5IIhLaiPtUh7TcAXUy6xCtxad%2FpAGvFhHi2FiXWbIzwmibnFq%2FjCTi83JBjqkAbZI1XIbk3G2a6znnExlo8%2FgnmnH8zWf4jd3mVym%2ByGLBwvTDro9qWq13sdR46lEUXw7Lv1fL9z0kMocRGlJUPP1RmW%2B4%2FQfvEaBc6GrqckXmV80HXL8aesqBmYgMVY7%2Fet4HOchRpl0AsmrWaxYX4Mdo6e6%2BhMvImvZTrhf%2Fl0CDx8VzlXIvFnrs%2Bx58U6m0JqXaJizWq3RGqSSyvvqNUj0X76A&X-Amz-Signature=eba071329c08ac81189ea913f89a309d53b24dbdea12a601f7b2a7417df53f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
