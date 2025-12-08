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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTINNBDD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyOyRA7R%2BjsnNKHCD5ABSLe%2BG4VIUykjtjbjorNdA1dAIhAJUHihB0aQJJM16Ii2rIeWgLPA4HRzHsDGVQClEsia6oKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRtmeSSVn%2Fe4w1hYwq3AMwlCQyfXFznq1aoO5AOU64e%2B5iUFIFgPQrG3avxdABq7ZOnq%2Fbq2k8IVKaSkDtNXbDoRHo%2BIkydrErbV6gas3%2BgGFOve9AJYoNj0%2B0rA%2BZ%2FvMM%2Bet43SGktqlukYTx1grZUxa8wZjrDKocuwiYbeZiL4wxlICbV87VTwvFyyLMFo%2FiIJJJOuBL8AHa%2F%2FaIv14ZYIUzcPmThdAd7xZFLwk41WAHbSctpaC%2BuXIHDlI7qISzFI9xMN4Wiq6fZTIH6aVpUO%2BVl5js6EZS4fLJTKCv1qHLJiHHFYfQQ492CJAa9dO1fzSc%2BTjkhp8oBe%2Bv42sNb9%2BA%2BKEa8TwgfpJzlmKOJMqmy4neP%2B%2B6kR2szp4WLtS97egfmHTHC7HVADtw0L9bh9TncMRinNcvoXYgDfs6%2FIay6Z1hLJmnTk%2BvVf%2B51vhS6YT2P0pAIZLMF7SUBiEtriEkX7zXNiz1%2BXCo4bseC66zFOjnAtO%2FUl0K4b3XuB5aCJlNHzyNWfega2HQBi27gJpGYt3FQGx0gSD41JRxXKUTKPXSljiBrPC77Bkq%2FYBvEWjUO5Dge%2F2Dmz0EhNQIeDh1Af%2FCoy60jisneqK5%2FG7utHfdjXohd4OzoMKk1TiQ2uejHPMqMBdXODDr3NzJBjqkAZJg19U82G7rsy60rj7al%2F8NhNPhA4ZEuu804wd3dfDcZcSk%2Fl%2FDszY7ijHyaaYp1ZZ%2FeErhQMWVBrJ55l016FE8reF1LU9S4Dl7kmNKo9yFosSrDBWTlhZG%2FGGUajqS5beXBY0zv58qJg4nwt7arH%2BY8L%2B1905v8JTcDlkGW3ujy%2BPzU6rdmkbTx6nDk7yfwV07w%2BhaKAWHkSPyzRYhxg%2B9Zuxy&X-Amz-Signature=d26c841176b76479e8fb0918c508e1595a67ae5a8b44e6fb618abd6320d52cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTINNBDD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyOyRA7R%2BjsnNKHCD5ABSLe%2BG4VIUykjtjbjorNdA1dAIhAJUHihB0aQJJM16Ii2rIeWgLPA4HRzHsDGVQClEsia6oKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRtmeSSVn%2Fe4w1hYwq3AMwlCQyfXFznq1aoO5AOU64e%2B5iUFIFgPQrG3avxdABq7ZOnq%2Fbq2k8IVKaSkDtNXbDoRHo%2BIkydrErbV6gas3%2BgGFOve9AJYoNj0%2B0rA%2BZ%2FvMM%2Bet43SGktqlukYTx1grZUxa8wZjrDKocuwiYbeZiL4wxlICbV87VTwvFyyLMFo%2FiIJJJOuBL8AHa%2F%2FaIv14ZYIUzcPmThdAd7xZFLwk41WAHbSctpaC%2BuXIHDlI7qISzFI9xMN4Wiq6fZTIH6aVpUO%2BVl5js6EZS4fLJTKCv1qHLJiHHFYfQQ492CJAa9dO1fzSc%2BTjkhp8oBe%2Bv42sNb9%2BA%2BKEa8TwgfpJzlmKOJMqmy4neP%2B%2B6kR2szp4WLtS97egfmHTHC7HVADtw0L9bh9TncMRinNcvoXYgDfs6%2FIay6Z1hLJmnTk%2BvVf%2B51vhS6YT2P0pAIZLMF7SUBiEtriEkX7zXNiz1%2BXCo4bseC66zFOjnAtO%2FUl0K4b3XuB5aCJlNHzyNWfega2HQBi27gJpGYt3FQGx0gSD41JRxXKUTKPXSljiBrPC77Bkq%2FYBvEWjUO5Dge%2F2Dmz0EhNQIeDh1Af%2FCoy60jisneqK5%2FG7utHfdjXohd4OzoMKk1TiQ2uejHPMqMBdXODDr3NzJBjqkAZJg19U82G7rsy60rj7al%2F8NhNPhA4ZEuu804wd3dfDcZcSk%2Fl%2FDszY7ijHyaaYp1ZZ%2FeErhQMWVBrJ55l016FE8reF1LU9S4Dl7kmNKo9yFosSrDBWTlhZG%2FGGUajqS5beXBY0zv58qJg4nwt7arH%2BY8L%2B1905v8JTcDlkGW3ujy%2BPzU6rdmkbTx6nDk7yfwV07w%2BhaKAWHkSPyzRYhxg%2B9Zuxy&X-Amz-Signature=cd3d8220440429107d807844c16f2c99c59cb1bc6e820feb7fac058e8f05bef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
