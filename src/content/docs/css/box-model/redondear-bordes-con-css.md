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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6GZLLJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXplro%2Bue3FuMOLa8CUHJo%2Fe87wK7mb0l%2B3a2Dw8XbCAiBE%2BnkGLIbX2OrK6TZtpBI7iFw5WNKpBVkYmu2dySMumCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMd%2Ftef07VYC8wvSJuKtwDqHDnmrxNfi5KLT%2BrSxkm4mXwzmOmGw85iVXQQdInob%2FdvrwKV%2FQg4Xbbq5y4xQbIE3PZgwmSywf3AcrLhUKw4KvypCPln%2BcQ7OXgEqYOzQfdrF%2BMEQdPuCQA29QvhwqtmTsKhojjp7taeNalY3hlRkWUN%2FyQZaR0qmoEsUh%2BkeYByNSTh0ycxyZterC3cbVzld8N4xaSJ5jsg53oFi6mnIqqbWqSqZSBwO%2FiiTaUHRMd%2BTqKNQUV7VAU%2F7T7aO%2BoO11deu%2Bhu%2BpMo8K9gSWDHJr1fWOpHEW7saw5U3CjGEefOayRXkxp1Gk41WFxxUwTAMSe0WjfT5cs8FZNCYJ5RI5hWVI87FV7G72HASXaHZxCn29qfoRyoVzoygS8g6QBDCUOVFMZVYdED4pmzsJRdnJfXJcOfmMw0D49gSBrvYeGFL1NjnWXkBUC%2FZnNAYD7VQdrjxfSa%2FkNmji58kzk9tnvWVSUMaO3ojTptmbl9gwkzNhvevGbfvg5Vx65wxAAveUkKhHYjNABbpV2og1nTp6ZCI6xf%2B9hU5foiwbcZ73I%2FE62JtO1cgS3oOcTxktW9TuYXH0hrdvbownnuly0A%2BFQ6mDty14XGtsuOhWgC7%2FPK5m7UVPlpikHoHow%2Bc2IygY6pgHlCYfmYfygVS5T8NvxQ2aSl19zFe93kBU1yuppzpV00yPWZSvs6o2UoAfPIGHR1RnHpQ5SV4AKNlg1f0yHYHtfXqQT55rqMSwpuCAd2WwK5R%2BtZQID435PvbQlTKiLibsrOd8y0X1LCb5Pejzq%2FqIUQt7da7cShueaYbWXFQchDAnEQZU1OAGf6a9cML5AIldCJztkcJTIooYpdQo8EjSXIa1Dvn69&X-Amz-Signature=6b3066b83f0daf5d477789385d533a4fa98589548c4dacf71e64b2d56535ab08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6GZLLJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXplro%2Bue3FuMOLa8CUHJo%2Fe87wK7mb0l%2B3a2Dw8XbCAiBE%2BnkGLIbX2OrK6TZtpBI7iFw5WNKpBVkYmu2dySMumCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMd%2Ftef07VYC8wvSJuKtwDqHDnmrxNfi5KLT%2BrSxkm4mXwzmOmGw85iVXQQdInob%2FdvrwKV%2FQg4Xbbq5y4xQbIE3PZgwmSywf3AcrLhUKw4KvypCPln%2BcQ7OXgEqYOzQfdrF%2BMEQdPuCQA29QvhwqtmTsKhojjp7taeNalY3hlRkWUN%2FyQZaR0qmoEsUh%2BkeYByNSTh0ycxyZterC3cbVzld8N4xaSJ5jsg53oFi6mnIqqbWqSqZSBwO%2FiiTaUHRMd%2BTqKNQUV7VAU%2F7T7aO%2BoO11deu%2Bhu%2BpMo8K9gSWDHJr1fWOpHEW7saw5U3CjGEefOayRXkxp1Gk41WFxxUwTAMSe0WjfT5cs8FZNCYJ5RI5hWVI87FV7G72HASXaHZxCn29qfoRyoVzoygS8g6QBDCUOVFMZVYdED4pmzsJRdnJfXJcOfmMw0D49gSBrvYeGFL1NjnWXkBUC%2FZnNAYD7VQdrjxfSa%2FkNmji58kzk9tnvWVSUMaO3ojTptmbl9gwkzNhvevGbfvg5Vx65wxAAveUkKhHYjNABbpV2og1nTp6ZCI6xf%2B9hU5foiwbcZ73I%2FE62JtO1cgS3oOcTxktW9TuYXH0hrdvbownnuly0A%2BFQ6mDty14XGtsuOhWgC7%2FPK5m7UVPlpikHoHow%2Bc2IygY6pgHlCYfmYfygVS5T8NvxQ2aSl19zFe93kBU1yuppzpV00yPWZSvs6o2UoAfPIGHR1RnHpQ5SV4AKNlg1f0yHYHtfXqQT55rqMSwpuCAd2WwK5R%2BtZQID435PvbQlTKiLibsrOd8y0X1LCb5Pejzq%2FqIUQt7da7cShueaYbWXFQchDAnEQZU1OAGf6a9cML5AIldCJztkcJTIooYpdQo8EjSXIa1Dvn69&X-Amz-Signature=17c92414406eb9a144223292314fc37446b447f8ada5335b4321c48a627d339f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
