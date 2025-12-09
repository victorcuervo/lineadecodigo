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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZS2TGXN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq7NTeLC2Vb7XhEM3LUnehXHCfECt7lvRyjD%2BTSdFzhAiEAtTXfdBdjx%2Fn%2BNSxjXWmqvTfmOudcInEPsbF6d0VL9WQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBWQxlUca5eHMhr6yrcA%2FdmEtMj7wR%2BvbDRjK0JZFx97l4DXGnv2E8%2FUAHOm%2FsyHSw7hLihaRxf71IizKmwu2nyBumb9HxfOOMI7Bh6NmyY7Swe2Aw82TuhcX8PGLTc7hcqmFGJ5PQtLpRKi1jSHzHl7QxVJTTumfl1IUMMh5DVG2jelBFKaOvnXV56KDlgTBOFoUf3Xu9Omgz1jkj7sT6z0dcMEMnVb8Pyof6GzRbrY479%2BXcFkfaFO4jZsEuyXcDDzAK5nitQ0PKctSShXgCX8jjw6bhS%2BnnVxPRhCtbWJsBy2yA7Us2yBQNP1bTU6vgsNFMte27%2F%2BVXqbIcevrI3ALheA5gaXVVzaYQ2gGDmsGwXbkFuwKzKUFPc5U%2B6hX4TzLSjmydHsNq7sMeU3wh5i%2BOmLB%2BO2xdBM3WQb3SXV5uHH%2F%2B54Ncq%2FrBFn7YnauTSldOcZknruqpI4sLtEcLnOrVFN7bMCqGJePITImEahlqo4D2uPdk9Ma4kG7hN0WFW9opP%2Fg2k9UiaK7NNw6iwyngFY4YTvqfWfLWEycd%2Fe%2FxAUkA8hwif%2BgioNSa8Z%2Bx6k76HaNC3HhbaXUi%2BYUsaXKB%2B9PFeeVirZKpUVKOYtWYqK5coO6fWADkyz1KkaHPInTvA%2F8N%2F0xy0MJKI38kGOqUBaWQzLXPlswx%2FwBvcdfZFvDntx3dsVb23t%2BY%2FfG0C2MsHb52UnzM81nBdZAnD388tc3vs7Kh0TpUFg2XJKGnDjXFSMGWbCjAFTP43ZJyrgnCqugUmRbmvPrfjA3a7u8M8m3quo2KKeWF0JpQrzRFGteYMHzfg08GzfKKa0VFJqk0SL4BiyyMn0%2BIK%2FmWHJo4dwesfWsHhWoShOsKceDO7fQV7MbMS&X-Amz-Signature=a6da9460e17c84ea35b41f0aa2f174284cf55c5df9d14fe35ac70c45dfe2f5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZS2TGXN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq7NTeLC2Vb7XhEM3LUnehXHCfECt7lvRyjD%2BTSdFzhAiEAtTXfdBdjx%2Fn%2BNSxjXWmqvTfmOudcInEPsbF6d0VL9WQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBWQxlUca5eHMhr6yrcA%2FdmEtMj7wR%2BvbDRjK0JZFx97l4DXGnv2E8%2FUAHOm%2FsyHSw7hLihaRxf71IizKmwu2nyBumb9HxfOOMI7Bh6NmyY7Swe2Aw82TuhcX8PGLTc7hcqmFGJ5PQtLpRKi1jSHzHl7QxVJTTumfl1IUMMh5DVG2jelBFKaOvnXV56KDlgTBOFoUf3Xu9Omgz1jkj7sT6z0dcMEMnVb8Pyof6GzRbrY479%2BXcFkfaFO4jZsEuyXcDDzAK5nitQ0PKctSShXgCX8jjw6bhS%2BnnVxPRhCtbWJsBy2yA7Us2yBQNP1bTU6vgsNFMte27%2F%2BVXqbIcevrI3ALheA5gaXVVzaYQ2gGDmsGwXbkFuwKzKUFPc5U%2B6hX4TzLSjmydHsNq7sMeU3wh5i%2BOmLB%2BO2xdBM3WQb3SXV5uHH%2F%2B54Ncq%2FrBFn7YnauTSldOcZknruqpI4sLtEcLnOrVFN7bMCqGJePITImEahlqo4D2uPdk9Ma4kG7hN0WFW9opP%2Fg2k9UiaK7NNw6iwyngFY4YTvqfWfLWEycd%2Fe%2FxAUkA8hwif%2BgioNSa8Z%2Bx6k76HaNC3HhbaXUi%2BYUsaXKB%2B9PFeeVirZKpUVKOYtWYqK5coO6fWADkyz1KkaHPInTvA%2F8N%2F0xy0MJKI38kGOqUBaWQzLXPlswx%2FwBvcdfZFvDntx3dsVb23t%2BY%2FfG0C2MsHb52UnzM81nBdZAnD388tc3vs7Kh0TpUFg2XJKGnDjXFSMGWbCjAFTP43ZJyrgnCqugUmRbmvPrfjA3a7u8M8m3quo2KKeWF0JpQrzRFGteYMHzfg08GzfKKa0VFJqk0SL4BiyyMn0%2BIK%2FmWHJo4dwesfWsHhWoShOsKceDO7fQV7MbMS&X-Amz-Signature=149d938ce686c75718f8ff285b2a675b2e3b9a60565c474b31459cfc9682dbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
