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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUZYZNX7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx9tPpHOpp1f8%2BcyObx3p3bKxjJe2o54bRC4O%2BgpJ96gIgGGFuNlx1mvHQk3CyERu0dO0dXNtEXZtLCaE9e6O0hKYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeTmrw5s8AlDneK%2FCrcA7ATeAno8YSDqKLz6v6jn9jKsZFeqWr84%2BsHfKR%2FuKrT1SqDQpkJ%2FUPoI%2FMd0Wus4abYVjol3JrONiomnqD0Tl2sjp1hl7COi0A7eiGkSH6JM3WWbA1X5G2pPkCmTUlkbqhMYlvktLj8aeR2ibfWzOVGFxrCEHK1DkwtT9y5nGLfCk1NBV6Nc%2F2ozQ2bdF9K65e9ifwVyXqS5tUR3LVivPS9vXqxufRqAW33mti4PUCmMbZMC%2FRaTee3bLK%2BdNm%2FPRHvVCfmPIYG0o2f9jnanBqSzd4EIrj%2BPOuORbZL%2FRkdfbjk3fI2d045i1%2BXtJ%2B%2Fb0pPbOdxfcDqYhT6TxwmT5lDtp58etPZnAD6kIi6prLrT41yFobRcYTwZ943Pf80fV9rVm%2F02FMoL2lTgCUzmOeasOmNmhy78evEu%2Fts0lpOVts%2BJVJFTgC2rKnopdmfdQZT6FU0ojKqGgTh83iMd6lc5psACcoJZci60%2F55c4xguLRvq2DBqZYttvyvt8VGWku086o%2BbsZ7xNJ%2BBH25CsNOlMcfFpq72YAgj%2F9YlKmDtF70RVEXXmpCu3tY7NvDnMQN5QgaSGR2fPnsBUjnILA1iO12aBchygnCRF5nOhOWCyyhfVOZXrE0KNKjMInQ2ckGOqUBmU6uHmLmnOW%2By6Xixau%2BEUT5sqW4Q1qjZjoWwaIWODppgPfat1a%2BCdDfzR4Q%2FUjZk2bKklNJ9HbdAFyNGvqFOQyR99J%2Bgl2MnPllSacT570SZy%2FOqVIiA3e%2BZfZR5yzGmO2rxQFCU2%2BK5SNgEwPqR6NfHN3DMA6jtf0L03W3FPP0XmGh7TSEAOH0RcN3gcbWb8cndFxe7g5aiR%2FaSYLL7PsGbhlh&X-Amz-Signature=516eba5bf39efa7550ab2c58e8939d235b540ab7198ac80ec552e3dd7995bfcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUZYZNX7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx9tPpHOpp1f8%2BcyObx3p3bKxjJe2o54bRC4O%2BgpJ96gIgGGFuNlx1mvHQk3CyERu0dO0dXNtEXZtLCaE9e6O0hKYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeTmrw5s8AlDneK%2FCrcA7ATeAno8YSDqKLz6v6jn9jKsZFeqWr84%2BsHfKR%2FuKrT1SqDQpkJ%2FUPoI%2FMd0Wus4abYVjol3JrONiomnqD0Tl2sjp1hl7COi0A7eiGkSH6JM3WWbA1X5G2pPkCmTUlkbqhMYlvktLj8aeR2ibfWzOVGFxrCEHK1DkwtT9y5nGLfCk1NBV6Nc%2F2ozQ2bdF9K65e9ifwVyXqS5tUR3LVivPS9vXqxufRqAW33mti4PUCmMbZMC%2FRaTee3bLK%2BdNm%2FPRHvVCfmPIYG0o2f9jnanBqSzd4EIrj%2BPOuORbZL%2FRkdfbjk3fI2d045i1%2BXtJ%2B%2Fb0pPbOdxfcDqYhT6TxwmT5lDtp58etPZnAD6kIi6prLrT41yFobRcYTwZ943Pf80fV9rVm%2F02FMoL2lTgCUzmOeasOmNmhy78evEu%2Fts0lpOVts%2BJVJFTgC2rKnopdmfdQZT6FU0ojKqGgTh83iMd6lc5psACcoJZci60%2F55c4xguLRvq2DBqZYttvyvt8VGWku086o%2BbsZ7xNJ%2BBH25CsNOlMcfFpq72YAgj%2F9YlKmDtF70RVEXXmpCu3tY7NvDnMQN5QgaSGR2fPnsBUjnILA1iO12aBchygnCRF5nOhOWCyyhfVOZXrE0KNKjMInQ2ckGOqUBmU6uHmLmnOW%2By6Xixau%2BEUT5sqW4Q1qjZjoWwaIWODppgPfat1a%2BCdDfzR4Q%2FUjZk2bKklNJ9HbdAFyNGvqFOQyR99J%2Bgl2MnPllSacT570SZy%2FOqVIiA3e%2BZfZR5yzGmO2rxQFCU2%2BK5SNgEwPqR6NfHN3DMA6jtf0L03W3FPP0XmGh7TSEAOH0RcN3gcbWb8cndFxe7g5aiR%2FaSYLL7PsGbhlh&X-Amz-Signature=9966bb8d122931729e5455a58ff60385e3ae49734652cf89c31330c07745e13a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
