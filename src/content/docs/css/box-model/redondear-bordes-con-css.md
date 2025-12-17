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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZB4X2XW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK97Pjt%2BxRBn8TPECW2ZjRgvbKLTnBj%2BMWN4pgsjZzoAiB4ury9IF3aAtpadBnA3LgT4jDZVqhVC8ep0K6p9kbCnSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM6T6hIUwldD9iCqmuKtwD2Wo0a9nkqb1eybtP5x8XnDbSy9BZ3fTGhKxHC%2FFHW1EbFBMNplxMVGR3hTyc8i5DBI2z5MMO0TBtLUMvI9M0Hvn3SsNcAY%2B0sUllE2lGM94gAFtr9wfBl6gIn5qxHo0t1YzmW1ls1MahL5h4uHDD18VF3sBSmRmMdJiT6CGNKOZLF8905MJohpRhIEC%2FUdsOJuIY5%2Fp845PzIbf2DsfZXMpksDLy7vtiNM6bgME9Ehyaol8feJWUwmdqs71yKbfEMKWHMWlaaUAqTQJEwRM72R6gDS%2FdodrsYB%2BP4xhwOPkTG05%2F9Ed%2FrGjJiN7znGSHZ%2BRMamDntGXbLK82EC9o8bQGjSa4g6jOllY9vRiN5ncEDa7iuTpKqk52hgEa64i98n%2BnT%2FuGPd3BdloMtd2sxh%2BlOfTrOOXtAG0%2FT5AXBK2UPDM6hZgrTPMgQ8rLczBCvs9aJSqVM7R1ZGFgVRsOlp6axDnRfsynvcyk1gtj%2FYzIZcmZ5QipLIMPpS7dL6zdS1%2BSSaRRZqCnFEDrK1HUP%2Bg45jonTGovI3Q1QsRoUGX%2BkTHDfb6a9p1jZyGAZE9J5EPhqxmlrNYZWdkymKKnVIw90%2BokoiAIbQ6sWXjR9KIchMH6unVFSxXNcY8wqoOJygY6pgGBXIEQ%2BYZhEk2jU%2FLLOQIIWBJ8iwYjgyAyUH%2F8XEN2NYR0F8wcCn%2B2qc3Q%2FRXghcCU4OcD58Jt%2Fm0nv%2BMyCMay%2B0UzaaIQG3XbpkYokJ6ysky5t5NzFHIJIoWR%2FDs4duFiT8wc2iCKOUEoxbVCbRH7YCVUWI31QD0uREkXjb1SU54hGww0YA1TRMQlZS4wGLKtcj4VSF%2BBKYL9OctzUs%2FGWaDS%2F1lm&X-Amz-Signature=e51e860e16f654da3966cdac3364d17ea01baf4338ef159601d683a3663a044c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZB4X2XW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK97Pjt%2BxRBn8TPECW2ZjRgvbKLTnBj%2BMWN4pgsjZzoAiB4ury9IF3aAtpadBnA3LgT4jDZVqhVC8ep0K6p9kbCnSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM6T6hIUwldD9iCqmuKtwD2Wo0a9nkqb1eybtP5x8XnDbSy9BZ3fTGhKxHC%2FFHW1EbFBMNplxMVGR3hTyc8i5DBI2z5MMO0TBtLUMvI9M0Hvn3SsNcAY%2B0sUllE2lGM94gAFtr9wfBl6gIn5qxHo0t1YzmW1ls1MahL5h4uHDD18VF3sBSmRmMdJiT6CGNKOZLF8905MJohpRhIEC%2FUdsOJuIY5%2Fp845PzIbf2DsfZXMpksDLy7vtiNM6bgME9Ehyaol8feJWUwmdqs71yKbfEMKWHMWlaaUAqTQJEwRM72R6gDS%2FdodrsYB%2BP4xhwOPkTG05%2F9Ed%2FrGjJiN7znGSHZ%2BRMamDntGXbLK82EC9o8bQGjSa4g6jOllY9vRiN5ncEDa7iuTpKqk52hgEa64i98n%2BnT%2FuGPd3BdloMtd2sxh%2BlOfTrOOXtAG0%2FT5AXBK2UPDM6hZgrTPMgQ8rLczBCvs9aJSqVM7R1ZGFgVRsOlp6axDnRfsynvcyk1gtj%2FYzIZcmZ5QipLIMPpS7dL6zdS1%2BSSaRRZqCnFEDrK1HUP%2Bg45jonTGovI3Q1QsRoUGX%2BkTHDfb6a9p1jZyGAZE9J5EPhqxmlrNYZWdkymKKnVIw90%2BokoiAIbQ6sWXjR9KIchMH6unVFSxXNcY8wqoOJygY6pgGBXIEQ%2BYZhEk2jU%2FLLOQIIWBJ8iwYjgyAyUH%2F8XEN2NYR0F8wcCn%2B2qc3Q%2FRXghcCU4OcD58Jt%2Fm0nv%2BMyCMay%2B0UzaaIQG3XbpkYokJ6ysky5t5NzFHIJIoWR%2FDs4duFiT8wc2iCKOUEoxbVCbRH7YCVUWI31QD0uREkXjb1SU54hGww0YA1TRMQlZS4wGLKtcj4VSF%2BBKYL9OctzUs%2FGWaDS%2F1lm&X-Amz-Signature=3a445564fb2cd22feb8c4787301fba878b2bba493daa33e06ec3684eeb841ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
