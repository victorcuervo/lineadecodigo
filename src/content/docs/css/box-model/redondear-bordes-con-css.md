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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W77HFHDC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuzq4PRFs2tBNX0iHSg8y%2BDC9wHZDMovjNhMUZ9JSOyAiBFvoYJqlK75PcoxusAPmt9liPvlwzGviXrC7qSZofplir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMoSbKPD%2FaFLMD%2FU5fKtwDkCe8V7oH4LJsmbvWTa79nSfeYB7Oz90OpFthmZNt1vevtrxuyK6Gcl4bqofweXpXgMbjZu51YdcqL54V96hTU37x4NHhiyIX1Lwb5xsvQclInWlxHmx3l8egrVbuSxqRH%2BsyLYvp0Sx8XkdIQqI4I8uW6z8kJqmJWWCbELJH2vZFineSEhKmRyvm5b0m14na9F3Dp42inmoJkmSoQImwaiUPMn%2Bvb0oFtsHemZhWpZr1IOUFgtuArFnxg%2B34KIES1ZnDdM%2FuE64CgYVkypL1BV%2FAWNo57lNwGNEvjKua44rdYz8%2F%2FLAy1jaSx4cGT%2BZlQZNBLT5PSyrJq0w86QNBlx0cOTLO8wRmFvqb%2BTHMKOlecwHRuq45y6cDODI1OIfAnh4UNtwOwBdEqHCafwNRrASXsou2j51%2B3uK3UsjcYbDvcIjVV2tSL9UUVPh%2BMZIqSWq4jH6uZbSv4rMqhvF1EV%2BwXvTjz%2FU%2B%2B9AxGvoDxtl%2FSoKYMEye7Z6hBayc1kvXjCNAbxljjW0M29hKX7NxoPEU7qUKWMCWHz1ZN%2FQtIT1jolQCrEwAxcoCQpAux%2FH16Vp3prgFl49%2FKKwHd%2B3DHt5TMpqq8fzvRZGbA8uF4BV160%2FxSjwr5ehNhM8wpKqKygY6pgEBI1G7fhW%2FITtAxXzq8Ax5I9QOaBIr6hESE2yolCjmd4fQ9meyQt4lAd73%2F1p1J5KqnNGXZ63febR9ScsLJKS15wOoqxJpwuUi13pC0XJYzJ6Igq58LRCh%2BMZG1GZ4MXVZ1PyVNu%2B0FA%2BYFw9JSKOLDqKD7H0I73M8D9STiKZKL68d3wlt%2BbppIbd4w7uR4eii8ObfCQlV0le1YXGFaghCsZFN56v0&X-Amz-Signature=67f9c679a845c1adc1108b1131615c26e6047a5bd000c795081e31f58bd77b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W77HFHDC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuzq4PRFs2tBNX0iHSg8y%2BDC9wHZDMovjNhMUZ9JSOyAiBFvoYJqlK75PcoxusAPmt9liPvlwzGviXrC7qSZofplir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMoSbKPD%2FaFLMD%2FU5fKtwDkCe8V7oH4LJsmbvWTa79nSfeYB7Oz90OpFthmZNt1vevtrxuyK6Gcl4bqofweXpXgMbjZu51YdcqL54V96hTU37x4NHhiyIX1Lwb5xsvQclInWlxHmx3l8egrVbuSxqRH%2BsyLYvp0Sx8XkdIQqI4I8uW6z8kJqmJWWCbELJH2vZFineSEhKmRyvm5b0m14na9F3Dp42inmoJkmSoQImwaiUPMn%2Bvb0oFtsHemZhWpZr1IOUFgtuArFnxg%2B34KIES1ZnDdM%2FuE64CgYVkypL1BV%2FAWNo57lNwGNEvjKua44rdYz8%2F%2FLAy1jaSx4cGT%2BZlQZNBLT5PSyrJq0w86QNBlx0cOTLO8wRmFvqb%2BTHMKOlecwHRuq45y6cDODI1OIfAnh4UNtwOwBdEqHCafwNRrASXsou2j51%2B3uK3UsjcYbDvcIjVV2tSL9UUVPh%2BMZIqSWq4jH6uZbSv4rMqhvF1EV%2BwXvTjz%2FU%2B%2B9AxGvoDxtl%2FSoKYMEye7Z6hBayc1kvXjCNAbxljjW0M29hKX7NxoPEU7qUKWMCWHz1ZN%2FQtIT1jolQCrEwAxcoCQpAux%2FH16Vp3prgFl49%2FKKwHd%2B3DHt5TMpqq8fzvRZGbA8uF4BV160%2FxSjwr5ehNhM8wpKqKygY6pgEBI1G7fhW%2FITtAxXzq8Ax5I9QOaBIr6hESE2yolCjmd4fQ9meyQt4lAd73%2F1p1J5KqnNGXZ63febR9ScsLJKS15wOoqxJpwuUi13pC0XJYzJ6Igq58LRCh%2BMZG1GZ4MXVZ1PyVNu%2B0FA%2BYFw9JSKOLDqKD7H0I73M8D9STiKZKL68d3wlt%2BbppIbd4w7uR4eii8ObfCQlV0le1YXGFaghCsZFN56v0&X-Amz-Signature=8d5e4dae076d52b2885a64aef46c234c3fae3be240f342d13911656c981b4564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
