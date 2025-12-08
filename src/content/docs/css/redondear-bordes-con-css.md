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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBINMRFR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAztQ%2FlDkX0CVSMYErcdnVSNlzMfRjza1NdB2SHDvvXWAiAGLx%2FPJgu%2BAgfSwD6722kECNBvIgneXWdUkKK1vzkDOSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxnYWJU9pyxO2O7%2BdKtwDUcEaQNaqz%2FmJz0us7jR2MB7BHvPr8VzSwIS%2FhHamDqqqGWV08dRanUxpvwaDrTkFue%2F%2FmFB2TfscSYCVSxkGG67Bm1%2FbF3H%2BHZi6t9W7Vkd8FIcjrLGpf7dL6qS4q5F1zPMOfBqC4aT5%2Ft5chwiXYE4JxJ%2Bp2tQ6OKv%2Fj%2FJ3WES5gp%2Fw3tv8XLU9qFnURVj6RW6ULUvs8Y%2B2BuYAf0lunBIAfkJl81eDfJcqlwmc96Q3yW%2FVP6oHnt1hScMHS64hCaTqZZcRGBG9nCLNuzokTiWD9gAXhJz6ItITwAv44nZ%2BoQQ7IOD6Fz2iOTBA8tgZFjEmetjhnNH00ZMUPdBOZP3KIzbKMui2YdIcFb7YWpc7B1F7HRC%2Byw1AGil2Z00gaa4JLc%2BJdCVZavrLY23WBwK4NQstpWiIWBV3xeNGNhEX1OCfywky6IL60pkUYoXfHjrtNBvupVwy9w7UzJd0UqqzlDCY3QyeQ20lYR%2FtdVDrdzACvPPnAnL%2FINCBG8dAqkB8rUdMmZtn600B0tTiifC2rsxHVEEZcBkSAY89YTyIn0bzbCQzgTYIJOhKta3YHcG0YFq0w2GjlvIB64i3I2uDMn%2B7uvms1vhyaPqE93%2BV1h2PvRXOPwnWuAsww6HYyQY6pgFcLG3k%2FLVa7EmBmape50EZv9CgvyYEOp%2B0fiKhdYMdI%2BxQXYtvR8cMpgHJUC0I%2BewAYuFUcpUqSWBOzB50U364FGxuM8LEg3BQCCxZMJmnpkJebgq%2BT4%2FxbGC%2BIUkaUMgOJX7V9qdmhO12krzhhhRmnveKQaoW7p%2FufMMtp66WLL8f3O1CAUauySYqB2sJ2aBfjltIUvb8AsHDZpbYVluOyM%2FZGoG0&X-Amz-Signature=e7da1e76422ed12ecc3af3ecc82b51facfd74cfb9441150fe0c998b6484f529a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBINMRFR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAztQ%2FlDkX0CVSMYErcdnVSNlzMfRjza1NdB2SHDvvXWAiAGLx%2FPJgu%2BAgfSwD6722kECNBvIgneXWdUkKK1vzkDOSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxnYWJU9pyxO2O7%2BdKtwDUcEaQNaqz%2FmJz0us7jR2MB7BHvPr8VzSwIS%2FhHamDqqqGWV08dRanUxpvwaDrTkFue%2F%2FmFB2TfscSYCVSxkGG67Bm1%2FbF3H%2BHZi6t9W7Vkd8FIcjrLGpf7dL6qS4q5F1zPMOfBqC4aT5%2Ft5chwiXYE4JxJ%2Bp2tQ6OKv%2Fj%2FJ3WES5gp%2Fw3tv8XLU9qFnURVj6RW6ULUvs8Y%2B2BuYAf0lunBIAfkJl81eDfJcqlwmc96Q3yW%2FVP6oHnt1hScMHS64hCaTqZZcRGBG9nCLNuzokTiWD9gAXhJz6ItITwAv44nZ%2BoQQ7IOD6Fz2iOTBA8tgZFjEmetjhnNH00ZMUPdBOZP3KIzbKMui2YdIcFb7YWpc7B1F7HRC%2Byw1AGil2Z00gaa4JLc%2BJdCVZavrLY23WBwK4NQstpWiIWBV3xeNGNhEX1OCfywky6IL60pkUYoXfHjrtNBvupVwy9w7UzJd0UqqzlDCY3QyeQ20lYR%2FtdVDrdzACvPPnAnL%2FINCBG8dAqkB8rUdMmZtn600B0tTiifC2rsxHVEEZcBkSAY89YTyIn0bzbCQzgTYIJOhKta3YHcG0YFq0w2GjlvIB64i3I2uDMn%2B7uvms1vhyaPqE93%2BV1h2PvRXOPwnWuAsww6HYyQY6pgFcLG3k%2FLVa7EmBmape50EZv9CgvyYEOp%2B0fiKhdYMdI%2BxQXYtvR8cMpgHJUC0I%2BewAYuFUcpUqSWBOzB50U364FGxuM8LEg3BQCCxZMJmnpkJebgq%2BT4%2FxbGC%2BIUkaUMgOJX7V9qdmhO12krzhhhRmnveKQaoW7p%2FufMMtp66WLL8f3O1CAUauySYqB2sJ2aBfjltIUvb8AsHDZpbYVluOyM%2FZGoG0&X-Amz-Signature=b0bc0bccc885d5f99054d2595bd70005d9afa0f79190ff1dad5b1dd29bb0ae55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
