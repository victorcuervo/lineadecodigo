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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657QAZRXB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQbAyjje3puT7BkG%2BqTVTF5xgPu0cHcuEG%2FzOFiStBcAiBNqyvf7ICIbiG8CBzBy3Qfqakvy0HDGgNfxR3mw1TeNiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMavD7SUiPQqAWI%2FCWKtwD3secoV2QNLWaRF5TuVHEiyHjTqS%2F5wez0oumkYs8fmGNvGh%2B7ZPF9JEa7itoiZagLmJQ%2BdOoKhnpo54inkuwK7YXdZqkci%2FeLGhHJHGZ7AQiqF6DrpbRhs9MMK6yDfoFeAe8pV%2FzvYZ83X%2FhVNqPMNtL%2FD2TBmxERJHySmtwMFSGLaNbig%2F2KR20zSZ0qovFTDhBU1wmiLlnMqUx%2FxtNAgD8Q2yUHmAbcPTbMAv%2F9P%2Bq4%2BI%2BEkDworRHRqMM0CK3aFaMPg5vfHYqvP%2BvVRe4iPRAtcK6oqt7EwEB2GwuryG2HPqJloD6RqzU4wkXlfmerNUlteo%2FrIbNqCx5weenWJTULibY3A1lpqjlMT1K83euha7wWExaeXQIGZrKDH0nwOrETwzuvg0DdWVEHHkmDf6luGDLlcuCIXPdMn9npLUTpBZbmoObekMdx%2FHH5mYAtW22BkrP3Qvmnk9nAlLywsQX%2BKq%2BhKfgoYud27FJhUX7STSIHCHr9Pdl6%2FEYufboPnjG51%2FFrlVa8OZe3hc24c1LyJglHirv6CDwwLMnJdg5SnpcWf2dSbdfPr4URrWnRZt6%2BfAqtn%2B8miPCsbc7%2FXa3%2BKm0CcfW5ZlmcIUUzc2jxlL2kauLkLCb16Aw3P3SyQY6pgE4XNJnR%2BZKyR60wQo89qhYxwxRy6IT%2BrqQlN4N4wnWv9ztkep90GRokgtzBmZfXXPZdmO9i%2B8XLunBCu30PfbiOURDOmLlSMpOC11Q7guucr6%2FxBbXx%2FpEQGtWQXKnYtHZI3grtrCUMeI1L5sfc0CFTs02bRwt9phcH%2FdBLw1c0bDRsxgdjT4HmFNCGeLEHSLC2gclRiZd6B2n%2Fr3iRZaVuK26sy3i&X-Amz-Signature=c72ac2ba91b551c63546b3f956863e2ce6a7d9b2e7baa336f328abb4c2ca6320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657QAZRXB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQbAyjje3puT7BkG%2BqTVTF5xgPu0cHcuEG%2FzOFiStBcAiBNqyvf7ICIbiG8CBzBy3Qfqakvy0HDGgNfxR3mw1TeNiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMavD7SUiPQqAWI%2FCWKtwD3secoV2QNLWaRF5TuVHEiyHjTqS%2F5wez0oumkYs8fmGNvGh%2B7ZPF9JEa7itoiZagLmJQ%2BdOoKhnpo54inkuwK7YXdZqkci%2FeLGhHJHGZ7AQiqF6DrpbRhs9MMK6yDfoFeAe8pV%2FzvYZ83X%2FhVNqPMNtL%2FD2TBmxERJHySmtwMFSGLaNbig%2F2KR20zSZ0qovFTDhBU1wmiLlnMqUx%2FxtNAgD8Q2yUHmAbcPTbMAv%2F9P%2Bq4%2BI%2BEkDworRHRqMM0CK3aFaMPg5vfHYqvP%2BvVRe4iPRAtcK6oqt7EwEB2GwuryG2HPqJloD6RqzU4wkXlfmerNUlteo%2FrIbNqCx5weenWJTULibY3A1lpqjlMT1K83euha7wWExaeXQIGZrKDH0nwOrETwzuvg0DdWVEHHkmDf6luGDLlcuCIXPdMn9npLUTpBZbmoObekMdx%2FHH5mYAtW22BkrP3Qvmnk9nAlLywsQX%2BKq%2BhKfgoYud27FJhUX7STSIHCHr9Pdl6%2FEYufboPnjG51%2FFrlVa8OZe3hc24c1LyJglHirv6CDwwLMnJdg5SnpcWf2dSbdfPr4URrWnRZt6%2BfAqtn%2B8miPCsbc7%2FXa3%2BKm0CcfW5ZlmcIUUzc2jxlL2kauLkLCb16Aw3P3SyQY6pgE4XNJnR%2BZKyR60wQo89qhYxwxRy6IT%2BrqQlN4N4wnWv9ztkep90GRokgtzBmZfXXPZdmO9i%2B8XLunBCu30PfbiOURDOmLlSMpOC11Q7guucr6%2FxBbXx%2FpEQGtWQXKnYtHZI3grtrCUMeI1L5sfc0CFTs02bRwt9phcH%2FdBLw1c0bDRsxgdjT4HmFNCGeLEHSLC2gclRiZd6B2n%2Fr3iRZaVuK26sy3i&X-Amz-Signature=755ab46f26e8f980eedbeb2db5998d52d170b56d97a8fc60ca0dc4920b5349f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
