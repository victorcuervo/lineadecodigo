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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PGEIJOQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDinRZwCqoxWqDRcy%2BIaVfn%2FFAwugTDi0Lm7%2BjdN6PL7QIgK6CikiGHbkgaIEprz1r19ggxSLk2obzUytSEV7NYq4Mq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE%2Fl%2BuQ0maZP%2BLkRDircA4Kz4g%2Fx89%2F0VoacWMK%2F%2Bwb2dih5fRLU8bonl1x8ebMz9FMMRZkk7ik2kR6ywW7PgeRJRt49Khm%2FXYj4VHUgP5odIFB73iEPv2CV5GH1JVgaah2fWhXOcaj4aKPwLGcPp2%2FFsMdU5RiSbRrv7hRosPNuI9XV9lal663yfGzWH2QbnhlbhAT4GqyWFHcytpgztPKWr4YZNA6vQIK161lQXcldzzYwH6gi%2BwygSC032bIgZkUzqphdnrYAVKAWdA%2FfzpL3x3Of2ApueTQ25XLEbCL1E%2F4gIee7%2Btr68fkGHCSMvf%2F4LHPGg4k4VvCQNeSb8kvkjNWZ5hNh1Gk%2FOKbAPd%2BsKWN1mOsto4UJr2liDxCNAiUJlgSmLdOXjszW08p%2Bb59mQ7IwwxufG1cPOwAljvnR1Tdxal6Qf0z4jlWUiDCu9m4lw0V6Jv3yao5YqGsCtxUAYrtGO6YNkyRl3tYick7dKT8dFa4ZFX2nbZTBMbLTcM0pm9RFgBremvU44kDplUVHxpTO0AiIaqe7VGbGDSZaJMyyJ1QYdqoSHCiacpJtZziblwTyYO9QGmUJ7TayWYGleWLAioESnkOEoOqYcDyfnN0oks%2FjkocpwkKfGlOclWwDfaSgfhHQoJ58MOfFisoGOqUB%2BImq2uQN7E4hXnEweX%2F%2BWRM4JX%2FNYJwQiH6ANeeU7s9JPuiPcsRe4Ta%2FOkX5b0Yp94OH7KqX%2FQ5LLw9g7Fk7EvDDzIIpKRP5NNhv0qawYPt90AgggWG3imbEJEe1thKOJgsPt5%2FG0wnmC4CkuVx49WmKppdzalKrmiEr8ZzyhgkvMsvhqAbyLK%2FVwStavUBvcPYgQGx5qT4itLNVoz76wtB4VLDL&X-Amz-Signature=8064c3e5552a426dcc62cf47adecf5c0a0d6aabc5d7ee2e21732b3457dfd3909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PGEIJOQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDinRZwCqoxWqDRcy%2BIaVfn%2FFAwugTDi0Lm7%2BjdN6PL7QIgK6CikiGHbkgaIEprz1r19ggxSLk2obzUytSEV7NYq4Mq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE%2Fl%2BuQ0maZP%2BLkRDircA4Kz4g%2Fx89%2F0VoacWMK%2F%2Bwb2dih5fRLU8bonl1x8ebMz9FMMRZkk7ik2kR6ywW7PgeRJRt49Khm%2FXYj4VHUgP5odIFB73iEPv2CV5GH1JVgaah2fWhXOcaj4aKPwLGcPp2%2FFsMdU5RiSbRrv7hRosPNuI9XV9lal663yfGzWH2QbnhlbhAT4GqyWFHcytpgztPKWr4YZNA6vQIK161lQXcldzzYwH6gi%2BwygSC032bIgZkUzqphdnrYAVKAWdA%2FfzpL3x3Of2ApueTQ25XLEbCL1E%2F4gIee7%2Btr68fkGHCSMvf%2F4LHPGg4k4VvCQNeSb8kvkjNWZ5hNh1Gk%2FOKbAPd%2BsKWN1mOsto4UJr2liDxCNAiUJlgSmLdOXjszW08p%2Bb59mQ7IwwxufG1cPOwAljvnR1Tdxal6Qf0z4jlWUiDCu9m4lw0V6Jv3yao5YqGsCtxUAYrtGO6YNkyRl3tYick7dKT8dFa4ZFX2nbZTBMbLTcM0pm9RFgBremvU44kDplUVHxpTO0AiIaqe7VGbGDSZaJMyyJ1QYdqoSHCiacpJtZziblwTyYO9QGmUJ7TayWYGleWLAioESnkOEoOqYcDyfnN0oks%2FjkocpwkKfGlOclWwDfaSgfhHQoJ58MOfFisoGOqUB%2BImq2uQN7E4hXnEweX%2F%2BWRM4JX%2FNYJwQiH6ANeeU7s9JPuiPcsRe4Ta%2FOkX5b0Yp94OH7KqX%2FQ5LLw9g7Fk7EvDDzIIpKRP5NNhv0qawYPt90AgggWG3imbEJEe1thKOJgsPt5%2FG0wnmC4CkuVx49WmKppdzalKrmiEr8ZzyhgkvMsvhqAbyLK%2FVwStavUBvcPYgQGx5qT4itLNVoz76wtB4VLDL&X-Amz-Signature=f29249703ab0aba77fd354e6797a59de8ab4379254de26dced2915cab3cd4d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
