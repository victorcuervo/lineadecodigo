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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IFSYSO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLdtGpJWMZ%2BeUgCLrnHDDOeHYhg6ay8faKOPYz%2BCvL7AiEAzQQmyyRSmtSCj9%2Brs7dQl5tthYzI2tbXc%2F0WamYYU8YqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWNMsPrKaD4IWWB3CrcA%2B%2BIYZDECeYxFWG9Z4lo6TWAmoUsaZeRkImO8s%2BWKvJGva32d1pp%2FOe0kDYnaWS%2FKiliGJNGQBN6NMYwcg%2FHrZYKzXDyckMfxo%2B4NUKB3kQqws7cc%2FTmSbj%2F7Ge99CNjHxmV84fjB7ZtqnjWK1jRSFyyfC1DApctuJXntoxqP0N2OsWtbRnRMIdPqbiLMqfcooF%2Fb5fMi5uK1GgrXt38rBz94%2BpmqXDTx3%2BP9jWzIQcw7HO%2FT2hfusHv%2FQ2edM4e34sORbwsZOL0SHpZOwHse3WpPnl5BVXuWT60l24wkqIxCHjyzUa0icgYHyxadLQYdpoR5HB%2Faw9H8o2g3BVUMdsCb7nyYeyMbIYiitqwI3yeu1o%2FdMCo6BPgHex2vDkZUpLq3o5FUHyLqYKQgsV%2FXIr5YMRqqT%2Fylis17LKWu7udoLQLjIy7u5szluZBG6bsXz19OIIbp0to0q%2FyjXhpTdnV%2FIgT%2FPnQKlRABRSX3AuHAgrnn%2BPqijOOWko9RG66iKzHk%2FljhbpHvy74EWZgU81wozxTmyGzpbcRRrfGUGXJNmc%2Bk0Bp8DEq901XX3RaVlBU7AzvmJ5q2cuih44zwEplg%2B7kVQoZzxPE28IeVJCA5tnGSS2tqteEoPysMNGAi8oGOqUBMo%2BRxoWPwyinEL3BsoPAFXakTB5zMcqchugb3DKXszrv5UTQc0kziuuQ6r6EFloM2ExQ9BdvJIS7Tm4W%2BAlMhXYNWfADuxgnljISvfnfQIZhlcUskQcoA6T3sYtoFGuOfeYv7K4NOXluHegY82Hwy5%2BnmLovuQfZePgUyNMKoK3u6HMleIZvx2gAqG4aSWv%2FV3xOXlFmudhF4hRV2Rtr6Qu3%2FYsI&X-Amz-Signature=b4abf28e025550922a965681b603f5b4bf142df0914a1ffe6a126ea8c33cf06b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IFSYSO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLdtGpJWMZ%2BeUgCLrnHDDOeHYhg6ay8faKOPYz%2BCvL7AiEAzQQmyyRSmtSCj9%2Brs7dQl5tthYzI2tbXc%2F0WamYYU8YqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWNMsPrKaD4IWWB3CrcA%2B%2BIYZDECeYxFWG9Z4lo6TWAmoUsaZeRkImO8s%2BWKvJGva32d1pp%2FOe0kDYnaWS%2FKiliGJNGQBN6NMYwcg%2FHrZYKzXDyckMfxo%2B4NUKB3kQqws7cc%2FTmSbj%2F7Ge99CNjHxmV84fjB7ZtqnjWK1jRSFyyfC1DApctuJXntoxqP0N2OsWtbRnRMIdPqbiLMqfcooF%2Fb5fMi5uK1GgrXt38rBz94%2BpmqXDTx3%2BP9jWzIQcw7HO%2FT2hfusHv%2FQ2edM4e34sORbwsZOL0SHpZOwHse3WpPnl5BVXuWT60l24wkqIxCHjyzUa0icgYHyxadLQYdpoR5HB%2Faw9H8o2g3BVUMdsCb7nyYeyMbIYiitqwI3yeu1o%2FdMCo6BPgHex2vDkZUpLq3o5FUHyLqYKQgsV%2FXIr5YMRqqT%2Fylis17LKWu7udoLQLjIy7u5szluZBG6bsXz19OIIbp0to0q%2FyjXhpTdnV%2FIgT%2FPnQKlRABRSX3AuHAgrnn%2BPqijOOWko9RG66iKzHk%2FljhbpHvy74EWZgU81wozxTmyGzpbcRRrfGUGXJNmc%2Bk0Bp8DEq901XX3RaVlBU7AzvmJ5q2cuih44zwEplg%2B7kVQoZzxPE28IeVJCA5tnGSS2tqteEoPysMNGAi8oGOqUBMo%2BRxoWPwyinEL3BsoPAFXakTB5zMcqchugb3DKXszrv5UTQc0kziuuQ6r6EFloM2ExQ9BdvJIS7Tm4W%2BAlMhXYNWfADuxgnljISvfnfQIZhlcUskQcoA6T3sYtoFGuOfeYv7K4NOXluHegY82Hwy5%2BnmLovuQfZePgUyNMKoK3u6HMleIZvx2gAqG4aSWv%2FV3xOXlFmudhF4hRV2Rtr6Qu3%2FYsI&X-Amz-Signature=3da7acc222f67a51eb13265e9c74683e45d6f46405b706596fbd97ee1288dc45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
