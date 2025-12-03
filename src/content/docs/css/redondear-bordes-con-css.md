---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNO5LH7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC5ngYPx1%2FvkwP1qJKfyelfijespLOySi4BzTdumRX9dwIgf6SGxvR2Ombbp3Rx8%2FE3RuMUlOlz%2FtHTZ1RktuRj750q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKuRYuccORRKRau%2FXyrcA5IplosyVe32L3R3TAYNxlr26%2FvL%2FfRGjrzQH41xhuBzWfdHNxKNG7zanNwEoIZ%2Fq0PAh%2BfSF%2FVuO6Es%2B%2FRpXEd2AyTm7E9TEhFegi3MQz9LSZVwzE%2FKrdo6OwXSS28OqSAYQ3dt0VcET4Ic9G5BqbhcV5pi20pU5MEoLCYlI5%2FBoA6dtaPONm1otKav9ozKD747aLZcO5g54ythvok4M4V62WNhJ2m4LG7uylDaiaMsTcnQwOE%2BLCsYTFg9BbCyhiUIIJRLMt4nRxoc23AHKYwanVTyZaHBlu3QwZWp8XcWYFLZSuQTd%2BmN6kztgtoCXC63fk0KKG5IRgMe%2FK3uh41sfxBOJExB3cp1xgzAfxUZi2RfLP%2FffJrOIqlcX7Czvq6hw0mmKgNMxp6ULZhpTbQ3eU7VziokqpdsuiAup3xQ00U0rUmYzKJLm0k8L1rYf8Z8qfel8k3DYh9QFE4JHT%2BLGQkoC1QsACTqzGjKiFK0Sq%2FYt3Y99jAWKuBa5w37oHSqj%2Bdu8j5bM5SXcSsq0trJJfMZqGqpuYJ8Aeg5YpHxmXbgWS5va7pR9pnEW2Znt2eR16FoeXMSLbjZ%2FB2Y6pJuMhbz3HLPhPqEUn6ZKsWtDE9gpf8HeZng2c2mMNyRwskGOqUBltkx15RUuiLdWh7QFDh4EEVRGoRFCxdovCUKIYhkQBK3MBwTv6drFcdZHHfxZtjjC7ED8hHG9tfGu8NIT77wVLdTpEeRTs10Bo6v0eBLkD54XtjRGwBT2uZoS74v6S0%2FiCORT9%2FjvP8GHBLx3UsgAzr3kbKbuCUvLk%2FR%2FU%2F0QiveBHaiA347ArDM5tafh57%2FkIWd6NlSTac5xRGfSCA7NAVX8iJK&X-Amz-Signature=6151922875a9c5608044fc34f72739e460e260263ca9b7a5bff45c04f76564e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNO5LH7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC5ngYPx1%2FvkwP1qJKfyelfijespLOySi4BzTdumRX9dwIgf6SGxvR2Ombbp3Rx8%2FE3RuMUlOlz%2FtHTZ1RktuRj750q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKuRYuccORRKRau%2FXyrcA5IplosyVe32L3R3TAYNxlr26%2FvL%2FfRGjrzQH41xhuBzWfdHNxKNG7zanNwEoIZ%2Fq0PAh%2BfSF%2FVuO6Es%2B%2FRpXEd2AyTm7E9TEhFegi3MQz9LSZVwzE%2FKrdo6OwXSS28OqSAYQ3dt0VcET4Ic9G5BqbhcV5pi20pU5MEoLCYlI5%2FBoA6dtaPONm1otKav9ozKD747aLZcO5g54ythvok4M4V62WNhJ2m4LG7uylDaiaMsTcnQwOE%2BLCsYTFg9BbCyhiUIIJRLMt4nRxoc23AHKYwanVTyZaHBlu3QwZWp8XcWYFLZSuQTd%2BmN6kztgtoCXC63fk0KKG5IRgMe%2FK3uh41sfxBOJExB3cp1xgzAfxUZi2RfLP%2FffJrOIqlcX7Czvq6hw0mmKgNMxp6ULZhpTbQ3eU7VziokqpdsuiAup3xQ00U0rUmYzKJLm0k8L1rYf8Z8qfel8k3DYh9QFE4JHT%2BLGQkoC1QsACTqzGjKiFK0Sq%2FYt3Y99jAWKuBa5w37oHSqj%2Bdu8j5bM5SXcSsq0trJJfMZqGqpuYJ8Aeg5YpHxmXbgWS5va7pR9pnEW2Znt2eR16FoeXMSLbjZ%2FB2Y6pJuMhbz3HLPhPqEUn6ZKsWtDE9gpf8HeZng2c2mMNyRwskGOqUBltkx15RUuiLdWh7QFDh4EEVRGoRFCxdovCUKIYhkQBK3MBwTv6drFcdZHHfxZtjjC7ED8hHG9tfGu8NIT77wVLdTpEeRTs10Bo6v0eBLkD54XtjRGwBT2uZoS74v6S0%2FiCORT9%2FjvP8GHBLx3UsgAzr3kbKbuCUvLk%2FR%2FU%2F0QiveBHaiA347ArDM5tafh57%2FkIWd6NlSTac5xRGfSCA7NAVX8iJK&X-Amz-Signature=37f00d757e5044e238e2a632ef89b1012ccb1873437a6cbdccc4d1a2a124c843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
