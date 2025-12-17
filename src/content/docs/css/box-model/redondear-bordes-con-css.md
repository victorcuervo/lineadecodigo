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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654C3NEJO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA971gwasIT2vqgf3cZ1BYG3BcZkM0UCuOMQtMmenM2%2BAiBXD40MNOY12pt1M4nE97kjIaDbaJzDa7u3jmFJN6hEPir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMJjY52mqzOeQfNGsMKtwDWlnkDv4kJW91BgFML1ECc0j6lPNTuXMkI9p59nTaOOgwJAZDp%2BBqnp9tYiiqjZWqakH8OgrWo6H3Gfmk9kZfmnXY20TOUpFqabVuHd3L911ALUBYvfCnBO4FyT7SUbZJMennt7BjwJ6zBroJElBTAb8%2BuFdzotSl6Uju1ULzgiPtEeYBGHSWKb8jZ%2FVAdp0GTIhGhTvPljTjbcGEBLUKvTRwNQK%2FEMFKGECDnBMpfrvF1qFdkZIxMl7SSTDEu9lqcPOEkNORsAUqmrtxC4Q46yyeQb6JgjNOTKSFT24U7r0M9RAfo%2Br1yIEprVCqVbva5U9SXbDmLUDErefJ2zpkNGoBzvkwza6L1h57w9RkCc6DMPMUO89RrsT%2FYwSkDSutq46l9d5SagAXDR55l3h2hk1bS0xAyQs97h6BOIrbzHrcw9WNO2XWAHitnB5Y2wuN2w%2BpVPP0lpeTAkmU%2BkN2tq%2FIqx7zoZ9HYDYrDt%2B6r6uGqXU6inATbVbeCTHOScr8AWpgB8FPUq8Jlf1EuHZW4%2FFPnnIucXvoiIWucYu%2BecLzhv4efOTbryjp5qvaSZTTvaBoQhaWdbLUG8lVplKLf72stWIBHMHFdHCuijLnHMAP7Jv%2FDIRyWBfJ%2Fn4wireJygY6pgF5j%2BlgrNJ2XQLXaSvu2AJFdfmurC8hJHYFF6e8RSEDs%2F2m6ufnHj40J%2FhKytOXVWSsHmvFbFDWffvFR3fEYkPhiuvnVk7g7BbQUJBPONqiO09WYC3Zvm5MbP6IRUVq%2By2hlYj%2B0kc%2Fge%2F3lCmcikr6F%2FmFQL3vHTSnVw3Xh72Hds5g8ZMC9O%2BhM%2Fa1uU%2Fg75iBV80AM5LjafKKjUJNRr6fTbz7mMTP&X-Amz-Signature=96b62e52f92cb086bcb1c31f0afbd0ae895cb8d5144a5f536d75dcec34499785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654C3NEJO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA971gwasIT2vqgf3cZ1BYG3BcZkM0UCuOMQtMmenM2%2BAiBXD40MNOY12pt1M4nE97kjIaDbaJzDa7u3jmFJN6hEPir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMJjY52mqzOeQfNGsMKtwDWlnkDv4kJW91BgFML1ECc0j6lPNTuXMkI9p59nTaOOgwJAZDp%2BBqnp9tYiiqjZWqakH8OgrWo6H3Gfmk9kZfmnXY20TOUpFqabVuHd3L911ALUBYvfCnBO4FyT7SUbZJMennt7BjwJ6zBroJElBTAb8%2BuFdzotSl6Uju1ULzgiPtEeYBGHSWKb8jZ%2FVAdp0GTIhGhTvPljTjbcGEBLUKvTRwNQK%2FEMFKGECDnBMpfrvF1qFdkZIxMl7SSTDEu9lqcPOEkNORsAUqmrtxC4Q46yyeQb6JgjNOTKSFT24U7r0M9RAfo%2Br1yIEprVCqVbva5U9SXbDmLUDErefJ2zpkNGoBzvkwza6L1h57w9RkCc6DMPMUO89RrsT%2FYwSkDSutq46l9d5SagAXDR55l3h2hk1bS0xAyQs97h6BOIrbzHrcw9WNO2XWAHitnB5Y2wuN2w%2BpVPP0lpeTAkmU%2BkN2tq%2FIqx7zoZ9HYDYrDt%2B6r6uGqXU6inATbVbeCTHOScr8AWpgB8FPUq8Jlf1EuHZW4%2FFPnnIucXvoiIWucYu%2BecLzhv4efOTbryjp5qvaSZTTvaBoQhaWdbLUG8lVplKLf72stWIBHMHFdHCuijLnHMAP7Jv%2FDIRyWBfJ%2Fn4wireJygY6pgF5j%2BlgrNJ2XQLXaSvu2AJFdfmurC8hJHYFF6e8RSEDs%2F2m6ufnHj40J%2FhKytOXVWSsHmvFbFDWffvFR3fEYkPhiuvnVk7g7BbQUJBPONqiO09WYC3Zvm5MbP6IRUVq%2By2hlYj%2B0kc%2Fge%2F3lCmcikr6F%2FmFQL3vHTSnVw3Xh72Hds5g8ZMC9O%2BhM%2Fa1uU%2Fg75iBV80AM5LjafKKjUJNRr6fTbz7mMTP&X-Amz-Signature=70db8c306fea7e96013360c5a9312430d16692e4a3eb6b5d9b531b888fd336ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
