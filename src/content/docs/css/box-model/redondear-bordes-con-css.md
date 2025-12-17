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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NDPJON%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA83sSUdKiiEBDAW5PhwwYRPQm9aDDhFwmtaF4N44c3bAiAlm4bo3nW2%2FuDUKtcIaA%2FEtzNkuHoKsanuLvPhhB4MESqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtKIs8c5Jys%2BSLdqvKtwDQMjMAXPS6Y9EiKQMv0rSNTuj%2BuMpTJLY7K9WYWHZJw2A09%2FqacJteNByxpF3mZO9fpXLv%2BuWOtauRVmUG%2ByBBNSG6HBS0zyg%2FWaz8wIG5wPjsbNOp1Sj99sGfetnCezk2mPTuWiFfgsvLXAcS0DdcOifoWcJucDgMLHVF2XNyudvIarlhuRUaEX%2BZjZaAqjkEf7UBOFyGTYMT4t101Cyh9DNfhKtX%2F2DDTt4QbLGXJ5Q83cwUAMM8qBaH%2FGeU3RD9lA75cTZvDAVoDEXw1P0t9GwtETwcibfCHodXpsUcFY%2BDxBlYXTyvXwfp88r%2FC8bJscf1NdbR16OnvYqRg9UX0F0UqOw7wNOm1msn%2Fic8Jfn3ovXulU2fFpwGQt4%2BQO691wFP7pvesUG1EC%2FctTXqKwXtuxXAJFaRWALwPFB7vdnVR9vNAHMj4vwFmTvuO1dStfjNERfL7EaWbnh%2BzRvFCdv4yCvXGjWTun8RoDN%2BRsM23fqvWM%2FS7CgK9jF%2BNwN0KmFrz%2FZuqwFPEJj5T73xTKql2dAcetlYGAcaUoboRxQKjCniAS0CRAQilaLPSpiCEXj1CrLshEzasDYofljE8w7cQi7l8%2FhdcICHDZeC5Ye08lSvkJKRTTTwF8wgKCLygY6pgFhArEJPf1vuieVNmaIOdHeGGgfX3IGw6vCeX86OiMXufcNciN5t4QE9f%2FyVWEmRpPiIXeXrARUPJ6X8BjBVgPCnox%2FBP5WWRvDBJrFtq8oauSSv0a8NzapcKh3L%2B8nD3rJSE0xUXjoPqQO9GJUWn8rcYgO05z2QMZ4i1jUxY4YhK%2B4k2%2Fwcvy5T6V3MkCH20Igg1J%2Bk2cabcA6ogVuP9%2Fh0KXgeQO7&X-Amz-Signature=a830402c4008f640e56280aa13c18d7a3823dbc4041e8e0377c334da2676f399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NDPJON%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA83sSUdKiiEBDAW5PhwwYRPQm9aDDhFwmtaF4N44c3bAiAlm4bo3nW2%2FuDUKtcIaA%2FEtzNkuHoKsanuLvPhhB4MESqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtKIs8c5Jys%2BSLdqvKtwDQMjMAXPS6Y9EiKQMv0rSNTuj%2BuMpTJLY7K9WYWHZJw2A09%2FqacJteNByxpF3mZO9fpXLv%2BuWOtauRVmUG%2ByBBNSG6HBS0zyg%2FWaz8wIG5wPjsbNOp1Sj99sGfetnCezk2mPTuWiFfgsvLXAcS0DdcOifoWcJucDgMLHVF2XNyudvIarlhuRUaEX%2BZjZaAqjkEf7UBOFyGTYMT4t101Cyh9DNfhKtX%2F2DDTt4QbLGXJ5Q83cwUAMM8qBaH%2FGeU3RD9lA75cTZvDAVoDEXw1P0t9GwtETwcibfCHodXpsUcFY%2BDxBlYXTyvXwfp88r%2FC8bJscf1NdbR16OnvYqRg9UX0F0UqOw7wNOm1msn%2Fic8Jfn3ovXulU2fFpwGQt4%2BQO691wFP7pvesUG1EC%2FctTXqKwXtuxXAJFaRWALwPFB7vdnVR9vNAHMj4vwFmTvuO1dStfjNERfL7EaWbnh%2BzRvFCdv4yCvXGjWTun8RoDN%2BRsM23fqvWM%2FS7CgK9jF%2BNwN0KmFrz%2FZuqwFPEJj5T73xTKql2dAcetlYGAcaUoboRxQKjCniAS0CRAQilaLPSpiCEXj1CrLshEzasDYofljE8w7cQi7l8%2FhdcICHDZeC5Ye08lSvkJKRTTTwF8wgKCLygY6pgFhArEJPf1vuieVNmaIOdHeGGgfX3IGw6vCeX86OiMXufcNciN5t4QE9f%2FyVWEmRpPiIXeXrARUPJ6X8BjBVgPCnox%2FBP5WWRvDBJrFtq8oauSSv0a8NzapcKh3L%2B8nD3rJSE0xUXjoPqQO9GJUWn8rcYgO05z2QMZ4i1jUxY4YhK%2B4k2%2Fwcvy5T6V3MkCH20Igg1J%2Bk2cabcA6ogVuP9%2Fh0KXgeQO7&X-Amz-Signature=36e572b925c5d116e051f48be9425ba99a95ce57df1a6aab6e9a95deeaac8f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
