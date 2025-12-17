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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBYU36U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHc31ozuZ%2Fx9QcZD8ZEL4L%2F9FVDk2PU3R%2B3tnA5c%2BRqUAiEA1SFMVOegPTP%2FJkz6OrZ2i7Aufm7YWxBuXxSJbSc%2BgQ8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDB6rLGW%2BzDjtMKTCKircAyClix%2FLnnK8rbwVd3mIUs8TMHXpO1Y16cnGBf6MaPz7jsjhtDUa9GOCFqjqihzuJordfqLwtQ3pNRVWBMl5ExAxZWu0qWIHDt9NfgloMHsodb0g2GMn6KH%2BNxD8KBtsV8uoALrZUe1VBQBu83iAnzk5GA%2BLxXpJyaRAD67K9mXGszjcIs1HCuqrxGYyzB5aLZRgLiPXJXs1uS8XcwOxe4Iff%2BgaqEeSpg1dRF5QMBCLaR6aZXYcubEHgIYfGJLITvwhSGLr87jTRD0nL20dBkfA8G5hXvIdYeYoLE4gcQPGYXYIcdTuXCAFEq%2Bu6qqpz8E1zNBDhbIrFqi89M9eLbJoivKYla5aFLWGTrZCQFP6CQBEOvxNLTaplX%2B%2BchbgoK6pK92SZUoNIzd3SD9haz2NCWBMavQwQB2QqxpCUznIYBnnSVOH0OTgKqcRKZgd%2BseRqvD83NfclBef34onJgXgl3VoMqwX%2FIjmbnnkRozAQMMhPLJnieTFXQJ0a6MXKrnjhoya5yVoRr5nue1b%2FliVPwynksOr%2BLjaV%2BzvaLNRSw89yGM4JTqnULRd6BSVz0%2B4cno95tP3PeoEXlWslfoNZw5USRAuRLLSwEnkK3KSF8lYx2slV%2FSmDLmbMObGisoGOqUBmN0xS%2B5P7bMA6xrKfgsYsTDUu3STRC1obwSnO5kukAQYBYgcQiRKDCAUJZprGbM9%2FyPzLipxqA3b8L42NFxlRMMU1AibDiapjjK4DUqudMQ3SFrYzgVI7XMBIC3M0nMYgoGXt%2FSAQAsQ6%2BCjIK8kQU0KQ0Q3yhwyWApHcnpn1woh06Cd5wj2RKqGzpPhQD3Atk8KoDqEvhXFiBVXdxgJGx%2BzdZ3f&X-Amz-Signature=466a41248144d60b3149f9778f2421ad348db4fe1d6bb76f9e6d6edbdad1bea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBYU36U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHc31ozuZ%2Fx9QcZD8ZEL4L%2F9FVDk2PU3R%2B3tnA5c%2BRqUAiEA1SFMVOegPTP%2FJkz6OrZ2i7Aufm7YWxBuXxSJbSc%2BgQ8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDB6rLGW%2BzDjtMKTCKircAyClix%2FLnnK8rbwVd3mIUs8TMHXpO1Y16cnGBf6MaPz7jsjhtDUa9GOCFqjqihzuJordfqLwtQ3pNRVWBMl5ExAxZWu0qWIHDt9NfgloMHsodb0g2GMn6KH%2BNxD8KBtsV8uoALrZUe1VBQBu83iAnzk5GA%2BLxXpJyaRAD67K9mXGszjcIs1HCuqrxGYyzB5aLZRgLiPXJXs1uS8XcwOxe4Iff%2BgaqEeSpg1dRF5QMBCLaR6aZXYcubEHgIYfGJLITvwhSGLr87jTRD0nL20dBkfA8G5hXvIdYeYoLE4gcQPGYXYIcdTuXCAFEq%2Bu6qqpz8E1zNBDhbIrFqi89M9eLbJoivKYla5aFLWGTrZCQFP6CQBEOvxNLTaplX%2B%2BchbgoK6pK92SZUoNIzd3SD9haz2NCWBMavQwQB2QqxpCUznIYBnnSVOH0OTgKqcRKZgd%2BseRqvD83NfclBef34onJgXgl3VoMqwX%2FIjmbnnkRozAQMMhPLJnieTFXQJ0a6MXKrnjhoya5yVoRr5nue1b%2FliVPwynksOr%2BLjaV%2BzvaLNRSw89yGM4JTqnULRd6BSVz0%2B4cno95tP3PeoEXlWslfoNZw5USRAuRLLSwEnkK3KSF8lYx2slV%2FSmDLmbMObGisoGOqUBmN0xS%2B5P7bMA6xrKfgsYsTDUu3STRC1obwSnO5kukAQYBYgcQiRKDCAUJZprGbM9%2FyPzLipxqA3b8L42NFxlRMMU1AibDiapjjK4DUqudMQ3SFrYzgVI7XMBIC3M0nMYgoGXt%2FSAQAsQ6%2BCjIK8kQU0KQ0Q3yhwyWApHcnpn1woh06Cd5wj2RKqGzpPhQD3Atk8KoDqEvhXFiBVXdxgJGx%2BzdZ3f&X-Amz-Signature=b61ca8ecd5d1b25fa6d4505b69f4385e02aac369d38a5052b3c064392620058a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
