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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7RW7MOQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo%2FgRwL2wOHtofteP%2Bb20h93ZEr60xCIiUEpVX3JGAiAIgSQVxHzFIpX7CD7QBUSIMuik%2FBy3JCbTdfgM6G5UrYbcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP0RpimkaH5y7v4ahSrcAz3%2B2sd42hslWjMwRdxneRHmak6dyXcTqQ7JQxq3XAYFCvLhTHgHUUUklPp5BQf6ZrwG3i9CyWlCUdHMLLMwqd%2F0yBcpJMF5EQsKja5jtvhIkNPbAszg94Uo3oUG4E1%2Bp%2BQ9SjXbQmmY%2BtVK5Jl20l0t0%2BZ95uyrhPcNtxIrsuwUE9AALMo%2B4%2FDqR8o00yjV%2BiUn9kPZzGWN%2F2cSPTb7TUMLUzZRvxE50elTdumlRpLnWqLvGN0BO6nyH1HRaFYFZsllTObcw8V1dS%2FhgfqyfZZcxaVBLFgUQvc9TwSMOVdSInGl0UIYrQdIn079plAtvlvK8cwbpLNM7QzJvCCxhauA7F9erIZI2H%2Bs184l5Y8uzzfZbdqK9pCfIzf%2FG9iD%2B%2Ff2bAgIC%2B0a6JYON7Or0hvhlLuMHHrnWexMXTZRJQqIGH37J6uu4n5fO4p5htvosKDiQsFWBKXWDKYHFtVVhl7fn1pfLqEgwuBQ6syRz%2FOk%2Fjn951qxe4isrelXERNzq13T18c9OnzYQJpxhZ3nZn5ARXhl1LjpPc6j%2BsazM3ZWuniCB6%2FTKtgs9tHatLtdXYwvM7HZkkGS6J1IIVK20cyZl2xYpRnZunkxiYSVrn%2FU16aDRqlzoBgPqlojMJ%2FGyskGOqUBlzRcZKyHjjlAhaXS%2F20VW2UqQZAMc%2FnQSugn%2BFJGrqIZHgulFm%2FuX%2BiWN5nt%2BCd0StH2HQcdZxDIlG%2FruM0QiooAXhI1pqsRCpfWvRPAS6OujNAQ8bd29ibpJT%2BYIIoEOeY%2BcoS%2FoD4IO4ZyLJLvpgiax8vg6di%2FOBaYphK%2FqlhUnjX%2FWiG5L5zLXP%2Frz4RKIGupZsdVbgy6d5o9yDH8dX7OMeY%2B&X-Amz-Signature=9463d915a96ac142cb2a53be4aad57691196c6c50dc85a1c69a8fb150515c97b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7RW7MOQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo%2FgRwL2wOHtofteP%2Bb20h93ZEr60xCIiUEpVX3JGAiAIgSQVxHzFIpX7CD7QBUSIMuik%2FBy3JCbTdfgM6G5UrYbcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP0RpimkaH5y7v4ahSrcAz3%2B2sd42hslWjMwRdxneRHmak6dyXcTqQ7JQxq3XAYFCvLhTHgHUUUklPp5BQf6ZrwG3i9CyWlCUdHMLLMwqd%2F0yBcpJMF5EQsKja5jtvhIkNPbAszg94Uo3oUG4E1%2Bp%2BQ9SjXbQmmY%2BtVK5Jl20l0t0%2BZ95uyrhPcNtxIrsuwUE9AALMo%2B4%2FDqR8o00yjV%2BiUn9kPZzGWN%2F2cSPTb7TUMLUzZRvxE50elTdumlRpLnWqLvGN0BO6nyH1HRaFYFZsllTObcw8V1dS%2FhgfqyfZZcxaVBLFgUQvc9TwSMOVdSInGl0UIYrQdIn079plAtvlvK8cwbpLNM7QzJvCCxhauA7F9erIZI2H%2Bs184l5Y8uzzfZbdqK9pCfIzf%2FG9iD%2B%2Ff2bAgIC%2B0a6JYON7Or0hvhlLuMHHrnWexMXTZRJQqIGH37J6uu4n5fO4p5htvosKDiQsFWBKXWDKYHFtVVhl7fn1pfLqEgwuBQ6syRz%2FOk%2Fjn951qxe4isrelXERNzq13T18c9OnzYQJpxhZ3nZn5ARXhl1LjpPc6j%2BsazM3ZWuniCB6%2FTKtgs9tHatLtdXYwvM7HZkkGS6J1IIVK20cyZl2xYpRnZunkxiYSVrn%2FU16aDRqlzoBgPqlojMJ%2FGyskGOqUBlzRcZKyHjjlAhaXS%2F20VW2UqQZAMc%2FnQSugn%2BFJGrqIZHgulFm%2FuX%2BiWN5nt%2BCd0StH2HQcdZxDIlG%2FruM0QiooAXhI1pqsRCpfWvRPAS6OujNAQ8bd29ibpJT%2BYIIoEOeY%2BcoS%2FoD4IO4ZyLJLvpgiax8vg6di%2FOBaYphK%2FqlhUnjX%2FWiG5L5zLXP%2Frz4RKIGupZsdVbgy6d5o9yDH8dX7OMeY%2B&X-Amz-Signature=c6cd7c4d693bd65cfbd3d60afbc7d0faf54cb98aa53165537b06c2095fe884bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
