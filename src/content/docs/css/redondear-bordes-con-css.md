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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ANTRYS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD3PARKbsmlxf0zKymSWRz%2FQHNGaq3wpyevLII6Bvz5xgIgbkL59DA0agytl10M9p%2FUcbIAPeHcY9k%2FTD9Rc14ocrsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA%2FpPAR56yayNcTnXyrcAz8vOE7mg%2BIvnZzlpDivzFgMVqEqKPaiUugDwz6%2FCg0wP9%2F7nhOM9X8pI1BcerCgXv%2BkohDBcwy6jRfXDIFyAzFVcSb24%2F%2BywfIska8bdHSIWGFToh%2FZmC53mW8CWAmKfz4Lc53P62m2EoQbTtJ2WEHHYVSvgNuYiMkKqE8EoWQwCqpzZr3aTs9alrWEzomfo%2B5VXD4gRkkz9JmXkg2DijuCX1lFxUjRtv6rZVI2cLRQl7GuI1zXmuwLMLzb2Gl7P93XmPwDOuenwX0ozWEp%2Bqbi8SNB90PLW1f6fBDrYzypPz8RKBK%2FGyOn6WQCN6MeQY99%2FL3LuT4%2B1esekdsxb7IuLsKuY9OYm4rOOlRte%2FC2MihZHySiUE3COPGbcqdMoUGNyZ2KBUO4dtG7iGd9wjKaD8Rb6H3B1x8jFjK7h15bgah4Bza%2BEMCJdn1roQl6AVC5sPwfMbDl0USTMaQQvdzS%2BJNd4PaXO%2Ba6CqWJwzhq0kuM64Fk4msN98HQUvBAO9x4JM9dDJSxwWO0SZUvlKYY%2FdAToZwCeiTSmhu5FDGAnaHFch3MQX63rG0YnSLibUSvXdXB1GWX0%2F%2Baj25gpwUAk3ExlPwp4f0lNFF9vVLZd6YFkEyB9pNtOqidMPDyw8kGOqUBXucebaisMZGDVgsUc%2FM%2FGHFZVHhcW1KkZJDpd4UV2E24ywKRMjbbiPm6%2B%2BLiGcNg3mdWtXVAIui6ieSDqkA0r7d9Oxanqk2sWBn4qdWjRitzRkpoUNkUWXflMcyA4Kiqt1%2BnuuXAieX4Hz%2FCR62%2Bx2mlNaoT0bDvWzIyqGC%2BH%2B%2FuQz%2Fpdt%2BCNw9qbOx5oXxhZqm3QZu%2FCHBN5yhjRmcqOdDQgeTD&X-Amz-Signature=5f7ad37db041570e6446edee5c17d16f27db93b503e3184577c40985a2f1b893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ANTRYS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD3PARKbsmlxf0zKymSWRz%2FQHNGaq3wpyevLII6Bvz5xgIgbkL59DA0agytl10M9p%2FUcbIAPeHcY9k%2FTD9Rc14ocrsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA%2FpPAR56yayNcTnXyrcAz8vOE7mg%2BIvnZzlpDivzFgMVqEqKPaiUugDwz6%2FCg0wP9%2F7nhOM9X8pI1BcerCgXv%2BkohDBcwy6jRfXDIFyAzFVcSb24%2F%2BywfIska8bdHSIWGFToh%2FZmC53mW8CWAmKfz4Lc53P62m2EoQbTtJ2WEHHYVSvgNuYiMkKqE8EoWQwCqpzZr3aTs9alrWEzomfo%2B5VXD4gRkkz9JmXkg2DijuCX1lFxUjRtv6rZVI2cLRQl7GuI1zXmuwLMLzb2Gl7P93XmPwDOuenwX0ozWEp%2Bqbi8SNB90PLW1f6fBDrYzypPz8RKBK%2FGyOn6WQCN6MeQY99%2FL3LuT4%2B1esekdsxb7IuLsKuY9OYm4rOOlRte%2FC2MihZHySiUE3COPGbcqdMoUGNyZ2KBUO4dtG7iGd9wjKaD8Rb6H3B1x8jFjK7h15bgah4Bza%2BEMCJdn1roQl6AVC5sPwfMbDl0USTMaQQvdzS%2BJNd4PaXO%2Ba6CqWJwzhq0kuM64Fk4msN98HQUvBAO9x4JM9dDJSxwWO0SZUvlKYY%2FdAToZwCeiTSmhu5FDGAnaHFch3MQX63rG0YnSLibUSvXdXB1GWX0%2F%2Baj25gpwUAk3ExlPwp4f0lNFF9vVLZd6YFkEyB9pNtOqidMPDyw8kGOqUBXucebaisMZGDVgsUc%2FM%2FGHFZVHhcW1KkZJDpd4UV2E24ywKRMjbbiPm6%2B%2BLiGcNg3mdWtXVAIui6ieSDqkA0r7d9Oxanqk2sWBn4qdWjRitzRkpoUNkUWXflMcyA4Kiqt1%2BnuuXAieX4Hz%2FCR62%2Bx2mlNaoT0bDvWzIyqGC%2BH%2B%2FuQz%2Fpdt%2BCNw9qbOx5oXxhZqm3QZu%2FCHBN5yhjRmcqOdDQgeTD&X-Amz-Signature=b2c8bdcb6b1d87a33422aea9afd46f05b560dff25b812eb421aea0f6a2fd5941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
