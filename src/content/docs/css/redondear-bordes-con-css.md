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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJ5E6N4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDzrjv2%2Ba0WiNp9thzjwnAhsnykWrybDQCEOG%2FgylYkAIhAMK55sxIuT6NwtW9PCoxc44TODLo3dZwu5c5fzNiZR2hKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfNwl%2FzgyxRiGNl7Yq3AOQWP3PLaGdy4E6PJujHsz6GqNGN8X1BYSr%2F9bj6RcE1Y0h%2F3hlWcM%2FwBCXHSvO6Pbn3V0l9tyE5IL1meR6ZbK%2FAOVy5d54Y0ePc14djLEsgprcaeLNT4SppmbHokeKFMwJ3DF%2BOUmwSHa0umSr%2FaeaZTHHDQlZdlzP5erAwry3poefDTiYLrujUMn7Q5Wcx15BiyzzDdeFsKrXp%2FPn8VvweQCcqGMgBH%2BI18PF5%2Fl%2FfCxHYFh4q%2F%2B3jjSxCz1Zo9yF1OOUgFIyt5LjdtfyFH%2Fh6LXrelmFoFp0utFHtl2rVAEekDtq2Wp%2BkObXzFqbwZjbdcLXFL6T5qJzdLHLrCf%2B3l%2FFaUbtBnKD%2BX6588yFK%2Flqh8eSlEP3dKfERUi2Yvl4FmKx%2FDyFIeicKZ36a%2BQG1WxU9vky9XjxCRr9ALJjon00WURwz%2FKNGFDFlguQR93M268VnqvOIfnZ529%2B17aUwiiW1eBrM5z%2BPEQUVmbqNzsNS8E%2B7zRUjb3ixD0MGnLI7E7bzdoo4OdqUuUdOjv9nuvGbYld1bMO4tlLxEun6bYpLpzk1%2FSi59YSYqReHFVayLU%2BXzy4L0H7uAf6b4j8q2hntUHGBUdeduAz2iiU5Hsuxk9DV2IHKHRqlDCqhdjJBjqkAe05J3YyRT44IP0Gu7Imq1gvhlnQ0piCJEcx3DgROeaIjtB1iD%2BebN4xGacBrX3YItaySOV4BDpAaVO2Pr%2B%2BaA8%2BXYLaDA5JR1IvN4IXr48AXao6ALfFCl92K6y4Sspzq%2Bd%2FO%2FAN0Uc4q4lGVOKxlcYMBxrCh5UJtyX7qqYx0XIPk%2BMgmh1PH1twz4Ke8hklDUqVteKsvdKZ%2Bcf%2FYAZS0ftCAtP0&X-Amz-Signature=9821aaffcdcb2ee4e049c247426defa7589c8a4100115098c9687c32c041bc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJ5E6N4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDzrjv2%2Ba0WiNp9thzjwnAhsnykWrybDQCEOG%2FgylYkAIhAMK55sxIuT6NwtW9PCoxc44TODLo3dZwu5c5fzNiZR2hKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfNwl%2FzgyxRiGNl7Yq3AOQWP3PLaGdy4E6PJujHsz6GqNGN8X1BYSr%2F9bj6RcE1Y0h%2F3hlWcM%2FwBCXHSvO6Pbn3V0l9tyE5IL1meR6ZbK%2FAOVy5d54Y0ePc14djLEsgprcaeLNT4SppmbHokeKFMwJ3DF%2BOUmwSHa0umSr%2FaeaZTHHDQlZdlzP5erAwry3poefDTiYLrujUMn7Q5Wcx15BiyzzDdeFsKrXp%2FPn8VvweQCcqGMgBH%2BI18PF5%2Fl%2FfCxHYFh4q%2F%2B3jjSxCz1Zo9yF1OOUgFIyt5LjdtfyFH%2Fh6LXrelmFoFp0utFHtl2rVAEekDtq2Wp%2BkObXzFqbwZjbdcLXFL6T5qJzdLHLrCf%2B3l%2FFaUbtBnKD%2BX6588yFK%2Flqh8eSlEP3dKfERUi2Yvl4FmKx%2FDyFIeicKZ36a%2BQG1WxU9vky9XjxCRr9ALJjon00WURwz%2FKNGFDFlguQR93M268VnqvOIfnZ529%2B17aUwiiW1eBrM5z%2BPEQUVmbqNzsNS8E%2B7zRUjb3ixD0MGnLI7E7bzdoo4OdqUuUdOjv9nuvGbYld1bMO4tlLxEun6bYpLpzk1%2FSi59YSYqReHFVayLU%2BXzy4L0H7uAf6b4j8q2hntUHGBUdeduAz2iiU5Hsuxk9DV2IHKHRqlDCqhdjJBjqkAe05J3YyRT44IP0Gu7Imq1gvhlnQ0piCJEcx3DgROeaIjtB1iD%2BebN4xGacBrX3YItaySOV4BDpAaVO2Pr%2B%2BaA8%2BXYLaDA5JR1IvN4IXr48AXao6ALfFCl92K6y4Sspzq%2Bd%2FO%2FAN0Uc4q4lGVOKxlcYMBxrCh5UJtyX7qqYx0XIPk%2BMgmh1PH1twz4Ke8hklDUqVteKsvdKZ%2Bcf%2FYAZS0ftCAtP0&X-Amz-Signature=b41dffd7fa2d5997d01b1e0fae371e847f9dd08be057ebbd45a15a79211cf6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
