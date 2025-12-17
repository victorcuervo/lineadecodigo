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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHER5WON%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDupmwnMVsbq2XSK6j7QqyxEQ4FhVqJepewtKZ%2F%2Bgen4AIhAP0HaS4yNDwN4PNbsZh%2Fy3WlYVpDY7IlVuSnAH3QJSvEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTt9cd2uXUVasSAAIq3ANwc2K%2F%2BJmQr2DOptFiGxag0G00n5SVuQvb9e1Dl5nzRjSxzU%2BMx2IruKzI9FiDplzdOVbfgkHIKBraolBqAk90rBu%2BnJEtdLBOnGTatBZAIKT0ySXHyfwPIWGZfw2jiR5w2Kz38FugjFReb7IS5Up6YQAhRvdIlXLRjHXi26%2Fv%2FRdwhrtc0zDCrQ5BIC1i9jGBi8JzweBTIh4WtBeOJzcgigoPr%2FWRwj2GcoOztvi0a72wEa3jqWLlOBZE0i9J70zdnCP0n1OND3WtU5YiEdZfVDp7jQ3chPulSiUKfTzm1jRIBbwtLHipCLczwnr%2B9aOmPYHCV5r2d8zzvwZGytLZStly55pv70AP3ClG6mCWWgMwZeIK7JNOCNLr33C%2FZSwiIs7YoUqPXn197wCD13XQwQWzR551DkHX2OtvJks2Id3NrGFdq0i5Ma0HZtQ1aaAGHqvLh03dAipqPLnylvLlU0g4hdE7FaRMsvjRlREi5U4VH3J7eaYqBsK1oyEqgBa2G09A0xHLhP13SUZSIs3C1HwTSbkVBGktMP9BPoWgXbAdQMq6Y5zMv7TP%2FFIR2mFihgwKPGjDr9yQ81N%2Bv8JMyH96Bi%2FsmhcPxeHzwVgWJS039xHJE9JRxzioXzDcoIvKBjqkAfAHuTRRZ4YB8l%2BdtGo9jww%2FmCq%2Bb9ZTSYhIpwiDEGph8mQMl7ZnFlAxvF49uKgJQPZMtEbDccM%2ByDXx0rSRGX%2FwEr5rhGQLsGrqaePl93YNUvRrxOjrGKYz4HaHcaNwFi3JAJ20wPLhli4y52mLvtbsCcb3mMJZw%2FEO4Sy6RMB6Fg8d6yjzx9aZEfpLYdxcuezubru%2BU1Q%2Bc2UzqyK%2FzCvgZOy%2B&X-Amz-Signature=37f7299d3ee8d79312a249d08a39ca48726159f82caa036cdf6ec6db7897a77d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHER5WON%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDupmwnMVsbq2XSK6j7QqyxEQ4FhVqJepewtKZ%2F%2Bgen4AIhAP0HaS4yNDwN4PNbsZh%2Fy3WlYVpDY7IlVuSnAH3QJSvEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTt9cd2uXUVasSAAIq3ANwc2K%2F%2BJmQr2DOptFiGxag0G00n5SVuQvb9e1Dl5nzRjSxzU%2BMx2IruKzI9FiDplzdOVbfgkHIKBraolBqAk90rBu%2BnJEtdLBOnGTatBZAIKT0ySXHyfwPIWGZfw2jiR5w2Kz38FugjFReb7IS5Up6YQAhRvdIlXLRjHXi26%2Fv%2FRdwhrtc0zDCrQ5BIC1i9jGBi8JzweBTIh4WtBeOJzcgigoPr%2FWRwj2GcoOztvi0a72wEa3jqWLlOBZE0i9J70zdnCP0n1OND3WtU5YiEdZfVDp7jQ3chPulSiUKfTzm1jRIBbwtLHipCLczwnr%2B9aOmPYHCV5r2d8zzvwZGytLZStly55pv70AP3ClG6mCWWgMwZeIK7JNOCNLr33C%2FZSwiIs7YoUqPXn197wCD13XQwQWzR551DkHX2OtvJks2Id3NrGFdq0i5Ma0HZtQ1aaAGHqvLh03dAipqPLnylvLlU0g4hdE7FaRMsvjRlREi5U4VH3J7eaYqBsK1oyEqgBa2G09A0xHLhP13SUZSIs3C1HwTSbkVBGktMP9BPoWgXbAdQMq6Y5zMv7TP%2FFIR2mFihgwKPGjDr9yQ81N%2Bv8JMyH96Bi%2FsmhcPxeHzwVgWJS039xHJE9JRxzioXzDcoIvKBjqkAfAHuTRRZ4YB8l%2BdtGo9jww%2FmCq%2Bb9ZTSYhIpwiDEGph8mQMl7ZnFlAxvF49uKgJQPZMtEbDccM%2ByDXx0rSRGX%2FwEr5rhGQLsGrqaePl93YNUvRrxOjrGKYz4HaHcaNwFi3JAJ20wPLhli4y52mLvtbsCcb3mMJZw%2FEO4Sy6RMB6Fg8d6yjzx9aZEfpLYdxcuezubru%2BU1Q%2Bc2UzqyK%2FzCvgZOy%2B&X-Amz-Signature=e852a75832fec98de3d43437621d58c3ba53baf83b0ee9516ab0885048536d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
