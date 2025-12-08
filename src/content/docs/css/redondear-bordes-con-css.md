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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVX4GJM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAlKszAAB0iM7%2FT7wkw2tlI%2FGTX5m%2Bwv7RcQDtQWCYnAiAe93xvQDuhOWGpc1VjKI3YtU3SRPg4pBO4s%2BATGeJJFCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvVatHTCx%2Bq0M8PolKtwD7cYHmA%2B97vpnwqQfYgvWBWG%2FUvYlQVQhqvdoWJ2oqoIPkJ9vtaKpUc9Ets4KrAcrzIL42gWz91PnlWFWcoEm3fkn%2FLcNMO0GeVm81FwDe6iOd5Kgy5wePJg6gPyhxfZqWQrKrDGYqvuSXqvi364%2FTk9YK9DrAi45V4lqGrTaxv%2Bm14MYnRhZMARn4EnWtgJoqxShSJyWIy4bUf74ZVAOxBYzUPEe%2Fq6oSwxlnovBf05cF9aMH5weKguoDCchLImUyCpXH1Ssa4lMdT5cYNRHJHmGOoMy19tZEp4K%2F733XSPGSJyfTW0ZndmIZhGy7Xg9uMWJQqW2JKJorjsfFY5KI%2FYEvHWsoo80QHl1u5bfNTYnB4iBy0pxqeIiKjciIzVDu0sFfWGh5CBuF5LP6NjPqVj%2BDTjmzrM0WJl3c%2F%2Fibi2wzqwMfFJJAFtOBD5aKuKeQuLK3pYdeY1mo5O6a39FWtdvCpV%2FTZgAwKVV4nmyv8LTRbOMGx9gX7MI%2BD1KQ%2BKM07alwZVAlDIXTvv%2BXFgwWTnvdXpTrNgAbminRgepxId5JBvKydxbwRzadVks1qoEiAH9w7NzckKNFteb90M7%2F6uL59WM%2BFkm5R0y34EWPYtmzAMc8qEfIHZhAwQw5rTcyQY6pgGZwblOyX7p3AivwTq8eWr95%2FeDdTKR%2F5o3kj2dqxxyGjygF6wd0ROTlazrvXhIL5StJMKnwyXz5vV5UQto9NEae2t9fv0ygJvoX%2Bzpdyk2K%2Fglxhg2g7epkbUnHHVVdU5VFu1%2FADGWok%2F4C66iTo%2BzLVLVCIZCDZeJvBc%2BYd6cAjMitWz%2BLh%2FqQRHvKnKnErX6bspUdg5Ba%2FLTGco6yhjXdVDeD4F4&X-Amz-Signature=bfa641379f7111d4a4fd763b5b901599672ba9f9f96b3c7c9801002b9ea85c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVX4GJM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAlKszAAB0iM7%2FT7wkw2tlI%2FGTX5m%2Bwv7RcQDtQWCYnAiAe93xvQDuhOWGpc1VjKI3YtU3SRPg4pBO4s%2BATGeJJFCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvVatHTCx%2Bq0M8PolKtwD7cYHmA%2B97vpnwqQfYgvWBWG%2FUvYlQVQhqvdoWJ2oqoIPkJ9vtaKpUc9Ets4KrAcrzIL42gWz91PnlWFWcoEm3fkn%2FLcNMO0GeVm81FwDe6iOd5Kgy5wePJg6gPyhxfZqWQrKrDGYqvuSXqvi364%2FTk9YK9DrAi45V4lqGrTaxv%2Bm14MYnRhZMARn4EnWtgJoqxShSJyWIy4bUf74ZVAOxBYzUPEe%2Fq6oSwxlnovBf05cF9aMH5weKguoDCchLImUyCpXH1Ssa4lMdT5cYNRHJHmGOoMy19tZEp4K%2F733XSPGSJyfTW0ZndmIZhGy7Xg9uMWJQqW2JKJorjsfFY5KI%2FYEvHWsoo80QHl1u5bfNTYnB4iBy0pxqeIiKjciIzVDu0sFfWGh5CBuF5LP6NjPqVj%2BDTjmzrM0WJl3c%2F%2Fibi2wzqwMfFJJAFtOBD5aKuKeQuLK3pYdeY1mo5O6a39FWtdvCpV%2FTZgAwKVV4nmyv8LTRbOMGx9gX7MI%2BD1KQ%2BKM07alwZVAlDIXTvv%2BXFgwWTnvdXpTrNgAbminRgepxId5JBvKydxbwRzadVks1qoEiAH9w7NzckKNFteb90M7%2F6uL59WM%2BFkm5R0y34EWPYtmzAMc8qEfIHZhAwQw5rTcyQY6pgGZwblOyX7p3AivwTq8eWr95%2FeDdTKR%2F5o3kj2dqxxyGjygF6wd0ROTlazrvXhIL5StJMKnwyXz5vV5UQto9NEae2t9fv0ygJvoX%2Bzpdyk2K%2Fglxhg2g7epkbUnHHVVdU5VFu1%2FADGWok%2F4C66iTo%2BzLVLVCIZCDZeJvBc%2BYd6cAjMitWz%2BLh%2FqQRHvKnKnErX6bspUdg5Ba%2FLTGco6yhjXdVDeD4F4&X-Amz-Signature=750975edcd8f5a46535b1bf160301a31cd702a9cac53f9d7676851aeffc35692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
