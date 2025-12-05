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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMNZBG4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3G4yfK%2F9kgGDLjsGav6mMce37co6nuvNbYykjuPytEAiEA3am7yfInDAaZXJYvgY%2FR%2BQ9JjnLd2Q5UE7EYT1L0ZrAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBS5ATdv2HAxZNdLLSrcA%2BKNkHmN5SvYVSaU8Kx1bE7NkyF3FOoGyirhtigYQQkXgZIPGWaWtJ18N0Q%2BSt5zS40WWMxE2OLNYdO%2B5PWkWRFhW33FcL6FVQ3A11SlTvxlTlEi6Es4b8rf%2BAVwCW5cNL1qzv2X9a5l2ZvqcWiju6RXPrJHGaekY2etpNnw7q3Jvgmt4mW60rZFAML4VatMFRHgOuAmkBIah0XuPqSPwfAfXYzNe4vaSCDu5TYNNIBMionsFZlssQhjpciI7oUHq9ucQ%2Fa0l3TXE3SDIsWNx%2BorJsmqPjQT1qmmkiit94bXKzV3MpIy0V70lwhnvk3qYLNHXM%2F9%2FEcc7B%2FV3zxy7msuHAB3p3iO8BGO%2BRnmhsD9smpx0X5GP3kawqsjwMjGTwOmvFPv1Ysgn3G4ADG8zCCmXU0SAhbkNhCSJqu0bUAycAyHpiBzo1htNNeVQpD62DcxhWFa1QNpAbFRJA%2BExgiJUaqiu0s8wtBx8WWRH2ZAg7FR1emPzCPRhePwO1v6xoc%2FuKJPx2aeJdhOPb6v3LocRHNWges9y1x9fWlkZh4mICxIgaGH5rITzCVWaYlE%2FZD6rElRDMq9ipSP2jCOdpObaQ4QGsLCyIwRZNdCgYsw0LNAMzREJmmr6nm4MICMyMkGOqUB8MrezZx4byVBxga6241nCKPRCc09gFKnO%2BkLIWFjdgCPM3V13Q7LIkgfHIxGZz1tQvJ92qHHGR%2BCCV7GP8CXs84xMoGU9KqqHveCxWBvyiZ3doolHNJz7SPppybBI2%2FRskhQI%2Fbxml8mJYW9lA8%2FV2DSZwg9f4jTaoXaWZmf20VjPyR7Vkfyr2rLgSlE4ekwuz%2FVSmWUtt72U26VPZqQgnlWGli8&X-Amz-Signature=4109dae3984bd0c7cebcd97e65c8c331a3acd325a186e512b8d8a71befdd7292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMNZBG4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3G4yfK%2F9kgGDLjsGav6mMce37co6nuvNbYykjuPytEAiEA3am7yfInDAaZXJYvgY%2FR%2BQ9JjnLd2Q5UE7EYT1L0ZrAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBS5ATdv2HAxZNdLLSrcA%2BKNkHmN5SvYVSaU8Kx1bE7NkyF3FOoGyirhtigYQQkXgZIPGWaWtJ18N0Q%2BSt5zS40WWMxE2OLNYdO%2B5PWkWRFhW33FcL6FVQ3A11SlTvxlTlEi6Es4b8rf%2BAVwCW5cNL1qzv2X9a5l2ZvqcWiju6RXPrJHGaekY2etpNnw7q3Jvgmt4mW60rZFAML4VatMFRHgOuAmkBIah0XuPqSPwfAfXYzNe4vaSCDu5TYNNIBMionsFZlssQhjpciI7oUHq9ucQ%2Fa0l3TXE3SDIsWNx%2BorJsmqPjQT1qmmkiit94bXKzV3MpIy0V70lwhnvk3qYLNHXM%2F9%2FEcc7B%2FV3zxy7msuHAB3p3iO8BGO%2BRnmhsD9smpx0X5GP3kawqsjwMjGTwOmvFPv1Ysgn3G4ADG8zCCmXU0SAhbkNhCSJqu0bUAycAyHpiBzo1htNNeVQpD62DcxhWFa1QNpAbFRJA%2BExgiJUaqiu0s8wtBx8WWRH2ZAg7FR1emPzCPRhePwO1v6xoc%2FuKJPx2aeJdhOPb6v3LocRHNWges9y1x9fWlkZh4mICxIgaGH5rITzCVWaYlE%2FZD6rElRDMq9ipSP2jCOdpObaQ4QGsLCyIwRZNdCgYsw0LNAMzREJmmr6nm4MICMyMkGOqUB8MrezZx4byVBxga6241nCKPRCc09gFKnO%2BkLIWFjdgCPM3V13Q7LIkgfHIxGZz1tQvJ92qHHGR%2BCCV7GP8CXs84xMoGU9KqqHveCxWBvyiZ3doolHNJz7SPppybBI2%2FRskhQI%2Fbxml8mJYW9lA8%2FV2DSZwg9f4jTaoXaWZmf20VjPyR7Vkfyr2rLgSlE4ekwuz%2FVSmWUtt72U26VPZqQgnlWGli8&X-Amz-Signature=64aebd22a6518ea30be501967bc66f903603a5ad8ee818cff9a273f34ad89699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
