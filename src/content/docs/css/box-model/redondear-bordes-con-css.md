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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JZZIWR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPir%2FGJh6ituce1Hxvdwp5Tp7Pmby0UIICcma4h8tFaAiAyOUPevdbgoZ6Uk6wVdXeBQw3Xyo3XYJfuB7ZNG2MTGyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMZWlpRzPVpRY3RU6CKtwDUrlw5mpo89sFNSHULFxtm89IIX8mzyAghCPYg8YfIa6Pmr1QjaYZkgS8%2FA%2FprcOY73%2BeivbjivANjGtKVlLMIfchx6f2wGdLBjWBVm7ozWIVkdNAOMI0lwAtJiwWDP8afQ0PahGu45FZbmT3hlrGUq7DrllOIrrOJfcqhUjdhPQwx3rWQbKCrLI1baEasTO8FcMG5%2FlBiTcC5l02e%2B2CZUWM8EsFJgeIaBnU35B2LMknyTL6SK%2BMOhs2htlEn%2FwIuCexpeAqAFLTS43xNiZHbE1Sx4jMWuWevfnj8DOtWU0w7ojguZLbzBkwR4wAoyT4NyKIsURzK3Y4WEcBSGjGXbr2zE0YBbCldGpX6zUr8OE7ixiA50iFzpZyGPh1EWwDzMTmi8HLZqyvkxUFf0ZUlahe8IB07RTUELqfiP%2BAhjV5Kr8i58u%2BAeW5Z2xcB25wAuFN3nxukpfPNlRxcvV0THrq70%2BmboHPiQPSXRLhXreVj8pZKMZUEysUtcgRPs8yMmt3mwvM9c8DZdlD%2FslHxWvdjW5zDH3P6vJPDvifirJH%2FCTX%2BSBcHihGKwkMY99nhjT5dej%2FdUtjRmDgLYPHZiydSATkwSsK6WFHRNzkPW5THVliF1S40RXEjrYw1O%2BJygY6pgECY9fd8vFUZpVWikOBP3YXTaKe0PLv1WmdOLMBWceH%2FkXCkGLW0Xy2vyQxlmcB8zjVvMhxFQ9wlgKrAwA1wZUOfhVADJai3%2Bl7QFnuV66snqtLurvamIE%2BaANUqBP1BtBU1JuEw2EJaZvR1%2Fa7Gvgppw3HooRrheTSrzcdbGF8gxQU6BryFb3%2F9xYzaQQ256VBdulDqEu6Vt7ZsBvuF11elHyzoAe%2F&X-Amz-Signature=6d2969503743ddfe7082446d4e1fb892c7c4a8d6e678c772463a178dd5214678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JZZIWR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPir%2FGJh6ituce1Hxvdwp5Tp7Pmby0UIICcma4h8tFaAiAyOUPevdbgoZ6Uk6wVdXeBQw3Xyo3XYJfuB7ZNG2MTGyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMZWlpRzPVpRY3RU6CKtwDUrlw5mpo89sFNSHULFxtm89IIX8mzyAghCPYg8YfIa6Pmr1QjaYZkgS8%2FA%2FprcOY73%2BeivbjivANjGtKVlLMIfchx6f2wGdLBjWBVm7ozWIVkdNAOMI0lwAtJiwWDP8afQ0PahGu45FZbmT3hlrGUq7DrllOIrrOJfcqhUjdhPQwx3rWQbKCrLI1baEasTO8FcMG5%2FlBiTcC5l02e%2B2CZUWM8EsFJgeIaBnU35B2LMknyTL6SK%2BMOhs2htlEn%2FwIuCexpeAqAFLTS43xNiZHbE1Sx4jMWuWevfnj8DOtWU0w7ojguZLbzBkwR4wAoyT4NyKIsURzK3Y4WEcBSGjGXbr2zE0YBbCldGpX6zUr8OE7ixiA50iFzpZyGPh1EWwDzMTmi8HLZqyvkxUFf0ZUlahe8IB07RTUELqfiP%2BAhjV5Kr8i58u%2BAeW5Z2xcB25wAuFN3nxukpfPNlRxcvV0THrq70%2BmboHPiQPSXRLhXreVj8pZKMZUEysUtcgRPs8yMmt3mwvM9c8DZdlD%2FslHxWvdjW5zDH3P6vJPDvifirJH%2FCTX%2BSBcHihGKwkMY99nhjT5dej%2FdUtjRmDgLYPHZiydSATkwSsK6WFHRNzkPW5THVliF1S40RXEjrYw1O%2BJygY6pgECY9fd8vFUZpVWikOBP3YXTaKe0PLv1WmdOLMBWceH%2FkXCkGLW0Xy2vyQxlmcB8zjVvMhxFQ9wlgKrAwA1wZUOfhVADJai3%2Bl7QFnuV66snqtLurvamIE%2BaANUqBP1BtBU1JuEw2EJaZvR1%2Fa7Gvgppw3HooRrheTSrzcdbGF8gxQU6BryFb3%2F9xYzaQQ256VBdulDqEu6Vt7ZsBvuF11elHyzoAe%2F&X-Amz-Signature=39141efc0977da96e11062b993d1b4dcb092272930a287a9ab16b92321c23817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
