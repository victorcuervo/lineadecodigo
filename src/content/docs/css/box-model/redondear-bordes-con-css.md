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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4HCZB44%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8%2Fiuhf7cqqyUjgakQEKwcmv9RjGAGNfOy5K9KcJw8AAIgNMQA4Pg4xLYPvTFZiDWKfLAYGcQ1YNDSSw52BEvEwlsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuae1pZ3WD9AinMzCrcA9v9BukUobVfzm6npYObWidFR1HKN10ZVuzkIO8UfPteBREABHSXmQaAfJXU7ubhxv8amYAREX49Y6IQ%2Bx9wFgeoL063O03V8tDDbE9BdGvssFNDO%2BMAc%2BvYzNn2smgVbsVA3Kp9uvAB5Oe8DM6XthX9rIdj4I%2FDCTqf6A3PJhayaSUKGkOizuRYt8QdFsLg3giL2xlTT1GjCr5ykzYXRSyJ5XpfzGzozjxx9ELB53m6XOy0qnpIM7DHqq8KFFx6CxFTxFd8PF7xy24pYWl%2FgOMtnwxsXEcOSr9L%2FmxdWNXXm7j07rFTYrulFrgUY5ch6W%2F5nuLJEbX%2BkTG6eqLLiTfGmIbvJ7yT17tPsrhYTaFOcH93FHWoe0QbsdZQhQNzCoK9oZT%2Fdc2nyPcQ2LGyIbAaYEKaW7DtDopCIZF3FK%2BbGp%2BJynpfQDlT4jgLhv8jwOr5VWuYCX80%2Br45n2Syauh5Z1g6CEXNNYJKdDw8Dsm4IDLj2T6%2BKu2c1bcSA0btK9yVyacn6kfhnQJuEM1Th9NlRK3Gor2DMMGswb5yHIiL3j0Gu6AP8%2FMBJRRJRjj7S%2B%2FfDkpjyHBCr1nTpaECHayHdgu61h723nFpGlZCoY9iMaI0rCtxfVJbniPeMOGgi8oGOqUBNi8Aa0BFFeOXFa0Sm%2F5auPE3b7nosp3nLrUFaObqotZIfb%2F9KnSdlNm%2F65VjjaE8H750ykYx9cRD2KdQwe9eCewBbL%2BcNu1KFr0BcCFgJ6Wvpahx6rh%2BzTlD%2Fm3JiMtNazD9mlRfpiFKB7kE9P6NAxgvGrqdGycxePwxJ8FDObfd4fGCvF%2FosGt2W5G%2FnT6FJXZJ%2FIVEpiFQP3KDL8V2pqvq151M&X-Amz-Signature=255776713b77d3d31cc8105bd92860d49929119e18533c8cddca73ba6411e0f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4HCZB44%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8%2Fiuhf7cqqyUjgakQEKwcmv9RjGAGNfOy5K9KcJw8AAIgNMQA4Pg4xLYPvTFZiDWKfLAYGcQ1YNDSSw52BEvEwlsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuae1pZ3WD9AinMzCrcA9v9BukUobVfzm6npYObWidFR1HKN10ZVuzkIO8UfPteBREABHSXmQaAfJXU7ubhxv8amYAREX49Y6IQ%2Bx9wFgeoL063O03V8tDDbE9BdGvssFNDO%2BMAc%2BvYzNn2smgVbsVA3Kp9uvAB5Oe8DM6XthX9rIdj4I%2FDCTqf6A3PJhayaSUKGkOizuRYt8QdFsLg3giL2xlTT1GjCr5ykzYXRSyJ5XpfzGzozjxx9ELB53m6XOy0qnpIM7DHqq8KFFx6CxFTxFd8PF7xy24pYWl%2FgOMtnwxsXEcOSr9L%2FmxdWNXXm7j07rFTYrulFrgUY5ch6W%2F5nuLJEbX%2BkTG6eqLLiTfGmIbvJ7yT17tPsrhYTaFOcH93FHWoe0QbsdZQhQNzCoK9oZT%2Fdc2nyPcQ2LGyIbAaYEKaW7DtDopCIZF3FK%2BbGp%2BJynpfQDlT4jgLhv8jwOr5VWuYCX80%2Br45n2Syauh5Z1g6CEXNNYJKdDw8Dsm4IDLj2T6%2BKu2c1bcSA0btK9yVyacn6kfhnQJuEM1Th9NlRK3Gor2DMMGswb5yHIiL3j0Gu6AP8%2FMBJRRJRjj7S%2B%2FfDkpjyHBCr1nTpaECHayHdgu61h723nFpGlZCoY9iMaI0rCtxfVJbniPeMOGgi8oGOqUBNi8Aa0BFFeOXFa0Sm%2F5auPE3b7nosp3nLrUFaObqotZIfb%2F9KnSdlNm%2F65VjjaE8H750ykYx9cRD2KdQwe9eCewBbL%2BcNu1KFr0BcCFgJ6Wvpahx6rh%2BzTlD%2Fm3JiMtNazD9mlRfpiFKB7kE9P6NAxgvGrqdGycxePwxJ8FDObfd4fGCvF%2FosGt2W5G%2FnT6FJXZJ%2FIVEpiFQP3KDL8V2pqvq151M&X-Amz-Signature=ee8cd542e79efe8102d08d9570649eb35896d4b0c4667809292dc8118e96f25a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
