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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLHOG6LE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY9jl6tfv%2By6z5zvHAtLBPuVCarbEcztuOY65y2TAQuAiAwcIye%2BCsYStc1PPlkNvJ5RaNEk%2FkP85eE2oph0ESWvCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJZ%2BFBDxZUR8fXb3yKtwDfUOlq922cbcZkbRO%2FkTJxjWsmABI7bbvaXEyW5auXQo0XYgCNeffeOn35d%2FcMfGyVKzpxlqgcJYCh3ZlNqb9i4bBSaBnDUyTOKY887YsO8XYphVolorU4LqgZtKUq%2BI1NNY7q9AMSlw31yIfq6GXDkQtgjo83oxUcTht3aRKOxR2RSb%2FD%2FQV%2BbRexLQGXFio1KUTBaHhj92CguJklH3%2FNn63%2F6ZF0yjxYsAXIts8qxdWKT4AhogfovwRprXh9nxt4a8N2Hb57IIt4Qg4vfRDC4fZiGEA%2BFUp5VVGFJUtYMvLsEOZZUbTiEexdpBTq14NDzQUx9aa1wEQpzTQM9cc5agWitk9d3V%2BKWFoPPt1U3B9NW8KJeLmDiaJtZionXyFpdczi7UyNoS0ooykjSgs0JxqY23reijAlt%2BmoFBuOVn4sCR8%2BoNowuUPqhMnJvC%2BJrHnwSTjVOF2BIK8IsoZUpPRt73DIvrhwPbtyOvDoJKkYNtXmrvRHnCz83YOhVMDX31pT6lmXlCaGcH2BNX0vnU%2FEdqlGbvYbDfz9fFttSn6JLWIYnH2EkSgDLog7VcMmmvOvY4cg55CGZBDKKbra3kjxCO5ykcoELaVLGmtvy8tftfnastIwaezgvEw2aqKygY6pgHKCPIlAWX3EfPjrJ%2F57VUsdiCWqRjTEDWgTXbUZimO2BhuPaRUEt58JfLa4mqudcLjyNdCD0lknCW8c4QyhL3z5KIB9SBcZn0PnRO1w9aFCkvnkNYm7WpItG6wAxRcorphwXpiy3oFDkZvCGvSVqgTCkg3UqEs%2B5VFZgM81t6bX%2BoLzysoBM2YURO8P8pjw%2FfBElSKlAJrhsbDvT2lAQNqNQv1C%2FJS&X-Amz-Signature=a158f72d5007b219b65e545daa2442b429f46ba474b72b4c3abd9d8b59a53cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLHOG6LE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY9jl6tfv%2By6z5zvHAtLBPuVCarbEcztuOY65y2TAQuAiAwcIye%2BCsYStc1PPlkNvJ5RaNEk%2FkP85eE2oph0ESWvCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJZ%2BFBDxZUR8fXb3yKtwDfUOlq922cbcZkbRO%2FkTJxjWsmABI7bbvaXEyW5auXQo0XYgCNeffeOn35d%2FcMfGyVKzpxlqgcJYCh3ZlNqb9i4bBSaBnDUyTOKY887YsO8XYphVolorU4LqgZtKUq%2BI1NNY7q9AMSlw31yIfq6GXDkQtgjo83oxUcTht3aRKOxR2RSb%2FD%2FQV%2BbRexLQGXFio1KUTBaHhj92CguJklH3%2FNn63%2F6ZF0yjxYsAXIts8qxdWKT4AhogfovwRprXh9nxt4a8N2Hb57IIt4Qg4vfRDC4fZiGEA%2BFUp5VVGFJUtYMvLsEOZZUbTiEexdpBTq14NDzQUx9aa1wEQpzTQM9cc5agWitk9d3V%2BKWFoPPt1U3B9NW8KJeLmDiaJtZionXyFpdczi7UyNoS0ooykjSgs0JxqY23reijAlt%2BmoFBuOVn4sCR8%2BoNowuUPqhMnJvC%2BJrHnwSTjVOF2BIK8IsoZUpPRt73DIvrhwPbtyOvDoJKkYNtXmrvRHnCz83YOhVMDX31pT6lmXlCaGcH2BNX0vnU%2FEdqlGbvYbDfz9fFttSn6JLWIYnH2EkSgDLog7VcMmmvOvY4cg55CGZBDKKbra3kjxCO5ykcoELaVLGmtvy8tftfnastIwaezgvEw2aqKygY6pgHKCPIlAWX3EfPjrJ%2F57VUsdiCWqRjTEDWgTXbUZimO2BhuPaRUEt58JfLa4mqudcLjyNdCD0lknCW8c4QyhL3z5KIB9SBcZn0PnRO1w9aFCkvnkNYm7WpItG6wAxRcorphwXpiy3oFDkZvCGvSVqgTCkg3UqEs%2B5VFZgM81t6bX%2BoLzysoBM2YURO8P8pjw%2FfBElSKlAJrhsbDvT2lAQNqNQv1C%2FJS&X-Amz-Signature=e84f4fbeefb5c53b548c842dd53b7be88dcd0f64c6e01f39d6376c4c2ee839cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
