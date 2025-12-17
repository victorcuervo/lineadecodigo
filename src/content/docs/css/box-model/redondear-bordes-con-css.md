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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWLB275%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQC%2FfIEIn5s9CLYRNX5oBuPYV%2FM0M1rWDwXhVSoerevgIhAJ0LO9ewxzQwsBvOYtTebs2XpoQE2oPSd16O0MGcrZrGKv8DCHQQABoMNjM3NDIzMTgzODA1IgxSZ5yRCj9DbgQqaJUq3AOk5Hus07RSepwOet7EseW6yI%2BoZfqVX72qKv4OZ6K6%2FNH6tADzcgKKQQgFErT9Vt90EVCZqKJCEoahbh55XhuXEi%2F9u0i1gqN7j4be64NnYc3McYcus8oNfP%2BdJTjCiasGWDh0NCvE%2BRSadsfSuhGr322k1jZSfs6ODfuflE0psB9%2B8c5WdXQKT3rDTcbaXGPPyLkr4JYP31vyiEx%2FcI9QDkDFe1kqSaDM157DC1pgaBZiFPRvkknmjt93EpAtslp9hr1fyYdG87GD%2F50vI3z3ZLYg5IbCMZ5lXymZBxl4TFA59tVyA5Ng10kvohyQkoUbTzENQ%2B3G8cMuwv19XiP6pthAIf5M2d9DmYtrO4g7FhPjVdjdCXyNinIYMFcO53pscLNeeayxrDELWcfJ4QoTqqdYOKLZvsmw24IS4ehfMwqVZ%2BxFDOQNjlVPDJPcLez4v%2BokAyqy0EnWAMMiesEpJKFilL1YjTf1sKvKe8bZrfZ72GAsq9xa3crhb3OHiC4HOFs3e6s%2BeG4KVNN38Qf61XmHSJiwU4HPh89bLvjyICg39v5WdIGq5VVEKwR5Kpl2PxDGpLzsQRF38vP7QhzFm%2FVFmjbObyoiyYjPFjvOVz%2Bc8MqqpoE%2FEEBYlzC5sojKBjqkAQrZhr%2FJI%2BUCSQg8BX4%2FYri%2FLl1Ee3UXjvvK%2BL%2BNcEVBl4YtvTCHgAXLNddr3pPp%2B02ErDJtAhLiMP%2FXZ3UdEkCIz2NWwRI0ds918unYEQLSDD6u1ynqxXVSWeo7Q2oy4YhfVWTlgtYyM2fQHkB68gsyraPi6d9vEwufSNzmNyEzPBDKjlVEN33j8zRpTWoMoI%2Bq%2BU6k8G38sQUfPN0E%2BVXVQZ8h&X-Amz-Signature=2821b5d26177ab3fce4fed2a8a26c9a03fd93d46603940e6fb2889b6ea3ebeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWLB275%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQC%2FfIEIn5s9CLYRNX5oBuPYV%2FM0M1rWDwXhVSoerevgIhAJ0LO9ewxzQwsBvOYtTebs2XpoQE2oPSd16O0MGcrZrGKv8DCHQQABoMNjM3NDIzMTgzODA1IgxSZ5yRCj9DbgQqaJUq3AOk5Hus07RSepwOet7EseW6yI%2BoZfqVX72qKv4OZ6K6%2FNH6tADzcgKKQQgFErT9Vt90EVCZqKJCEoahbh55XhuXEi%2F9u0i1gqN7j4be64NnYc3McYcus8oNfP%2BdJTjCiasGWDh0NCvE%2BRSadsfSuhGr322k1jZSfs6ODfuflE0psB9%2B8c5WdXQKT3rDTcbaXGPPyLkr4JYP31vyiEx%2FcI9QDkDFe1kqSaDM157DC1pgaBZiFPRvkknmjt93EpAtslp9hr1fyYdG87GD%2F50vI3z3ZLYg5IbCMZ5lXymZBxl4TFA59tVyA5Ng10kvohyQkoUbTzENQ%2B3G8cMuwv19XiP6pthAIf5M2d9DmYtrO4g7FhPjVdjdCXyNinIYMFcO53pscLNeeayxrDELWcfJ4QoTqqdYOKLZvsmw24IS4ehfMwqVZ%2BxFDOQNjlVPDJPcLez4v%2BokAyqy0EnWAMMiesEpJKFilL1YjTf1sKvKe8bZrfZ72GAsq9xa3crhb3OHiC4HOFs3e6s%2BeG4KVNN38Qf61XmHSJiwU4HPh89bLvjyICg39v5WdIGq5VVEKwR5Kpl2PxDGpLzsQRF38vP7QhzFm%2FVFmjbObyoiyYjPFjvOVz%2Bc8MqqpoE%2FEEBYlzC5sojKBjqkAQrZhr%2FJI%2BUCSQg8BX4%2FYri%2FLl1Ee3UXjvvK%2BL%2BNcEVBl4YtvTCHgAXLNddr3pPp%2B02ErDJtAhLiMP%2FXZ3UdEkCIz2NWwRI0ds918unYEQLSDD6u1ynqxXVSWeo7Q2oy4YhfVWTlgtYyM2fQHkB68gsyraPi6d9vEwufSNzmNyEzPBDKjlVEN33j8zRpTWoMoI%2Bq%2BU6k8G38sQUfPN0E%2BVXVQZ8h&X-Amz-Signature=afc53116fdf82d26a30c6dc7a1b8a69541629c86db8d823d3d75fd47f3b5b090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
