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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLJMTKO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPNaX7Hefs4vlos5DH4DbcWjNNuKDu49S4%2F6ZdCcOcoAiAQHJ54lE%2BuP1WZut5PjnhrBDu%2FdQXR5j5uJuwtCKkD%2FSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMVZ0s%2BURJASBzSPfUKtwDczFwhnnHevtcYgOCNyFnd2TyDP4GutBz%2FmJ0fLExzFQ6CruO08IHSHi1s%2B4%2FtiqyQmxDyGsm4VkurxJcLZeDQ8RDqDrgIq%2BD33u%2FTCLnukH3mNRuBUi1b3kaKaBQQxPohCh7aN9Ud0pqwplUCe2xpsWMFZpObefuJHmCubGgkZiVI7LIsMYY%2BzQSIvUjLSd%2FIQhslPouODE7FAkc0WJQP6gRrwzI7PI4WEwMYRvM%2BN4TGXpvBluA4dJHVH%2BIobaAHdcrXwvj%2FkKWRENYz5eJjNDNYvR4rXdD8B11pd0hqd5FshWt0inTIOJzQAjhTlJPzErzIjLnlDgUzNTQ0xpJeB9s9AJNWtNyFzTNuctpFxqFphkYZbpVqZWW3ufX9FInIdEpWEh3Ler9%2F24IrFFzIm9tXz%2FAMKvGpNelgwB8bfm4LDero45Ui60bEbj2fNOrpMfjrEVm56nvPzIocPegIfZS5dSaNIGW%2FABiUxA062WuABgG%2B%2Bb37vN%2FFTIfIniiUCK%2BrJkdxXp1OSqTpiqA6cKcETEOrN%2FST5WbvFXPd6zAWRCu2igcwT9xtcpDryJtN8e%2FSbgkfNTGmlW5z1X4MUvSOIq%2FlMrHa5U%2FxXB%2FNE6vVSDqZgfwkTal5Xcw75eIygY6pgFzOgwfRSCJhpyUOFIKfNPi9etb8jIMB4bc2DyoOJQFfPUbIDuZuTjAA4HZdEPsm5pAO3KVB0qxuPXaBtfcGeBPDnyoh0q88D2whYhwvQnUuckfd18aMn4EqD709%2FYKATWAIg1MiAEyMigz2TlW%2Bx%2BhVSdsmR%2BLrhQTw9QPIjqq%2Bkcx6TjeVJDsnEFJuqEoHmgNvf6YdbG8CUoq1Z8nlJdmbXVD1vgg&X-Amz-Signature=1dec3f67846f2a106a3d36639758bf69a6f1182546f816279d46f6fd57e179ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLJMTKO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPNaX7Hefs4vlos5DH4DbcWjNNuKDu49S4%2F6ZdCcOcoAiAQHJ54lE%2BuP1WZut5PjnhrBDu%2FdQXR5j5uJuwtCKkD%2FSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMVZ0s%2BURJASBzSPfUKtwDczFwhnnHevtcYgOCNyFnd2TyDP4GutBz%2FmJ0fLExzFQ6CruO08IHSHi1s%2B4%2FtiqyQmxDyGsm4VkurxJcLZeDQ8RDqDrgIq%2BD33u%2FTCLnukH3mNRuBUi1b3kaKaBQQxPohCh7aN9Ud0pqwplUCe2xpsWMFZpObefuJHmCubGgkZiVI7LIsMYY%2BzQSIvUjLSd%2FIQhslPouODE7FAkc0WJQP6gRrwzI7PI4WEwMYRvM%2BN4TGXpvBluA4dJHVH%2BIobaAHdcrXwvj%2FkKWRENYz5eJjNDNYvR4rXdD8B11pd0hqd5FshWt0inTIOJzQAjhTlJPzErzIjLnlDgUzNTQ0xpJeB9s9AJNWtNyFzTNuctpFxqFphkYZbpVqZWW3ufX9FInIdEpWEh3Ler9%2F24IrFFzIm9tXz%2FAMKvGpNelgwB8bfm4LDero45Ui60bEbj2fNOrpMfjrEVm56nvPzIocPegIfZS5dSaNIGW%2FABiUxA062WuABgG%2B%2Bb37vN%2FFTIfIniiUCK%2BrJkdxXp1OSqTpiqA6cKcETEOrN%2FST5WbvFXPd6zAWRCu2igcwT9xtcpDryJtN8e%2FSbgkfNTGmlW5z1X4MUvSOIq%2FlMrHa5U%2FxXB%2FNE6vVSDqZgfwkTal5Xcw75eIygY6pgFzOgwfRSCJhpyUOFIKfNPi9etb8jIMB4bc2DyoOJQFfPUbIDuZuTjAA4HZdEPsm5pAO3KVB0qxuPXaBtfcGeBPDnyoh0q88D2whYhwvQnUuckfd18aMn4EqD709%2FYKATWAIg1MiAEyMigz2TlW%2Bx%2BhVSdsmR%2BLrhQTw9QPIjqq%2Bkcx6TjeVJDsnEFJuqEoHmgNvf6YdbG8CUoq1Z8nlJdmbXVD1vgg&X-Amz-Signature=6225250d1423e6d790721cea5e1eb22809e0688bb5263447126bcd5a909b5118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
