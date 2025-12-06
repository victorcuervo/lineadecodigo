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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3GDLNDL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwqxOGjEisrlmatx8s5Eu3y1lkuB1omAH7AeVOR%2BD69gIgI5NRNJm39foaTxbMc1SxDdTeVY18gKywkGRHfpvC934q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDMHO9oBxI2FIJQSVHSrcA%2BOshZ2p3%2FuwGSsB6KQIHVrFXG%2Ftg0WBuUUJIcpKidJWGDELjKaSvqptincV1BsrBdRBCA5yodwGS50Hl4JDGM58h9VrHUrwMfeOEuvkK1LEzx%2BdMiZBfHcvWlKguVRFq2wxNNxJPB1LgLRxGfGwS8FvGsnrj3lS5Zz3kyJVHPHimZd0Y693tZiC8y771XgHB%2F7ly5gwNZLfC%2FpibcU5XNHEbqKFrIYR8mtkrgA8QZS6Z2XlAQz0V1%2FutGGQsfk7atGayuaiDFRV79R%2BJSgXClFosa8jzgivjHdLAb%2BUDDF1m9T915xpfDm3IJ4Sth7Qd2YDbHhVIad6bFye07a1AmrKufij2%2BzVTVcWmg2TTmaL7iwyYDJvGKn7N%2F6t7cV7NAQmWD5M5RUNLmi6tDRo6T%2FswFn3BFG92QTJE7QNWoC%2BcBCGAZQwSpt2XbTXekITN5UYDndMkCOf2YNEu4FWqZf0p9RLHoXR1iNQhxK0PmERzvBVBVtShC3qRU%2BzwurP0BZJggrcO66rNz8DtFAra%2BANMfHkzaQOgkNB%2FX5lJL1E05I%2BxAJz63kup821cJezDIJj4C9ACwDLKLRZQIHOAnPaulrdPWe1V0WIfCeEky9ve4PVRdxt8Ze9Et0iMOn8zskGOqUBL2VAarU1fWZ1Jg1OLKZQwfm4b6hWAauDKF%2FJMr8%2B%2BzFwnaZraAa8AKmQWpEMZAek4g1nxnlORAUPB6%2BjlO17UHuIsO5CalI0Ngs0tGGM556CI9ZrWHzKX8eWZVQHC4%2BruwqxsCFbrjBdLJnxYhdu1aCyORSo%2FqtrYCJorT6RNxGI%2FJHSf1uav6SQj%2FrWxA2ICAcpTkgBs6ayxYmrbFx6FuF8cOMI&X-Amz-Signature=71ad667eebe331b184c73017fb6cacf1daf34dc13299974716ae6ae30e1db36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3GDLNDL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwqxOGjEisrlmatx8s5Eu3y1lkuB1omAH7AeVOR%2BD69gIgI5NRNJm39foaTxbMc1SxDdTeVY18gKywkGRHfpvC934q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDMHO9oBxI2FIJQSVHSrcA%2BOshZ2p3%2FuwGSsB6KQIHVrFXG%2Ftg0WBuUUJIcpKidJWGDELjKaSvqptincV1BsrBdRBCA5yodwGS50Hl4JDGM58h9VrHUrwMfeOEuvkK1LEzx%2BdMiZBfHcvWlKguVRFq2wxNNxJPB1LgLRxGfGwS8FvGsnrj3lS5Zz3kyJVHPHimZd0Y693tZiC8y771XgHB%2F7ly5gwNZLfC%2FpibcU5XNHEbqKFrIYR8mtkrgA8QZS6Z2XlAQz0V1%2FutGGQsfk7atGayuaiDFRV79R%2BJSgXClFosa8jzgivjHdLAb%2BUDDF1m9T915xpfDm3IJ4Sth7Qd2YDbHhVIad6bFye07a1AmrKufij2%2BzVTVcWmg2TTmaL7iwyYDJvGKn7N%2F6t7cV7NAQmWD5M5RUNLmi6tDRo6T%2FswFn3BFG92QTJE7QNWoC%2BcBCGAZQwSpt2XbTXekITN5UYDndMkCOf2YNEu4FWqZf0p9RLHoXR1iNQhxK0PmERzvBVBVtShC3qRU%2BzwurP0BZJggrcO66rNz8DtFAra%2BANMfHkzaQOgkNB%2FX5lJL1E05I%2BxAJz63kup821cJezDIJj4C9ACwDLKLRZQIHOAnPaulrdPWe1V0WIfCeEky9ve4PVRdxt8Ze9Et0iMOn8zskGOqUBL2VAarU1fWZ1Jg1OLKZQwfm4b6hWAauDKF%2FJMr8%2B%2BzFwnaZraAa8AKmQWpEMZAek4g1nxnlORAUPB6%2BjlO17UHuIsO5CalI0Ngs0tGGM556CI9ZrWHzKX8eWZVQHC4%2BruwqxsCFbrjBdLJnxYhdu1aCyORSo%2FqtrYCJorT6RNxGI%2FJHSf1uav6SQj%2FrWxA2ICAcpTkgBs6ayxYmrbFx6FuF8cOMI&X-Amz-Signature=3dd4b7b267e2fbc83458e43ccfb43db4bdac8208049526c55fabc7294bbad93f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
