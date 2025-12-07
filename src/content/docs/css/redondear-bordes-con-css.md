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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X4I2IMQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8b%2BqyyXhZE7hmQ3zjFwdz0af9I%2FUN0S%2B2xhuVXQoxfQIgRF386iMjvOngVbVeE572tAVQLU64Ni6%2FRHMB%2B2pczxIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F%2FPLmm1u3T70sgxSrcA0hDPvqyq8zK6iJDxyQrxVuUvtHu43lLJDxS7MevtTud0Sf9aywJvBi%2Bev446wib6UhbpOoI0UkeG1UwRgbTc%2F%2Bp3lrrfUF0nHnTcpDIyTqXX9IcTd8UTlbuEuhh2E%2FrEKgG4ABPUfha5ha0Q9Btj21B8LQxl1CtFDU6beCFfL%2Bwc4zmv%2F2m5wsyag%2BP54jm49ND1vV0DPdDJaomraeucEPwGxiYuT6q55DE2Dq2ry33y8kN2qNp1xfJjumdXOiTZVdxCcy9ax0WUbTcE3l2gPqRB5UqPiG%2Frmv2gekdYu1n%2FEG%2B8slRUnNav%2FX9CDa%2F55jBEF%2FGxQnHoUwCpKBkaZ35ysBnuyZw4V8QR0N9FiPDF96GRXokrcxzIKaQV7v0q67HxQc8Ila2XXhwQmRf8mmMDN9kKKv87UE7avJszfj5dFhCYHEZ7ZRLzQUwbqh5HvCuSKwaTlM96rYBBj1H1fk0b%2BtQX0qmX7Imd%2BJLvl%2FrYTYSApYeg5Uyu82YylQLIc4QWZvseaY%2FvbYc8gFcURbResy%2FCV3n7kStaqvY8q03ajfXcUPJWYqw%2Fet5fbBb7ccl109Asvr0MLhDwROzCrPb7GNfaNy%2B0m5DSb%2Ff0CkX%2F%2BF5khTm0yTKTQ9JMPTG18kGOqUBMcLIuy1AiDzJcAnCpU9oEsPX9P5J4c3UPf%2F0Xn6PCn2FBuWGBQxvx0zzGhdW%2BvK1sQPneHc6iRBkZam7bPy5SbtMCJaZbGFTyD2kJKvcOwgd%2BHaROGC81u2fweJgVXqKeqyV9fXkTNAap6isOHWy%2FgNt434MR29nALCuhbApCLFVEE%2B76TCa%2BzQrXP20KrSPir5wTuE%2Bf4ueVQQ8Lge7XJ5CYeff&X-Amz-Signature=10e6bf95aacc01b080d182f967eb1588aad95db56e4672cb8ed6f491fed0123c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X4I2IMQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8b%2BqyyXhZE7hmQ3zjFwdz0af9I%2FUN0S%2B2xhuVXQoxfQIgRF386iMjvOngVbVeE572tAVQLU64Ni6%2FRHMB%2B2pczxIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F%2FPLmm1u3T70sgxSrcA0hDPvqyq8zK6iJDxyQrxVuUvtHu43lLJDxS7MevtTud0Sf9aywJvBi%2Bev446wib6UhbpOoI0UkeG1UwRgbTc%2F%2Bp3lrrfUF0nHnTcpDIyTqXX9IcTd8UTlbuEuhh2E%2FrEKgG4ABPUfha5ha0Q9Btj21B8LQxl1CtFDU6beCFfL%2Bwc4zmv%2F2m5wsyag%2BP54jm49ND1vV0DPdDJaomraeucEPwGxiYuT6q55DE2Dq2ry33y8kN2qNp1xfJjumdXOiTZVdxCcy9ax0WUbTcE3l2gPqRB5UqPiG%2Frmv2gekdYu1n%2FEG%2B8slRUnNav%2FX9CDa%2F55jBEF%2FGxQnHoUwCpKBkaZ35ysBnuyZw4V8QR0N9FiPDF96GRXokrcxzIKaQV7v0q67HxQc8Ila2XXhwQmRf8mmMDN9kKKv87UE7avJszfj5dFhCYHEZ7ZRLzQUwbqh5HvCuSKwaTlM96rYBBj1H1fk0b%2BtQX0qmX7Imd%2BJLvl%2FrYTYSApYeg5Uyu82YylQLIc4QWZvseaY%2FvbYc8gFcURbResy%2FCV3n7kStaqvY8q03ajfXcUPJWYqw%2Fet5fbBb7ccl109Asvr0MLhDwROzCrPb7GNfaNy%2B0m5DSb%2Ff0CkX%2F%2BF5khTm0yTKTQ9JMPTG18kGOqUBMcLIuy1AiDzJcAnCpU9oEsPX9P5J4c3UPf%2F0Xn6PCn2FBuWGBQxvx0zzGhdW%2BvK1sQPneHc6iRBkZam7bPy5SbtMCJaZbGFTyD2kJKvcOwgd%2BHaROGC81u2fweJgVXqKeqyV9fXkTNAap6isOHWy%2FgNt434MR29nALCuhbApCLFVEE%2B76TCa%2BzQrXP20KrSPir5wTuE%2Bf4ueVQQ8Lge7XJ5CYeff&X-Amz-Signature=3b4e1212d2d2ffc0970acdc7d0cde1a591506a9edd88f0cc03e7719e36873843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
