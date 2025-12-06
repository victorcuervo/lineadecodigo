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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPY6UU7X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZT7ya%2Fs0vhZNI6yvaWHRfh5koKdETcvrem4ib6VCrAiAvlnesLvRLqC0fteMsR4TC8%2FdIPKgjD2vJku1p5D%2BEdyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMMo7NByWf%2FT0yE8gYKtwDsWyqqJ5CvVzXeamm2h6WHVx9LT2IS9xy7%2FCYZeuT%2BGxokbsBWhF5EqBiywbGbjgzT5BxvJ%2Ffw2woFj6irJYwra%2FKbogviS9ynuAcq%2Fp1xXMwG39Zi5AlzSSF4ueEJK8G9R9b5ipKuinVUhI%2B4umMbUz7%2FafoswYOdlqhGiCpH2n2rmQi98ojWtAYLtdwTKLWQ6BYggQA%2BHJ8XtZmWPGN%2FXXgnVTHr1%2BU9tr0mSkim%2Bv7SY1fg5dzdG6abekYLSu5VDwxOwO5EgJ1T43dzO4ibsx6e7VC6%2BzsQDYFE4sUEmZikWc64aV%2FiGaIOz9Zv7LXY5s6OG9yGNIVzmXQ0m5UnEA%2Bl%2BkOaWSTZzorPHIWeBKUuu5MQ8XEZZ%2BMzzzMCXfVKUB57r0RgcnHcKJtoImMUsW9zCy5dMbq3Ia5q1duf4dOKHEzCf2orbTFUDFy%2FpRUGRfPLtEl57tgMge16e1LP0SHenGizo5Xm0qZooWiQu6zPlOCRKxALz5PeAIwt8%2BcZ8khmCITzwCYKBy3gzdel2W6BhV8mZHTTkzKzTJ85rLzyj4vZS6KHdgjTWXz%2F%2BfnZxShvz6pGAcVhtLjaUZ%2BKUzgxfdDPscU0ORPx2kHW5fRcZo94GS3clNAefMwlevPyQY6pgHb4jN%2FPfiiTUwLuhcyaJXVCPDJqp6uEVJkZzJf2WfNkEn4aukwEIOUDdhvYyWpjKzYUPPI0HvpnEhvPURFfAJOeibXJ2vJmwGRCVrnlG9gXmKBG%2BodklcAKhIM0uMNsZNZxQXe760HfTxMN%2B%2FVxYBWtgvs2BTGM4SxbtV3uZdFA%2BYcNb%2BBrqeNupfdeJO8zckBnyWxXE1jCDiclS8Yas7nLR2sNJKD&X-Amz-Signature=04581e1638a1a9dc7451d71e85338c3e506a543bb24fc62a4407a159a34f65b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPY6UU7X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZT7ya%2Fs0vhZNI6yvaWHRfh5koKdETcvrem4ib6VCrAiAvlnesLvRLqC0fteMsR4TC8%2FdIPKgjD2vJku1p5D%2BEdyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMMo7NByWf%2FT0yE8gYKtwDsWyqqJ5CvVzXeamm2h6WHVx9LT2IS9xy7%2FCYZeuT%2BGxokbsBWhF5EqBiywbGbjgzT5BxvJ%2Ffw2woFj6irJYwra%2FKbogviS9ynuAcq%2Fp1xXMwG39Zi5AlzSSF4ueEJK8G9R9b5ipKuinVUhI%2B4umMbUz7%2FafoswYOdlqhGiCpH2n2rmQi98ojWtAYLtdwTKLWQ6BYggQA%2BHJ8XtZmWPGN%2FXXgnVTHr1%2BU9tr0mSkim%2Bv7SY1fg5dzdG6abekYLSu5VDwxOwO5EgJ1T43dzO4ibsx6e7VC6%2BzsQDYFE4sUEmZikWc64aV%2FiGaIOz9Zv7LXY5s6OG9yGNIVzmXQ0m5UnEA%2Bl%2BkOaWSTZzorPHIWeBKUuu5MQ8XEZZ%2BMzzzMCXfVKUB57r0RgcnHcKJtoImMUsW9zCy5dMbq3Ia5q1duf4dOKHEzCf2orbTFUDFy%2FpRUGRfPLtEl57tgMge16e1LP0SHenGizo5Xm0qZooWiQu6zPlOCRKxALz5PeAIwt8%2BcZ8khmCITzwCYKBy3gzdel2W6BhV8mZHTTkzKzTJ85rLzyj4vZS6KHdgjTWXz%2F%2BfnZxShvz6pGAcVhtLjaUZ%2BKUzgxfdDPscU0ORPx2kHW5fRcZo94GS3clNAefMwlevPyQY6pgHb4jN%2FPfiiTUwLuhcyaJXVCPDJqp6uEVJkZzJf2WfNkEn4aukwEIOUDdhvYyWpjKzYUPPI0HvpnEhvPURFfAJOeibXJ2vJmwGRCVrnlG9gXmKBG%2BodklcAKhIM0uMNsZNZxQXe760HfTxMN%2B%2FVxYBWtgvs2BTGM4SxbtV3uZdFA%2BYcNb%2BBrqeNupfdeJO8zckBnyWxXE1jCDiclS8Yas7nLR2sNJKD&X-Amz-Signature=83f59b2f7ef0cfa309876377b9f8e2d0dc6a9d09e78642d870c8e26fd17dd33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
