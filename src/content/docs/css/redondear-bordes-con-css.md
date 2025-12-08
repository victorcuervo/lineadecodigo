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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UVPJ5IJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbXA404xw7DuBiwL4XAUml0XCzYNbvinp1zJFQJAy8FAiBmRSh8L6Qn3m1e3Yc%2B%2BuH1re1IIoq16ZSVmKNv3T%2BsXiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9fPipjTb5biK%2FdmKtwDZaAXiUzssAlp%2Bx7zlhLu%2BXLxBZ7BhgY0vUSgi2Iw5uZvExrYxOnUwqBr8wE8XVtQUCX1KwfcxR%2FZ9k%2BKbyCExmiVHAwkBNuMqYLih0VvHCAXokhNe%2Btxc3iXog6xhL9Qg2lkmOzcuCVLjDHYC4Eiger%2FpGaGJAlrRO47kz%2Be0HgNM8%2BM3njfQ33KIyLiFQctpe%2FyggU8azLUYMiftIXTY1fXdDExrsFeRZ1Xv2YmInoLO1VCbkE5JGKyyLgktrAjXAAhE%2BNofr2FHhlW%2BJlYzNm5rOwj5QpAohtVlpPXSAu4ML%2FK%2FEQHm0ftI9frj4Yz7eio0sjkG8%2FUKJd82EZnNaoAfqdWplyvI3tlieXsFU7ABPfHTWP2mDOEFJmLe2d0EOU08U9XNDWMsWQJD3MuZ2I%2FWIahrum6Y8lXOZUDbR3aXyhuQrnOr2kHxmtuf0Btk3rbxduBoygpzv0MMfbqbfTgoArjErbw18w3SdHPKp3Yz%2Bhj41SC2KZO6nAWNeD0x%2FCpQJiWMu1xYKCtHpsqBTLMOGGFGuR8n8s7qZhZIYdNQnpe8H7sBQrqcjhh9TAyL3Tx7zJz6LVqzSgxlNWIC8ibyGAICXvXrCJrBmfulgoMraYtjn3Kpgk7elgwv%2BTbyQY6pgGiNWCf43sJk5kTH%2FKLDEPqNZIAU%2B3ZiPoNgt%2B08pbTYtriLx%2B5WbAqZZglC2HbX75w1v5pFjl5oQ1PUl%2BmDXcNsGy0qej3m%2F7ZH8DycVfk6EXZrArL%2BfCsl5vltBrLwnU%2FHjgs%2Fm93RZuYOJxAJldYyTCmH1anyvxZnQicryEbeCOoz8OO8AB1I1AHcBN2QC9G1K1Z7iGADyFCyOXwjJLcc5AzwfNo&X-Amz-Signature=95c2f093ccb929375e26a02481b2c3351892e5e4d3031489c9ad64ee129de11f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UVPJ5IJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbXA404xw7DuBiwL4XAUml0XCzYNbvinp1zJFQJAy8FAiBmRSh8L6Qn3m1e3Yc%2B%2BuH1re1IIoq16ZSVmKNv3T%2BsXiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9fPipjTb5biK%2FdmKtwDZaAXiUzssAlp%2Bx7zlhLu%2BXLxBZ7BhgY0vUSgi2Iw5uZvExrYxOnUwqBr8wE8XVtQUCX1KwfcxR%2FZ9k%2BKbyCExmiVHAwkBNuMqYLih0VvHCAXokhNe%2Btxc3iXog6xhL9Qg2lkmOzcuCVLjDHYC4Eiger%2FpGaGJAlrRO47kz%2Be0HgNM8%2BM3njfQ33KIyLiFQctpe%2FyggU8azLUYMiftIXTY1fXdDExrsFeRZ1Xv2YmInoLO1VCbkE5JGKyyLgktrAjXAAhE%2BNofr2FHhlW%2BJlYzNm5rOwj5QpAohtVlpPXSAu4ML%2FK%2FEQHm0ftI9frj4Yz7eio0sjkG8%2FUKJd82EZnNaoAfqdWplyvI3tlieXsFU7ABPfHTWP2mDOEFJmLe2d0EOU08U9XNDWMsWQJD3MuZ2I%2FWIahrum6Y8lXOZUDbR3aXyhuQrnOr2kHxmtuf0Btk3rbxduBoygpzv0MMfbqbfTgoArjErbw18w3SdHPKp3Yz%2Bhj41SC2KZO6nAWNeD0x%2FCpQJiWMu1xYKCtHpsqBTLMOGGFGuR8n8s7qZhZIYdNQnpe8H7sBQrqcjhh9TAyL3Tx7zJz6LVqzSgxlNWIC8ibyGAICXvXrCJrBmfulgoMraYtjn3Kpgk7elgwv%2BTbyQY6pgGiNWCf43sJk5kTH%2FKLDEPqNZIAU%2B3ZiPoNgt%2B08pbTYtriLx%2B5WbAqZZglC2HbX75w1v5pFjl5oQ1PUl%2BmDXcNsGy0qej3m%2F7ZH8DycVfk6EXZrArL%2BfCsl5vltBrLwnU%2FHjgs%2Fm93RZuYOJxAJldYyTCmH1anyvxZnQicryEbeCOoz8OO8AB1I1AHcBN2QC9G1K1Z7iGADyFCyOXwjJLcc5AzwfNo&X-Amz-Signature=56a6c98c52673026b0bfe9f26abf4d9a89874a6da00154bf9864679457cda37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
