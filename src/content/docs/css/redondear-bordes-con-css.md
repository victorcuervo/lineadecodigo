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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXOLYTA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFexTONyO6Uh%2BzfISszCJEasDDG1WqxUxqhI9uFKtzwAiEAwFVuiNMQrGqejelTj1c8IJCdHA0XuwAouPbg%2BkmY%2Bsgq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJ1aZNWbh37rfz7KcircA28kDXJs5e7zi6qv6fWFY5clsaQH%2FY954GlXWIvRlS8%2BkpFLJMRWB0EFL8F%2F%2FJdtexWSkBXn%2BhEqS%2Fdx06ayABFJS4J9LVcKzglvLX0UCCfd2CDz%2F7N4Glyzt6IAcRkRvo5oBjjOO%2Fwi%2Fzkx8dogNovJHDZNPrKqLIM9VWSCH23A6iWUBijPBsV7ZDwDbUpTDB7JE%2BAxfRtoyWadq4RI%2FUYhUwrqxl70rIdpr5v25WtFpy2MFqoN6oAGUoTba4gAsHNtEEvt1B5OChNjm%2FHeyMlBj6yH8wbeOFrK64fTGGef5Nm38Hc%2FtVHqkNiJw%2BP%2BFiKLE6iHdDOEgqM8WeawOGq541Inbdoflb5%2FBvm8rWv2%2BImG1GfGfMvowxiJyQMY3IA%2FZgvjxnQecTq9%2BKCBarh4hXJXldEbYjYWFAP4YuiEcJ6j75hW2FSHUnVHh4Dw2%2B4tGXsteZAuBuEAZVkYQbfz3nPId%2F3D0AoJyXS0Y4jalyLUcGrPQdBaXoVSImdby%2BCRzufFN4RsvjrSmHjQc0t4sZN7E89TqtHBF8ds3udvAlvFcweSPvMER4mlqf940tQNGgZDnulvmLRTfOrmzDnvHAS1n1p86LmugPnHFZXffMhY9RbNDstn0alOMKGnzskGOqUBlbi%2Fri1i9qLCaoTHOtoBQgnnJr5uACNHi%2BF52M545C4Pzlt4K2nNpNgp%2FOQyPXyRrYDx14U75EbZUbfU21GjmHbkOCB9YNsA2DlYk9yL6STWruKRUCRSG30v8fgm9SdxW33to37tyEqg226WiDGcIBqMiVxpHO6p4HgSFYrEvMLHqiLnkV8gweYDEikO5U0wJzROvgS3hLWuQa1KD3wSzACz7i0Z&X-Amz-Signature=9023ee14b2cb591744dda883d3a5e06b7dc01401342993959e30b592fc6a9c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXOLYTA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFexTONyO6Uh%2BzfISszCJEasDDG1WqxUxqhI9uFKtzwAiEAwFVuiNMQrGqejelTj1c8IJCdHA0XuwAouPbg%2BkmY%2Bsgq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJ1aZNWbh37rfz7KcircA28kDXJs5e7zi6qv6fWFY5clsaQH%2FY954GlXWIvRlS8%2BkpFLJMRWB0EFL8F%2F%2FJdtexWSkBXn%2BhEqS%2Fdx06ayABFJS4J9LVcKzglvLX0UCCfd2CDz%2F7N4Glyzt6IAcRkRvo5oBjjOO%2Fwi%2Fzkx8dogNovJHDZNPrKqLIM9VWSCH23A6iWUBijPBsV7ZDwDbUpTDB7JE%2BAxfRtoyWadq4RI%2FUYhUwrqxl70rIdpr5v25WtFpy2MFqoN6oAGUoTba4gAsHNtEEvt1B5OChNjm%2FHeyMlBj6yH8wbeOFrK64fTGGef5Nm38Hc%2FtVHqkNiJw%2BP%2BFiKLE6iHdDOEgqM8WeawOGq541Inbdoflb5%2FBvm8rWv2%2BImG1GfGfMvowxiJyQMY3IA%2FZgvjxnQecTq9%2BKCBarh4hXJXldEbYjYWFAP4YuiEcJ6j75hW2FSHUnVHh4Dw2%2B4tGXsteZAuBuEAZVkYQbfz3nPId%2F3D0AoJyXS0Y4jalyLUcGrPQdBaXoVSImdby%2BCRzufFN4RsvjrSmHjQc0t4sZN7E89TqtHBF8ds3udvAlvFcweSPvMER4mlqf940tQNGgZDnulvmLRTfOrmzDnvHAS1n1p86LmugPnHFZXffMhY9RbNDstn0alOMKGnzskGOqUBlbi%2Fri1i9qLCaoTHOtoBQgnnJr5uACNHi%2BF52M545C4Pzlt4K2nNpNgp%2FOQyPXyRrYDx14U75EbZUbfU21GjmHbkOCB9YNsA2DlYk9yL6STWruKRUCRSG30v8fgm9SdxW33to37tyEqg226WiDGcIBqMiVxpHO6p4HgSFYrEvMLHqiLnkV8gweYDEikO5U0wJzROvgS3hLWuQa1KD3wSzACz7i0Z&X-Amz-Signature=2290d78ae7e5463ea5a526e951493a5c5494ba1ea483bd726ae9c6b28b501168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
