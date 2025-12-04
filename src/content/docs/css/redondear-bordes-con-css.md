---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F52YY32%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGwvGXRkliJMTPV8XFaM2hBKUu0nwIQywi8FJy44M2M6AiBa6EIO%2FHKlKZUjLCqKIS85KLkiWpMpenxMRzQVQ7hiWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMwHI7AE%2F4Y4YGaE%2FFKtwD50KYV4sj0uMeFECYojBdmdCcmefGfUkl2A17NHuU6jcVlSgmLvWywwBXOAbNgbwzQ6uFuXzYgjKbDZZuOXkDdhqhUs8%2FtBmNBvVCt4KKtKHfZkzV4WVrxU%2FNFHN1BIFpF%2BK2R928oKN4HB4SLUQGNVbJ1IQmszOKUAzIcQC5ZNrbxQ88tanqKcdEp%2Fa%2FpLy4sE%2Fo4D3%2BJ3hrjcKf7yBBl1DtoxY9fYaz3okxNwFj5RYJiwINqiL66mNOL0EvGe57q6smKTaLnHdBkylNCwiuoM1juoLstRDvaDtGXplmrrAXS%2BZJ4CEA93NJKdtEVBXGcdGnSJDsltbugEYZPvPaXfF5bImAkVizAm%2BRNTqyBOKIopAz%2BwnUMSWY2FbcxsW1bSGJ44igZfsqQegFY5awEP%2BXRw0T1gVe2e8kAcVXvuwAZjxYzwKRHgeAdglelV0AEk%2Bf%2B4BkG%2FxDS7w%2FpRxlZz7diuXSKfytDQIaowCiZjfEIxOmnd5h6ptdhEuGg5XdleQPJf4mROY%2FElW1K2mcpTPM%2FxOLd7CO18DUObntsqApgwyIYH6OnLqmC%2F2d5V8L7Ab8axE%2F%2F61zeFfLdPKSbrrz3%2FsoLQBeo518FjkMTgrIe1t9W0MvcJi3R9UwgNTDyQY6pgFR03UawoapbPqYkCy%2FqsBR9keXz9Rbotm6MY%2FKx8xqU%2F6JCgtoqr7lT7KJ67H6u4a88iTGK1twWdpj9mwbwjR6kqUdm10%2BZUAzteTFqjjfsN%2Bf25KqLp%2BHh7pUoDMDSU1oxGyiNP6ZvG0ZvT3Q3DRbi%2FafMccnw%2Fnwh9EbZn3eF5TYYlGf9blyWUAW9F8FCb4BPgeEAgBmtz%2By36XkS6mgPcZ5rxwl&X-Amz-Signature=dd76a283ce4910617390d8297ae866c8e001f953f336e4f34fb0c296f099dc27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F52YY32%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGwvGXRkliJMTPV8XFaM2hBKUu0nwIQywi8FJy44M2M6AiBa6EIO%2FHKlKZUjLCqKIS85KLkiWpMpenxMRzQVQ7hiWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMwHI7AE%2F4Y4YGaE%2FFKtwD50KYV4sj0uMeFECYojBdmdCcmefGfUkl2A17NHuU6jcVlSgmLvWywwBXOAbNgbwzQ6uFuXzYgjKbDZZuOXkDdhqhUs8%2FtBmNBvVCt4KKtKHfZkzV4WVrxU%2FNFHN1BIFpF%2BK2R928oKN4HB4SLUQGNVbJ1IQmszOKUAzIcQC5ZNrbxQ88tanqKcdEp%2Fa%2FpLy4sE%2Fo4D3%2BJ3hrjcKf7yBBl1DtoxY9fYaz3okxNwFj5RYJiwINqiL66mNOL0EvGe57q6smKTaLnHdBkylNCwiuoM1juoLstRDvaDtGXplmrrAXS%2BZJ4CEA93NJKdtEVBXGcdGnSJDsltbugEYZPvPaXfF5bImAkVizAm%2BRNTqyBOKIopAz%2BwnUMSWY2FbcxsW1bSGJ44igZfsqQegFY5awEP%2BXRw0T1gVe2e8kAcVXvuwAZjxYzwKRHgeAdglelV0AEk%2Bf%2B4BkG%2FxDS7w%2FpRxlZz7diuXSKfytDQIaowCiZjfEIxOmnd5h6ptdhEuGg5XdleQPJf4mROY%2FElW1K2mcpTPM%2FxOLd7CO18DUObntsqApgwyIYH6OnLqmC%2F2d5V8L7Ab8axE%2F%2F61zeFfLdPKSbrrz3%2FsoLQBeo518FjkMTgrIe1t9W0MvcJi3R9UwgNTDyQY6pgFR03UawoapbPqYkCy%2FqsBR9keXz9Rbotm6MY%2FKx8xqU%2F6JCgtoqr7lT7KJ67H6u4a88iTGK1twWdpj9mwbwjR6kqUdm10%2BZUAzteTFqjjfsN%2Bf25KqLp%2BHh7pUoDMDSU1oxGyiNP6ZvG0ZvT3Q3DRbi%2FafMccnw%2Fnwh9EbZn3eF5TYYlGf9blyWUAW9F8FCb4BPgeEAgBmtz%2By36XkS6mgPcZ5rxwl&X-Amz-Signature=7be931c613830162634e0eaf16fd4f4e1678f1bb6512eaf8810319f92ca84597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
