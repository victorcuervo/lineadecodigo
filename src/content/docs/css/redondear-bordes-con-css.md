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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWUT7JA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn07YIDALV4E7LNrq7gFP1G33VTmU7zgSTRPvbqjJtcwIgKXjWaTIoyr52LGLtw50PtTqAgzFVILrEOdOcm6Iz78oqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9qazLxQQuCd1wTJCrcA%2FtTTJoxcJRwkSY%2FOAnXZkJ5TdOGrS6O1ISDi5qmdQ4jBBLVWmrnEOcb6T2QYm7dvG2IJoI3wZpBjoh44ucbA24VbVrv5YiyqUl9kl3hqGD0Jz9ulQpZ4VF%2B1%2BV%2FdNP5%2Flw2Xw1OzGeRfUgIbStJovPwM7I%2B%2BPXENNUvEHlw4Vkx%2Fb0Kt9Ohhi%2BP6CvhALjQMgJIFgRNpOnQZYCHuRNfvOeIObSODLtZ6q3VJCJ1%2BajwHQjx7dSfIjxjDQeHKtGdd5WuNGY11Fx1CcVfPFqtux9l4oOT1LtjAXn0oaxAnWrEc64AEfFGhFskRRil3R20%2BsFE%2Beoz%2BKOeiv7bqTjMK4r0pyVQLVVYb2%2FyJQUC7BhegO5SDk9g6rMaZa5ruB0VltZs5DJKxNqCDQnpJOslzBhyFJhJKe6qSHLpfKNW1M%2BYj92bLZrQ%2FXWQHL6tJtr7T5WAYorfSs3uvPVHPgLnZuPolHeu6FpbDHT7u01ay8gSLqQS0Fw63fK%2BdDW7iuQ%2FXRTa6ygdEU3yCrMwEYTgI6WKif6hz8PThqZbnC1UFTF2QCxe30lbbm76z0OoauXaMtr3QtbBnokYCm5169jQjHhQgpHCezsnhNtecyUE6qlrZpb9Po8Rh%2F%2Ftd%2F1hMPeh3ckGOqUBDiyeePORNfGjtgEcx7wRzUqW4N0vfe1PE8DlEnj6EMIHJOcGi%2F6wrWZdixOm3UfYkkTZ9Zy6hKTe1QymPfS4NU8a5uHPSAO7O8KpqPGmr1WdDTSMD9amLzF7LLpj8hokrXM6pbeyh%2B3tTUtXiz829OsEwnaEai8%2BLGOvKo%2BEUPdqTRfeNTxI2mdd%2F4gIoysJeS2rIqwW4%2BDz2hgh0nefC2wnLf6W&X-Amz-Signature=e621824dd35f5216f76d55ec31faeb5891833ea77594463e3b1c447290bd6f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWUT7JA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn07YIDALV4E7LNrq7gFP1G33VTmU7zgSTRPvbqjJtcwIgKXjWaTIoyr52LGLtw50PtTqAgzFVILrEOdOcm6Iz78oqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9qazLxQQuCd1wTJCrcA%2FtTTJoxcJRwkSY%2FOAnXZkJ5TdOGrS6O1ISDi5qmdQ4jBBLVWmrnEOcb6T2QYm7dvG2IJoI3wZpBjoh44ucbA24VbVrv5YiyqUl9kl3hqGD0Jz9ulQpZ4VF%2B1%2BV%2FdNP5%2Flw2Xw1OzGeRfUgIbStJovPwM7I%2B%2BPXENNUvEHlw4Vkx%2Fb0Kt9Ohhi%2BP6CvhALjQMgJIFgRNpOnQZYCHuRNfvOeIObSODLtZ6q3VJCJ1%2BajwHQjx7dSfIjxjDQeHKtGdd5WuNGY11Fx1CcVfPFqtux9l4oOT1LtjAXn0oaxAnWrEc64AEfFGhFskRRil3R20%2BsFE%2Beoz%2BKOeiv7bqTjMK4r0pyVQLVVYb2%2FyJQUC7BhegO5SDk9g6rMaZa5ruB0VltZs5DJKxNqCDQnpJOslzBhyFJhJKe6qSHLpfKNW1M%2BYj92bLZrQ%2FXWQHL6tJtr7T5WAYorfSs3uvPVHPgLnZuPolHeu6FpbDHT7u01ay8gSLqQS0Fw63fK%2BdDW7iuQ%2FXRTa6ygdEU3yCrMwEYTgI6WKif6hz8PThqZbnC1UFTF2QCxe30lbbm76z0OoauXaMtr3QtbBnokYCm5169jQjHhQgpHCezsnhNtecyUE6qlrZpb9Po8Rh%2F%2Ftd%2F1hMPeh3ckGOqUBDiyeePORNfGjtgEcx7wRzUqW4N0vfe1PE8DlEnj6EMIHJOcGi%2F6wrWZdixOm3UfYkkTZ9Zy6hKTe1QymPfS4NU8a5uHPSAO7O8KpqPGmr1WdDTSMD9amLzF7LLpj8hokrXM6pbeyh%2B3tTUtXiz829OsEwnaEai8%2BLGOvKo%2BEUPdqTRfeNTxI2mdd%2F4gIoysJeS2rIqwW4%2BDz2hgh0nefC2wnLf6W&X-Amz-Signature=ea868a53ce0ae32ceba179df309f0751743f112d5d76a21fcfe18ebb75ffe2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
