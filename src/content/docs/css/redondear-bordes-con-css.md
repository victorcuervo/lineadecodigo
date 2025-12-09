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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBXB2BU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETbOhRp6sf99RckHIBHqyJNuB2%2FUD2eWMVtTWHh0sdhAiBGu5jO5cVoUrmCmLDG7AwjzgjqBOU%2BDMxqdTm0MiBB0yqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtIdDlOYTrURxaf6zKtwDWoTYxVUDxPtApLgbDglsK51%2FkkxV2HbdZTBlTRDcKUooxnJkhEaAxRwzLY8HnGqaSqoj90VjEIrX%2BifhF6DiJvJf5zuYs5t3rHnFCO8QEGQZ%2BGiqLw5KD%2F4swe4bvI0oEUbaPRuubQX0pTm08farVA0RH8l0d%2F34JP3wOskAkU01avJmFu9mGu2vtUBSWadwdGyod2IwDmD%2BQJjYxqXyobHZ9uS51%2BXqpc4xLVeWidlGnko9SHxvLv4MjtHMU05bXRhMS91cIeCdXeOKH8rCawhofpajwrftE8%2FM94%2Br32FEb6FmBfH8ZGEzFQ5RoYFnjTG9ec1QM3xcMgIa%2Bon%2BSdzBOdUrNdtKBLw%2BnFc8gPgxs8Asco5UPRFS9hzkTcFATIOPH9KsTuvW7OdKN5BI6%2BKIG79Cfqu9BLl45vQWMT1cN3AsLBPUCv0qqZNca88ItLFLiM0v44vbbZvhGlluCHeuHT8bFiq48nMUrMYDlq7Txfol5cJe4CuHkhj1y7gyVWWZ6XoEg5GJiU7LDhGVDIPMQ3sWDVW5mt8A%2BMyTykZCZFR3%2FYdjCVNZu3T2MygMPXGH6bjKhQk7SaZJA4UzuYu24iSDSPDCCBFvC4j3pJhDnB3f7%2FX8KTMY52Uwhq7eyQY6pgERgU8klprBPNbL6PZnVdDd7T%2Fyd1WNriwOs0D6GjxfJL5GhZJ%2FkeUBTm%2Bm8HruPkpMPM%2FfkLW8KemKWcsi3N9Vhk3iIpImIkfG7bxqlLUPL9RUb%2FQgIx0kC9FbHVQswGNm6336IDCYJnhV6pYP7SOtD5HZNyEyZvnI%2BnUOGKlcSAcN0GRadrrZiQfOmDIY6quTroG4pr0pd9L8GQaJA3t8kTanCUAm&X-Amz-Signature=2faf43f628db56567fd393919c666857f655d8ec562c139891ee88a50a0e97c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBXB2BU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETbOhRp6sf99RckHIBHqyJNuB2%2FUD2eWMVtTWHh0sdhAiBGu5jO5cVoUrmCmLDG7AwjzgjqBOU%2BDMxqdTm0MiBB0yqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtIdDlOYTrURxaf6zKtwDWoTYxVUDxPtApLgbDglsK51%2FkkxV2HbdZTBlTRDcKUooxnJkhEaAxRwzLY8HnGqaSqoj90VjEIrX%2BifhF6DiJvJf5zuYs5t3rHnFCO8QEGQZ%2BGiqLw5KD%2F4swe4bvI0oEUbaPRuubQX0pTm08farVA0RH8l0d%2F34JP3wOskAkU01avJmFu9mGu2vtUBSWadwdGyod2IwDmD%2BQJjYxqXyobHZ9uS51%2BXqpc4xLVeWidlGnko9SHxvLv4MjtHMU05bXRhMS91cIeCdXeOKH8rCawhofpajwrftE8%2FM94%2Br32FEb6FmBfH8ZGEzFQ5RoYFnjTG9ec1QM3xcMgIa%2Bon%2BSdzBOdUrNdtKBLw%2BnFc8gPgxs8Asco5UPRFS9hzkTcFATIOPH9KsTuvW7OdKN5BI6%2BKIG79Cfqu9BLl45vQWMT1cN3AsLBPUCv0qqZNca88ItLFLiM0v44vbbZvhGlluCHeuHT8bFiq48nMUrMYDlq7Txfol5cJe4CuHkhj1y7gyVWWZ6XoEg5GJiU7LDhGVDIPMQ3sWDVW5mt8A%2BMyTykZCZFR3%2FYdjCVNZu3T2MygMPXGH6bjKhQk7SaZJA4UzuYu24iSDSPDCCBFvC4j3pJhDnB3f7%2FX8KTMY52Uwhq7eyQY6pgERgU8klprBPNbL6PZnVdDd7T%2Fyd1WNriwOs0D6GjxfJL5GhZJ%2FkeUBTm%2Bm8HruPkpMPM%2FfkLW8KemKWcsi3N9Vhk3iIpImIkfG7bxqlLUPL9RUb%2FQgIx0kC9FbHVQswGNm6336IDCYJnhV6pYP7SOtD5HZNyEyZvnI%2BnUOGKlcSAcN0GRadrrZiQfOmDIY6quTroG4pr0pd9L8GQaJA3t8kTanCUAm&X-Amz-Signature=2a3d22225d207adca1f86643f077aad1ebdbe4f9ed53168d66ab6550f25b620a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
