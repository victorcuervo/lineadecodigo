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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFVUHMQJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy085B9gi1ghB4V8jDWQYrEtXTH5rD2PMjvPjcPlHI5AiAo0rfN%2BFhkHQDIkXO9n41vpkYKTISQjzDLTwYHXhdOdSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM9lXZTx%2BUfrnEv5z%2BKtwDMj668BrkOUD07xdGWB0xND1BpNG50G0fYWoAuJJbR8EVbPrKwYWYSOSujwDravLc9c%2BfeXfZG8SUSpRMgaBGe1QukV5obMsfFRxiZIB4htRHUt3uJYHG16ChRjQspIVCNZ9VQcWBxru10c6TUwaZVTOpG15C1Ru0BMCYlOwMKAFDiGiTtwPxLAGDV6MsjZL74D%2BMU510GY%2Fclp1DX4MJF8ZWmgtsDwetP0%2BnD9raDMq53cGWI3YJdkGncZLYr86crFWT9IAlr65txN%2FXlcJjnnr4h2Sk9G3cvUR4uiP%2BAvZI6XHiU14ScyOF3QTKzISu5KrgpquId%2FMDJ45szjeyD3P0zJbdPPvHArtIVpQ4FgWhuZ60n%2FlkTVCY8R7uypAQD3xmLMO2AKNTRR8r11rrKBERx6JN0N0Iy42nViMLGTC8onxjedbRFTSmR8QqByLtdbUokRc3Q%2BivgianlitUd2Tph0o8A2dpPCyqQVMkiq9V1cds1yd7%2FkT9%2BkI6EkYYXy6Ji8HTvDcAMXJluK%2BchqtPdZj3pnTalsLzY8tNZeUT92d%2BbTP1D6JGwvmI3zXn7eFif03k7BM%2BMf1hmOV8rTnnfHZO7urHFVhYuCSz3zitN8zLcZ74sGyuQt8wzZ2JygY6pgEK0uSqoPIZvl4xak%2BcYWBXxDIfluAdAcdMMbeNZsV43UL3tOpIhh40e1v8bmIv2zUoLy0Pph8Mc7cParUNhBYnTCG%2BF2pm4zey3v9Ip1l9GGeXGwPKaXzHt8M4jsPT8ibH85kl0vp3fuE9T2kfGdH94e1J2YqbAkjmLjP6OOEXLfPfZbbvo0Bh8BP%2Bkb8gS6uV6WconmGtLiHvOE7LgaBrymN0nWXh&X-Amz-Signature=fdd45880ab812e949ff8d907742d092330dc3923de08502b37aeb38c578871b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFVUHMQJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy085B9gi1ghB4V8jDWQYrEtXTH5rD2PMjvPjcPlHI5AiAo0rfN%2BFhkHQDIkXO9n41vpkYKTISQjzDLTwYHXhdOdSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM9lXZTx%2BUfrnEv5z%2BKtwDMj668BrkOUD07xdGWB0xND1BpNG50G0fYWoAuJJbR8EVbPrKwYWYSOSujwDravLc9c%2BfeXfZG8SUSpRMgaBGe1QukV5obMsfFRxiZIB4htRHUt3uJYHG16ChRjQspIVCNZ9VQcWBxru10c6TUwaZVTOpG15C1Ru0BMCYlOwMKAFDiGiTtwPxLAGDV6MsjZL74D%2BMU510GY%2Fclp1DX4MJF8ZWmgtsDwetP0%2BnD9raDMq53cGWI3YJdkGncZLYr86crFWT9IAlr65txN%2FXlcJjnnr4h2Sk9G3cvUR4uiP%2BAvZI6XHiU14ScyOF3QTKzISu5KrgpquId%2FMDJ45szjeyD3P0zJbdPPvHArtIVpQ4FgWhuZ60n%2FlkTVCY8R7uypAQD3xmLMO2AKNTRR8r11rrKBERx6JN0N0Iy42nViMLGTC8onxjedbRFTSmR8QqByLtdbUokRc3Q%2BivgianlitUd2Tph0o8A2dpPCyqQVMkiq9V1cds1yd7%2FkT9%2BkI6EkYYXy6Ji8HTvDcAMXJluK%2BchqtPdZj3pnTalsLzY8tNZeUT92d%2BbTP1D6JGwvmI3zXn7eFif03k7BM%2BMf1hmOV8rTnnfHZO7urHFVhYuCSz3zitN8zLcZ74sGyuQt8wzZ2JygY6pgEK0uSqoPIZvl4xak%2BcYWBXxDIfluAdAcdMMbeNZsV43UL3tOpIhh40e1v8bmIv2zUoLy0Pph8Mc7cParUNhBYnTCG%2BF2pm4zey3v9Ip1l9GGeXGwPKaXzHt8M4jsPT8ibH85kl0vp3fuE9T2kfGdH94e1J2YqbAkjmLjP6OOEXLfPfZbbvo0Bh8BP%2Bkb8gS6uV6WconmGtLiHvOE7LgaBrymN0nWXh&X-Amz-Signature=64ac27e29c45558f1e2c2e4dead2eaa7f70dd54287982a620609bc2ac0733e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
