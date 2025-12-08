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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEC5LKE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdwp9KOloEY%2Biwd8gig%2FSwfSdHn4IS7sHUoUl4bOFgrAiAe0OsqKdd%2Bj6O9PrBY5XOEHh%2FB3V0rt5GGFZ%2BytiemeyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMKql8XOQMkLV4l6SKtwDiQJu8MYgbQtkcNKNzo%2B%2FSPLPnQWDqX6F9vnRZlauVvUIp2Wz%2FHAEo0NQIdQ4J%2FcZHq4%2BBTxCWGUZyhYDL%2BckrMGEXzR38qhljQ1UNQUFpdARJ1APm8N26Q71yUX%2F9xfhgLSLKghxFR351mom5GfwVoki8oX991U8YrPvvNzPN2qPI%2Fdz1wAHmyJpj2XCkxf5kizbIALd6obD0BpRBwDmBpaf3JKjV1iCRb5xRpup93zpx6%2BjpNFlLB%2Ba8tdomnK3o0%2By2ApnPjvC2ECMs2muaPO70qKVLM063JhI5Rs%2BmaMco8hoWEH4aftjDLzoumJkZxeWOc91FhAwrSsPSgqXiSvfvJssMcKsv8x0bezu8H69GXLArOPMYUyiKpvG4%2BdkcsYylZVfljpyplH2P2EqI0gZgqtTrX6kVq2GN%2FSrUOVZEmyqaA71WyxAT4OpJbCVcZMwsaXZxw9g722KNuQULIakWGi5PU%2BQu0PZ5a84lV48ApVrCVGxWCWyczh6FDU41PX4gdU56OpT4GHekiIeaeYafbtfYIsW1eK9Rfrz%2FOL1aSPntlxtG3X6Sqz6sLbdygen0O6EJjGDKVsuVS3gSUGkaHsf9xu%2BCY91yaH41CKxKiJmmuZbRejmt8Uw1OTbyQY6pgEGBTwamShnMD5y7mn0sXK282ACawJ9Sngyn%2FrI%2BSP678R5SNcbqY5chmINi3gO2wr1iXKkvODI6uBHZEPlhclZZPrS26c3IzoucZEA9JWvdNHfiCEuaMkxkv8IuBLNy%2B%2F6wtxjKervt3G%2FCYDWhmJUBm1SylOVTUKBI7eNO2oKxsgc7REODjq6YJUbkw%2Fv8Hiss77ttPm5qekqgEhJZfK4Kvmf9dH3&X-Amz-Signature=4f6b0bab8d1c35041892fc3dd2da70b60f09e4bd16cb65d75ae783267651f445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEC5LKE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdwp9KOloEY%2Biwd8gig%2FSwfSdHn4IS7sHUoUl4bOFgrAiAe0OsqKdd%2Bj6O9PrBY5XOEHh%2FB3V0rt5GGFZ%2BytiemeyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMKql8XOQMkLV4l6SKtwDiQJu8MYgbQtkcNKNzo%2B%2FSPLPnQWDqX6F9vnRZlauVvUIp2Wz%2FHAEo0NQIdQ4J%2FcZHq4%2BBTxCWGUZyhYDL%2BckrMGEXzR38qhljQ1UNQUFpdARJ1APm8N26Q71yUX%2F9xfhgLSLKghxFR351mom5GfwVoki8oX991U8YrPvvNzPN2qPI%2Fdz1wAHmyJpj2XCkxf5kizbIALd6obD0BpRBwDmBpaf3JKjV1iCRb5xRpup93zpx6%2BjpNFlLB%2Ba8tdomnK3o0%2By2ApnPjvC2ECMs2muaPO70qKVLM063JhI5Rs%2BmaMco8hoWEH4aftjDLzoumJkZxeWOc91FhAwrSsPSgqXiSvfvJssMcKsv8x0bezu8H69GXLArOPMYUyiKpvG4%2BdkcsYylZVfljpyplH2P2EqI0gZgqtTrX6kVq2GN%2FSrUOVZEmyqaA71WyxAT4OpJbCVcZMwsaXZxw9g722KNuQULIakWGi5PU%2BQu0PZ5a84lV48ApVrCVGxWCWyczh6FDU41PX4gdU56OpT4GHekiIeaeYafbtfYIsW1eK9Rfrz%2FOL1aSPntlxtG3X6Sqz6sLbdygen0O6EJjGDKVsuVS3gSUGkaHsf9xu%2BCY91yaH41CKxKiJmmuZbRejmt8Uw1OTbyQY6pgEGBTwamShnMD5y7mn0sXK282ACawJ9Sngyn%2FrI%2BSP678R5SNcbqY5chmINi3gO2wr1iXKkvODI6uBHZEPlhclZZPrS26c3IzoucZEA9JWvdNHfiCEuaMkxkv8IuBLNy%2B%2F6wtxjKervt3G%2FCYDWhmJUBm1SylOVTUKBI7eNO2oKxsgc7REODjq6YJUbkw%2Fv8Hiss77ttPm5qekqgEhJZfK4Kvmf9dH3&X-Amz-Signature=d7404fdb654498c6ad28b9e6bd2a0ecfdfeb5b8a8d7075eb1f493a6301cc545d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
