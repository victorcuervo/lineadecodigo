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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634XZQAKN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFa8%2B1Lkm3ujE3sYi1QoFf17gIVA6VpsHVLRh7UjedtDAiApWY9wk3WRATTFOnb2WfqOLSlGHBu8o95lQYv9QQOUzCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVNwPMvhYN32tcldwKtwDvgAuTiut2d7p%2FhEiuWzdMpoKAgmdhzWMBO95AqfhJZu%2F0DShTnrGX3MnjxUGa%2BO2e%2BxBZCxsuPz1VBtWtl4J5nnSZ1LUYuAdVG3byZ7WoIYljeM%2BXoZG%2BfHD%2Fa%2FVKCkWF90WS6SX4CHgeacMs26DwugG8uYgW7RrH7TdLSUQsLjJmhoEJvZ7qprxTwJGtz8bR4qKKUwmNuSBCIkeFyTaEJsXhC0bhXJsD0o6W6wH8NDVsjkzpCkaP9jRrkTR%2FmLnGFBJZ5S%2Bbl6IPCl38E1f5qAbARlvMwq4Y7VnTbuaItkeyRrI4erQHJLrkbFtWgDATPT5IaI6wzzTefOAcWUAmaBKROhH%2BQ8PGOrCTov98qDi%2FteUddm82zr41G5MYMDNHNgajrsiXPOhae5vruJ8t5WRL6zBNEuwIkn3iFDzcjDjlOOP3b%2FR2asrrn2iybc6o%2F8QVclf9%2BfdE9FZuqsvKlPSKRDAPAy4KwxajhCQ3%2F%2FESF1ln87DaVaaiVGG%2BjCw7iKNcdqG4x9TicLiZ%2Bm0ghrTOkZ%2FX9SzVkFMJq8L%2FWcovvdUOYDpHNqR%2BOBY66A88urZaNjBCHnEYhIzdGvLspbovgVecX90UR2Y30dTRimIyYj0NBqs5v7zYYwwtO7ZyQY6pgGahP8ye0HMmLTfxCN4U5nKrm%2FQ%2FoyxPwZBvp%2FZJeydBGXsHF3qEwiXF6MPwz88bI95EijAhIqvUXcE%2FcuAYWatuOxTh1CPY2LLqvuzjmzlLrE%2Fqws9hq4I60aqSPXxMCWw8A9R5RnhR%2BLdjDf4ITdhz7s57gaZ8ZXoDEJ603DHOuoV220E8Xko%2FdE4%2F51JMPKz%2FgLsGDt2VNVWm8FmBGDxmg1cGE6H&X-Amz-Signature=d84fff5aea4e35dda6a3336b526170edd3b96d45b63db7ad05cac0a52a37eb50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634XZQAKN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFa8%2B1Lkm3ujE3sYi1QoFf17gIVA6VpsHVLRh7UjedtDAiApWY9wk3WRATTFOnb2WfqOLSlGHBu8o95lQYv9QQOUzCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVNwPMvhYN32tcldwKtwDvgAuTiut2d7p%2FhEiuWzdMpoKAgmdhzWMBO95AqfhJZu%2F0DShTnrGX3MnjxUGa%2BO2e%2BxBZCxsuPz1VBtWtl4J5nnSZ1LUYuAdVG3byZ7WoIYljeM%2BXoZG%2BfHD%2Fa%2FVKCkWF90WS6SX4CHgeacMs26DwugG8uYgW7RrH7TdLSUQsLjJmhoEJvZ7qprxTwJGtz8bR4qKKUwmNuSBCIkeFyTaEJsXhC0bhXJsD0o6W6wH8NDVsjkzpCkaP9jRrkTR%2FmLnGFBJZ5S%2Bbl6IPCl38E1f5qAbARlvMwq4Y7VnTbuaItkeyRrI4erQHJLrkbFtWgDATPT5IaI6wzzTefOAcWUAmaBKROhH%2BQ8PGOrCTov98qDi%2FteUddm82zr41G5MYMDNHNgajrsiXPOhae5vruJ8t5WRL6zBNEuwIkn3iFDzcjDjlOOP3b%2FR2asrrn2iybc6o%2F8QVclf9%2BfdE9FZuqsvKlPSKRDAPAy4KwxajhCQ3%2F%2FESF1ln87DaVaaiVGG%2BjCw7iKNcdqG4x9TicLiZ%2Bm0ghrTOkZ%2FX9SzVkFMJq8L%2FWcovvdUOYDpHNqR%2BOBY66A88urZaNjBCHnEYhIzdGvLspbovgVecX90UR2Y30dTRimIyYj0NBqs5v7zYYwwtO7ZyQY6pgGahP8ye0HMmLTfxCN4U5nKrm%2FQ%2FoyxPwZBvp%2FZJeydBGXsHF3qEwiXF6MPwz88bI95EijAhIqvUXcE%2FcuAYWatuOxTh1CPY2LLqvuzjmzlLrE%2Fqws9hq4I60aqSPXxMCWw8A9R5RnhR%2BLdjDf4ITdhz7s57gaZ8ZXoDEJ603DHOuoV220E8Xko%2FdE4%2F51JMPKz%2FgLsGDt2VNVWm8FmBGDxmg1cGE6H&X-Amz-Signature=6525bd57f355811b70ab6ad0ed98f56e7039719b4f08f3e5f5242f2fcf967120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
