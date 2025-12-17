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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNXPOAA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZzRNxQNOkBKNytlktDq7%2BSjTdt4xH98Ps5FFr0wa9kgIhAOwWE3uK9yRgho0v5up1dzHgg%2BHtWsHIvbOaP6yTJJf%2FKv8DCHEQABoMNjM3NDIzMTgzODA1IgyhHCkxxDnpu8CMiAwq3AObi5V5M0LH%2Bk8li2PA7bLRyqe9OHC2yJStExP0%2BM7Ainu0bMzhA8cso%2FdvQzt0NFB%2BehgSj5p8c287X0fXu3wP4WwYjraeWnAUlFxOM5Vy%2FmCKiihLrOrCgMuYfVMtOWdZrdBgFn6LOoY9%2BJt6d6h5vjNStjfdLfhV4R5QcrKhMArrzRqDNy281CbwMlX22qtsVvSTxKPWWPrSlA489J96JI%2BMqmfxp9Ypjifz7AMm0DdmoBZqj5deydD4gu%2FIA4EjRXpaJ46D%2FkcNbvqai4AgzsDEGavoJvqAnbh9%2F7SjY6ZPj%2BQdxnG4wrAzwGQdp5fQYj0l1CZoyCE%2B5fQ1zfbZ7Sq2QhiScE8D28dCgNjQUh7K%2BJnwqBRSXAr9oQb47gx2CbS%2Bt8mC0wtG5y3DqupT1KpHBqk4WfzQTKVgAC4rGL4zyXLZPkflYLd6vEjwW4G92IqmC2Q1qmwpxH7YEC%2F7eJPiiAvV5DU9WWtbkzoAvUUO3G%2FWDuugAaVkUZT7FdOmtW5Am8R6kAePM3nWk%2FLG1RzhvxdicvLSLGvp%2BgZR1l1pDtheKaFLw3LXXOt6hqzmELd4TkKzlw7zhTCN6%2BD7KVaSf8am4WQCm1RCSyFCGZyQg0aMwFIJWx41TjDY3ofKBjqkAdnDu4zm%2FvkFWu1MYj9J8vN%2BwamK82lw12%2BNxtqGrNfK%2Fh4lWSOITSTN74tI1jhurVAfTkqNFGrXvip8RlLaNojaLkbz0e1gQ4qbmeHoG9YQPM4rGtdXMh%2F6aDTh3j6KO7fF2kZ6K0X8CC%2BoArhPA9RorFavFRFRrQVeFfKJzpEcX70Gs48w8zldkyaNV87jPw1qer8oeHUjPsQW9DGbqBrAkRHy&X-Amz-Signature=5a93dd6d5373b490f92fc23df0bd0ca675f1e45905b7264b6aa07487d0c46138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNXPOAA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZzRNxQNOkBKNytlktDq7%2BSjTdt4xH98Ps5FFr0wa9kgIhAOwWE3uK9yRgho0v5up1dzHgg%2BHtWsHIvbOaP6yTJJf%2FKv8DCHEQABoMNjM3NDIzMTgzODA1IgyhHCkxxDnpu8CMiAwq3AObi5V5M0LH%2Bk8li2PA7bLRyqe9OHC2yJStExP0%2BM7Ainu0bMzhA8cso%2FdvQzt0NFB%2BehgSj5p8c287X0fXu3wP4WwYjraeWnAUlFxOM5Vy%2FmCKiihLrOrCgMuYfVMtOWdZrdBgFn6LOoY9%2BJt6d6h5vjNStjfdLfhV4R5QcrKhMArrzRqDNy281CbwMlX22qtsVvSTxKPWWPrSlA489J96JI%2BMqmfxp9Ypjifz7AMm0DdmoBZqj5deydD4gu%2FIA4EjRXpaJ46D%2FkcNbvqai4AgzsDEGavoJvqAnbh9%2F7SjY6ZPj%2BQdxnG4wrAzwGQdp5fQYj0l1CZoyCE%2B5fQ1zfbZ7Sq2QhiScE8D28dCgNjQUh7K%2BJnwqBRSXAr9oQb47gx2CbS%2Bt8mC0wtG5y3DqupT1KpHBqk4WfzQTKVgAC4rGL4zyXLZPkflYLd6vEjwW4G92IqmC2Q1qmwpxH7YEC%2F7eJPiiAvV5DU9WWtbkzoAvUUO3G%2FWDuugAaVkUZT7FdOmtW5Am8R6kAePM3nWk%2FLG1RzhvxdicvLSLGvp%2BgZR1l1pDtheKaFLw3LXXOt6hqzmELd4TkKzlw7zhTCN6%2BD7KVaSf8am4WQCm1RCSyFCGZyQg0aMwFIJWx41TjDY3ofKBjqkAdnDu4zm%2FvkFWu1MYj9J8vN%2BwamK82lw12%2BNxtqGrNfK%2Fh4lWSOITSTN74tI1jhurVAfTkqNFGrXvip8RlLaNojaLkbz0e1gQ4qbmeHoG9YQPM4rGtdXMh%2F6aDTh3j6KO7fF2kZ6K0X8CC%2BoArhPA9RorFavFRFRrQVeFfKJzpEcX70Gs48w8zldkyaNV87jPw1qer8oeHUjPsQW9DGbqBrAkRHy&X-Amz-Signature=f39df3e809f83127b388cc355b7e8a162acb216e4df8d1bfc67bb356bf3f30ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
