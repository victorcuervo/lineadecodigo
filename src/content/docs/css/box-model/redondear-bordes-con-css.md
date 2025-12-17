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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4XZTCE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEv%2BUiBgFIESZbhntzjmMTASXGZeLPddL%2B%2BS15o6LwXwIhAIuAz40eBKPlKEh%2B3bY%2BrktEGHCcgN4hqPiUkTwEKXuQKv8DCHsQABoMNjM3NDIzMTgzODA1IgxgWNHk47kedKgL4sgq3AMCbJ%2Fs0%2F1geV%2BIZFrGR3jHInaoKNGO%2BCpiqSZ3MS20TVLLRuCaN5impUb7wx4lYFpXa6ybNmW7ULUxkMd3qEcd3%2F%2FSH2f%2Fyw0dks1QmvG3E6bGIY7W0UxfVLEiokE4ceL9aVU5g8DKSkEyvPJJG36w1JSX%2Fm2bLd9C7qinfRyVDsus5MpaNavD5DGq79AjamO3ZvoV%2FGpfYQN%2FFNjk41V%2FXck3FtT0l2LlOsVWrFY7S0GRaVuknTCV1r%2BEZLi4fCzgTO2SayzavOo7VxD%2FetKqLiD%2Fmb9lwmYHKi%2FCxdzErN8rmMzbWaq8ve3SXo5j3uWDEJMcaEzBKxZt3xYfAgFe9J0ilmdDd1cLIlxxY5QOlAsnsuuZrJLT%2FoX0eOMjoiluQt0Wtd9zZ4iqw%2BC3HQH5j4Ff5nArug6%2F648%2BxGKIJ6BRIF%2F64EERGNzZj5kk56XamfsTxiD7EDb9g3u50jDpeiSP0Gswi57J9MsPszG8zmtJ7PhYV9MRlCIJe7tq6EbQEX7s%2FTZAjjT8GaDGo%2B4cRWwH32TIQU8PaNNyEx2nEIjV76GN%2BIOUeFQemQOx2gF7n%2BjLWHebTwpn6xUIjEFsaPnGaWCoF%2F4OwJyc6AeuIzXytqL1KpSogzAT%2FzDR74nKBjqkASAiGiy%2Bgig3F6f7OS5pxcEG3V4JiR1XVL3vJMQse%2Br48aXpP5SgylGjKc0fIJ6Z48%2BQTHLhV29LJcvVFWjzOGAZr7ZrwuymSG%2F2%2FEy5ULP%2BhgHcTnjIoHbqn%2BmKksUrYYLrKSn11xvm0alCt4Bzu1mEZ%2BGnsIw9n5Zznmet%2BsNTRyJGs7w3CCpKhxWjeym%2Fox0kTiFYUbJ36RoUu%2B17e3AsIHca&X-Amz-Signature=b21d8f48d9cd86090ed28c407f9b87170782c895dbff03499edcc88ac13eb409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4XZTCE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEv%2BUiBgFIESZbhntzjmMTASXGZeLPddL%2B%2BS15o6LwXwIhAIuAz40eBKPlKEh%2B3bY%2BrktEGHCcgN4hqPiUkTwEKXuQKv8DCHsQABoMNjM3NDIzMTgzODA1IgxgWNHk47kedKgL4sgq3AMCbJ%2Fs0%2F1geV%2BIZFrGR3jHInaoKNGO%2BCpiqSZ3MS20TVLLRuCaN5impUb7wx4lYFpXa6ybNmW7ULUxkMd3qEcd3%2F%2FSH2f%2Fyw0dks1QmvG3E6bGIY7W0UxfVLEiokE4ceL9aVU5g8DKSkEyvPJJG36w1JSX%2Fm2bLd9C7qinfRyVDsus5MpaNavD5DGq79AjamO3ZvoV%2FGpfYQN%2FFNjk41V%2FXck3FtT0l2LlOsVWrFY7S0GRaVuknTCV1r%2BEZLi4fCzgTO2SayzavOo7VxD%2FetKqLiD%2Fmb9lwmYHKi%2FCxdzErN8rmMzbWaq8ve3SXo5j3uWDEJMcaEzBKxZt3xYfAgFe9J0ilmdDd1cLIlxxY5QOlAsnsuuZrJLT%2FoX0eOMjoiluQt0Wtd9zZ4iqw%2BC3HQH5j4Ff5nArug6%2F648%2BxGKIJ6BRIF%2F64EERGNzZj5kk56XamfsTxiD7EDb9g3u50jDpeiSP0Gswi57J9MsPszG8zmtJ7PhYV9MRlCIJe7tq6EbQEX7s%2FTZAjjT8GaDGo%2B4cRWwH32TIQU8PaNNyEx2nEIjV76GN%2BIOUeFQemQOx2gF7n%2BjLWHebTwpn6xUIjEFsaPnGaWCoF%2F4OwJyc6AeuIzXytqL1KpSogzAT%2FzDR74nKBjqkASAiGiy%2Bgig3F6f7OS5pxcEG3V4JiR1XVL3vJMQse%2Br48aXpP5SgylGjKc0fIJ6Z48%2BQTHLhV29LJcvVFWjzOGAZr7ZrwuymSG%2F2%2FEy5ULP%2BhgHcTnjIoHbqn%2BmKksUrYYLrKSn11xvm0alCt4Bzu1mEZ%2BGnsIw9n5Zznmet%2BsNTRyJGs7w3CCpKhxWjeym%2Fox0kTiFYUbJ36RoUu%2B17e3AsIHca&X-Amz-Signature=19b09fcac5d9c60279a1535cecdc5e8d1d80aa76746da937c2babd246a5dc257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
