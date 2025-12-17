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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NWERORE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYLyi1w3064Cf%2FekJn1IzMd0lG%2F%2F74x9NlN9Xrp5oXwIgaWP39NFGhZIaTcbNBs8WieMMAE%2BRQOg%2BtfBh4JKIkfIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKfTkvATzn9nyyuHJSrcA7M2Leja9NcM3ycUYDe1%2F0AXBFEXTqYx7dHMknS%2F45eDitKXkEdYN9pCUl3aVRWabmiTtLxo1AvHY9kMDkW9F%2BPuiSg85yARNjOkr6gkp%2FETl3sa3nhR4u9htcm39tTVmrCqO8FIbHD%2Bz6xgh9jL%2Bb5Roy8oQgWyZAYSntbDtkUHYVtHvwsu7c0gePkMoyvFenRKqfeJWvxQZKZdovkXpFmJx4b06nbFi50BsqFuARTr7ZfHRGhHEb9u6N0JBsipieupXerVTqCetYzh107eH8Jm%2F7Jx6zEuiySHniuzGsJN5ZnTpjWi5kX9BmE%2FCIwd8hhyNMaiOtJbBEaXsy8RgbdmvKMdej3QpfKJcUlKvqt2TYtIYZWgYn3%2FNvKbr50YaEELGWVmiW9d02CtU%2FJlzdsw3k770bBuxBfPqgjjx8C1OyVoPpc%2FwY1FjS4FzERiXxGmxttMNhuxOruBv8Qhaj92vnO4hRTTRTH9mEN%2F%2F9Qgukd9FaKKC0h4IG1RKXe4a%2F5iMxvE6Glw8mN6amaxHx5FRcAACMbmjS3Vbq1jdnOtSWfVS8p5Cm0ZG9FsamOmWaIjNe7tRO3ZEsJj%2BLcqqZYuZ13vzhQd%2BVwHwwC6wU2MEgGvy0%2FkuP463XIhMITSicoGOqUBRABbwaLBXoyVyCCa3lf9jbhXYjyKdOVaZ2wguviFzSfZrg14Zm90YJYTUggz4U4c3Ir%2BelUVK6nV%2FgAeDS%2FXk9j0Ldc3O%2F6UqWLvNnT6yJSHdwJTJ48WQC%2BAACAaQ%2B0%2BZe3M1JbX4oe7fJ0JKstWUd1GNBeplHHSXNLWgFT2ctHW5ZZdAmnctc0JR2jB5vbGcd1Z8ydbXNUAutey9nF6PZ5VbfDb&X-Amz-Signature=53ee7a9e8a539ecdd615fb5508bcbc0d2af1314bb4026c945bfc74e203d21e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NWERORE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYLyi1w3064Cf%2FekJn1IzMd0lG%2F%2F74x9NlN9Xrp5oXwIgaWP39NFGhZIaTcbNBs8WieMMAE%2BRQOg%2BtfBh4JKIkfIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKfTkvATzn9nyyuHJSrcA7M2Leja9NcM3ycUYDe1%2F0AXBFEXTqYx7dHMknS%2F45eDitKXkEdYN9pCUl3aVRWabmiTtLxo1AvHY9kMDkW9F%2BPuiSg85yARNjOkr6gkp%2FETl3sa3nhR4u9htcm39tTVmrCqO8FIbHD%2Bz6xgh9jL%2Bb5Roy8oQgWyZAYSntbDtkUHYVtHvwsu7c0gePkMoyvFenRKqfeJWvxQZKZdovkXpFmJx4b06nbFi50BsqFuARTr7ZfHRGhHEb9u6N0JBsipieupXerVTqCetYzh107eH8Jm%2F7Jx6zEuiySHniuzGsJN5ZnTpjWi5kX9BmE%2FCIwd8hhyNMaiOtJbBEaXsy8RgbdmvKMdej3QpfKJcUlKvqt2TYtIYZWgYn3%2FNvKbr50YaEELGWVmiW9d02CtU%2FJlzdsw3k770bBuxBfPqgjjx8C1OyVoPpc%2FwY1FjS4FzERiXxGmxttMNhuxOruBv8Qhaj92vnO4hRTTRTH9mEN%2F%2F9Qgukd9FaKKC0h4IG1RKXe4a%2F5iMxvE6Glw8mN6amaxHx5FRcAACMbmjS3Vbq1jdnOtSWfVS8p5Cm0ZG9FsamOmWaIjNe7tRO3ZEsJj%2BLcqqZYuZ13vzhQd%2BVwHwwC6wU2MEgGvy0%2FkuP463XIhMITSicoGOqUBRABbwaLBXoyVyCCa3lf9jbhXYjyKdOVaZ2wguviFzSfZrg14Zm90YJYTUggz4U4c3Ir%2BelUVK6nV%2FgAeDS%2FXk9j0Ldc3O%2F6UqWLvNnT6yJSHdwJTJ48WQC%2BAACAaQ%2B0%2BZe3M1JbX4oe7fJ0JKstWUd1GNBeplHHSXNLWgFT2ctHW5ZZdAmnctc0JR2jB5vbGcd1Z8ydbXNUAutey9nF6PZ5VbfDb&X-Amz-Signature=026a926f7231fcb4a1ab92537fd7d31f65e6f04bfe89a435e7404b838d913e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
