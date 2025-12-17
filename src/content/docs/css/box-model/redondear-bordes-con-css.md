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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D6OUJQ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF07oJbsUKQlEZO6SBACmMUmzezlxL%2FMPKGXODKP%2FzTuAiAnxHatnG7ojeNtrmszWw%2FwO%2B1OTweqhDPo9kwgteOcgir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMleV5Zfms2z%2Fi%2FCULKtwDeiLV1YNGPIsvqNlJB4sFRHhYbG0uNSnnNcDxKq%2FOJY2Lyx5C3ExlQXAM8wauxXqaLu3tFMAiRLacV%2FrwiZ%2FPASrPckoEC4arJa72or3bU1krVkez%2F2DRcAsSuPv%2FP4BKTZBH6Mf9IhUfiiQ0v4AFPQ71KMoz9WwYdGfmfUVSkKBYHuaa%2BbrFuQdmtaXSR4DSlP0%2FSz12%2BffHDwPsiS8Om%2FA7llP6vJolgec22C%2B%2F7J3lLiOC0%2BEdVtvZTTb18TjjWIJik7TjVakcAIEQvPuTO8pxaCJOXrIBGDEylg3zLXRDiSbPfGm9wtUtZ56iHYoYYpga9fpiNDZ7sXSx7nZwSPxyLyqa9FFA7R7d4HJAmCL31W%2BQB72lf5U4712wlAmE1SFpb0B8bmmSyzVu3uhpQZlcv8x%2BkDYz%2Fs677Xv01T1AWWo43oJzhLLPkok9lICCWLzDQK2iaR1WUuveeZTWyaErPVmF54pRVX5nT36Q9WmI7%2BuQXMzAMJcGaUBdmYJBE1y3ce6Odv%2BljuKgyOO31oQL6akrgIKJ3Oumf9xJ9Wo2KWqI%2BwDn%2FVpPs8rJrnw7fh%2FDKhV9L8HdrFILH8O%2BdRimOUf3zioLw6gM5GETW7FKwe%2FebbO5hAskSU4wrdKJygY6pgG5rZIBpK56Fuvz1eZcq%2FQxF5Kc%2FEGo4QLj2ximcHXNv4I%2Fdvy64dSNBzkwoFdFbOwg0kbAQ8MevhL%2BjZ7ciErYAgVZ7eWPz2Me9lALohDG9tBoTP4w%2FFTk2sLcG%2BkUuH9ypSLZDuNQ9pJF%2FjBjgxmj1Y6%2Bo8y7fbxZ9TvNvcWauc9X%2Fr8QbOCoTCNh%2Fpgr9UjFFzfRjpL1ZuNdHxh8xD9cSk5aXEZO&X-Amz-Signature=5663835b0fa1c17ead1abed1e8f4c8cd7d2002f425d79c4fad8b31702ec17934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D6OUJQ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF07oJbsUKQlEZO6SBACmMUmzezlxL%2FMPKGXODKP%2FzTuAiAnxHatnG7ojeNtrmszWw%2FwO%2B1OTweqhDPo9kwgteOcgir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMleV5Zfms2z%2Fi%2FCULKtwDeiLV1YNGPIsvqNlJB4sFRHhYbG0uNSnnNcDxKq%2FOJY2Lyx5C3ExlQXAM8wauxXqaLu3tFMAiRLacV%2FrwiZ%2FPASrPckoEC4arJa72or3bU1krVkez%2F2DRcAsSuPv%2FP4BKTZBH6Mf9IhUfiiQ0v4AFPQ71KMoz9WwYdGfmfUVSkKBYHuaa%2BbrFuQdmtaXSR4DSlP0%2FSz12%2BffHDwPsiS8Om%2FA7llP6vJolgec22C%2B%2F7J3lLiOC0%2BEdVtvZTTb18TjjWIJik7TjVakcAIEQvPuTO8pxaCJOXrIBGDEylg3zLXRDiSbPfGm9wtUtZ56iHYoYYpga9fpiNDZ7sXSx7nZwSPxyLyqa9FFA7R7d4HJAmCL31W%2BQB72lf5U4712wlAmE1SFpb0B8bmmSyzVu3uhpQZlcv8x%2BkDYz%2Fs677Xv01T1AWWo43oJzhLLPkok9lICCWLzDQK2iaR1WUuveeZTWyaErPVmF54pRVX5nT36Q9WmI7%2BuQXMzAMJcGaUBdmYJBE1y3ce6Odv%2BljuKgyOO31oQL6akrgIKJ3Oumf9xJ9Wo2KWqI%2BwDn%2FVpPs8rJrnw7fh%2FDKhV9L8HdrFILH8O%2BdRimOUf3zioLw6gM5GETW7FKwe%2FebbO5hAskSU4wrdKJygY6pgG5rZIBpK56Fuvz1eZcq%2FQxF5Kc%2FEGo4QLj2ximcHXNv4I%2Fdvy64dSNBzkwoFdFbOwg0kbAQ8MevhL%2BjZ7ciErYAgVZ7eWPz2Me9lALohDG9tBoTP4w%2FFTk2sLcG%2BkUuH9ypSLZDuNQ9pJF%2FjBjgxmj1Y6%2Bo8y7fbxZ9TvNvcWauc9X%2Fr8QbOCoTCNh%2Fpgr9UjFFzfRjpL1ZuNdHxh8xD9cSk5aXEZO&X-Amz-Signature=00a28e2cc9c45199305263a2ec16245deafdfb880d6854cb9b3303ab22870ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
