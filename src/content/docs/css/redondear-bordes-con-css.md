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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASTA3GI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXqs64YNyA8ZvSMqPHwBqPDm5KdLxUXhrqMiqYhtE%2F4AiAvzatfcbARRuigKCnzN4BLJnWFT5bESbCvdX%2BJ6QYGWCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMkqxp2XXnfV2NwCN9KtwDeuNX9Su9DEVV4FOJBVfg4NMDtPwsSGclXpxxqT%2FgEobkr%2BHtc4rl%2Bi7UKAAvH%2BF5d37z8iaku6yBRmv4eXK1rIMqN5MH5USV%2Fk4Zwkw%2FqH%2FLpnHhBT64YzK4vOWEnuAWgjJHyJ7vmDOPYtBqPQ9TNxqtuusjmzAWtDqf3K%2FNzxTPgxWKgg71vIAJAczpGgWfb%2ByaxRABbot0paQNuthOob%2FurbpwMxGHNw2deEBB5N2Abo1oG5QjMbIoyLE0KBPNFybrWUIOClK4dPHT%2F4AncpzixzKwQLM0zPxhjZAowhi%2Fl2YqdWlOPdAP%2F2yfY7aqmFxhyAhu7h5CWe3APueAEUjAoBMNo40rjdWTgiTNbCqvNaW6WMz44AIAI9AHVLV4n7oAd0ZrJc22DHqMb6AMlpe82o1g4QHBY1a0bYCp%2FQqMx0HK2FnT2OP7pXXokqQB7dvvQ%2BPvnRvxysFVifNlov4j%2BJmQbpJgGyuiyrT3i9D0ZQVrQko%2BYpr%2BcjptGGAK6Qz%2BZFhuyD6yLRuER%2B%2BMjrsrVDfeFSQh4GRpY9QwDqahermvKpLefyoNAfNekMEx4KyW2uNpmCTehqbmekY7SQyWfUepBTiAq9FnqH%2FjzjcRE44dDcHQ0FYMYgAwjLzPyQY6pgEi5%2F1MjQ1%2FuGmMTz3LOb%2B%2BV94nPEwvNaJURChD%2FRTtypQpqkjyUjI67dlgHHgcryCIbYElyvSj5qjUBh%2BPhy00W4s7ZS7i6tIhlx1mZ0OCJlZmZlUDXyHY0uZRbtMQHoozdRTgF6Tqcaj1JisldJdMR09b35BdFbfY%2FTRuPMjMY23XAxh7tuMnLD0PzyYw%2F0CDrvHLYFKzzcmmxWj400a7iALMyqZ4&X-Amz-Signature=8da5d3a768d02f85c7293bdbb7e3c0ccbe95c44a76e3404e4cee831763b2dcbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASTA3GI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXqs64YNyA8ZvSMqPHwBqPDm5KdLxUXhrqMiqYhtE%2F4AiAvzatfcbARRuigKCnzN4BLJnWFT5bESbCvdX%2BJ6QYGWCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMkqxp2XXnfV2NwCN9KtwDeuNX9Su9DEVV4FOJBVfg4NMDtPwsSGclXpxxqT%2FgEobkr%2BHtc4rl%2Bi7UKAAvH%2BF5d37z8iaku6yBRmv4eXK1rIMqN5MH5USV%2Fk4Zwkw%2FqH%2FLpnHhBT64YzK4vOWEnuAWgjJHyJ7vmDOPYtBqPQ9TNxqtuusjmzAWtDqf3K%2FNzxTPgxWKgg71vIAJAczpGgWfb%2ByaxRABbot0paQNuthOob%2FurbpwMxGHNw2deEBB5N2Abo1oG5QjMbIoyLE0KBPNFybrWUIOClK4dPHT%2F4AncpzixzKwQLM0zPxhjZAowhi%2Fl2YqdWlOPdAP%2F2yfY7aqmFxhyAhu7h5CWe3APueAEUjAoBMNo40rjdWTgiTNbCqvNaW6WMz44AIAI9AHVLV4n7oAd0ZrJc22DHqMb6AMlpe82o1g4QHBY1a0bYCp%2FQqMx0HK2FnT2OP7pXXokqQB7dvvQ%2BPvnRvxysFVifNlov4j%2BJmQbpJgGyuiyrT3i9D0ZQVrQko%2BYpr%2BcjptGGAK6Qz%2BZFhuyD6yLRuER%2B%2BMjrsrVDfeFSQh4GRpY9QwDqahermvKpLefyoNAfNekMEx4KyW2uNpmCTehqbmekY7SQyWfUepBTiAq9FnqH%2FjzjcRE44dDcHQ0FYMYgAwjLzPyQY6pgEi5%2F1MjQ1%2FuGmMTz3LOb%2B%2BV94nPEwvNaJURChD%2FRTtypQpqkjyUjI67dlgHHgcryCIbYElyvSj5qjUBh%2BPhy00W4s7ZS7i6tIhlx1mZ0OCJlZmZlUDXyHY0uZRbtMQHoozdRTgF6Tqcaj1JisldJdMR09b35BdFbfY%2FTRuPMjMY23XAxh7tuMnLD0PzyYw%2F0CDrvHLYFKzzcmmxWj400a7iALMyqZ4&X-Amz-Signature=2cccbfac9eac01fcbbd7e4fa2f1ac84223e13fdf8e6ac84c9770cf5650b4d9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
